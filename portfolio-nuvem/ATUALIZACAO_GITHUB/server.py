"""
Servidor local do Portfolio Master Dashboard
- Serve o dashboard em http://localhost:8765
- Faz proxy de cotações Yahoo Finance (sem CORS)
- Endpoint de atualização de dividendos via Status Invest
- Endpoint /api/analise-fii → Gemini 2.0 Flash + Google Search grounding
"""
import sys, io, json, time, threading, urllib.parse, os, re
from http.server import HTTPServer, BaseHTTPRequestHandler
import socketserver

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

try:
    import requests
except ImportError:
    os.system('pip install requests -q')
    import requests

DIR = os.path.dirname(os.path.abspath(__file__))
PORT = int(os.environ.get('PORT', 8765))

YAHOO_HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept': 'application/json',
}
SI_HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Accept': 'application/json',
    'Referer': 'https://statusinvest.com.br/',
}

# ── Chave Gemini ───────────────────────────────────────────────────────
GEMINI_KEY = 'AIzaSyBTV80x9g3p1C0FC-v2zEJlBC2tcnxzGhE'

# ── Cache em memória (TTL variável) ─────────────────────────────────────────────
_cache = {}
# Metadados da última atualização de preços para o painel de status
_price_meta = {
    'ts':          0,      # epoch da última busca
    'total':       0,      # total de ativos pedidos
    'ok':          0,      # quantos retornaram preço
    'falhou':      0,      # quantos falharam
    'ativos_ok':   [],     # lista de tickers com preço
    'ativos_fail': [],     # lista de tickers sem preço
    'mercado_ts':  {},     # {ticker: regularMarketTime (epoch)} do Yahoo
}

import datetime as _dt_mod

def _is_market_open():
    """Verifica se B3 está aberta agora (Seg-Sex, 10h-17h30, horário Brasília)."""
    try:
        import zoneinfo
        brt = zoneinfo.ZoneInfo('America/Sao_Paulo')
    except ImportError:
        import datetime
        # Fallback: BRT = UTC-3
        brt = _dt_mod.timezone(_dt_mod.timedelta(hours=-3))
    now = _dt_mod.datetime.now(tz=brt)
    if now.weekday() >= 5:  # Sabado/Domingo
        return False
    h, m = now.hour, now.minute
    mins = h * 60 + m
    return 10 * 60 <= mins < 17 * 60 + 30  # 10:00 – 17:30

def cache_get(key, ttl=180):
    v = _cache.get(key)
    if v and time.time() - v['t'] < ttl:
        return v['d']
    return None

def cache_set(key, data):
    _cache[key] = {'d': data, 't': time.time()}

# ── Tickers que NÃO devem ser buscados no Yahoo Finance ───────────────────────
# Motivo documentado em cada entrada
TICKER_SKIP = {
    # Deslistados / capital fechado
    'GOLL4',    # Deslistada da B3 em 27/03/2026 (GOL → capital fechado, Grupo Abra)
    # Renomeados (o novo ticker já está na carteira)
    'CVBI11',   # Renomeado para PCIP11 em 24/09/2025 (fusão marca Pátria)
    # Subscrições / direitos sem valor real
    'PMLL12',   # Direito de subscrição do PMLL11, sem negociação
}

# Padrões de renda fixa (prefixos/substrings) — não têm cotação em bolsa
_FIXA_PATTERNS = ('IPCA+', 'IPCA ', 'CDB', 'LCA', 'LCI', 'RESERVA',
                  'TESOURO', 'DAYCOVAL', 'NUBANK', 'BMGB ', 'CCI')

def is_fetchable(ticker: str) -> bool:
    """Retorna True se o ticker deve ser buscado no Yahoo Finance."""
    t = ticker.strip().upper()
    if not t or t in TICKER_SKIP:
        return False
    # Ignora strings puramente numéricas (ex: "50", "57" vazando do frontend)
    if t.isdigit():
        return False
    for pat in _FIXA_PATTERNS:
        if t.startswith(pat) or pat in t:
            return False
    # Tickers validos da B3/NYSE podem ter 1 caracter (ex: O) e podem conter . (ex: IWDA.L)
    import re
    if not re.match(r'^[A-Z0-9\.]{1,8}$', t):
        return False
    # O ticker deve conter pelo menos uma letra (evita '50', '123' etc caso o isdigit falhe de alguma forma)
    if not re.search(r'[A-Z]', t):
        return False
    return True

# ══════════════════════════════════════════════════════════════════════════════
# ATUALIZAÇÃO AUTOMÁTICA DE POSIÇÕES — chamada após cada /api/salvar-compras
# ══════════════════════════════════════════════════════════════════════════════
def atualizar_posicoes_previsao(compras: list) -> str:
    """
    Aplica TODAS as compras de compras.json nas posições do previsaoData em dados.js.
    Usa o campo 'snapshot' de cada compra como ponto de partida (estado antes da compra).
    Após aplicar todas as compras, recalcula totalCotas e previsto para cada ativo.
    Retorna string descritiva do resultado.
    """
    from datetime import datetime as _dt

    # ── Normalizar nome de corretora ──────────────────────────────────────────
    def norm_corr(c):
        c = str(c).upper().strip()
        if c in ('CLEAR', 'CL', 'XP'):      return 'Clear'
        if c in ('RICO', 'RI'):              return 'Rico'
        if c in ('GENIAL', 'GE', 'GENIAL INSTITUCIONAL'): return 'Genial'
        return c.capitalize()

    # ── Ordenar compras por data ──────────────────────────────────────────────
    compras_ord = sorted(compras, key=lambda c: c.get('data', c.get('date', '')))

    # ── Calcular posição final por (ticker, corretora) ────────────────────────
    # Parte do snapshot (estado PRÉ-compra) registrado em cada transação.
    # Se não há snapshot (isNovo=True), parte do zero.
    posicoes = {}   # (ticker, corr) → float (cotas após todas as compras)

    for c in compras_ord:
        ticker = str(c.get('ticker', c.get('t', ''))).upper()
        corr   = norm_corr(c.get('corr', c.get('corretora', '')))
        qtd    = float(c.get('qtd', c.get('q', 0)) or 0)
        snap   = c.get('snapshot')
        is_novo = c.get('isNovo', False)
        key    = (ticker, corr)

        if key not in posicoes:
            if snap and not is_novo:
                posicoes[key] = float(snap.get('q', 0) or 0)
            else:
                posicoes[key] = 0.0

        posicoes[key] = round(posicoes[key] + qtd, 4)

    # ── Ler dados.js ─────────────────────────────────────────────────────────
    dados_path = os.path.join(DIR, 'dados.js')
    with open(dados_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Localizar previsaoData (sem 'let' — é uma atribuição simples)
    m = re.search(r'(previsaoData\s*=\s*)(\{.+?\});', content, re.DOTALL)
    if not m:
        return 'ERRO: previsaoData não encontrado em dados.js'

    prev = json.loads(m.group(2))
    ativos = prev.get('ativos', [])

    # ── Atualizar posições nos ativos existentes ──────────────────────────────
    atualizados = 0
    tickers_existentes = set()
    for ativo in ativos:
        ticker = str(ativo.get('ticker', '')).upper()
        tickers_existentes.add(ticker)
        posicoes_ativo = ativo.get('posicoes', [])
        changed = False

        # Atualizar posições de corretoras já existentes neste ativo
        corrs_existentes = {p.get('corretora') for p in posicoes_ativo}
        for pos in posicoes_ativo:
            corr = pos.get('corretora', '')
            key  = (ticker, corr)
            if key in posicoes:
                nova_q = posicoes[key]
                if abs(nova_q - float(pos.get('cotas', 0) or 0)) > 0.001:
                    pos['cotas'] = nova_q
                    changed = True

        # Adicionar posições de novas corretoras para este ticker
        for corr in ('Clear', 'Rico', 'Genial'):
            key = (ticker, corr)
            if key in posicoes and corr not in corrs_existentes:
                nova_q = posicoes[key]
                if nova_q > 0:
                    posicoes_ativo.append({'corretora': corr, 'cotas': nova_q})
                    changed = True

        if changed:
            ativo['posicoes'] = posicoes_ativo
            total = sum(float(p.get('cotas', 0) or 0) for p in posicoes_ativo)
            ativo['totalCotas'] = round(total, 4)
            dy = float(ativo.get('dyPorCota', 0) or 0)
            if dy > 0:
                ativo['previsto'] = round(total * dy, 2)
            atualizados += 1


    # ── Adicionar novos ativos (isNovo=True que não existiam) ─────────────────
    novos = 0
    for (ticker, corr), qtd_final in posicoes.items():
        if ticker in tickers_existentes or qtd_final <= 0:
            continue
        # Determinar tipo (FII = termina em 11, ACAO = resto)
        tipo = 'FII' if ticker.endswith('11') or ticker[-2:].isdigit() else 'ACAO'
        ativos.append({
            'ticker': ticker, 'tipo': tipo,
            'dyPorCota': None, 'ultimoMes': None,
            'posicoes': [{'corretora': corr, 'cotas': qtd_final}],
            'totalCotas': qtd_final, 'previsto': 0,
            'dataPag': None, 'dataEx': None, 'status': 'aguardando'
        })
        tickers_existentes.add(ticker)
        novos += 1

    # ── Atualizar timestamp ───────────────────────────────────────────────────
    prev['atualizadoEm'] = _dt.now().isoformat()
    prev['ativos'] = ativos

    # ── Escrever de volta ─────────────────────────────────────────────────────
    novo_json  = json.dumps(prev, ensure_ascii=False, separators=(',', ':'))
    new_content = content[:m.start(1)] + f'previsaoData = {novo_json};' + content[m.end():]
    with open(dados_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return f'{atualizados} ativos atualizados, {novos} novos adicionados'



# ── Yahoo Finance: batch de preços BR ─────────────────────────────────────
def fetch_br_prices(tickers, force=False):
    """Busca preços em paralelo via Yahoo Finance v8.
    Cache de 15s em pregão, 60s fora."""
    ttl = 15 if _is_market_open() else 60
    if not force:
        cached = cache_get('br_prices', ttl=ttl)
        if cached:
            return cached

    import concurrent.futures

    def fetch_one(ticker):
        ts_bust = int(time.time())
        url = (f'https://query1.finance.yahoo.com/v8/finance/chart/{ticker}.SA'
               f'?interval=1d&range=1d&_={ts_bust}')
        try:
            r = requests.get(url, headers=YAHOO_HEADERS, timeout=10)
            if r.status_code == 200:
                result_list = r.json().get('chart', {}).get('result', [{}])
                meta = result_list[0].get('meta', {}) if result_list else {}
                price  = meta.get('regularMarketPrice')
                mkt_ts = meta.get('regularMarketTime', 0)  # timestamp da cotação
                return ticker, price, mkt_ts
        except:
            pass
        return ticker, None, 0

    prices    = {}
    mkt_ts_map = {}
    ok_list   = []
    fail_list = []
    tickers_valid = [t for t in tickers if t.strip()]

    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as ex:
        futures = {ex.submit(fetch_one, t): t for t in tickers_valid}
        for fut in concurrent.futures.as_completed(futures, timeout=25):
            try:
                tk, price, mkt_ts = fut.result()
                if price is not None:
                    prices[tk]       = price
                    mkt_ts_map[tk]   = mkt_ts
                    ok_list.append(tk)
                else:
                    fail_list.append(futures[fut])
            except:
                pass

    # ── Fallback 2: brapi.dev para tickers que o Yahoo não encontrou ──
    if fail_list:
        print(f'  [PRECOS] Yahoo falhou {len(fail_list)} → tentando brapi.dev: {fail_list}')
        brapi_recovered = _fetch_brapi_fallback(fail_list)
        for tk, price in brapi_recovered.items():
            if price is not None:
                prices[tk] = price
                ok_list.append(tk)
                fail_list.remove(tk)
                print(f'    [brapi] {tk} → R$ {price}')

    if prices:
        cache_set('br_prices', prices)

    # Atualizar metadados globais de status
    now = time.time()
    _price_meta.update({
        'ts':          now,
        'total':       len(tickers_valid),
        'ok':          len(ok_list),
        'falhou':      len(fail_list),
        'ativos_ok':   sorted(ok_list),
        'ativos_fail': sorted(fail_list),
    })
    _price_meta['mercado_ts'].update(mkt_ts_map)
    print(f'  [PRECOS] {len(ok_list)}/{len(tickers_valid)} ok, {len(fail_list)} falhou')
    return prices


def _fetch_brapi_fallback(tickers):
    """Fallback: busca preços via brapi.dev para tickers que Yahoo não encontrou.
    Gratuito, sem API key, cobre todos os ativos BR.
    """
    result = {}
    if not tickers:
        return result
    batch = ','.join(tickers)
    try:
        url = f'https://brapi.dev/api/quote/{batch}?range=1d&interval=1d'
        r = requests.get(url, timeout=12, headers={'User-Agent': 'Mozilla/5.0'})
        if r.status_code == 200:
            for item in r.json().get('results', []):
                tk    = item.get('symbol', '')
                price = item.get('regularMarketPrice')
                if tk and price is not None:
                    # brapi retorna ticker sem ".SA"
                    result[tk] = float(price)
    except Exception as e:
        print(f'  [brapi fallback erro] {e}')
    return result

def fetch_us_prices(tickers, force=False):
    """Preços de ativos US/London. Cache de 20s em pregao, 90s fora."""
    if not tickers:
        return {}
    ttl = 20 if _is_market_open() else 90
    if not force:
        cached = cache_get('us_prices', ttl=ttl)
        if cached:
            return cached
            
    import concurrent.futures
    import time

    def fetch_one(ticker):
        ts_bust = int(time.time())
        url = (f'https://query1.finance.yahoo.com/v8/finance/chart/{ticker}'
               f'?interval=1d&range=1d&_={ts_bust}')
        try:
            r = requests.get(url, headers=YAHOO_HEADERS, timeout=10)
            if r.status_code == 200:
                result_list = r.json().get('chart', {}).get('result', [{}])
                meta = result_list[0].get('meta', {}) if result_list else {}
                price  = meta.get('regularMarketPrice')
                mkt_ts = meta.get('regularMarketTime', 0)
                return ticker, price, mkt_ts
        except:
            pass
        return ticker, None, 0

    prices = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        futures = {executor.submit(fetch_one, t): t for t in tickers}
        for fut in concurrent.futures.as_completed(futures):
            tk, price, mkt_ts = fut.result()
            prices[tk] = price
            if mkt_ts:
                if 'mercado_ts' not in _price_meta:
                    _price_meta['mercado_ts'] = {}
                _price_meta['mercado_ts'][tk] = mkt_ts

    cache_set('us_prices', prices)
    return prices
    ttl = 20 if _is_market_open() else 90
    if not force:
        cached = cache_get('us_prices', ttl=ttl)
        if cached:
            return cached
    symbols = ','.join(tickers)
    url = (f'https://query1.finance.yahoo.com/v7/finance/quote'
           f'?symbols={symbols}&fields=regularMarketPrice,symbol,regularMarketTime')
    try:
        r = requests.get(url, headers=YAHOO_HEADERS, timeout=12)
        r.raise_for_status()
        items = r.json().get('quoteResponse', {}).get('result', [])
        prices = {item['symbol']: item.get('regularMarketPrice') for item in items}
        # Salvar timestamps US no _price_meta também
        for item in items:
            sym = item.get('symbol', '')
            ts  = item.get('regularMarketTime', 0)
            if ts:
                _price_meta['mercado_ts'][sym] = ts
        cache_set('us_prices', prices)
        return prices
    except Exception as e:
        print(f'  [ERRO Yahoo US] {e}')
        return {}

def fetch_usd_brl():
    """Taxa USD/BRL."""
    cached = cache_get('usd_brl')
    if cached:
        return cached
    # Tentativa 1: Yahoo Finance
    try:
        url = 'https://query1.finance.yahoo.com/v7/finance/quote?symbols=USDBRL%3DX&fields=regularMarketPrice'
        r = requests.get(url, headers=YAHOO_HEADERS, timeout=8)
        r.raise_for_status()
        items = r.json().get('quoteResponse', {}).get('result', [])
        if items and 'regularMarketPrice' in items[0]:
            rate = items[0]['regularMarketPrice']
            cache_set('usd_brl', rate)
            return rate
    except:
        pass
    # Tentativa 2: AwesomeAPI
    try:
        r2 = requests.get('https://economia.awesomeapi.com.br/json/last/USD-BRL', timeout=8)
        rate = float(r2.json()['USDBRL']['bid'])
        cache_set('usd_brl', rate)
        return rate
    except:
        pass
    return None

# ── Status Invest: dividendos confirmados ─────────────────────────────
def fetch_si_ticker(ticker, tipo='FII'):
    base = 'fii' if tipo == 'FII' else 'acao'
    url = (f'https://statusinvest.com.br/{base}/companytickerprovents'
           f'?ticker={ticker}&chartprovents=1&anaystprovents=0&type=1&datetype=2')
    r = requests.get(url, headers=SI_HEADERS, timeout=12)
    r.raise_for_status()
    return r.json().get('assetEarningsModels', [])

def parse_br_date(s):
    if not s: return ''
    if '/' in s:
        p = s.split('/')
        if len(p) == 3:
            return f'{p[2][:4]}-{p[1]}-{p[0]}'
    return s[:10]

# ═══════════════════════════════════════════════════════════════════════
# ANÁLISE DE FII VIA GEMINI 2.0 FLASH + GOOGLE SEARCH GROUNDING
# ═══════════════════════════════════════════════════════════════════════

def buscar_dados_statusinvest(ticker):
    """Busca dados fundamentalistas do FII no Status Invest via scraping leve."""
    try:
        url = f'https://statusinvest.com.br/fii/{ticker.lower()}'
        r = requests.get(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120',
            'Accept': 'text/html,application/xhtml+xml',
            'Accept-Language': 'pt-BR,pt;q=0.9',
        }, timeout=15)
        if r.ok:
            html = r.text
            def ex(pattern):
                m = re.search(pattern, html, re.IGNORECASE)
                return m.group(1).replace(',', '.') if m else None

            return {
                'pvp':      ex(r'["\']pvp["\']\s*:\s*["\']?([0-9,\.]+)'),
                'vacancia': ex(r'["\']vacancyRate["\']\s*:\s*["\']?([0-9,\.]+)'),
                'liquidez': ex(r'["\']liquidezDiaria["\']\s*:\s*["\']?([0-9,\.]+)'),
                'segmento': (lambda m: m.group(1) if m else None)(re.search(r'["\']segment["\']\s*:\s*"([^"]+)"', html)),
                'gestora':  (lambda m: m.group(1) if m else None)(re.search(r'["\']gestora["\']\s*:\s*"([^"]+)"', html)),
                'patrimonio':(lambda m: m.group(1) if m else None)(re.search(r'["\']netWorth["\']\s*:\s*["\']?([0-9,\.]+)', html)),
            }
    except Exception as e:
        print(f'    [SI scrape erro] {ticker}: {e}')
    return {}


# ── CVM Dados Abertos: Informe Mensal de FII ──────────────────────────
_cvm_csv_mem = {}  # cache em memória dos CSVs da CVM (evita redownload)

def buscar_informe_cvm(ticker):
    """
    Busca o último informe mensal enviado à CVM.
    Dados abertos: dados.cvm.gov.br — sem API key, totalmente gratuito.
    """
    ck = f'cvm_{ticker}'
    cached = cache_get(ck, ttl=3600 * 8)
    if cached is not None:
        return cached

    import csv as _csv, io as _io
    from datetime import datetime

    meses_pt = {1:'Janeiro',2:'Fevereiro',3:'Março',4:'Abril',5:'Maio',6:'Junho',
                7:'Julho',8:'Agosto',9:'Setembro',10:'Outubro',11:'Novembro',12:'Dezembro'}
    hoje = datetime.now()
    tk_base = ticker.upper()[:4]   # ex: MXRF (sem dígitos do final)

    for delta in range(0, 4):
        mes = hoje.month - delta
        ano = hoje.year
        while mes <= 0:
            mes += 12
            ano -= 1

        data_str = f'{ano}{mes:02d}'
        csv_key  = f'cvm_csv_{data_str}'

        # Buscar CSV em memória ou baixar
        csv_text = _cvm_csv_mem.get(csv_key)
        if csv_text is None:
            url = (f'https://dados.cvm.gov.br/dados/FII/DOC/INF_MENSAL/DADOS/'
                   f'inf_mensal_fii_{data_str}.csv')
            try:
                print(f'    [CVM] baixando {data_str}...')
                r = requests.get(url, timeout=25,
                                 headers={'User-Agent': 'Mozilla/5.0', 'Accept': '*/*'})
                if not r.ok:
                    print(f'    [CVM] {data_str}: HTTP {r.status_code}')
                    continue
                csv_text = r.content.decode('latin-1', errors='replace')
                _cvm_csv_mem[csv_key] = csv_text
                print(f'    [CVM] {data_str}: {len(csv_text)//1024}KB')
            except Exception as e:
                print(f'    [CVM] {data_str}: {e}')
                continue

        # Procurar o fundo no CSV
        try:
            reader = _csv.DictReader(_io.StringIO(csv_text), delimiter=';')
            for row in reader:
                nome = (row.get('DENOM_SOCIAL','') + ' ' + row.get('NM_FUNDO','')).upper()
                if tk_base in nome or ticker.upper() in nome:
                    # Formatar patrimônio
                    pat_raw = (row.get('VL_PATRIM_LIQ','') or '').replace(',','.')
                    try:
                        pat_fmt = f'R$ {float(pat_raw)/1e6:.1f} milhões'
                    except:
                        pat_fmt = pat_raw or '—'
                    # Formatar cotas emitidas
                    cot_raw = (row.get('QT_COTAS_EMITIDAS','') or '').replace('.','').replace(',','.')
                    try:
                        cot_fmt = f'{int(float(cot_raw)):,}'.replace(',','.')
                    except:
                        cot_fmt = cot_raw or '—'

                    result = {
                        'mes_ref':    f'{meses_pt[mes]}/{ano}',
                        'data_str':   data_str,
                        'patrimonio': pat_fmt,
                        'cotas':      cot_fmt,
                        'cnpj':       row.get('CNPJ_FUNDO',''),
                        'nome_cvm':   row.get('DENOM_SOCIAL',''),
                    }
                    print(f'    [CVM] {ticker} → {result["mes_ref"]} / pat={pat_fmt}')
                    cache_set(ck, result)
                    return result
        except Exception as e:
            print(f'    [CVM] parse {ticker}/{data_str}: {e}')

    cache_set(ck, {})
    return {}


# ── Funds Explorer: descrição e link do relatório ─────────────────────
def buscar_info_fundsexplorer(ticker):
    """Scraping leve do Funds Explorer — descrição, tipo e admin do fundo."""
    ck = f'fe_{ticker}'
    cached = cache_get(ck, ttl=3600 * 12)
    if cached is not None:
        return cached

    result = {}
    try:
        url = f'https://www.fundsexplorer.com.br/funds/{ticker.upper()}'
        r = requests.get(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
            'Accept': 'text/html', 'Accept-Language': 'pt-BR,pt;q=0.9',
        }, timeout=12)
        if not r.ok:
            cache_set(ck, result); return result

        html = r.text

        def ex(pattern, grp=1):
            m = re.search(pattern, html, re.IGNORECASE | re.DOTALL)
            if not m: return ''
            raw = re.sub(r'<[^>]+>', ' ', m.group(grp))
            return re.sub(r'\s+', ' ', raw).strip()[:400]

        # Descrição / objetivo
        desc = ex(r'(?:objetivo|about|descri[çc][ãa]o)[^<]{0,30}</\w+>\s*<[^>]+>([^<]{40,})')
        if not desc:
            desc = ex(r'<meta[^>]+name=["\']description["\'][^>]+content=["\'](.*?)["\']')
        if desc:
            result['descricao'] = desc

        # Administrador
        adm = ex(r'[Aa]dministrador[^<]{0,20}</[^>]+>\s*<[^>]+>([^<]{5,80})')
        if adm:
            result['administrador'] = adm

        # Link direto para página do relatório gerencial
        pdf = re.findall(
            r'href=["\'](https?://[^"\']*(?:relatorio|gerencial|informe)[^"\']*\.pdf)["\']',
            html, re.IGNORECASE)
        if pdf:
            result['link_relatorio'] = pdf[0]

        result['url_fe'] = url
        print(f'    [FE] {ticker}: ok desc={bool(desc)}')
    except Exception as e:
        print(f'    [FE] {ticker}: {e}')

    cache_set(ck, result)
    return result


# ── Club FII: rating, perfil de risco, opinião de analistas ──────────
def buscar_clubefii(ticker):
    """Busca rating e perfil de risco no Club FII."""
    ck = f'cfii_{ticker}'
    cached = cache_get(ck, ttl=3600 * 6)
    if cached is not None:
        return cached

    result = {}
    try:
        url = f'https://www.clubefii.com.br/fundo_imobiliario/{ticker.upper()}'
        r = requests.get(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
            'Accept': 'text/html', 'Accept-Language': 'pt-BR,pt;q=0.9',
        }, timeout=12)
        if not r.ok:
            cache_set(ck, result); return result

        html = r.text

        def ex(pattern):
            m = re.search(pattern, html, re.IGNORECASE | re.DOTALL)
            if not m: return ''
            raw = re.sub(r'<[^>]+>', ' ', m.group(1))
            return re.sub(r'\s+', ' ', raw).strip()[:300]

        # Perfil de risco
        for pat in [r'[Pp]erfil[^<]*</[^>]+>\s*<[^>]+>([^<]{3,40})',
                    r'[Rr]isco[^<]*</[^>]+>\s*<[^>]+>([^<]{3,40})',
                    r'(Conservador|Moderado|Arrojado|Agressivo)',
                    r'classe[\s\S]{0,50}(Conservador|Moderado|Arrojado)']:
            v = ex(pat)
            if v and len(v) < 30:
                result['perfil_risco'] = v.strip()
                break

        # Recomendação/rating dos analistas
        for pat in [r'[Rr]ecomenda[çc][ãa]o[^<]*</[^>]+>\s*<[^>]+>([^<]{3,30})',
                    r'[Rr]ating[^<]*</[^>]+>\s*<[^>]+>([^<]{2,20})',
                    r'(Comprar|Manter|Vender|Compra|Hold|Sell)',
                    r'nota[\s\S]{0,30}(\d\.\d|\d{1,2}/10)']:
            v = ex(pat)
            if v:
                result['rating'] = v.strip()
                break

        # Tributação
        if re.search(r'[Ii]sento|IR|imposto.*renda|tributa', html, re.IGNORECASE):
            result['tributacao'] = 'Isento de IR (pessoa física com > 10 cotas)'

        print(f'    [ClubFII] {ticker}: perfil={result.get("perfil_risco","—")} rating={result.get("rating","—")}')
    except Exception as e:
        print(f'    [ClubFII] {ticker}: {e}')

    cache_set(ck, result)
    return result


# ── Investidor10: dados adicionais do FII ─────────────────────────────
def buscar_investidor10(ticker):
    """Busca dados complementares no Investidor10."""
    ck = f'i10_{ticker}'
    cached = cache_get(ck, ttl=3600 * 6)
    if cached is not None:
        return cached

    result = {}
    try:
        url = f'https://investidor10.com.br/fiis/{ticker.lower()}/'
        r = requests.get(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
            'Accept': 'text/html', 'Accept-Language': 'pt-BR,pt;q=0.9',
        }, timeout=12)
        if not r.ok:
            cache_set(ck, result); return result

        html = r.text

        def ex(pattern):
            m = re.search(pattern, html, re.IGNORECASE | re.DOTALL)
            if not m: return ''
            raw = re.sub(r'<[^>]+>', ' ', m.group(1))
            return re.sub(r'\s+', ' ', raw).strip()[:300]

        # Perfil de risco (Investidor10 classifica)
        for pat in [r'(Conservador|Moderado|Arrojado|Agressivo)',
                    r'[Pp]erfil.*?\b(Conservador|Moderado|Arrojado)\b',
                    r'[Rr]isco.*?\b(Conservador|Moderado|Arrojado)\b']:
            v = ex(pat)
            if v and len(v) < 15:
                result['perfil_risco'] = v.strip()
                break

        # Número de cotistas
        for pat in [r'[Cc]otistas?[^<]*</[^>]+>\s*<[^>]+>([\d\.\,]+)',
                    r'([\d\.]+)\s*cotistas']:
            v = ex(pat)
            if v and re.search(r'\d', v):
                result['cotistas'] = re.sub(r'[^\d\.]', '', v)
                break

        # Número de cotas / PL
        for pat in [r'[Pp]atrimônio[^<]*</[^>]+>\s*<[^>]+>([R\$\s\d\.\,]+(?:bi|mi|M|B)?)',
                    r'PL[^<]*</[^>]+>\s*<[^>]+>([R\$\s\d\.\,]+)']:
            v = ex(pat)
            if v:
                result['patrimonio_i10'] = re.sub(r'\s+', ' ', v).strip()[:30]
                break

        # Gestora (segunda fonte de confirmação)
        for pat in [r'[Gg]estora[^<]*</[^>]+>\s*<[^>]+>([^<]{3,60})',
                    r'[Gg]estor[^<]*</[^>]+>\s*<[^>]+>([^<]{3,60})']:
            v = ex(pat)
            if v and len(v) < 50:
                result['gestora_i10'] = v.strip()
                break

        # Tipo/segmento
        for pat in [r'[Ss]egmento[^<]*</[^>]+>\s*<[^>]+>([^<]{3,50})',
                    r'[Tt]ipo[^<]*</[^>]+>\s*<[^>]+>([^<]{3,50})']:
            v = ex(pat)
            if v and len(v) < 40:
                result['segmento_i10'] = v.strip()
                break

        print(f'    [I10] {ticker}: perfil={result.get("perfil_risco","—")} cotistas={result.get("cotistas","—")}')
    except Exception as e:
        print(f'    [I10] {ticker}: {e}')

    cache_set(ck, result)
    return result


# ── Conhecimento de mercado dos FIIs (base estática atualizada) ───────
FII_CONHECIMENTO = {
    'HCTR11': {'risco':'ALTO',   'tipo':'Papel/CRI', 'gestora':'Hectare Capital',
               'nota':'Fundo com histórico de inadimplência em CRIs da carteira. DY alto mascara risco de crédito elevado. Varios CRIs problemáticos foram renegociados em 2023-2024.'},
    'MXRF11': {'risco':'BAIXO',  'tipo':'Papel/CRI', 'gestora':'Kinea',
               'nota':'Um dos FIIs mais líquidos do mercado. Carteira diversificada de CRIs com bom histórico de gestão. Kinea é referência em gestão de fundos imobiliários.'},
    'HABT11': {'risco':'MÉDIO',  'tipo':'Papel/CRI', 'gestora':'Habitat Capital',
               'nota':'FII de CRI focado em crédito imobiliário residencial e loteamentos. Sensível à variação da Selic e ao ciclo de crédito.'},
    'KNSC11': {'risco':'MÉDIO',  'tipo':'Papel/CRI', 'gestora':'Kinea',
               'nota':'FII de CRI/CRA com carteira diversificada. Gestão Kinea com histórico sólido. Foco em operações high grade e middle market.'},
    'CPTI11': {'risco':'MÉDIO',  'tipo':'Papel/CRI', 'gestora':'Credit Suisse Hedging-Griffo',
               'nota':'FII de CRI com portfólio diversificado. Gestão CSHG reconhecida no mercado. Boa diversificação por devedor e indexador.'},
    'PCIP11': {'risco':'MÉDIO',  'tipo':'Papel/CRI', 'gestora':'Pátria Investimentos',
               'nota':'FII de CRI da Pátria. Portfólio de crédito imobiliário com foco em operações estruturadas.'},
    'VRTM11': {'risco':'ALTO',   'tipo':'Papel/CRI', 'gestora':'Vortx',
               'nota':'FII de CRI com concentração em operações específicas de maior risco. Requer atenção ao fluxo de caixa e à qualidade dos devedores.'},
    'RBHG11': {'risco':'MÉDIO',  'tipo':'Logístico',  'gestora':'RBR Asset',
               'nota':'FII de galpões logísticos. Segmento com demanda aquecida por e-commerce. RBR é gestora experiente com bom portfólio logístico.'},
    'HFOF11': {'risco':'MÉDIO',  'tipo':'FOF',        'gestora':'Hedge Investments',
               'nota':'Fundo de fundos imobiliários. Diversificação automática mas com custo duplo de gestão. Boa opção para exposição diversificada ao setor.'},
    'HSLG11': {'risco':'BAIXO',  'tipo':'Logístico',  'gestora':'Hedge Investments',
               'nota':'FII logístico com portfólio de galpões de alta qualidade. Inquilinos sólidos e localização estratégica nas principais regiões logísticas.'},
    'XPLG11': {'risco':'BAIXO',  'tipo':'Logístico',  'gestora':'XP Asset',
               'nota':'FII logístico XP com portfólio de qualidade superior. Galpões classe A com inquilinos blue chip. Um dos melhores do segmento logístico.'},
    'BRCR11': {'risco':'MÉDIO',  'tipo':'Lajes Corp.', 'gestora':'BTG Pactual',
               'nota':'FII de lajes corporativas em São Paulo. Segmento pressionado por home office. BTG gestora sólida mas vacância é ponto crítico a monitorar.'},
    'HGRE11': {'risco':'MÉDIO',  'tipo':'Lajes Corp.', 'gestora':'CSHG',
               'nota':'FII de lajes corporativas CSHG. Portfólio de qualidade mas segmento enfrenta pressão de vacância estrutural por mudança no modelo de trabalho.'},
    'GAME11': {'risco':'ALTO',   'tipo':'Temático',   'gestora':'',
               'nota':'FII temático de gaming e entretenimento. Alta especulação, baixa liquidez e histórico curto. Não recomendado para carteiras conservadoras.'},
    'URPR11': {'risco':'ALTO',   'tipo':'Papel/CRI',  'gestora':'Upar',
               'nota':'FII de CRI de menor escala com concentração em poucas operações. Risco de crédito concentrado e liquidez reduzida.'},
    'DEVA11': {'risco':'MÉDIO',  'tipo':'Papel/CRI',  'gestora':'Devant',
               'nota':'FII de CRI Devant com foco em crédito privado. Portfólio diversificado de recebíveis imobiliários.'},
    'KNRI11': {'risco':'BAIXO',  'tipo':'Híbrido',    'gestora':'Kinea',
               'nota':'Um dos maiores e mais tradicionais FIIs do mercado. Portfólio híbrido (galpões e lajes) de alta qualidade. Gestão Kinea de excelência.'},
    'XPML11': {'risco':'MÉDIO',  'tipo':'Shopping',   'gestora':'XP Asset',
               'nota':'FII de shopping centers XP. Recuperação pós-pandemia consolidada. Vendas dos lojistas em alta mas custo de capital eleva pressão.'},
    'VISC11': {'risco':'MÉDIO',  'tipo':'Shopping',   'gestora':'Vinci Partners',
               'nota':'FII de shoppings Vinci. Portfólio de qualidade em regiões premium. Gestão Vinci reconhecida. Sensível ao ciclo de consumo.'},
}

SELIC = 13.25  # Taxa Selic atual (mai/2025)

def analisar_fii_local(ticker, dados_quant, dados_si):
    """
    Motor de análise quantitativa avançada — funciona SEM API externa.
    Gera relatório estruturado com base em dados reais + conhecimento de mercado.
    """
    pa      = float(dados_quant.get('pa')          or 0)
    pm      = float(dados_quant.get('pmMedio')     or 0)
    dy_med  = float(dados_quant.get('dyMedMensal') or 0)
    dy_min  = float(dados_quant.get('dyMin')       or dy_med)
    dy_max  = float(dados_quant.get('dyMax')       or dy_med)
    n_meses = int  (dados_quant.get('nMeses')      or 0)

    pvp       = float(dados_si.get('pvp')      or 0)
    vacancia  = float(dados_si.get('vacancia') or 0)
    liquidez  = float((dados_si.get('liquidez') or '0').replace(',','.').replace(' ','') or 0) if isinstance(dados_si.get('liquidez'), str) else float(dados_si.get('liquidez') or 0)
    segmento  = dados_si.get('segmento') or ''
    gestora_si= dados_si.get('gestora')  or ''

    info     = FII_CONHECIMENTO.get(ticker, {})
    risco    = info.get('risco',   'MÉDIO')
    tipo_fii = info.get('tipo',    segmento or 'FII')
    gestora  = info.get('gestora', gestora_si or '')
    nota_mkt = info.get('nota',    '')

    dy_anual = (dy_med / pa * 100 * 12) if pa > 0 and dy_med > 0 else 0
    spread_selic = dy_anual - SELIC

    # ── Score composto ────────────────────────────────────────────────
    score = 50  # base neutra
    fortes, riscos = [], []

    # 1) P/VP
    if pvp > 0:
        if pvp <= 0.80:
            score += 30; fortes.append(f'P/VP de {pvp:.2f} — desconto excepcional de {(1-pvp)*100:.0f}% sobre o patrimônio líquido, raro no mercado atual')
        elif pvp <= 0.92:
            score += 20; fortes.append(f'P/VP de {pvp:.2f} — bom desconto de {(1-pvp)*100:.0f}% sobre o patrimônio, abaixo do valor justo')
        elif pvp <= 1.02:
            score += 8;  fortes.append(f'P/VP de {pvp:.2f} — negociado próximo ao valor patrimonial, preço justo')
        elif pvp <= 1.15:
            score -= 10; riscos.append(f'P/VP de {pvp:.2f} — prêmio de {(pvp-1)*100:.0f}% sobre o patrimônio, compra cara')
        else:
            score -= 25; riscos.append(f'P/VP elevado de {pvp:.2f} — sobrevalorização significativa de {(pvp-1)*100:.0f}%, alto risco de perda patrimonial')

    # 2) DY vs Selic
    if dy_anual > 0:
        if spread_selic > 5:
            score += 30; fortes.append(f'DY anual de {dy_anual:.1f}% a.a. supera a Selic em {spread_selic:.1f} p.p. — prêmio de risco excelente justifica o investimento')
        elif spread_selic > 2:
            score += 18; fortes.append(f'DY anual de {dy_anual:.1f}% a.a. supera a Selic em {spread_selic:.1f} p.p. — prêmio adequado dado o risco de renda variável')
        elif spread_selic > 0:
            score += 7;  fortes.append(f'DY anual de {dy_anual:.1f}% a.a. levemente acima da Selic de {SELIC}% — spread mínimo')
        else:
            score -= 20; riscos.append(f'DY anual de {dy_anual:.1f}% a.a. ABAIXO da Selic de {SELIC}% — não compensa o risco de renda variável no cenário atual')

    # 3) Consistência de pagamentos
    if n_meses >= 8:
        score += 15; fortes.append(f'Pagamento de dividendos nos 8/8 meses analisados — consistência máxima, resultado operacional estável')
    elif n_meses >= 6:
        score += 8;  fortes.append(f'Dividendo pago em {n_meses}/8 meses — boa consistência de distribuição')
    elif n_meses >= 4:
        score -= 5
    elif n_meses > 0:
        score -= 20; riscos.append(f'Dividendo pago em apenas {n_meses}/8 meses — inconsistência grave, risco de fluxo operacional')

    # 4) Estabilidade do DY
    if dy_med > 0 and dy_min > 0:
        variacao_pct = (dy_max - dy_min) / dy_med * 100
        if variacao_pct < 15:
            score += 12; fortes.append(f'DY estável: variação de apenas {variacao_pct:.0f}% entre máximo (R$ {dy_max:.4f}) e mínimo (R$ {dy_min:.4f}) — receita previsível')
        elif variacao_pct > 50:
            score -= 12; riscos.append(f'DY muito volátil: amplitude de {variacao_pct:.0f}% (min R$ {dy_min:.4f} / max R$ {dy_max:.4f}) — resultado irregular')

    # 5) Vacância
    if vacancia > 0:
        if vacancia > 25:
            score -= 25; riscos.append(f'Vacância crítica de {vacancia:.1f}% — grande parte do portfólio desocupada, receita comprometida')
        elif vacancia > 12:
            score -= 15; riscos.append(f'Vacância de {vacancia:.1f}% acima da média de mercado (~8%) — monitorar tendência de ocupação')
        elif vacancia > 6:
            score -= 5;  riscos.append(f'Vacância de {vacancia:.1f}% — levemente acima do ideal, mas controlável')
        elif vacancia <= 4:
            score += 12; fortes.append(f'Vacância baixa de {vacancia:.1f}% — portfólio quase totalmente ocupado, receita segura')

    # 6) Liquidez
    if liquidez > 2_000_000:
        score += 8;  fortes.append(f'Alta liquidez diária (R$ {liquidez/1e6:.1f}M) — fácil entrada e saída sem impacto no preço')
    elif 0 < liquidez < 300_000:
        score -= 8;  riscos.append(f'Baixa liquidez diária (R$ {liquidez/1000:.0f}K) — risco de spread elevado e dificuldade para negociar volumes maiores')

    # 7) Risco base (conhecimento de mercado)
    if risco == 'ALTO':
        score -= 15
        if nota_mkt: riscos.append(nota_mkt)
    elif risco == 'BAIXO':
        score += 12
        if nota_mkt: fortes.append(nota_mkt)
    elif nota_mkt:
        fortes.append(nota_mkt)

    # Limitar score 0-100
    score = max(0, min(100, score))

    # ── Veredicto ─────────────────────────────────────────────────────
    if score >= 70:
        veredicto = 'COMPRA FORTE'
        veredito_txt = (f'Score composto de {score}/100. Combinação favorável: '
            + (f'P/VP de {pvp:.2f} com desconto, ' if 0 < pvp < 1 else '')
            + f'DY de {dy_anual:.1f}% a.a. '
            + (f'com {spread_selic:.1f} p.p. acima da Selic. ' if spread_selic > 0 else '. ')
            + f'Consistência de {n_meses}/8 meses de pagamento. '
            + 'Conjunto de indicadores indica oportunidade estruturada de compra.')
    elif score >= 52:
        veredicto = 'COMPRA MODERADA'
        veredito_txt = (f'Score de {score}/100. Fundo com fundamentos razoáveis mas com pontos de atenção. '
            + f'DY de {dy_anual:.1f}% a.a. '
            + (f'({spread_selic:+.1f} p.p. vs Selic). ' if dy_anual > 0 else '. ')
            + 'Recomendado para carteiras diversificadas, com posição menor enquanto os riscos identificados não forem resolvidos.')
    elif score >= 38:
        veredicto = 'NEUTRO'
        veredito_txt = (f'Score de {score}/100. Não apresenta vantagem clara sobre a renda fixa com Selic a {SELIC}% a.a. '
            + f'O DY de {dy_anual:.1f}% a.a. '
            + (f'fica {abs(spread_selic):.1f} p.p. abaixo da Selic. ' if spread_selic < 0 else f'oferece spread mínimo. ')
            + 'Aguardar melhor ponto de entrada ou melhora dos fundamentos.')
    else:
        primeiro_risco = riscos[0].split(' — ')[1] if riscos and ' — ' in riscos[0] else (riscos[0] if riscos else 'múltiplos fatores negativos identificados')
        veredicto = 'EVITAR'
        veredito_txt = (f'Score de {score}/100. Os riscos identificados superam os retornos potenciais. '
            + f'{primeiro_risco}. '
            + 'Não recomendado para novos aportes no cenário atual.')

    # ── Enriquecer com dados externos ────────────────────────────────
    try:
        dados_cvm = buscar_informe_cvm(ticker)
    except:
        dados_cvm = {}
    try:
        dados_fe  = buscar_info_fundsexplorer(ticker)
    except:
        dados_fe  = {}
    try:
        dados_cfii = buscar_clubefii(ticker)
    except:
        dados_cfii = {}
    try:
        dados_i10  = buscar_investidor10(ticker)
    except:
        dados_i10  = {}

    # Perfil de risco (prioridade: Club FII > Investidor10 > base interna)
    perfil_risco = (dados_cfii.get('perfil_risco') or
                    dados_i10.get('perfil_risco')  or
                    ('Arrojado' if risco == 'ALTO' else
                     'Conservador' if risco == 'BAIXO' else 'Moderado'))
    tributacao = dados_cfii.get('tributacao', 'Isento de IR para pessoa física (verifique condições)')
    rating_cfii = dados_cfii.get('rating', '')
    descricao_fe = dados_fe.get('descricao', '')
    cotistas_i10 = dados_i10.get('cotistas', '')

    # ── Relatório gerencial ───────────────────────────────────────────
    meses_pt = {'January':'Janeiro','February':'Fevereiro','March':'Março','April':'Abril',
                'May':'Maio','June':'Junho','July':'Julho','August':'Agosto',
                'September':'Setembro','October':'Outubro','November':'Novembro','December':'Dezembro'}
    mes_atual = time.strftime('%B/%Y')
    for en, pt in meses_pt.items(): mes_atual = mes_atual.replace(en, pt)

    relatorio_partes = []
    if dados_cvm.get('mes_ref'):
        relatorio_partes.append(f'**Último informe à CVM: {dados_cvm["mes_ref"]}**.')
        if dados_cvm.get('patrimonio'):
            relatorio_partes.append(f'Patrimônio líquido (CVM): {dados_cvm["patrimonio"]}.')
        if dados_cvm.get('cotas'):
            relatorio_partes.append(f'Cotas emitidas: {dados_cvm["cotas"]}.')
    else:
        relatorio_partes.append(f'Dados disponíveis até {mes_atual}.')
    if gestora: relatorio_partes.append(f'Gestora: **{gestora}**.')
    if tipo_fii: relatorio_partes.append(f'Tipo: {tipo_fii}.')
    if pvp > 0: relatorio_partes.append(f'Negocia a P/VP de **{pvp:.2f}**.')
    if vacancia > 0: relatorio_partes.append(f'Vacância física: {vacancia:.1f}%.')
    if perfil_risco: relatorio_partes.append(f'Perfil de investidor: **{perfil_risco}**.')
    if tributacao: relatorio_partes.append(f'Tributação: {tributacao}.')
    if cotistas_i10: relatorio_partes.append(f'Base de cotistas: ~{cotistas_i10}.')
    if descricao_fe: relatorio_partes.append(f'Estratégia: {descricao_fe[:180]}.')
    if not dados_cvm.get('mes_ref'):
        relatorio_partes.append('Relatório gerencial completo disponível em dados.cvm.gov.br.')
    relatorio = ' '.join(relatorio_partes)

    # ── Análise do dividendo ──────────────────────────────────────────
    if dy_anual > 0:
        if n_meses >= 6 and dy_med > 0 and dy_min > 0 and (dy_max - dy_min) / dy_med < 0.25:
            sustentabilidade = 'BOA — receita operacional recorrente'
        elif n_meses < 4:
            sustentabilidade = 'QUESTIONÁVEL — histórico irregular'
        else:
            sustentabilidade = 'MODERADA — monitorar próximos meses'
        dy_txt = (f'DY médio de **R$ {dy_med:.4f}/cota/mês** = **{dy_anual:.1f}% a.a.** '
                  f'(spread de {spread_selic:+.1f} p.p. vs Selic de {SELIC}%). '
                  f'Histórico: {n_meses}/8 meses com pagamento. '
                  + (f'Amplitude do DY: R$ {dy_min:.4f} (mínimo) a R$ {dy_max:.4f} (máximo). ' if dy_min != dy_max else '')
                  + f'Sustentabilidade: **{sustentabilidade}**.')
    else:
        dy_txt = 'Sem histórico de dividendos suficiente para análise de sustentabilidade.'

    # ── Condição para revisar ─────────────────────────────────────────
    condicoes = []
    if pvp > 1.05: condicoes.append(f'P/VP cair abaixo de 1,00')
    if spread_selic < 2 and dy_anual > 0: condicoes.append(f'DY anual superar {SELIC + 3:.1f}% (Selic + 3 p.p.)')
    if vacancia > 10: condicoes.append(f'vacância cair abaixo de 8%')
    if risco == 'ALTO': condicoes.append('gestora reportar resolução dos CRIs problemáticos')
    cond_str = ' / '.join(condicoes) if condicoes else 'Manter monitoramento trimestral dos fundamentos'

    # ── Montar texto final ────────────────────────────────────────────
    fortes_txt  = '\n'.join(f'• {p}' for p in (fortes  or ['Sem pontos fortes identificados com os dados disponíveis'])[:4])
    riscos_txt  = '\n'.join(f'• {p}' for p in (riscos  or ['Nenhum risco crítico identificado com os dados atuais'])[:3])

    texto = f"""📋 ÚLTIMO RELATÓRIO GERENCIAL
{relatorio}

✅ PONTOS FORTES
{fortes_txt}

⚠️ PONTOS DE ATENÇÃO
{riscos_txt}

📊 ANÁLISE DO DIVIDENDO
{dy_txt}

🤖 VEREDICTO DO ANALISTA
Classificação: {veredicto}
{veredito_txt}

Condição para revisar: {cond_str}."""

    return {
        'ticker':      ticker,
        'analise':     texto,
        'veredicto':   veredicto,
        'fontes':      [],
        'analisadoEm': time.strftime('%d/%m/%Y às %H:%M'),
        'modelo':      f'Análise Quantitativa (Score: {score}/100)',
        'dadosSI':     dados_si,
    }


def analisar_fii_gemini(ticker, dados_quant, dados_si):
    """
    Tenta enriquecer a análise local com Gemini. Se falhar (quota/erro), retorna análise local.
    """
    # Sempre executa análise local primeiro (é instantânea)
    resultado_local = analisar_fii_local(ticker, dados_quant, dados_si)

    # Tenta chamar Gemini como enriquecimento opcional
    pa     = dados_quant.get('pa') or 0
    dy_med = dados_quant.get('dyMedMensal') or 0
    pvp    = dados_si.get('pvp') or ''
    vac    = dados_si.get('vacancia') or ''

    prompt_curto = f"""Você é um analista sênior de FIIs. Analise {ticker} brevemente:
Dados: cotação R$ {pa}, DY médio mensal R$ {dy_med:.4f}/cota, P/VP {pvp}, vacância {vac}%.
Dê sua opinião sobre o fundo em 3-4 frases diretas e honestas, mencionando especificamente se conhece o {ticker} e sua situação recente. Seja específico, não genérico."""

    api_base = 'https://generativelanguage.googleapis.com/v1beta/models'
    for model in ['gemini-2.0-flash', 'gemini-1.5-flash']:
        try:
            r = requests.post(
                f'{api_base}/{model}:generateContent?key={GEMINI_KEY}',
                json={'contents': [{'role':'user','parts':[{'text':prompt_curto}]}],
                      'generationConfig': {'temperature':0.3,'maxOutputTokens':400}},
                timeout=25
            )
            if r.status_code == 429:
                print(f'    Gemini {model}: 429 quota — usando análise local')
                break
            if r.ok:
                cands = r.json().get('candidates', [])
                if cands:
                    texto_gemini = ''.join(p.get('text','') for p in cands[0].get('content',{}).get('parts',[]))
                    if texto_gemini.strip():
                        resultado_local['analise'] += f'\n\n💬 **VISÃO GEMINI**\n{texto_gemini.strip()}'
                        resultado_local['modelo'] = f'Análise Quantitativa + Gemini ({model})'
                        print(f'    Gemini {model}: OK — análise enriquecida')
                        break
        except:
            pass

    return resultado_local


# ── Handler HTTP ──────────────────────────────────────────────────────
class Handler(BaseHTTPRequestHandler):

    def get_expected_token(self):
        import hashlib, os
        user = os.environ.get('APP_USER', 'admin')
        pwd = os.environ.get('APP_PASS', '123')
        return hashlib.sha256((user + pwd + 'muhlmann_salt_2026').encode()).hexdigest()

    def check_auth(self):
        cookie = self.headers.get('Cookie', '')
        token = self.get_expected_token()
        if f'session_id={token}' in cookie:
            return True
        return False

    def send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def serve_file(self, path, mime):
        try:
            with open(path, 'rb') as f:
                body = f.read()
            self.send_response(200)
            self.send_header('Content-Type', mime)
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
            self.send_header('Content-Length', str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        except FileNotFoundError:
            self.send_error(404)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.end_headers()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path   = parsed.path

        if path == '/api/login':
            try:
                length = int(self.headers.get('Content-Length', 0))
                import json
                body = json.loads(self.rfile.read(length)) if length else {}
                user = body.get('username', '')
                pwd = body.get('password', '')
                remember = body.get('remember', False)
                
                import os
                if user == os.environ.get('APP_USER', 'admin') and pwd == os.environ.get('APP_PASS', '123'):
                    token = self.get_expected_token()
                    self.send_response(200)
                    self.send_header('Content-type', 'application/json')
                    cookie_val = f"session_id={token}; HttpOnly; Path=/"
                    if remember:
                        cookie_val += "; Max-Age=31536000"
                    self.send_header('Set-Cookie', cookie_val)
                    self.end_headers()
                    self.wfile.write(b'{"success":true}')
                else:
                    self.send_response(401)
                    self.send_header('Content-type', 'application/json')
                    self.end_headers()
                    self.wfile.write(b'{"error":"Invalid credentials"}')
            except Exception as e:
                self.send_response(500)
                self.end_headers()
            return

        if not self.check_auth():
            self.send_response(401)
            self.end_headers()
            return


        # ── POST /api/analise-fii ──────────────────────────────────────
        if path == '/api/analise-fii':
            try:
                length = int(self.headers.get('Content-Length', 0))
                body   = json.loads(self.rfile.read(length)) if length else {}
                ticker = body.get('ticker', '').upper().strip()

                if not ticker:
                    self.send_json({'erro': 'ticker obrigatório'}, 400)
                    return

                # Cache 24h (análises não mudam no mesmo dia)
                cache_key = f'analise_{ticker}'
                cached = cache_get(cache_key, ttl=86400)
                if cached:
                    print(f'  /api/analise-fii [{ticker}] → cache (24h)')
                    self.send_json(cached)
                    return

                print(f'  /api/analise-fii [{ticker}] → chamando Gemini...')

                dados_quant = {
                    'pa':          body.get('pa'),
                    'pmMedio':     body.get('pmMedio'),
                    'dyMedMensal': body.get('dyMedMensal'),
                    'dyMin':       body.get('dyMin'),
                    'dyMax':       body.get('dyMax'),
                    'nMeses':      body.get('nMeses'),
                }

                dados_si = buscar_dados_statusinvest(ticker)
                print(f'    StatusInvest: pvp={dados_si.get("pvp")} vac={dados_si.get("vacancia")} seg={dados_si.get("segmento")}')

                resultado = analisar_fii_gemini(ticker, dados_quant, dados_si)
                cache_set(cache_key, resultado)

                print(f'  /api/analise-fii [{ticker}] → OK veredicto={resultado["veredicto"]} ({len(resultado["analise"])} chars)')
                self.send_json(resultado)

            except Exception as e:
                import traceback
                print(f'  [ERRO analise-fii] {e}\n{traceback.format_exc()}')
                self.send_json({'erro': str(e)}, 500)
            return

        # ── POST /api/salvar-compras ───────────────────────────────────
        # Persiste o histórico de compras (pm_compras_hist do localStorage)
        # em compras.json no disco — fonte de verdade para update_dashboard.py
        if path == '/api/salvar-compras':
            try:
                length = int(self.headers.get('Content-Length', 0))
                body   = json.loads(self.rfile.read(length)) if length else []
                if not isinstance(body, list):
                    self.send_json({'erro': 'esperado array de compras'}, 400)
                    return
                caminho = os.path.join(DIR, 'compras.json')
                # Merge: manter compras antigas + novas (por id único)
                existentes = []
                if os.path.exists(caminho):
                    try:
                        with open(caminho, 'r', encoding='utf-8') as f:
                            existentes = json.load(f)
                    except:
                        existentes = []
                ids_existentes = {c.get('id') for c in existentes}
                novas = [c for c in body if c.get('id') not in ids_existentes]
                merged = existentes + novas
                with open(caminho, 'w', encoding='utf-8') as f:
                    json.dump(merged, f, ensure_ascii=False, indent=2)
                print(f'  /api/salvar-compras → {len(novas)} novas, {len(merged)} total em compras.json')
                # Atualizar posições do previsaoData automaticamente
                if novas:
                    try:
                        ok = atualizar_posicoes_previsao(merged)
                        print(f'  previsaoData atualizado: {ok}')
                    except Exception as ex:
                        print(f'  [WARN atualizar_posicoes] {ex}')
                self.send_json({'ok': True, 'total': len(merged), 'novas': len(novas)})
            except Exception as e:
                print(f'  [ERRO salvar-compras] {e}')
                self.send_json({'erro': str(e)}, 500)
            return


        # ── POST /api/confirmar-proventos ──────────────────────────────
        # Persiste dividendos realizados em proventos_realizados.json
        # Incorporado ao extratoData pelo update_dashboard.py
        if path == '/api/confirmar-proventos':
            try:
                length = int(self.headers.get('Content-Length', 0))
                body   = json.loads(self.rfile.read(length)) if length else []
                if not isinstance(body, list):
                    self.send_json({'erro': 'esperado array de proventos'}, 400)
                    return
                caminho = os.path.join(DIR, 'proventos_realizados.json')
                existentes = []
                if os.path.exists(caminho):
                    try:
                        with open(caminho, 'r', encoding='utf-8') as f:
                            existentes = json.load(f)
                    except:
                        existentes = []
                # Chave de deduplicação: ticker + dataPag + corretora
                def chave(p):
                    return f"{p.get('ticker')}|{p.get('dataPag')}|{p.get('corretora')}"
                chaves_exist = {chave(p) for p in existentes}
                novos = [p for p in body if chave(p) not in chaves_exist]
                merged = existentes + novos
                with open(caminho, 'w', encoding='utf-8') as f:
                    json.dump(merged, f, ensure_ascii=False, indent=2)
                print(f'  /api/confirmar-proventos → {len(novos)} novos, {len(merged)} total')
                self.send_json({'ok': True, 'total': len(merged), 'novos': len(novos)})
            except Exception as e:
                print(f'  [ERRO confirmar-proventos] {e}')
                self.send_json({'erro': str(e)}, 500)
            return

        # ── POST /api/lancar-rf ────────────────────────────────────────────────
        if path == '/api/lancar-rf':
            try:
                length = int(self.headers.get('Content-Length', 0))
                body   = json.loads(self.rfile.read(length)) if length else {}
                valor  = float(body.get('valor', 0))
                
                dados_path = os.path.join(DIR, 'dados.js')
                with open(dados_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                m = re.search(r'(previsaoData\s*=\s*)(\{.+?\});', content, re.DOTALL)
                if m:
                    prev = json.loads(m.group(2))
                    ativos = prev.get('ativos', [])
                    rf_ativo = next((a for a in ativos if a.get('ticker') == 'Renda Fixa'), None)
                    if not rf_ativo:
                        rf_ativo = {
                            'ticker': 'Renda Fixa', 'tipo': 'RENDA_FIXA',
                            'dyPorCota': None, 'ultimoMes': None,
                            'posicoes': [{'corretora': 'Renda Fixa', 'cotas': 1}],
                            'totalCotas': 1, 'previsto': valor,
                            'dataPag': None, 'dataEx': None, 'status': 'confirmado'
                        }
                        ativos.append(rf_ativo)
                    else:
                        rf_ativo['previsto'] = valor
                        rf_ativo['status'] = 'confirmado'
                        
                    prev['ativos'] = ativos
                    novo_json  = json.dumps(prev, ensure_ascii=False, separators=(',', ':'))
                    new_content = content[:m.start(1)] + f'previsaoData = {novo_json};' + content[m.end():]
                    with open(dados_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                self.send_json({'ok': True, 'valor': valor})
            except Exception as e:
                self.send_json({'erro': str(e)}, 500)
            return

        # ── POST /api/girar-mes ────────────────────────────────────────────────
        if path == '/api/girar-mes':
            try:
                # 1. Pegar dividendos confirmados de previsaoData
                dados_path = os.path.join(DIR, 'dados.js')
                with open(dados_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                m = re.search(r'(previsaoData\s*=\s*)(\{.+?\});', content, re.DOTALL)
                if not m:
                    self.send_json({'erro': 'previsaoData missing'}, 500)
                    return
                prev = json.loads(m.group(2))
                
                # Identificar o mes atual baseado na data
                from datetime import datetime
                hoje = datetime.now()
                mes_str = hoje.strftime('%Y-%m')
                
                consolidados_path = os.path.join(DIR, 'proventos_realizados.json')
                consolidados = []
                if os.path.exists(consolidados_path):
                    with open(consolidados_path, 'r', encoding='utf-8') as f:
                        consolidados = json.load(f)
                        
                adicionados = 0
                for ativo in prev.get('ativos', []):
                    if ativo.get('status') == 'confirmado' or ativo.get('previsto', 0) > 0:
                        val = ativo.get('previsto', 0)
                        tk = ativo.get('ticker')
                        for pos in ativo.get('posicoes', []):
                            c_val = val * (pos.get('cotas',0) / ativo.get('totalCotas', 1))
                            c_val = round(c_val, 2)
                            if c_val > 0:
                                consolidados.append({
                                    'ticker': tk,
                                    'corretora': pos.get('corretora', 'Clear'),
                                    'valor': c_val,
                                    'dataPag': ativo.get('dataPag') or hoje.strftime('%Y-%m-%d'),
                                    'mesReferencia': mes_str,
                                    'tipo': ativo.get('tipo', 'FII')
                                })
                                adicionados += 1
                                
                with open(consolidados_path, 'w', encoding='utf-8') as f:
                    json.dump(consolidados, f, ensure_ascii=False, indent=2)
                    
                import subprocess
                # Roda o gerador de dashboard para refletir
                subprocess.run(['python', 'update_dashboard.py'], check=True, cwd=DIR)
                
                self.send_json({'ok': True, 'adicionados': adicionados})
            except Exception as e:
                self.send_json({'erro': str(e)}, 500)
            return

        self.send_error(404)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        qs = urllib.parse.parse_qs(parsed.query)
        path = parsed.path
        
        if path == '/login.html':
            self.serve_file(os.path.join(DIR, 'login.html'), 'text/html; charset=utf-8')
            return

        if not self.check_auth():
            if path in ('/', '/dashboard', '/dashboard.html', '/celular.html'):
                self.serve_file(os.path.join(DIR, 'login.html'), 'text/html; charset=utf-8')
            else:
                self.send_response(401)
                self.end_headers()
            return


        # ── Dashboard HTML ─────────────────────────────────────────────
        if path in ('/', '/dashboard', '/dashboard.html'):
            self.serve_file(os.path.join(DIR, 'dashboard.html'), 'text/html; charset=utf-8')
            return

        if path == '/celular.html':
            self.serve_file(os.path.join(DIR, 'celular.html'), 'text/html; charset=utf-8')
            return

        if path == '/manifest.json':
            self.serve_file(os.path.join(DIR, 'manifest.json'), 'application/json; charset=utf-8')
            return

        if path == '/dados.js':
            self.serve_file(os.path.join(DIR, 'dados.js'), 'application/javascript; charset=utf-8')
            return

        if path == '/script_0.js':
            self.serve_file(os.path.join(DIR, 'script_0.js'), 'application/javascript; charset=utf-8')
            return

        # ── GET /api/prices?br=GAME11,MXRF11,...&us=IWDA&force=1 ──────────────
        if path == '/api/prices':
            br_raw   = [t for t in qs.get('br', [''])[0].split(',') if t]
            us_raw   = [t for t in qs.get('us', [''])[0].split(',') if t]
            force    = qs.get('force', ['0'])[0] == '1'

            # Filtrar tickers inválidos/deslistados/renda-fixa antes de ir ao Yahoo
            br_list  = [t for t in br_raw if is_fetchable(t)]
            us_list  = [t for t in us_raw if is_fetchable(t)]

            skipped = [t for t in (br_raw + us_raw) if not is_fetchable(t)]
            if skipped:
                print(f'  /api/prices skip: {skipped}')

            result = {'br': {}, 'us': {}, 'usd_brl': None, 'ts': int(time.time()),
                      'skipped': skipped}

            if br_list:
                result['br'] = fetch_br_prices(br_list, force=force)
            if us_list:
                result['us'] = fetch_us_prices(us_list, force=force)
            result['usd_brl'] = fetch_usd_brl()

            n_br = sum(1 for v in result['br'].values() if v)
            n_us = sum(1 for v in result['us'].values() if v)
            print(f'  /api/prices → {n_br} BR + {n_us} US  USD/BRL={result["usd_brl"]} force={force}')
            self.send_json(result)
            return

        # ── GET /api/status-precos ─────────────────────────────────────────
        if path == '/api/status-precos':
            import datetime as _dt
            # Formatar timestamps de mercado do Yahoo por ticker
            mkt_fmt = {}
            for tk, epoch in _price_meta.get('mercado_ts', {}).items():
                if epoch:
                    try:
                        dt_local = _dt.datetime.fromtimestamp(epoch)
                        mkt_fmt[tk] = dt_local.strftime('%d/%m/%Y %H:%M:%S')
                    except:
                        mkt_fmt[tk] = str(epoch)

            ts = _price_meta.get('ts', 0)
            ts_fmt = ''
            if ts:
                try:
                    ts_fmt = _dt.datetime.fromtimestamp(ts).strftime('%d/%m/%Y %H:%M:%S')
                except:
                    ts_fmt = ''

            payload = {
                'ultima_busca':    ts_fmt,
                'ultima_busca_ts': ts,
                'total':           _price_meta.get('total', 0),
                'ok':              _price_meta.get('ok', 0),
                'falhou':          _price_meta.get('falhou', 0),
                'ativos_ok':       _price_meta.get('ativos_ok', []),
                'ativos_fail':     _price_meta.get('ativos_fail', []),
                'mercado_ts':      mkt_fmt,       # {ticker: "dd/mm/yyyy HH:MM:SS"}
                'agora':           _dt.datetime.now().strftime('%d/%m/%Y %H:%M:%S'),
                'agora_ts':        time.time(),
            }
            self.send_json(payload)
            return

        # ── GET /api/dividends?month=2026-05 ──────────────────────────
        if path == '/api/dividends':
            from datetime import date, timedelta
            today = date.today()
            this_month = today.strftime('%Y-%m')
            # Próximo mês
            first_next = today.replace(day=28) + timedelta(days=4)
            next_month = first_next.strftime('%Y-%m')

            ALL_FIIS = ['ARRI11','BRCR11','CNES11','CPTS11','HABT11','HGBS11','IRIM11','KNRI11',
                        'KNSC11','MXRF11','PMLL11','PSEC11','VISC11','CPTI11','PCIP11','RBHG11',
                        'VRTM11','HFOF11','HSLG11','GAME11','XPLG11','HCTR11','URPR11','DEVA11',
                        'HGRE11','XPML11','MFII11','TGAR11']
            ACOES   = ['UNIP6','VALE3','TAEE11','ISAE4','BBSE3','GOAU3','BMGB4','CSNA3',
                       'ITSA4','BBAS3','ITUB3']

            import concurrent.futures
            
            # Cache check (2 horas)
            cache_file = os.path.join(DIR, 'confirmed_data.json')
            force = qs.get('force', ['0'])[0] == '1'
            if not force and os.path.exists(cache_file):
                if time.time() - os.path.getmtime(cache_file) < 7200:
                    try:
                        with open(cache_file, 'r', encoding='utf-8') as f:
                            self.send_json(json.load(f))
                        return
                    except:
                        pass

            confirmed = {this_month: {}, next_month: {}}
            errors = []
            
            def fetch_and_process(t, tipo):
                try:
                    time.sleep(0.3) # Avoid StatusInvest rate limiting
                    items = fetch_si_ticker(t, tipo)
                    res = []
                    for item in items:
                        dp = parse_br_date(item.get('pd', ''))
                        if not dp or dp[:7] not in (this_month, next_month):
                            continue
                        rate = float(item.get('v', 0) or 0)
                        if rate <= 0:
                            continue
                        m = dp[:7]
                        res.append((m, t, round(rate, 6), dp, parse_br_date(item.get('ed', ''))))
                    return t, res, None
                except Exception as e:
                    return t, [], str(e)

            with concurrent.futures.ThreadPoolExecutor(max_workers=3) as ex:
                futures = []
                for t in ALL_FIIS:
                    futures.append(ex.submit(fetch_and_process, t, 'FII'))
                for t in ACOES:
                    futures.append(ex.submit(fetch_and_process, t, 'ACAO'))
                
                for f in concurrent.futures.as_completed(futures):
                    t, res, err = f.result()
                    if err:
                        errors.append(f'{t}: {err}')
                    else:
                        for m, t, rate, dp, ed in res:
                            prev = confirmed[m].get(t)
                            if prev:
                                confirmed[m][t]['dy'] = round(prev['dy'] + rate, 6)
                            else:
                                confirmed[m][t] = {'dy': rate, 'dataPag': dp, 'dataEx': ed}

            result = {
                'buscadoEm': date.today().strftime('%Y-%m-%d'),
                'fonte': 'statusinvest',
                'thisMonth': this_month,
                'nextMonth': next_month,
                'confirmed': confirmed,
                'errors': errors
            }
            # Salvar arquivo para próximo carregamento
            try:
                with open(os.path.join(DIR, 'confirmed_data.json'), 'w', encoding='utf-8') as f:
                    json.dump(result, f, ensure_ascii=False)
            except:
                pass

            n = sum(len(v) for v in confirmed.values())
            print(f'  /api/dividends → {n} confirmados  erros={len(errors)}')
            self.send_json(result)
            return

        # ── GET /api/ping ──────────────────────────────────────────────
        if path == '/api/ping':
            self.send_json({'ok': True, 'port': PORT})
            return

        # ── GET /compras.json — recuperação automática do histórico de compras ──
        if path == '/compras.json' or path == '/api/compras':
            caminho = os.path.join(DIR, 'compras.json')
            if os.path.exists(caminho):
                with open(caminho, encoding='utf-8') as fj:
                    dados = fj.read()
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(dados.encode('utf-8'))
            else:
                self.send_json([])
            return

        self.send_error(404)

    def log_message(self, fmt, *args):
        pass  # silenciar log padrão

class ThreadingServer(socketserver.ThreadingMixIn, HTTPServer):
    """Servidor HTTP multi-threaded — aceita múltiplas requisições simultaneamente."""
    daemon_threads = True

# ── Main ──────────────────────────────────────────────────────────────
if __name__ == '__main__':
    server = ThreadingServer(('0.0.0.0', PORT), Handler)
    print(f'Portfolio Master Server rodando em http://localhost:{PORT}')
    print(f'  Acesse: http://localhost:{PORT}/')
    print(f'  Ctrl+C para parar')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nServidor encerrado.')

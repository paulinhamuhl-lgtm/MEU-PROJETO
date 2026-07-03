import sys, io, warnings, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
warnings.filterwarnings('ignore')
import pandas as pd

df = pd.read_excel(r'c:\Users\Administrator\Desktop\aplicativo 01\dividendos acumulados.xlsx')
df['Data'] = pd.to_datetime(df['Data'], format='%d/%m/%Y', errors='coerce')
df['AnoMes'] = df['Data'].dt.to_period('M').astype(str)
df['Ticker'] = df['Produto'].str.extract(r'^([A-Z]{4}\d{1,2}(?:F|B)?)\s*[-]?')
# Resgates (leilão de frações, liquidações) SOMAM ao total mensal — filtro removido
val = 'Valor da Operação'

# ══════════════════════════════════════════════════════════════════
# PORTFOLIO 100% CONFIRMADO PELO USUÁRIO
# ══════════════════════════════════════════════════════════════════
RICO_ATUAL   = {'ARRI11','BRCR11','CNES11','CPTS11','HABT11','HGBS11',
                'IRIM11','KNRI11','KNSC11','MXRF11','PMLL11','PSEC11','VISC11'}

GENIAL_ATUAL = {'RBHG11','HABT11','PCIP11','VRTM11','MFII11','CPTI11',
                'GAME11','KNSC11','HGRE11','XPML11','HFOF11','TGAR11',
                'URPR11','MXRF11'}

CLEAR_FIIS   = {'CPTI11','HABT11','PCIP11','RBHG11','VRTM11','HFOF11',
                'HSLG11','KNSC11','GAME11','BRCR11','XPLG11','HCTR11',
                'URPR11','DEVA11','HGRE11','MXRF11','CNES11'}

CLEAR_ACOES  = {'UNIP6','VALE3','TAEE11','ISAE4','BBSE3','GOAU3','BMGB4',
                'CSNA3','ITSA4','BBAS3','ITUB3','OIBR3'}

CLEAR_TODOS  = CLEAR_FIIS | CLEAR_ACOES

# Tickers que são EXCLUSIVOS da Clear (não estão no Rico atual)
# sob nome XP Investimentos após migração
CLEAR_ONLY_XP = {'CPTI11','RBHG11','GAME11','HSLG11','HCTR11','DEVA11',
                 'XPLG11','PCIP11','HGRE11','URPR11'} | CLEAR_ACOES

# Sempre Rico (tickers históricos com mudança de nome)
RICO_ALWAYS  = {'HGFF11','IRDM11','IRIM15','OUFF11','RVBI11','IRIM11'}
CLEAR_ALWAYS = {'OURE11'}

# Histórico Rico (ativos que eram/são da Rico)
RICO_HIST = {'BRCR11','PSEC11','HGBS11','KNRI11','KNSC11','IRIM11','IRDM11','HABT11',
             'MXRF11','ARRI11','CNES11','VISC11','PMLL11','MALL11','CPTS11','CVBI11',
             'BCRI11','RECR11','XPCI11','FEXC11','TGAR11','PORD11','KNIP11',
             'DEVA11','MCCI11','MFII11','XPIN11','RBRP11','VINO11','CEOC11',
             'VRTA11','BCFF11','TRXF11','XPSF11','TORD11','MALL11','TGAR14',
             'MGFF11','MXRF13','MGLU3','PMLL12','HGFF11','RVBI11'}

# ══ COTAS CONGELADAS DA RICO – referência outubro/2024 ════════════
# Nenhuma compra foi feita na Rico após out/2024.
# Qualquer quantidade acima dessas = Clear (após fusão de nomenclatura fev/2025).
# Desdobramento HGBS11: 69 cotas → 690 a partir de jun/2025 (×10, mesmo valor)
RICO_COTAS_PRE_SPLIT  = {'ARRI11':430,'BRCR11':557,'CNES11':557,'CPTS11':200,
                          'HABT11':50,'HGBS11':69,'HGFF11':211,'IRDM11':87,
                          'IRIM11':76,'KNRI11':81,'KNSC11':1000,'MALL11':20,
                          'MXRF11':516,'VISC11':20}
RICO_COTAS_POS_SPLIT  = dict(RICO_COTAS_PRE_SPLIT)
RICO_COTAS_POS_SPLIT['HGBS11'] = 690  # split ×10 confirmado em jun/2025
RICO_COTAS_POS_SPLIT['PMLL11'] = 20   # MALL11 renomeado para PMLL11 em ago/2025
RICO_COTAS_POS_SPLIT['PSEC11'] = 227  # HGFF11 incorporado → RVBI11 → PSEC11 desde nov/2025

# HFOF11: era exclusivamente da Clear. Split ×10 em jun/2025: 221→2210 cotas.
# 670 cotas de HFOF11 = Genial (separado no extrato como GENIAL INSTITUCIONAL CCTVM S/A)
CLEAR_COTAS_PRE_SPLIT = {'BRCR11':75,'CNES11':22,'HABT11':100,'HFOF11':221,'MXRF11':20}
CLEAR_COTAS_POS_SPLIT = dict(CLEAR_COTAS_PRE_SPLIT)
CLEAR_COTAS_POS_SPLIT['HFOF11'] = 2210  # split ×10 em jun/2025

# ══ CONSOLIDAÇÕES Rico+Clear – quantidades corretas (out/2024) ════
CONSOLIDADOS = {
    # Linha fusionada: Rico(557) + Clear(75) = 632 no extrato 2025
    'BRCR11': {'min':620, 'max':680, 'rico':557, 'clear':75},
    # Linha fusionada: Rico(557) + Clear(22) = 579 no extrato 2025
    'CNES11': {'min':570, 'max':590, 'rico':557, 'clear':22},
    # Linha fusionada: Rico(516) + Clear(20) = 536 no extrato 2025
    'MXRF11': {'min':525, 'max':545, 'rico':516, 'clear':20},
    # KNSC11: Rico(1000) + Clear comprou mais → tratar separado por qtd
    'KNSC11': {'min':1900,'max':2100,'rico':1000,'clear':1000},
    # HABT11: Rico(50) + Clear(100+) → tratar separado
    'HABT11': {'min':200, 'max':400, 'rico':50,  'clear':300},
}

# ══ CLASSIFICAÇÃO DEFINITIVA ══════════════════════════════════════
def classify(row):
    tk   = row['Ticker']
    qtd  = row['Quantidade']
    am   = row['AnoMes']
    inst = str(row['Instituição']).upper()
    preco = row.get('Preço unitário', 0) or 0

    # 1. Nome explícito tem prioridade absoluta
    if 'GENIAL' in inst: return 'Genial'
    if 'CLEAR'  in inst: return 'Clear'
    if 'RICO'   in inst: return 'Rico'
    if 'CAMBIO' in inst: return 'Clear'  # "XP INVESTIMENTOS CORRETORA DE CAMBIO..." = antiga Clear

    # 2. Tickers especiais com mudança de nome
    if tk in RICO_ALWAYS:  return 'Rico'
    if tk in CLEAR_ALWAYS: return 'Clear'

    # 3. VRTM11: 3000 cotas = Clear (pós-conversão OURE11)
    if tk == 'VRTM11':
        if 2990 <= qtd <= 3010: return 'Clear'
        if 1880 <= qtd <= 1920: return 'Clear'
        return 'Clear'  # todo aumento pós out/2024 é da Clear

    # 4. HFOF11: era exclusivamente da Clear
    #    2990–3010 = Clear pós-split (compra nova Clear)
    #    2190–2230 = Clear pós-split ×10 (221→2210)
    #    670 cotas = Genial (já capturado pelo nome GENIAL no passo 1)
    if tk == 'HFOF11':
        return 'Clear'  # sempre Clear independente de qtd

    # 5. Regra temporal: XP antes de 2023 = Rico (antes da fusão de nomenclatura)
    if am < '2023-01': return 'Rico'

    # ══ A partir de 2025: Rico+Clear usam o mesmo nome XP CCTVM ══
    # Determinar referência de cotas da Rico (pré ou pós split HGBS11 em jun/2025)
    if am >= '2025-01':
        pre_split = am < '2025-06'
        rico_ref  = (RICO_COTAS_PRE_SPLIT  if pre_split else RICO_COTAS_POS_SPLIT).get(tk)
        clear_ref = (CLEAR_COTAS_PRE_SPLIT if pre_split else CLEAR_COTAS_POS_SPLIT).get(tk)

        # Linha fusionada: quantidade = Rico + Clear exata
        if rico_ref and clear_ref and abs(qtd - (rico_ref + clear_ref)) <= 2:
            return f'RC_{tk}'  # dividir proporcionalmente

        # Quantidade bate exato com Rico
        if rico_ref and abs(qtd - rico_ref) <= 1:
            return 'Rico'

        # Quantidade bate exato com Clear
        if clear_ref and abs(qtd - clear_ref) <= 1:
            return 'Clear'

        # Rico tem quantidade menor, sobra é da Clear (Rico+extra)
        if rico_ref and qtd > rico_ref + 1:
            return f'RC_{tk}'  # dividir: rico_ref de Rico, resto de Clear

        # Clear-only em 2025
        if tk in CLEAR_ONLY_XP: return 'Clear'

        # Ativo que só estava na Rico
        if tk in RICO_HIST and tk not in CLEAR_TODOS: return 'Rico'

        return 'Clear'  # default 2025: se não bate com Rico, é Clear/novo

    # 6. Verificar consolidações (Rico+Clear juntos no mesmo lote) – pré-2025
    if tk in CONSOLIDADOS:
        c = CONSOLIDADOS[tk]
        if c['min'] <= qtd <= c['max']:
            return f'RC_{tk}'

    # 7. Clear-only (ativos que só aparecem na Clear via XP)
    if tk in CLEAR_ONLY_XP: return 'Clear'

    # 8. Histórico Rico
    if tk in RICO_HIST: return 'Rico'

    return 'Rico'  # fallback seguro

df['Corr'] = df.apply(classify, axis=1)

# Expandir consolidados
rows_extra = []
for _, row in df[df['Corr'].str.startswith('RC_', na=False)].iterrows():
    tk    = row['Ticker']
    v     = row['Valor da Operação']
    q     = row['Quantidade']
    am    = row['AnoMes']
    preco = row.get('Preço unitário', 0) or 0

    # Cotas da Rico nessa linha (com split HGBS11 em jun/2025)
    pre_split = am < '2025-06'
    rico_ref  = (RICO_COTAS_PRE_SPLIT if pre_split else RICO_COTAS_POS_SPLIT).get(tk)
    c         = CONSOLIDADOS.get(tk, {})

    if rico_ref and preco and preco > 0:
        # Calcular valor Rico exato pelo preço unitário × cotas da Rico
        val_rico  = round(preco * rico_ref, 2)
        val_clear = round(v - val_rico, 2)
        if val_clear < 0:   # segurança
            val_rico  = v
            val_clear = 0.0
        pct_rico  = val_rico / v if v else 0.5
        pct_clear = 1.0 - pct_rico
    elif rico_ref and q > 0:
        pct_rico  = rico_ref / q
        pct_clear = 1.0 - pct_rico
        val_rico  = round(v * pct_rico, 2)
        val_clear = round(v - val_rico, 2)
    elif c:
        tot_c     = c['rico'] + c['clear']
        pct_rico  = c['rico'] / tot_c
        pct_clear = c['clear'] / tot_c
        val_rico  = round(v * pct_rico, 2)
        val_clear = round(v - val_rico, 2)
    else:
        pct_rico = pct_clear = 0.5
        val_rico = val_clear = round(v / 2, 2)

    rows_extra.append({
        'Data': row['Data'], 'AnoMes': am, 'Movimentação': row['Movimentação'],
        'Instituição': 'RICO CORRETORA', 'Ticker': tk, 'Quantidade': q * pct_rico,
        'Preço unitário': preco, 'Valor da Operação': val_rico, 'Corr': 'Rico'
    })
    rows_extra.append({
        'Data': row['Data'], 'AnoMes': am, 'Movimentação': row['Movimentação'],
        'Instituição': 'CLEAR CORRETORA', 'Ticker': tk, 'Quantidade': q * pct_clear,
        'Preço unitário': preco, 'Valor da Operação': val_clear, 'Corr': 'Clear'
    })

df_final = pd.concat([df[~df['Corr'].str.startswith('RC_', na=False)],
                      pd.DataFrame(rows_extra)], ignore_index=True)

import json as _json
import os as _os
APPDIR = r'c:\Users\Administrator\Desktop\aplicativo 01'
_prov_path = _os.path.join(APPDIR, 'proventos_realizados.json')
if _os.path.exists(_prov_path):
    try:
        with open(_prov_path, encoding='utf-8') as _f:
            provs = _json.load(_f)
        novas_linhas = []
        for p in provs:
            tk = p.get('ticker','').upper()
            dp = p.get('dataPag','')
            cr = p.get('corretora','').strip()
            # Normalize broker
            if cr.upper() in ['CLEAR', 'CL', 'XP']: cr = 'Clear'
            elif cr.upper() in ['RICO', 'RI']: cr = 'Rico'
            elif cr.upper() == 'GENIAL': cr = 'Genial'
            else: cr = cr.capitalize()
            
            dy = float(p.get('dy',0))
            cot = float(p.get('cotas',0))
            valor_op = round(dy * cot, 2)
            if tk and dp and valor_op > 0:
                am = dp[:7]
                ja_existe = not df_final[(df_final['AnoMes'] == am) & (df_final['Corr'] == cr) & (df_final['Ticker'] == tk)].empty
                if not ja_existe:
                    novas_linhas.append({
                        'Data': pd.to_datetime(dp, errors='coerce'),
                        'AnoMes': am,
                        'Movimentação': 'Rendimento (App)' if tk.endswith('11') else 'Dividendo/JCP (App)',
                        'Instituição': f'{cr.upper()} CORRETORA',
                        'Ticker': tk,
                        'Quantidade': cot,
                        'Preço unitário': dy,
                        'Valor da Operação': valor_op,
                        'Corr': cr
                    })
        if novas_linhas:
            df_final = pd.concat([df_final, pd.DataFrame(novas_linhas)], ignore_index=True)
            print(f"  [AVISO] {len(novas_linhas)} proventos do App injetados na base de dados!")
    except Exception as e:
        print(f"  [ERRO] Falha ao ler proventos realizados: {e}")

    # Processar arquivos de dividendos automáticos (ex: junho2026_dividendos.json)
    import glob
    for div_file in glob.glob('*dividendos*.json'):
        try:
            with open(_os.path.join(APPDIR, div_file), encoding='utf-8') as _f:
                data = _json.load(_f)
            if 'detalhes' not in data:
                continue
            novas_linhas_auto = []
            for tk, info in data['detalhes'].items():
                dy = info.get('dy')
                dp = info.get('dataPag')
                if not dy or not dp: continue
                dy = float(dy)
                if dy <= 0: continue
                am = dp[:7]
                
                for corr in ['Rico', 'Clear', 'Genial']:
                    mask = (df['Ticker'] == tk) & (df['Corr'] == corr)
                    if mask.any():
                        cot = float(df[mask]['Quantidade'].max())
                        if cot > 0:
                            valor_op = round(dy * cot, 2)
                            ja_existe = not df_final[(df_final['AnoMes'] == am) & (df_final['Corr'] == corr) & (df_final['Ticker'] == tk)].empty
                            if not ja_existe:
                                novas_linhas_auto.append({
                                    'Data': pd.to_datetime(dp, errors='coerce'),
                                    'AnoMes': am,
                                    'Movimentação': 'Rendimento (Auto)' if tk.endswith('11') else 'Dividendo/JCP (Auto)',
                                    'Instituição': f'{corr.upper()} CORRETORA',
                                    'Ticker': tk,
                                    'Quantidade': cot,
                                    'Preço unitário': dy,
                                    'Valor da Operação': valor_op,
                                    'Corr': corr
                                })
            if novas_linhas_auto:
                df_final = pd.concat([df_final, pd.DataFrame(novas_linhas_auto)], ignore_index=True)
                print(f"  [AVISO] {len(novas_linhas_auto)} dividendos inseridos automaticamente de {div_file}!")
        except Exception as e:
            print(f"  [ERRO] Falha ao processar {div_file}: {e}")

    # Processar dividendos de REITs em Dólar (dividendosREITS.xlsx)
    reit_file = _os.path.join(APPDIR, 'dividendosREITS.xlsx')
    if _os.path.exists(reit_file):
        try:
            df_reits = pd.read_excel(reit_file)
            df_reits = df_reits[df_reits['TIPO'].str.strip() == 'REITS']
            
            # Taxa de câmbio extraída do JavaScript: REITS_TOTAL_BRL / totalReitsUsd (10800.24 / 2161)
            usd_brl_rate = 10800.24 / 2161.0
            
            novas_linhas_reits = []
            for _, row in df_reits.iterrows():
                dt = pd.to_datetime(row['Data'], errors='coerce')
                if pd.isna(dt): continue
                am = dt.strftime('%Y-%m')
                tk = str(row['Ticker']).strip()
                val_usd = float(row['Valor'])
                val_brl = round(val_usd * usd_brl_rate, 2)
                corr = str(row.get('CORRETORA', 'CLEAR')).strip().capitalize()
                
                # Check se já existe para evitar duplicação
                ja_existe = not df_final[(df_final['AnoMes'] == am) & (df_final['Ticker'] == tk) & (df_final['Corr'] == 'REITs') & (df_final['Valor da Operação'] == val_brl)].empty
                if not ja_existe:
                    novas_linhas_reits.append({
                        'Data': dt,
                        'AnoMes': am,
                        'Movimentação': 'Dividendo (REIT)',
                        'Instituição': 'REITS CORRETORA',
                        'Ticker': tk,
                        'Quantidade': 1,
                        'Preço unitário': val_brl,
                        'Valor da Operação': val_brl,
                        'Corr': 'REITs'
                    })
            if novas_linhas_reits:
                df_final = pd.concat([df_final, pd.DataFrame(novas_linhas_reits)], ignore_index=True)
                print(f"  [AVISO] {len(novas_linhas_reits)} dividendos de REITs convertidos (Taxa: {usd_brl_rate:.4f}) e inseridos!")
        except Exception as e:
            print(f"  [ERRO] Falha ao ler dividendosREITS.xlsx: {e}")


# ══ TOTAIS E VALIDAÇÃO ═══════════════════════════════════════════
grand = df_final[val].sum()
rico_t  = df_final[df_final['Corr']=='Rico'][val].sum()
clear_t = df_final[df_final['Corr']=='Clear'][val].sum()
gen_t   = df_final[df_final['Corr']=='Genial'][val].sum()

print('='*60)
print('TOTAIS DEFINITIVOS')
print('='*60)
print(f"  Rico:   R$ {rico_t:>10,.2f}  ({rico_t/grand*100:.1f}%)")
print(f"  Clear:  R$ {clear_t:>10,.2f}  ({clear_t/grand*100:.1f}%)")
print(f"  Genial: R$ {gen_t:>10,.2f}  ({gen_t/grand*100:.1f}%)")
print(f"  TOTAL:  R$ {grand:>10,.2f}  (arquivo: R$ {df[val].sum():.2f})")

print()
print('=== VALIDAÇÃO MENSAL (referências do usuário) ===')
for mes, ref_clear, ref_label in [('2026-04', 2047.64, 'FIIs only'), ('2026-05', 2031.31, 'FIIs only')]:
    abr = df_final[df_final['AnoMes']==mes]
    cl_fii = abr[(abr['Corr']=='Clear') & (~abr['Ticker'].isin(CLEAR_ACOES))][val].sum()
    cl_tot = abr[abr['Corr']=='Clear'][val].sum()
    ri_tot = abr[abr['Corr']=='Rico'][val].sum()
    ge_tot = abr[abr['Corr']=='Genial'][val].sum()
    print(f"\n  {mes}:")
    print(f"    Clear FIIs: R$ {cl_fii:,.2f}  (ref: R$ {ref_clear:,.2f}, dif: R$ {abs(cl_fii-ref_clear):.2f})")
    print(f"    Clear ações:R$ {cl_tot-cl_fii:,.2f}")
    print(f"    Rico:       R$ {ri_tot:,.2f}")
    print(f"    Genial:     R$ {ge_tot:,.2f}")
    print(f"    TOTAL:      R$ {cl_tot+ri_tot+ge_tot:,.2f}")

print()
print('=== POR ANO ===')
anual = df_final.pivot_table(index=df_final['Data'].dt.year, columns='Corr',
                              values=val, aggfunc='sum', fill_value=0)
anual = anual.reindex(columns=['Rico','Clear','Genial'], fill_value=0).round(0).astype(int)
anual['TOTAL'] = anual.sum(axis=1)
print(anual.to_string())

# ══ MENSAL PARA O DASHBOARD ══════════════════════════════════════
mensal = df_final.pivot_table(index='AnoMes', columns='Corr',
                               values=val, aggfunc='sum', fill_value=0)
mensal = mensal.reindex(columns=['Rico','Clear','Genial','Renda Fixa','REITs'], fill_value=0).round(2)

# ══ TOP 10 POR CORRETORA ══════════════════════════════════════════
tops = {}
for corr in ['Rico','Clear','Genial','Renda Fixa','REITs']:
    grp = df_final[df_final['Corr']==corr].groupby('Ticker')[val].sum()
    tops[corr] = grp.sort_values(ascending=False).head(10)

# ══════════════════════════════════════════════════════════════════
# GERAÇÃO DO EXTRATO DETALHADO (extratoData)
# ══════════════════════════════════════════════════════════════════
import json as _json

# Mapeamento: ticker histórico → ticker atual
TICKER_HISTORICO = {
    'OURE11': 'VRTM11',
    'HGFF11': 'PSEC11',
    'MALL11': 'PMLL11',
    'IRDM11': 'IRIM11',
    'IRIM15': 'IRIM11',
    'OUFF11': 'VRTM11',
    'RVBI11': 'PSEC11',
}

# Catálogo de eventos especiais — (ticker, 'DD/MM/YYYY'): (tipo, descricao)
EVENTOS_ESP = {
    ('OURE11','23/08/2024'): ('amortizacao',
        'Liquidação OURE11 → VRTM11 · R$6,742/cota em dinheiro · 8,4766 cotas VRTM11 por cota'),
    ('HGFF11','03/10/2025'): ('amortizacao',
        'Amortização · incorporação HGFF11 → RVBI11 → PSEC11 · R$1,9829/cota'),
    ('HGFF11','14/10/2025'): ('resgate',
        'Leilão de fração · incorporação HGFF11 → PSEC11'),
    ('IRDM11','09/12/2025'): ('resgate',
        'Leilão de fração · incorporação IRDM11 → IRIM11'),
}

# Rendimentos legítimos mas acima do padrão — aparecem com badge especial
RENDIM_ESP = {
    ('HGFF11','15/01/2025'): 'Rendimento especial · ganho de capital com venda de ativos (dez/2024)',
    ('HGRE11','14/07/2025'): 'Rendimento especial · ganho de capital com venda de imóveis',
    ('CNES11','30/03/2026'): 'Rendimento acumulado (fev/2026 sem pagamento) · alta vacância CENESP',
}

# Tickers de ações: pagam múltiplos proventos/JCP no mesmo mês → agrupa por ticker
ACOES_TICKERS = CLEAR_ACOES | {'ITSA3', 'MGLU3', 'OIBR3'}

# Usar df_final (já com classificação correta) como fonte do extrato
df_ext_src = df_final.copy()
df_ext_src['DataStr'] = pd.to_datetime(df_ext_src['Data'], errors='coerce').dt.strftime('%d/%m/%Y')

extrato_by_month = {}

for am, grp in df_ext_src.groupby('AnoMes'):
    mo = {'ri': [], 'cl': [], 'ge': [], 'rf': [], 're': []}

    for corr_key, corr_lbl in [('Rico','ri'), ('Clear','cl'), ('Genial','ge'), ('Renda Fixa','rf'), ('REITs','re')]:
        gc = grp[grp['Corr'] == corr_key]
        if gc.empty: continue

        fiis  = gc[~gc['Ticker'].isin(ACOES_TICKERS)]
        acoes = gc[ gc['Ticker'].isin(ACOES_TICKERS)]

        # FIIs: uma entrada por linha (não agrupa)
        for _, row in fiis.iterrows():
            tk    = row['Ticker']
            qtd   = float(row['Quantidade'] or 0)
            preco = float(row.get('Preço unitário') or 0)
            v     = float(row[val] or 0)
            ds    = row['DataStr']
            if not tk or v == 0: continue

            ek = (tk, ds)
            if ek in EVENTOS_ESP:
                tipo, desc = EVENTOS_ESP[ek]
            elif str(row['Movimentação']) == 'Resgate':
                tipo, desc = 'resgate', 'Resgate · leilão de cotas'
            elif str(row['Movimentação']) == 'Amortização':
                tipo, desc = 'amortizacao', None   # amortização do fundo (consta no extrato B3)
            elif ek in RENDIM_ESP:
                tipo, desc = 'dividendo_especial', RENDIM_ESP[ek]
            else:
                tipo, desc = 'dividendo', None

            na = TICKER_HISTORICO.get(tk)
            e = {'tk': tk, 'q': round(qtd, 1), 'p': round(preco, 4), 'v': round(v, 2), 'tp': tipo}
            if na:   e['na'] = na
            if desc: e['ds'] = desc
            mo[corr_lbl].append(e)

        # Ações: agrupa por ticker (soma dividendo + JCP do mesmo mês)
        for tk, tk_rows in acoes.groupby('Ticker'):
            total_v = float(tk_rows[val].sum())
            if total_v == 0: continue
            cotas = float(tk_rows['Quantidade'].max())
            n_pag = len(tk_rows)
            e = {'tk': tk, 'q': round(cotas, 1), 'p': 0.0, 'v': round(total_v, 2), 'tp': 'dividendo'}
            if n_pag > 1:
                e['ds'] = f'{n_pag} pagamentos no mês (dividendo + JCP)'
            mo[corr_lbl].append(e)

    for k in ('ri','cl','ge','rf','re'):
        mo[k].sort(key=lambda x: -abs(x['v']))
    if any(mo[k] for k in ('ri','cl','ge','rf','re')):
        extrato_by_month[am] = mo

js_extrato = 'const extratoData = ' + _json.dumps(extrato_by_month, ensure_ascii=False) + ';'

# ══ LER compras.json → comprasHistorico para o previsaoData ══════════
import os as _os
APPDIR = r'c:\Users\Administrator\Desktop\aplicativo 01'

compras_hist = []
_compras_path = _os.path.join(APPDIR, 'compras.json')
if _os.path.exists(_compras_path):
    try:
        with open(_compras_path, encoding='utf-8') as _f:
            compras_hist = _json.load(_f)
        print(f'  compras.json: {len(compras_hist)} compras lidas')
    except Exception as _e:
        print(f'  [AVISO] compras.json: {_e}')

# Montar comprasHistorico: {ticker: [{data, cotas, corretora, preco}]}
compras_historico = {}
for c in compras_hist:
    tk   = c.get('ticker','').upper()
    data = c.get('data','')          # '2026-05-27'
    qtd  = float(c.get('qtd', 0))
    corr = c.get('corr','')
    preco= float(c.get('preco', 0))
    if not tk or not data or qtd <= 0:
        continue
    compras_historico.setdefault(tk, []).append(
        {'data': data, 'cotas': qtd, 'corretora': corr, 'preco': preco}
    )

js_compras_hist = 'const comprasHistorico = ' + _json.dumps(compras_historico, ensure_ascii=False) + ';'



# ══ ATUALIZAR DASHBOARD.HTML ══════════════════════════════════════
js_lines = [f"  {{m:'{am}',cl:{r.get('Clear',0)},ri:{r.get('Rico',0)},ge:{r.get('Genial',0)},rf:{r.get('Renda Fixa',0)},re:{r.get('REITs',0)}}}"
            for am, r in mensal.iterrows()]
new_div_data = "const divData = [\n" + ",\n".join(js_lines) + "\n];"

def top_js(series):
    return ','.join([f"{{t:'{t}',v:{v:.2f}}}" for t, v in series.items()])

new_div_top = (
    f"const divTopByCorr = {{\n"
    f"  Clear: [{top_js(tops.get('Clear', {}))}],\n"
    f"  Rico:  [{top_js(tops.get('Rico', {}))}],\n"
    f"  Genial:[{top_js(tops.get('Genial', {}))}],\n"
    f"  'Renda Fixa': [{top_js(tops.get('Renda Fixa', {}))}],\n"
    f"  REITs: [{top_js(tops.get('REITs', {}))}]\n"
    f"}};"
)

with open(r'c:\Users\Administrator\Desktop\aplicativo 01\dados.js', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r'const divData\s*=\s*\[.*?\];', new_div_data, html, flags=re.DOTALL)
html = re.sub(r'const divTopByCorr\s*=\s*\{.*?\};', new_div_top, html, flags=re.DOTALL)

if 'const extratoData' in html:
    html = re.sub(r'const extratoData\s*=\s*\{.*?\};', js_extrato, html, flags=re.DOTALL)
else:
    html = re.sub(r'(const divTopByCorr\s*=\s*\{[^;]+;)',
                  r'\1\n\n' + js_extrato.replace('\\', '\\\\'),
                  html, flags=re.DOTALL)

# Atualizar/inserir comprasHistorico
if 'const comprasHistorico' in html:
    html = re.sub(r'const comprasHistorico\s*=\s*\{.*?\};', js_compras_hist, html, flags=re.DOTALL)
else:
    # Inserir logo após extratoData
    html = re.sub(r'(const extratoData\s*=\s*\{[^;]+;)',
                  r'\1\n\n' + js_compras_hist.replace('\\', '\\\\'),
                  html, flags=re.DOTALL)

with open(r'c:\Users\Administrator\Desktop\aplicativo 01\dados.js', 'w', encoding='utf-8') as f:
    f.write(html)

print()
print('Dashboard atualizado!')
print(f"  divData: {len(mensal)} meses  |  Top Clear: {list(tops['Clear'].index[:5])}")
if compras_historico:
    n_total = sum(len(v) for v in compras_historico.values())
    print(f"  comprasHistorico: {len(compras_historico)} tickers, {n_total} compras")


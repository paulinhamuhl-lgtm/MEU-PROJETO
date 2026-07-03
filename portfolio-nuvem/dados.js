// DADOS FINANCEIROS ISOLADOS

// Monthly aportes data
const monthlyData=[
  {m:'2021-01',cl:0,ri:415.66,ge:0},  {m:'2021-02',cl:0,ri:19546.92,ge:0},  {m:'2021-03',cl:0,ri:1274.22,ge:0},  {m:'2021-04',cl:0,ri:100012.46,ge:0},
  {m:'2021-08',cl:0,ri:9.95,ge:0},  {m:'2021-10',cl:0,ri:813.01,ge:0},  {m:'2021-11',cl:0,ri:809.51,ge:0},  {m:'2021-12',cl:0,ri:937.85,ge:0},
  {m:'2022-02',cl:0,ri:899.91,ge:0},  {m:'2022-03',cl:0,ri:987,ge:0},  {m:'2022-05',cl:0,ri:975.13,ge:0},  {m:'2022-06',cl:0,ri:154.38,ge:0},
  {m:'2023-01',cl:3958.62,ri:0,ge:0},  {m:'2023-02',cl:4793.91,ri:0,ge:526.38},  {m:'2023-03',cl:6765.96,ri:0,ge:0},  {m:'2023-04',cl:4842.04,ri:0,ge:0},
  {m:'2023-05',cl:4838.07,ri:0,ge:59.51},  {m:'2023-06',cl:3893.11,ri:0,ge:1962.66},  {m:'2023-07',cl:6898.40,ri:0,ge:0},  {m:'2023-08',cl:4991.46,ri:0,ge:0},
  {m:'2023-09',cl:5501.37,ri:0,ge:0},  {m:'2023-10',cl:5274.04,ri:0,ge:0},  {m:'2023-11',cl:3243.84,ri:0,ge:0},  {m:'2023-12',cl:7211.93,ri:0,ge:0},
  {m:'2024-01',cl:5574.18,ri:0,ge:0},  {m:'2024-02',cl:6469.40,ri:0,ge:0},  {m:'2024-03',cl:6004.97,ri:0,ge:0},  {m:'2024-04',cl:6032.87,ri:0,ge:0},
  {m:'2024-05',cl:6011.33,ri:0,ge:0},  {m:'2024-06',cl:7475.42,ri:0,ge:0},  {m:'2024-07',cl:6907.50,ri:0,ge:0},  {m:'2024-08',cl:7048.54,ri:0,ge:0},
  {m:'2024-09',cl:2934.86,ri:0,ge:0},  {m:'2024-10',cl:11676.32,ri:0,ge:0},  {m:'2024-11',cl:11311.06,ri:0,ge:0},  {m:'2024-12',cl:2002.38,ri:0,ge:0},
  {m:'2025-01',cl:16005.48,ri:0,ge:14452.6},  {m:'2025-02',cl:987.7,ri:0,ge:25918.54},  {m:'2025-07',cl:15750,ri:0,ge:0},  {m:'2025-08',cl:25981.92,ri:0,ge:0},
  {m:'2025-09',cl:10729.46,ri:0,ge:100445.31},  {m:'2025-10',cl:10998.84,ri:0,ge:0},  {m:'2025-11',cl:10998.96,ri:0,ge:0},  {m:'2025-12',cl:13900.21,ri:0,ge:0},
  {m:'2026-04',cl:15000,ri:0,ge:0},
];

const divData = [
  {m:'2021-02',cl:0.0,ri:54.81,ge:0.0,rf:0.0,re:0.0},
  {m:'2021-03',cl:0.0,ri:232.8,ge:0.0,rf:0.0,re:0.0},
  {m:'2021-04',cl:0.0,ri:1832.98,ge:0.0,rf:0.0,re:0.0},
  {m:'2021-05',cl:2.95,ri:2981.34,ge:0.0,rf:0.0,re:0.0},
  {m:'2021-06',cl:0.04,ri:2946.64,ge:0.0,rf:0.0,re:0.0},
  {m:'2021-07',cl:0.04,ri:2267.24,ge:0.0,rf:0.0,re:0.0},
  {m:'2021-08',cl:0.43,ri:2013.19,ge:0.0,rf:0.0,re:0.0},
  {m:'2021-09',cl:0.04,ri:1331.57,ge:0.0,rf:0.0,re:0.0},
  {m:'2021-10',cl:0.04,ri:866.9,ge:0.0,rf:0.0,re:0.0},
  {m:'2021-11',cl:0.04,ri:935.42,ge:0.0,rf:0.0,re:0.0},
  {m:'2021-12',cl:2.91,ri:958.64,ge:0.0,rf:0.0,re:0.0},
  {m:'2022-01',cl:0.04,ri:1023.88,ge:0.0,rf:0.0,re:0.0},
  {m:'2022-02',cl:0.04,ri:950.79,ge:0.0,rf:0.0,re:0.0},
  {m:'2022-03',cl:0.74,ri:953.93,ge:0.0,rf:0.0,re:0.0},
  {m:'2022-04',cl:0.04,ri:979.63,ge:0.0,rf:0.0,re:0.0},
  {m:'2022-05',cl:4.69,ri:999.21,ge:0.0,rf:0.0,re:0.0},
  {m:'2022-06',cl:0.05,ri:1035.99,ge:0.0,rf:0.0,re:0.0},
  {m:'2022-07',cl:0.04,ri:995.96,ge:0.0,rf:0.0,re:0.0},
  {m:'2022-08',cl:3.57,ri:1003.25,ge:0.0,rf:0.0,re:0.0},
  {m:'2022-09',cl:0.04,ri:949.76,ge:0.0,rf:0.0,re:0.0},
  {m:'2022-10',cl:0.04,ri:903.37,ge:0.0,rf:0.0,re:0.0},
  {m:'2022-11',cl:0.04,ri:877.86,ge:0.0,rf:0.0,re:0.0},
  {m:'2022-12',cl:1.97,ri:903.37,ge:0.0,rf:0.0,re:0.0},
  {m:'2023-01',cl:2.71,ri:958.71,ge:0.0,rf:0.0,re:0.0},
  {m:'2023-02',cl:6.04,ri:974.37,ge:0.0,rf:0.0,re:0.0},
  {m:'2023-03',cl:31.3,ri:933.46,ge:0.48,rf:0.0,re:16.24},
  {m:'2023-04',cl:30.18,ri:969.15,ge:0.48,rf:0.0,re:1.25},
  {m:'2023-05',cl:88.35,ri:960.12,ge:0.48,rf:0.0,re:12.35},
  {m:'2023-06',cl:29.76,ri:968.49,ge:0.96,rf:0.0,re:12.35},
  {m:'2023-07',cl:46.04,ri:986.09,ge:1.32,rf:0.0,re:40.04},
  {m:'2023-08',cl:124.17,ri:927.77,ge:1.32,rf:0.0,re:12.35},
  {m:'2023-09',cl:165.28,ri:936.33,ge:1.21,rf:0.0,re:56.38},
  {m:'2023-10',cl:162.15,ri:935.68,ge:1.21,rf:0.0,re:16.55},
  {m:'2023-11',cl:263.84,ri:931.68,ge:1.21,rf:0.0,re:17.95},
  {m:'2023-12',cl:415.7,ri:930.02,ge:1.21,rf:0.0,re:81.32},
  {m:'2024-01',cl:341.04,ri:923.73,ge:1.21,rf:0.0,re:2.15},
  {m:'2024-02',cl:410.71,ri:920.07,ge:1.1,rf:0.0,re:5.75},
  {m:'2024-03',cl:562.38,ri:926.38,ge:1.1,rf:0.0,re:59.83},
  {m:'2024-04',cl:578.96,ri:995.73,ge:1.1,rf:0.0,re:5.8},
  {m:'2024-05',cl:644.33,ri:1040.21,ge:1.1,rf:0.0,re:16.65},
  {m:'2024-06',cl:574.72,ri:979.0,ge:1.1,rf:0.0,re:87.67},
  {m:'2024-07',cl:661.5,ri:982.28,ge:1.1,rf:0.0,re:16.25},
  {m:'2024-08',cl:1323.08,ri:969.06,ge:1.1,rf:0.0,re:16.7},
  {m:'2024-09',cl:797.67,ri:957.33,ge:0.99,rf:0.0,re:88.72},
  {m:'2024-10',cl:748.53,ri:961.21,ge:0.99,rf:0.0,re:43.39},
  {m:'2024-11',cl:1374.58,ri:940.64,ge:0.99,rf:0.0,re:16.3},
  {m:'2024-12',cl:929.36,ri:957.91,ge:1.1,rf:0.0,re:89.46},
  {m:'2025-01',cl:1206.48,ri:1117.29,ge:1.1,rf:0.0,re:59.38},
  {m:'2025-02',cl:1156.03,ri:1022.32,ge:177.16,rf:0.0,re:23.65},
  {m:'2025-03',cl:1407.06,ri:997.02,ge:415.83,rf:0.0,re:38.15},
  {m:'2025-04',cl:1408.45,ri:995.9,ge:420.83,rf:0.0,re:59.38},
  {m:'2025-05',cl:1149.71,ri:1028.69,ge:425.05,rf:0.0,re:23.65},
  {m:'2025-06',cl:1099.2,ri:992.64,ge:420.05,rf:0.0,re:38.15},
  {m:'2025-07',cl:1123.23,ri:990.99,ge:415.94,rf:0.0,re:59.43},
  {m:'2025-08',cl:1654.54,ri:981.92,ge:416.49,rf:0.0,re:23.65},
  {m:'2025-09',cl:1411.4,ri:1009.91,ge:411.49,rf:0.0,re:38.15},
  {m:'2025-10',cl:1543.0,ri:1229.58,ge:1688.57,rf:0.0,re:23.65},
  {m:'2025-11',cl:1748.06,ri:964.18,ge:1683.32,rf:0.0,re:23.7},
  {m:'2025-12',cl:2716.46,ri:877.64,ge:1668.27,rf:0.0,re:70.24},
  {m:'2026-01',cl:2024.15,ri:929.18,ge:1706.97,rf:0.0,re:15.1},
  {m:'2026-02',cl:2018.4,ri:892.64,ge:1671.37,rf:0.0,re:11.55},
  {m:'2026-03',cl:2013.23,ri:928.53,ge:1664.82,rf:0.0,re:25.1},
  {m:'2026-04',cl:2072.09,ri:935.75,ge:1716.59,rf:0.0,re:71.88},
  {m:'2026-05',cl:2135.91,ri:916.15,ge:1660.05,rf:0.0,re:11.55},
  {m:'2026-06',cl:1759.68,ri:1475.98,ge:1659.0,rf:0.0,re:26.8},
  {m:'2026-07',cl:0.0,ri:0.0,ge:0.0,rf:0.0,re:28.34}
];

const divTopByCorr = {
  Clear: [{t:'VRTM11',v:5422.48},{t:'HABT11',v:4703.78},{t:'CPTI11',v:4036.90},{t:'HFOF11',v:3887.00},{t:'RBHG11',v:2564.80},{t:'GAME11',v:2514.00},{t:'OURE11',v:2363.30},{t:'UNIP6',v:2163.73},{t:'HSLG11',v:2061.32},{t:'PCIP11',v:1910.45}],
  Rico:  [{t:'BRCR11',v:14473.24},{t:'HGFF11',v:7258.29},{t:'HGBS11',v:5888.55},{t:'HABT11',v:5380.15},{t:'KNSC11',v:5347.00},{t:'KNRI11',v:4466.37},{t:'IRDM11',v:3985.98},{t:'MXRF11',v:3844.91},{t:'ARRI11',v:2824.81},{t:'CPTS11',v:2270.71}],
  Genial:[{t:'RBHG11',v:3153.04},{t:'MFII11',v:2690.27},{t:'HABT11',v:2488.05},{t:'PCIP11',v:1659.80},{t:'VRTM11',v:1647.27},{t:'KNSC11',v:1253.75},{t:'CPTI11',v:1170.00},{t:'GAME11',v:1037.50},{t:'TGAR11',v:962.94},{t:'XPML11',v:797.64}],
  'Renda Fixa': [],
  REITs: [{t:'CCI',v:443.14},{t:'O',v:321.38},{t:'SLG',v:240.74},{t:'DUK',v:196.55},{t:'STAG',v:73.10},{t:'SPHD',v:61.85},{t:'VT',v:35.95},{t:'IWDA',v:14.24}]
};

const extratoData = {"2021-02": {"ri": [{"tk": "CPTS11", "q": 50.0, "p": 1.05, "v": 52.5, "tp": "dividendo"}, {"tk": "XPIN11", "q": 3.0, "p": 0.62, "v": 1.86, "tp": "dividendo"}, {"tk": "CEOC11", "q": 1.0, "p": 0.46, "v": 0.45, "tp": "dividendo"}], "cl": [], "ge": [], "rf": [], "re": []}, "2021-03": {"ri": [{"tk": "MXRF11", "q": 1000.0, "p": 0.08, "v": 80.0, "tp": "dividendo"}, {"tk": "XPIN11", "q": 100.0, "p": 0.62, "v": 62.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 50.0, "p": 1.05, "v": 52.5, "tp": "dividendo"}, {"tk": "KNIP11", "q": 20.0, "p": 1.2, "v": 24.0, "tp": "dividendo"}, {"tk": "XPCI11", "q": 11.0, "p": 0.85, "v": 9.35, "tp": "dividendo"}, {"tk": "VINO11", "q": 10.0, "p": 0.45, "v": 4.5, "tp": "dividendo"}, {"tk": "CEOC11", "q": 1.0, "p": 0.46, "v": 0.45, "tp": "dividendo"}], "cl": [], "ge": [], "rf": [], "re": []}, "2021-04": {"ri": [{"tk": "HABT11", "q": 165.0, "p": 1.5, "v": 247.5, "tp": "dividendo"}, {"tk": "CPTS11", "q": 168.0, "p": 1.01, "v": 169.68, "tp": "dividendo"}, {"tk": "MXRF11", "q": 1792.0, "p": 0.08, "v": 143.36, "tp": "dividendo"}, {"tk": "TGAR11", "q": 110.0, "p": 1.3, "v": 143.0, "tp": "dividendo"}, {"tk": "BCRI11", "q": 120.0, "p": 1.15, "v": 138.0, "tp": "dividendo"}, {"tk": "CVBI11", "q": 150.0, "p": 0.85, "v": 127.5, "tp": "dividendo"}, {"tk": "KNIP11", "q": 110.0, "p": 1.02, "v": 112.2, "tp": "dividendo"}, {"tk": "XPCI11", "q": 100.0, "p": 0.9, "v": 90.0, "tp": "dividendo"}, {"tk": "MFII11", "q": 80.0, "p": 0.97, "v": 77.6, "tp": "dividendo"}, {"tk": "PORD11", "q": 90.0, "p": 0.86, "v": 77.4, "tp": "dividendo"}, {"tk": "MCCI11", "q": 100.0, "p": 0.7, "v": 70.0, "tp": "dividendo"}, {"tk": "XPIN11", "q": 100.0, "p": 0.62, "v": 62.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 48.0, "p": 1.15, "v": 55.01, "tp": "dividendo"}, {"tk": "RBRP11", "q": 100.0, "p": 0.5, "v": 50.0, "tp": "dividendo"}, {"tk": "RECR11", "q": 50.0, "p": 1.0, "v": 50.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 110.0, "p": 0.45, "v": 49.5, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VINO11", "q": 100.0, "p": 0.45, "v": 45.0, "tp": "dividendo"}, {"tk": "CEOC11", "q": 90.0, "p": 0.45, "v": 40.84, "tp": "dividendo"}, {"tk": "TORD11", "q": 500.0, "p": 0.06, "v": 30.0, "tp": "dividendo"}, {"tk": "XPSF11", "q": 20.0, "p": 0.73, "v": 14.6, "tp": "dividendo"}, {"tk": "FEXC11", "q": 10.0, "p": 1.02, "v": 10.2, "tp": "dividendo"}, {"tk": "VRTA11", "q": 10.0, "p": 0.9, "v": 9.0, "tp": "dividendo"}, {"tk": "OURE11", "q": 10.0, "p": 0.75, "v": 7.5, "tp": "dividendo", "na": "VRTM11"}, {"tk": "TRXF11", "q": 9.0, "p": 0.7, "v": 6.3, "tp": "dividendo"}, {"tk": "OUFF11", "q": 5.0, "p": 0.7, "v": 3.5, "tp": "dividendo", "na": "VRTM11"}, {"tk": "MGFF11", "q": 5.0, "p": 0.65, "v": 3.25, "tp": "dividendo"}, {"tk": "ITSA3", "q": 2.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "cl": [], "ge": [], "rf": [], "re": []}, "2021-05": {"ri": [{"tk": "HABT11", "q": 211.0, "p": 1.8, "v": 379.8, "tp": "dividendo"}, {"tk": "FEXC11", "q": 266.0, "p": 0.98, "v": 260.68, "tp": "dividendo"}, {"tk": "CPTS11", "q": 247.0, "p": 1.05, "v": 259.35, "tp": "dividendo"}, {"tk": "CVBI11", "q": 240.0, "p": 1.0, "v": 240.0, "tp": "dividendo"}, {"tk": "BCRI11", "q": 142.0, "p": 1.51, "v": 214.42, "tp": "dividendo"}, {"tk": "TGAR11", "q": 160.0, "p": 1.26, "v": 201.6, "tp": "dividendo"}, {"tk": "RECR11", "q": 170.0, "p": 1.1, "v": 187.0, "tp": "dividendo"}, {"tk": "XPCI11", "q": 200.0, "p": 0.9, "v": 180.0, "tp": "dividendo"}, {"tk": "DEVA11", "q": 105.0, "p": 1.37, "v": 143.85, "tp": "dividendo"}, {"tk": "MXRF11", "q": 1792.0, "p": 0.08, "v": 143.36, "tp": "dividendo"}, {"tk": "PORD11", "q": 140.0, "p": 0.9, "v": 126.0, "tp": "dividendo"}, {"tk": "KNIP11", "q": 110.0, "p": 1.0, "v": 110.0, "tp": "dividendo"}, {"tk": "MFII11", "q": 80.0, "p": 0.91, "v": 72.8, "tp": "dividendo"}, {"tk": "MCCI11", "q": 100.0, "p": 0.7, "v": 70.0, "tp": "dividendo"}, {"tk": "XPIN11", "q": 100.0, "p": 0.64, "v": 64.0, "tp": "dividendo"}, {"tk": "TORD11", "q": 502.0, "p": 0.1, "v": 50.2, "tp": "dividendo"}, {"tk": "ARRI11", "q": 48.0, "p": 1.04, "v": 50.17, "tp": "dividendo"}, {"tk": "VINO11", "q": 100.0, "p": 0.45, "v": 45.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 110.0, "p": 0.4, "v": 44.0, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CEOC11", "q": 91.0, "p": 0.43, "v": 39.73, "tp": "dividendo"}, {"tk": "RBRP11", "q": 100.0, "p": 0.3, "v": 30.0, "tp": "dividendo"}, {"tk": "XPSF11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo"}, {"tk": "BCFF11", "q": 20.0, "p": 0.5, "v": 10.0, "tp": "dividendo"}, {"tk": "VRTA11", "q": 10.0, "p": 0.9, "v": 9.0, "tp": "dividendo"}, {"tk": "OURE11", "q": 10.0, "p": 0.77, "v": 7.7, "tp": "dividendo", "na": "VRTM11"}, {"tk": "MXRF13", "q": 251.0, "p": 0.03, "v": 7.53, "tp": "dividendo"}, {"tk": "TRXF11", "q": 9.0, "p": 0.7, "v": 6.3, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.25, "v": 5.0, "tp": "dividendo"}, {"tk": "OUFF11", "q": 5.0, "p": 0.7, "v": 3.5, "tp": "dividendo", "na": "VRTM11"}, {"tk": "MGFF11", "q": 5.0, "p": 0.6, "v": 3.0, "tp": "dividendo"}, {"tk": "ENAT3", "q": 7.0, "p": 0.19, "v": 1.35, "tp": "dividendo"}], "cl": [{"tk": "TAEE11", "q": 1.0, "p": 0.0, "v": 2.95, "tp": "dividendo", "ds": "3 pagamentos no mês (dividendo + JCP)"}], "ge": [], "rf": [], "re": []}, "2021-06": {"ri": [{"tk": "HABT11", "q": 211.0, "p": 1.8, "v": 379.8, "tp": "dividendo"}, {"tk": "CPTS11", "q": 247.0, "p": 1.0, "v": 247.0, "tp": "dividendo"}, {"tk": "CVBI11", "q": 240.0, "p": 1.0, "v": 240.0, "tp": "dividendo"}, {"tk": "BCRI11", "q": 142.0, "p": 1.59, "v": 225.78, "tp": "dividendo"}, {"tk": "RECR11", "q": 170.0, "p": 1.2, "v": 204.0, "tp": "dividendo"}, {"tk": "XPCI11", "q": 200.0, "p": 1.0, "v": 200.0, "tp": "dividendo"}, {"tk": "FEXC11", "q": 266.0, "p": 0.72, "v": 191.52, "tp": "dividendo"}, {"tk": "TGAR11", "q": 160.0, "p": 1.16, "v": 185.6, "tp": "dividendo"}, {"tk": "MXRF11", "q": 2043.0, "p": 0.07, "v": 143.01, "tp": "dividendo"}, {"tk": "PORD11", "q": 140.0, "p": 1.0, "v": 140.0, "tp": "dividendo"}, {"tk": "KNIP11", "q": 110.0, "p": 1.13, "v": 124.3, "tp": "dividendo"}, {"tk": "DEVA11", "q": 105.0, "p": 1.1, "v": 115.5, "tp": "dividendo"}, {"tk": "MCCI11", "q": 100.0, "p": 0.9, "v": 90.0, "tp": "dividendo"}, {"tk": "MFII11", "q": 80.0, "p": 0.91, "v": 72.8, "tp": "dividendo"}, {"tk": "XPIN11", "q": 100.0, "p": 0.62, "v": 62.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 48.0, "p": 1.11, "v": 53.56, "tp": "dividendo"}, {"tk": "MALL11", "q": 110.0, "p": 0.45, "v": 49.5, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VINO11", "q": 100.0, "p": 0.45, "v": 45.0, "tp": "dividendo"}, {"tk": "CEOC11", "q": 91.0, "p": 0.45, "v": 41.5, "tp": "dividendo"}, {"tk": "TORD11", "q": 502.0, "p": 0.07, "v": 35.14, "tp": "dividendo"}, {"tk": "RBRP11", "q": 100.0, "p": 0.32, "v": 32.0, "tp": "dividendo"}, {"tk": "XPSF11", "q": 20.0, "p": 0.87, "v": 17.4, "tp": "dividendo"}, {"tk": "VRTA11", "q": 10.0, "p": 1.04, "v": 10.4, "tp": "dividendo"}, {"tk": "BCFF11", "q": 20.0, "p": 0.5, "v": 10.0, "tp": "dividendo"}, {"tk": "OURE11", "q": 10.0, "p": 0.82, "v": 8.2, "tp": "dividendo", "na": "VRTM11"}, {"tk": "VISC11", "q": 20.0, "p": 0.35, "v": 7.0, "tp": "dividendo"}, {"tk": "TRXF11", "q": 9.0, "p": 0.7, "v": 6.3, "tp": "dividendo"}, {"tk": "TGAR14", "q": 37.0, "p": 0.09, "v": 3.33, "tp": "dividendo"}, {"tk": "OUFF11", "q": 5.0, "p": 0.65, "v": 3.25, "tp": "dividendo", "na": "VRTM11"}, {"tk": "MGFF11", "q": 5.0, "p": 0.55, "v": 2.75, "tp": "dividendo"}], "cl": [{"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2021-07": {"ri": [{"tk": "HABT11", "q": 211.0, "p": 2.0, "v": 422.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 247.0, "p": 1.0, "v": 247.0, "tp": "dividendo"}, {"tk": "CVBI11", "q": 240.0, "p": 1.0, "v": 240.0, "tp": "dividendo"}, {"tk": "TGAR11", "q": 197.0, "p": 1.11, "v": 218.67, "tp": "dividendo"}, {"tk": "RECR11", "q": 170.0, "p": 1.2, "v": 204.34, "tp": "dividendo"}, {"tk": "XPCI11", "q": 200.0, "p": 1.0, "v": 200.0, "tp": "dividendo"}, {"tk": "BCRI11", "q": 142.0, "p": 1.31, "v": 186.02, "tp": "dividendo"}, {"tk": "PORD11", "q": 140.0, "p": 1.04, "v": 145.6, "tp": "dividendo"}, {"tk": "KNIP11", "q": 110.0, "p": 1.1, "v": 121.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 48.0, "p": 1.76, "v": 84.8, "tp": "dividendo"}, {"tk": "MXRF11", "q": 1005.0, "p": 0.07, "v": 70.35, "tp": "dividendo"}, {"tk": "XPIN11", "q": 100.0, "p": 0.64, "v": 64.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 110.0, "p": 0.5, "v": 55.0, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.42, "v": 8.4, "tp": "dividendo"}, {"tk": "ITSA3", "q": 3.0, "p": 0.0, "v": 0.06, "tp": "dividendo"}], "cl": [{"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2021-08": {"ri": [{"tk": "HABT11", "q": 211.0, "p": 1.6, "v": 337.6, "tp": "dividendo"}, {"tk": "CPTS11", "q": 247.0, "p": 1.01, "v": 249.47, "tp": "dividendo"}, {"tk": "TGAR11", "q": 197.0, "p": 1.08, "v": 212.76, "tp": "dividendo"}, {"tk": "CVBI11", "q": 240.0, "p": 0.85, "v": 204.0, "tp": "dividendo"}, {"tk": "RECR11", "q": 170.0, "p": 1.1, "v": 187.0, "tp": "dividendo"}, {"tk": "XPCI11", "q": 200.0, "p": 0.93, "v": 186.0, "tp": "dividendo"}, {"tk": "BCRI11", "q": 142.0, "p": 1.02, "v": 144.84, "tp": "dividendo"}, {"tk": "PORD11", "q": 140.0, "p": 0.9, "v": 126.0, "tp": "dividendo"}, {"tk": "KNIP11", "q": 110.0, "p": 1.1, "v": 121.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 1005.0, "p": 0.07, "v": 70.35, "tp": "dividendo"}, {"tk": "XPIN11", "q": 100.0, "p": 0.64, "v": 64.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 110.0, "p": 0.53, "v": 58.3, "tp": "dividendo", "na": "PMLL11"}, {"tk": "ARRI11", "q": 48.0, "p": 0.86, "v": 41.7, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.5, "v": 10.0, "tp": "dividendo"}, {"tk": "ITSA3", "q": 3.0, "p": 0.0, "v": 0.17, "tp": "dividendo", "ds": "4 pagamentos no mês (dividendo + JCP)"}], "cl": [{"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.43, "tp": "dividendo", "ds": "3 pagamentos no mês (dividendo + JCP)"}], "ge": [], "rf": [], "re": []}, "2021-09": {"ri": [{"tk": "HABT11", "q": 211.0, "p": 1.5, "v": 316.5, "tp": "dividendo"}, {"tk": "TGAR11", "q": 197.0, "p": 1.1, "v": 216.7, "tp": "dividendo"}, {"tk": "XPCI11", "q": 200.0, "p": 0.87, "v": 174.0, "tp": "dividendo"}, {"tk": "BCRI11", "q": 142.0, "p": 1.13, "v": 160.46, "tp": "dividendo"}, {"tk": "KNIP11", "q": 110.0, "p": 1.2, "v": 132.0, "tp": "dividendo"}, {"tk": "PORD11", "q": 140.0, "p": 0.83, "v": 116.2, "tp": "dividendo"}, {"tk": "MXRF11", "q": 1006.0, "p": 0.08, "v": 80.48, "tp": "dividendo"}, {"tk": "MALL11", "q": 110.0, "p": 0.55, "v": 60.5, "tp": "dividendo", "na": "PMLL11"}, {"tk": "ARRI11", "q": 48.0, "p": 0.91, "v": 43.75, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 0.99, "v": 19.98, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.55, "v": 11.0, "tp": "dividendo"}], "cl": [{"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2021-10": {"ri": [{"tk": "BRCR11", "q": 544.0, "p": 0.46, "v": 250.24, "tp": "dividendo"}, {"tk": "KNSC11", "q": 100.0, "p": 1.24, "v": 124.0, "tp": "dividendo"}, {"tk": "HGFF11", "q": 200.0, "p": 0.5, "v": 100.0, "tp": "dividendo", "na": "PSEC11"}, {"tk": "IRDM11", "q": 87.0, "p": 1.05, "v": 91.75, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HABT11", "q": 50.0, "p": 1.5, "v": 75.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 74.0, "p": 0.77, "v": 56.98, "tp": "dividendo"}, {"tk": "HGBS11", "q": 58.0, "p": 0.85, "v": 49.3, "tp": "dividendo"}, {"tk": "MXRF11", "q": 500.0, "p": 0.08, "v": 40.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 33.0, "p": 1.11, "v": 36.63, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 1.0, "v": 20.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.58, "v": 11.6, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.57, "v": 11.4, "tp": "dividendo", "na": "PMLL11"}], "cl": [{"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2021-11": {"ri": [{"tk": "BRCR11", "q": 544.0, "p": 0.46, "v": 250.24, "tp": "dividendo"}, {"tk": "KNSC11", "q": 100.0, "p": 1.3, "v": 130.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 1.36, "v": 118.82, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HGFF11", "q": 211.0, "p": 0.55, "v": 116.05, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HABT11", "q": 50.0, "p": 1.5, "v": 75.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 74.0, "p": 0.77, "v": 56.98, "tp": "dividendo"}, {"tk": "HGBS11", "q": 58.0, "p": 0.9, "v": 52.2, "tp": "dividendo"}, {"tk": "ARRI11", "q": 33.0, "p": 1.41, "v": 46.53, "tp": "dividendo"}, {"tk": "MXRF11", "q": 500.0, "p": 0.09, "v": 45.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 1.01, "v": 20.2, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.62, "v": 12.4, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.6, "v": 12.0, "tp": "dividendo", "na": "PMLL11"}], "cl": [{"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2021-12": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "KNSC11", "q": 100.0, "p": 1.4, "v": 140.0, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.55, "v": 116.05, "tp": "dividendo", "na": "PSEC11"}, {"tk": "IRDM11", "q": 87.0, "p": 1.12, "v": 98.1, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HABT11", "q": 50.0, "p": 1.5, "v": 75.0, "tp": "dividendo"}, {"tk": "HGBS11", "q": 58.0, "p": 1.05, "v": 60.9, "tp": "dividendo"}, {"tk": "KNRI11", "q": 74.0, "p": 0.77, "v": 56.98, "tp": "dividendo"}, {"tk": "ARRI11", "q": 33.0, "p": 1.47, "v": 48.51, "tp": "dividendo"}, {"tk": "MXRF11", "q": 500.0, "p": 0.08, "v": 40.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 1.0, "v": 20.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.62, "v": 12.4, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.61, "v": 12.2, "tp": "dividendo"}], "cl": [{"tk": "TAEE11", "q": 2.0, "p": 0.0, "v": 2.86, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2022-01": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "KNSC11", "q": 100.0, "p": 1.45, "v": 145.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 1.425, "v": 123.97, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HGFF11", "q": 211.0, "p": 0.58, "v": 122.38, "tp": "dividendo", "na": "PSEC11"}, {"tk": "KNRI11", "q": 81.0, "p": 0.88, "v": 71.28, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.3, "v": 65.0, "tp": "dividendo"}, {"tk": "HGBS11", "q": 58.0, "p": 1.1, "v": 63.8, "tp": "dividendo"}, {"tk": "ARRI11", "q": 33.0, "p": 1.75, "v": 57.75, "tp": "dividendo"}, {"tk": "MXRF11", "q": 500.0, "p": 0.09, "v": 45.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 1.1, "v": 22.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.81, "v": 16.2, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.65, "v": 13.0, "tp": "dividendo", "na": "PMLL11"}], "cl": [{"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2022-02": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "KNSC11", "q": 100.0, "p": 1.25, "v": 125.0, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.58, "v": 122.38, "tp": "dividendo", "na": "PSEC11"}, {"tk": "IRDM11", "q": 87.0, "p": 1.085, "v": 94.37, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HGBS11", "q": 58.0, "p": 1.15, "v": 66.7, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 0.81, "v": 65.61, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.2, "v": 60.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 500.0, "p": 0.09, "v": 45.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 33.0, "p": 1.31, "v": 43.23, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 1.1, "v": 22.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.72, "v": 14.4, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.68, "v": 13.6, "tp": "dividendo"}], "cl": [{"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2022-03": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.58, "v": 122.38, "tp": "dividendo", "na": "PSEC11"}, {"tk": "IRDM11", "q": 87.0, "p": 1.22, "v": 106.14, "tp": "dividendo", "na": "IRIM11"}, {"tk": "KNSC11", "q": 100.0, "p": 1.0, "v": 100.0, "tp": "dividendo"}, {"tk": "HGBS11", "q": 58.0, "p": 1.15, "v": 66.7, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 0.81, "v": 65.61, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.3, "v": 65.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 42.0, "p": 1.3, "v": 54.6, "tp": "dividendo"}, {"tk": "MXRF11", "q": 500.0, "p": 0.09, "v": 45.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 1.1, "v": 22.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.72, "v": 14.4, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.68, "v": 13.6, "tp": "dividendo"}], "cl": [{"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.74, "tp": "dividendo", "ds": "3 pagamentos no mês (dividendo + JCP)"}], "ge": [], "rf": [], "re": []}, "2022-04": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.62, "v": 130.82, "tp": "dividendo", "na": "PSEC11"}, {"tk": "KNSC11", "q": 100.0, "p": 1.12, "v": 112.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 1.182, "v": 102.82, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HGBS11", "q": 64.0, "p": 1.15, "v": 73.6, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 0.81, "v": 65.61, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.2, "v": 60.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 42.0, "p": 1.34, "v": 56.28, "tp": "dividendo"}, {"tk": "MXRF11", "q": 500.0, "p": 0.1, "v": 50.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 1.1, "v": 22.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.72, "v": 14.4, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.68, "v": 13.6, "tp": "dividendo"}], "cl": [{"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2022-05": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.62, "v": 130.82, "tp": "dividendo", "na": "PSEC11"}, {"tk": "KNSC11", "q": 100.0, "p": 1.14, "v": 114.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 1.261, "v": 109.7, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HGBS11", "q": 64.0, "p": 1.2, "v": 76.8, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 0.84, "v": 68.04, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.25, "v": 62.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 500.0, "p": 0.11, "v": 55.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 42.0, "p": 1.282, "v": 53.85, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 1.08, "v": 21.6, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.72, "v": 14.4, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.7, "v": 14.0, "tp": "dividendo"}], "cl": [{"tk": "TAEE11", "q": 2.0, "p": 0.0, "v": 4.64, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}, {"tk": "MGLU3", "q": 1.0, "p": 0.0, "v": 0.01, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2022-06": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.47, "v": 261.79, "tp": "dividendo"}, {"tk": "KNSC11", "q": 100.0, "p": 1.35, "v": 135.0, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.62, "v": 130.82, "tp": "dividendo", "na": "PSEC11"}, {"tk": "IRDM11", "q": 87.0, "p": 1.352, "v": 117.66, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.25, "v": 86.25, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.4, "v": 70.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 0.84, "v": 68.04, "tp": "dividendo"}, {"tk": "ARRI11", "q": 43.0, "p": 1.41, "v": 60.63, "tp": "dividendo"}, {"tk": "MXRF11", "q": 500.0, "p": 0.11, "v": 55.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 1.12, "v": 22.4, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.72, "v": 14.4, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.7, "v": 14.0, "tp": "dividendo"}], "cl": [{"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2022-07": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.47, "v": 261.79, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.62, "v": 130.82, "tp": "dividendo", "na": "PSEC11"}, {"tk": "IRDM11", "q": 87.0, "p": 1.287, "v": 111.97, "tp": "dividendo", "na": "IRIM11"}, {"tk": "KNSC11", "q": 100.0, "p": 1.09, "v": 109.0, "tp": "dividendo"}, {"tk": "HGBS11", "q": 69.0, "p": 1.4, "v": 96.6, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 0.84, "v": 68.04, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.3, "v": 65.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "ARRI11", "q": 43.0, "p": 1.18, "v": 50.74, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 1.1, "v": 22.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.72, "v": 14.4, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.7, "v": 14.0, "tp": "dividendo"}], "cl": [{"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2022-08": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.47, "v": 261.79, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.65, "v": 137.15, "tp": "dividendo", "na": "PSEC11"}, {"tk": "IRDM11", "q": 87.0, "p": 1.32, "v": 115.45, "tp": "dividendo", "na": "IRIM11"}, {"tk": "KNSC11", "q": 100.0, "p": 0.91, "v": 91.0, "tp": "dividendo"}, {"tk": "HGBS11", "q": 69.0, "p": 1.3, "v": 89.7, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 0.91, "v": 73.71, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.3, "v": 65.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.12, "v": 61.92, "tp": "dividendo"}, {"tk": "ARRI11", "q": 43.0, "p": 1.31, "v": 56.33, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 1.1, "v": 22.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.75, "v": 15.0, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.71, "v": 14.2, "tp": "dividendo"}], "cl": [{"tk": "TAEE11", "q": 2.0, "p": 0.0, "v": 2.76, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.81, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}], "ge": [], "rf": [], "re": []}, "2022-09": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.47, "v": 261.79, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.65, "v": 137.15, "tp": "dividendo", "na": "PSEC11"}, {"tk": "IRDM11", "q": 87.0, "p": 1.265, "v": 110.05, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.3, "v": 89.7, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 0.91, "v": 73.71, "tp": "dividendo"}, {"tk": "KNSC11", "q": 100.0, "p": 0.7, "v": 70.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.11, "v": 56.76, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.03, "v": 51.5, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.11, "v": 47.3, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 1.1, "v": 22.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.77, "v": 15.4, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.72, "v": 14.4, "tp": "dividendo"}], "cl": [{"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2022-10": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.47, "v": 261.79, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.65, "v": 137.15, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.35, "v": 93.15, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.85, "v": 73.97, "tp": "dividendo", "na": "IRIM11"}, {"tk": "KNRI11", "q": 81.0, "p": 0.91, "v": 73.71, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.14, "v": 60.2, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "KNSC11", "q": 100.0, "p": 0.5, "v": 50.0, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.0, "v": 50.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 1.05, "v": 21.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.74, "v": 14.8, "tp": "dividendo"}], "cl": [{"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2022-11": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.47, "v": 261.79, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.65, "v": 137.15, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.35, "v": 93.15, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 0.91, "v": 73.71, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.788, "v": 68.56, "tp": "dividendo", "na": "IRIM11"}, {"tk": "KNSC11", "q": 100.0, "p": 0.52, "v": 52.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.11, "v": 47.3, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 0.9, "v": 45.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 0.85, "v": 17.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.78, "v": 15.6, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.75, "v": 15.0, "tp": "dividendo"}], "cl": [{"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2022-12": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.65, "v": 137.15, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.4, "v": 96.6, "tp": "dividendo"}, {"tk": "KNSC11", "q": 100.0, "p": 0.75, "v": 75.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 0.91, "v": 73.71, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.702, "v": 61.03, "tp": "dividendo", "na": "IRIM11"}, {"tk": "ARRI11", "q": 430.0, "p": 0.13, "v": 55.9, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 0.92, "v": 46.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.08, "v": 41.28, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.78, "v": 15.6, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.76, "v": 15.2, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 0.37, "v": 7.4, "tp": "dividendo"}], "cl": [{"tk": "TAEE11", "q": 2.0, "p": 0.0, "v": 1.93, "tp": "dividendo", "ds": "3 pagamentos no mês (dividendo + JCP)"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2023-01": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.47, "v": 261.79, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.65, "v": 137.15, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.4, "v": 96.6, "tp": "dividendo"}, {"tk": "KNSC11", "q": 100.0, "p": 0.94, "v": 94.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.896, "v": 77.97, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HABT11", "q": 50.0, "p": 1.17, "v": 58.5, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.13, "v": 55.9, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.85, "v": 17.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.78, "v": 15.6, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 20.0, "p": 0.58, "v": 11.6, "tp": "dividendo"}], "cl": [{"tk": "TAEE11", "q": 2.0, "p": 0.0, "v": 2.67, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2023-02": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.47, "v": 261.79, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.65, "v": 137.15, "tp": "dividendo", "na": "PSEC11"}, {"tk": "KNSC11", "q": 100.0, "p": 1.04, "v": 104.0, "tp": "dividendo"}, {"tk": "HGBS11", "q": 69.0, "p": 1.4, "v": 96.6, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.948, "v": 82.46, "tp": "dividendo", "na": "IRIM11"}, {"tk": "KNRI11", "q": 81.0, "p": 0.91, "v": 73.71, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.18, "v": 59.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.11, "v": 56.76, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.13, "v": 55.9, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.82, "v": 16.4, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.78, "v": 15.6, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 20.0, "p": 0.75, "v": 15.0, "tp": "dividendo"}], "cl": [{"tk": "OURE11", "q": 6.0, "p": 1.0, "v": 6.0, "tp": "dividendo", "na": "VRTM11"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [], "rf": [], "re": []}, "2023-03": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.46, "v": 256.22, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.65, "v": 137.15, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.4, "v": 96.6, "tp": "dividendo"}, {"tk": "KNSC11", "q": 100.0, "p": 0.87, "v": 87.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.928, "v": 80.72, "tp": "dividendo", "na": "IRIM11"}, {"tk": "KNRI11", "q": 81.0, "p": 0.95, "v": 76.95, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.12, "v": 61.92, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.2, "v": 60.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.07, "v": 30.1, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.78, "v": 15.6, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 20.0, "p": 0.76, "v": 15.2, "tp": "dividendo"}], "cl": [{"tk": "VALE3", "q": 10.0, "p": 0.0, "v": 18.27, "tp": "dividendo"}, {"tk": "OURE11", "q": 12.0, "p": 0.95, "v": 11.4, "tp": "dividendo", "na": "VRTM11"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 1.27, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "MXRF11", "q": 3.0, "p": 0.12, "v": 0.36, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 4.0, "p": 0.12, "v": 0.48, "tp": "dividendo"}], "rf": [], "re": [{"tk": "CCI", "q": 1.0, "p": 15.64, "v": 15.64, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 0.6, "v": 0.6, "tp": "dividendo"}]}, "2023-04": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.46, "v": 256.22, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.65, "v": 137.15, "tp": "dividendo", "na": "PSEC11"}, {"tk": "KNSC11", "q": 100.0, "p": 1.05, "v": 105.0, "tp": "dividendo"}, {"tk": "HGBS11", "q": 69.0, "p": 1.4, "v": 96.6, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.911, "v": 79.27, "tp": "dividendo", "na": "IRIM11"}, {"tk": "KNRI11", "q": 81.0, "p": 0.95, "v": 76.95, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.25, "v": 62.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.12, "v": 61.92, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.11, "v": 47.34, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.82, "v": 16.4, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.78, "v": 15.6, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 20.0, "p": 0.71, "v": 14.2, "tp": "dividendo"}], "cl": [{"tk": "OURE11", "q": 18.0, "p": 1.0, "v": 18.0, "tp": "dividendo", "na": "VRTM11"}, {"tk": "DEVA11", "q": 16.0, "p": 0.7, "v": 11.2, "tp": "dividendo"}, {"tk": "ITSA4", "q": 29.0, "p": 0.0, "v": 0.58, "tp": "dividendo"}, {"tk": "MXRF11", "q": 3.0, "p": 0.12, "v": 0.36, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 4.0, "p": 0.12, "v": 0.48, "tp": "dividendo"}], "rf": [], "re": [{"tk": "STAG", "q": 1.0, "p": 1.25, "v": 1.25, "tp": "dividendo"}]}, "2023-05": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.45, "v": 250.65, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.65, "v": 137.15, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.45, "v": 100.05, "tp": "dividendo"}, {"tk": "KNSC11", "q": 100.0, "p": 0.95, "v": 95.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.913, "v": 79.4, "tp": "dividendo", "na": "IRIM11"}, {"tk": "KNRI11", "q": 81.0, "p": 0.95, "v": 76.95, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.27, "v": 63.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.12, "v": 61.92, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.11, "v": 47.3, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.82, "v": 16.4, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 0.81, "v": 16.2, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.78, "v": 15.6, "tp": "dividendo", "na": "PMLL11"}], "cl": [{"tk": "UNIP6", "q": 27.0, "p": 0.0, "v": 51.75, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "OURE11", "q": 18.0, "p": 1.0, "v": 18.0, "tp": "dividendo", "na": "VRTM11"}, {"tk": "DEVA11", "q": 16.0, "p": 0.85, "v": 13.6, "tp": "dividendo"}, {"tk": "CSNA3", "q": 3.0, "p": 0.0, "v": 3.64, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "MXRF11", "q": 11.0, "p": 0.12, "v": 1.32, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 4.0, "p": 0.12, "v": 0.48, "tp": "dividendo"}], "rf": [], "re": [{"tk": "SLG", "q": 1.0, "p": 11.1, "v": 11.1, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 1.25, "v": 1.25, "tp": "dividendo"}]}, "2023-06": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.45, "v": 250.65, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.65, "v": 137.15, "tp": "dividendo", "na": "PSEC11"}, {"tk": "KNSC11", "q": 100.0, "p": 1.05, "v": 105.0, "tp": "dividendo"}, {"tk": "HGBS11", "q": 69.0, "p": 1.45, "v": 100.05, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 0.95, "v": 76.95, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.868, "v": 75.47, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HABT11", "q": 50.0, "p": 1.3, "v": 65.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.12, "v": 61.92, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.11, "v": 47.3, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 0.85, "v": 17.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.82, "v": 16.4, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.78, "v": 15.6, "tp": "dividendo", "na": "PMLL11"}], "cl": [{"tk": "OURE11", "q": 18.0, "p": 1.0, "v": 18.0, "tp": "dividendo", "na": "VRTM11"}, {"tk": "DEVA11", "q": 16.0, "p": 0.65, "v": 10.4, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.12, "v": 1.32, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 8.0, "p": 0.12, "v": 0.96, "tp": "dividendo"}], "rf": [], "re": [{"tk": "SLG", "q": 1.0, "p": 11.1, "v": 11.1, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 1.25, "v": 1.25, "tp": "dividendo"}]}, "2023-07": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.45, "v": 250.65, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.65, "v": 137.15, "tp": "dividendo", "na": "PSEC11"}, {"tk": "KNRI11", "q": 81.0, "p": 1.51, "v": 122.31, "tp": "dividendo"}, {"tk": "HGBS11", "q": 69.0, "p": 1.45, "v": 100.05, "tp": "dividendo"}, {"tk": "KNSC11", "q": 100.0, "p": 0.8, "v": 80.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.875, "v": 76.11, "tp": "dividendo", "na": "IRIM11"}, {"tk": "MXRF11", "q": 516.0, "p": 0.12, "v": 61.92, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.2, "v": 60.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.11, "v": 47.3, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 0.88, "v": 17.6, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.85, "v": 17.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo", "na": "PMLL11"}], "cl": [{"tk": "OURE11", "q": 18.0, "p": 1.0, "v": 18.0, "tp": "dividendo", "na": "VRTM11"}, {"tk": "HCTR11", "q": 33.0, "p": 0.5, "v": 16.5, "tp": "dividendo"}, {"tk": "DEVA11", "q": 16.0, "p": 0.6, "v": 9.6, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.12, "v": 1.32, "tp": "dividendo"}, {"tk": "ITSA4", "q": 29.0, "p": 0.0, "v": 0.58, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.12, "v": 1.32, "tp": "dividendo"}], "rf": [], "re": [{"tk": "CCI", "q": 1.0, "p": 27.69, "v": 27.69, "tp": "dividendo"}, {"tk": "SLG", "q": 1.0, "p": 11.1, "v": 11.1, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 1.25, "v": 1.25, "tp": "dividendo"}]}, "2023-08": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.45, "v": 250.65, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.65, "v": 137.15, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.55, "v": 106.95, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 0.95, "v": 76.95, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.809, "v": 70.35, "tp": "dividendo", "na": "IRIM11"}, {"tk": "KNSC11", "q": 100.0, "p": 0.7, "v": 70.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.12, "v": 61.92, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.2, "v": 60.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.1, "v": 43.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 20.0, "p": 0.89, "v": 17.8, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.85, "v": 17.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo", "na": "PMLL11"}], "cl": [{"tk": "CVBI11", "q": 47.0, "p": 0.85, "v": 39.95, "tp": "dividendo"}, {"tk": "TAEE11", "q": 35.0, "p": 0.0, "v": 31.19, "tp": "dividendo", "ds": "3 pagamentos no mês (dividendo + JCP)"}, {"tk": "HCTR11", "q": 33.0, "p": 0.5, "v": 16.5, "tp": "dividendo"}, {"tk": "OURE11", "q": 18.0, "p": 0.8, "v": 14.4, "tp": "dividendo", "na": "VRTM11"}, {"tk": "DEVA11", "q": 16.0, "p": 0.5, "v": 8.0, "tp": "dividendo"}, {"tk": "BBSE3", "q": 4.0, "p": 0.0, "v": 6.43, "tp": "dividendo"}, {"tk": "ITSA4", "q": 29.0, "p": 0.0, "v": 4.71, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 1.37, "tp": "dividendo", "ds": "3 pagamentos no mês (dividendo + JCP)"}, {"tk": "MXRF11", "q": 11.0, "p": 0.12, "v": 1.32, "tp": "dividendo"}, {"tk": "GAME11", "q": 3.0, "p": 0.1, "v": 0.3, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.12, "v": 1.32, "tp": "dividendo"}], "rf": [], "re": [{"tk": "SLG", "q": 1.0, "p": 11.1, "v": 11.1, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 1.25, "v": 1.25, "tp": "dividendo"}]}, "2023-09": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.7, "v": 147.7, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 2.0, "v": 138.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 100.0, "p": 0.8, "v": 80.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 0.95, "v": 76.95, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.74, "v": 64.35, "tp": "dividendo", "na": "IRIM11"}, {"tk": "MXRF11", "q": 516.0, "p": 0.11, "v": 56.76, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.0, "v": 50.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.1, "v": 43.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.92, "v": 18.4, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.85, "v": 17.0, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 20.0, "p": 0.79, "v": 15.8, "tp": "dividendo"}], "cl": [{"tk": "VALE3", "q": 30.0, "p": 0.0, "v": 48.92, "tp": "dividendo"}, {"tk": "CVBI11", "q": 47.0, "p": 0.9, "v": 42.3, "tp": "dividendo"}, {"tk": "GAME11", "q": 221.0, "p": 0.1, "v": 22.1, "tp": "dividendo"}, {"tk": "HFOF11", "q": 33.0, "p": 0.63, "v": 20.79, "tp": "dividendo"}, {"tk": "OURE11", "q": 18.0, "p": 0.8, "v": 14.4, "tp": "dividendo", "na": "VRTM11"}, {"tk": "DEVA11", "q": 16.0, "p": 0.47, "v": 7.52, "tp": "dividendo"}, {"tk": "HCTR11", "q": 33.0, "p": 0.171, "v": 5.62, "tp": "dividendo"}, {"tk": "BRCR11", "q": 5.0, "p": 0.41, "v": 2.05, "tp": "dividendo"}, {"tk": "MXRF11", "q": 14.0, "p": 0.11, "v": 1.54, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.11, "v": 1.21, "tp": "dividendo"}], "rf": [], "re": [{"tk": "CCI", "q": 1.0, "p": 41.78, "v": 41.78, "tp": "dividendo"}, {"tk": "SLG", "q": 1.0, "p": 11.1, "v": 11.1, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 2.25, "v": 2.25, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 1.25, "v": 1.25, "tp": "dividendo"}]}, "2023-10": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.7, "v": 147.7, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 2.0, "v": 138.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 100.0, "p": 0.75, "v": 75.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.801, "v": 69.65, "tp": "dividendo", "na": "IRIM11"}, {"tk": "MXRF11", "q": 516.0, "p": 0.11, "v": 56.76, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.0, "v": 50.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.1, "v": 43.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.92, "v": 18.4, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.85, "v": 17.0, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.054, "v": 10.8, "tp": "dividendo"}], "cl": [{"tk": "OURE11", "q": 81.0, "p": 0.8, "v": 64.8, "tp": "dividendo", "na": "VRTM11"}, {"tk": "CVBI11", "q": 47.0, "p": 0.7, "v": 32.9, "tp": "dividendo"}, {"tk": "GAME11", "q": 227.0, "p": 0.1, "v": 22.7, "tp": "dividendo"}, {"tk": "HFOF11", "q": 33.0, "p": 0.63, "v": 20.79, "tp": "dividendo"}, {"tk": "HCTR11", "q": 33.0, "p": 0.27, "v": 8.91, "tp": "dividendo"}, {"tk": "DEVA11", "q": 16.0, "p": 0.49, "v": 7.84, "tp": "dividendo"}, {"tk": "BRCR11", "q": 5.0, "p": 0.41, "v": 2.05, "tp": "dividendo"}, {"tk": "MXRF11", "q": 14.0, "p": 0.11, "v": 1.54, "tp": "dividendo"}, {"tk": "ITSA4", "q": 29.0, "p": 0.0, "v": 0.58, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.04, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.11, "v": 1.21, "tp": "dividendo"}], "rf": [], "re": [{"tk": "SLG", "q": 1.0, "p": 11.1, "v": 11.1, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 3.35, "v": 3.35, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.1, "v": 2.1, "tp": "dividendo"}]}, "2023-11": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.7, "v": 147.7, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 2.0, "v": 138.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 100.0, "p": 0.8, "v": 80.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.712, "v": 61.95, "tp": "dividendo", "na": "IRIM11"}, {"tk": "MXRF11", "q": 516.0, "p": 0.11, "v": 56.76, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.0, "v": 50.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 1.0, "v": 20.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.85, "v": 17.0, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.061, "v": 12.2, "tp": "dividendo"}], "cl": [{"tk": "OURE11", "q": 81.0, "p": 0.8, "v": 64.8, "tp": "dividendo", "na": "VRTM11"}, {"tk": "CSNA3", "q": 78.0, "p": 0.0, "v": 57.93, "tp": "dividendo"}, {"tk": "HFOF11", "q": 73.0, "p": 0.63, "v": 45.99, "tp": "dividendo"}, {"tk": "CVBI11", "q": 47.0, "p": 0.75, "v": 35.25, "tp": "dividendo"}, {"tk": "GAME11", "q": 232.0, "p": 0.1, "v": 23.2, "tp": "dividendo"}, {"tk": "HCTR11", "q": 33.0, "p": 0.34, "v": 11.22, "tp": "dividendo"}, {"tk": "BRCR11", "q": 22.0, "p": 0.41, "v": 9.02, "tp": "dividendo"}, {"tk": "DEVA11", "q": 16.0, "p": 0.52, "v": 8.32, "tp": "dividendo"}, {"tk": "HGRE11", "q": 8.0, "p": 0.78, "v": 6.24, "tp": "dividendo"}, {"tk": "MXRF11", "q": 14.0, "p": 0.11, "v": 1.54, "tp": "dividendo"}, {"tk": "BCSA34", "q": 1.0, "p": 0.281, "v": 0.28, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.11, "v": 1.21, "tp": "dividendo"}], "rf": [], "re": [{"tk": "SLG", "q": 1.0, "p": 11.1, "v": 11.1, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 4.75, "v": 4.75, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.1, "v": 2.1, "tp": "dividendo"}]}, "2023-12": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.7, "v": 147.7, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 2.0, "v": 138.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.07, "v": 70.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.77, "v": 66.99, "tp": "dividendo", "na": "IRIM11"}, {"tk": "MXRF11", "q": 516.0, "p": 0.11, "v": 56.76, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.0, "v": 50.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.1, "v": 43.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 1.0, "v": 20.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.061, "v": 12.2, "tp": "dividendo"}], "cl": [{"tk": "UNIP6", "q": 49.0, "p": 0.0, "v": 76.59, "tp": "dividendo"}, {"tk": "OURE11", "q": 87.0, "p": 0.8, "v": 69.6, "tp": "dividendo", "na": "VRTM11"}, {"tk": "VALE3", "q": 30.0, "p": 0.0, "v": 66.5, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "HFOF11", "q": 87.0, "p": 0.63, "v": 54.81, "tp": "dividendo"}, {"tk": "GAME11", "q": 458.0, "p": 0.1, "v": 45.8, "tp": "dividendo"}, {"tk": "CVBI11", "q": 47.0, "p": 0.8, "v": 37.6, "tp": "dividendo"}, {"tk": "TAEE11", "q": 35.0, "p": 0.0, "v": 17.72, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "HCTR11", "q": 33.0, "p": 0.34, "v": 11.22, "tp": "dividendo"}, {"tk": "BRCR11", "q": 22.0, "p": 0.41, "v": 9.02, "tp": "dividendo"}, {"tk": "DEVA11", "q": 16.0, "p": 0.47, "v": 7.52, "tp": "dividendo"}, {"tk": "HGRE11", "q": 8.0, "p": 0.78, "v": 6.24, "tp": "dividendo"}, {"tk": "HSLG11", "q": 8.0, "p": 0.74, "v": 5.92, "tp": "dividendo"}, {"tk": "XPLG11", "q": 7.0, "p": 0.78, "v": 5.46, "tp": "dividendo"}, {"tk": "MXRF11", "q": 15.0, "p": 0.11, "v": 1.65, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.11, "v": 1.21, "tp": "dividendo"}], "rf": [], "re": [{"tk": "CCI", "q": 1.0, "p": 41.78, "v": 41.78, "tp": "dividendo"}, {"tk": "DUK", "q": 1.0, "p": 21.59, "v": 21.59, "tp": "dividendo"}, {"tk": "SLG", "q": 1.0, "p": 11.1, "v": 11.1, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 4.75, "v": 4.75, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.1, "v": 2.1, "tp": "dividendo"}]}, "2024-01": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.7, "v": 147.7, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 2.0, "v": 138.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.07, "v": 70.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.7, "v": 60.9, "tp": "dividendo", "na": "IRIM11"}, {"tk": "MXRF11", "q": 516.0, "p": 0.11, "v": 56.76, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 0.98, "v": 49.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.1, "v": 43.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 1.0, "v": 20.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.065, "v": 13.0, "tp": "dividendo"}], "cl": [{"tk": "OURE11", "q": 87.0, "p": 0.8, "v": 69.6, "tp": "dividendo", "na": "VRTM11"}, {"tk": "HABT11", "q": 58.0, "p": 0.98, "v": 56.84, "tp": "dividendo"}, {"tk": "HFOF11", "q": 87.0, "p": 0.63, "v": 54.81, "tp": "dividendo"}, {"tk": "GAME11", "q": 461.0, "p": 0.1, "v": 46.1, "tp": "dividendo"}, {"tk": "CVBI11", "q": 47.0, "p": 0.85, "v": 39.95, "tp": "dividendo"}, {"tk": "TAEE11", "q": 35.0, "p": 0.0, "v": 23.16, "tp": "dividendo"}, {"tk": "HCTR11", "q": 33.0, "p": 0.35, "v": 11.55, "tp": "dividendo"}, {"tk": "HGRE11", "q": 8.0, "p": 1.2, "v": 9.6, "tp": "dividendo"}, {"tk": "BRCR11", "q": 22.0, "p": 0.41, "v": 9.02, "tp": "dividendo"}, {"tk": "DEVA11", "q": 16.0, "p": 0.42, "v": 6.72, "tp": "dividendo"}, {"tk": "HSLG11", "q": 8.0, "p": 0.74, "v": 5.92, "tp": "dividendo"}, {"tk": "XPLG11", "q": 7.0, "p": 0.78, "v": 5.46, "tp": "dividendo"}, {"tk": "MXRF11", "q": 15.0, "p": 0.11, "v": 1.65, "tp": "dividendo"}, {"tk": "ITSA4", "q": 30.4, "p": 0.0, "v": 0.61, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.11, "v": 1.21, "tp": "dividendo"}], "rf": [], "re": [{"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}]}, "2024-02": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.7, "v": 147.7, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.75, "v": 120.75, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.08, "v": 80.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.75, "v": 65.25, "tp": "dividendo", "na": "IRIM11"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.0, "v": 50.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.1, "v": 43.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 1.0, "v": 20.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.92, "v": 18.4, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.07, "v": 14.0, "tp": "dividendo"}], "cl": [{"tk": "OURE11", "q": 154.0, "p": 0.85, "v": 130.9, "tp": "dividendo", "na": "VRTM11"}, {"tk": "HABT11", "q": 58.0, "p": 1.0, "v": 58.0, "tp": "dividendo"}, {"tk": "HFOF11", "q": 87.0, "p": 0.63, "v": 54.81, "tp": "dividendo"}, {"tk": "CVBI11", "q": 47.0, "p": 1.05, "v": 49.35, "tp": "dividendo"}, {"tk": "GAME11", "q": 466.0, "p": 0.09, "v": 41.94, "tp": "dividendo"}, {"tk": "BBSE3", "q": 21.0, "p": 0.0, "v": 26.38, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "HCTR11", "q": 33.0, "p": 0.34, "v": 11.22, "tp": "dividendo"}, {"tk": "DEVA11", "q": 16.0, "p": 0.62, "v": 9.92, "tp": "dividendo"}, {"tk": "BRCR11", "q": 22.0, "p": 0.41, "v": 9.02, "tp": "dividendo"}, {"tk": "HGRE11", "q": 8.0, "p": 0.78, "v": 6.24, "tp": "dividendo"}, {"tk": "HSLG11", "q": 8.0, "p": 0.74, "v": 5.92, "tp": "dividendo"}, {"tk": "XPLG11", "q": 7.0, "p": 0.78, "v": 5.46, "tp": "dividendo"}, {"tk": "MXRF11", "q": 15.0, "p": 0.1, "v": 1.5, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "SPHD", "q": 1.0, "p": 3.6, "v": 3.6, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}]}, "2024-03": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.7, "v": 147.7, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.75, "v": 120.75, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.08, "v": 80.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.78, "v": 67.86, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HABT11", "q": 50.0, "p": 1.05, "v": 52.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.1, "v": 43.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 1.0, "v": 20.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.92, "v": 18.4, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.076, "v": 15.2, "tp": "dividendo"}], "cl": [{"tk": "OURE11", "q": 200.0, "p": 0.9, "v": 180.0, "tp": "dividendo", "na": "VRTM11"}, {"tk": "VALE3", "q": 31.0, "p": 0.0, "v": 84.89, "tp": "dividendo"}, {"tk": "HABT11", "q": 58.0, "p": 1.05, "v": 60.9, "tp": "dividendo"}, {"tk": "HFOF11", "q": 87.0, "p": 0.63, "v": 54.81, "tp": "dividendo"}, {"tk": "CVBI11", "q": 47.0, "p": 0.95, "v": 44.65, "tp": "dividendo"}, {"tk": "GAME11", "q": 476.0, "p": 0.09, "v": 42.84, "tp": "dividendo"}, {"tk": "ITSA4", "q": 30.4, "p": 0.0, "v": 16.47, "tp": "dividendo", "ds": "5 pagamentos no mês (dividendo + JCP)"}, {"tk": "CPTI11", "q": 10.0, "p": 1.5, "v": 15.0, "tp": "dividendo"}, {"tk": "HCTR11", "q": 33.0, "p": 0.388, "v": 12.8, "tp": "dividendo"}, {"tk": "DEVA11", "q": 16.0, "p": 0.6, "v": 9.6, "tp": "dividendo"}, {"tk": "XPLG11", "q": 12.0, "p": 0.78, "v": 9.36, "tp": "dividendo"}, {"tk": "BRCR11", "q": 22.0, "p": 0.41, "v": 9.02, "tp": "dividendo"}, {"tk": "HGRE11", "q": 8.0, "p": 0.78, "v": 6.24, "tp": "dividendo"}, {"tk": "HSLG11", "q": 8.0, "p": 0.74, "v": 5.92, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 4.73, "tp": "dividendo", "ds": "4 pagamentos no mês (dividendo + JCP)"}, {"tk": "GOAU3", "q": 73.0, "p": 0.0, "v": 3.65, "tp": "dividendo"}, {"tk": "MXRF11", "q": 15.0, "p": 0.1, "v": 1.5, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "CCI", "q": 1.0, "p": 40.98, "v": 40.98, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 10.45, "v": 10.45, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 3.65, "v": 3.65, "tp": "dividendo"}, {"tk": "VT", "q": 1.0, "p": 2.6, "v": 2.6, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}]}, "2024-04": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.7, "v": 147.7, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.75, "v": 120.75, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.09, "v": 90.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.8, "v": 69.6, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HABT11", "q": 50.0, "p": 1.1, "v": 55.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.1, "v": 43.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 1.0, "v": 20.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.92, "v": 18.4, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.079, "v": 15.8, "tp": "dividendo"}, {"tk": "CNES11", "q": 557.0, "p": 0.008, "v": 4.38, "tp": "dividendo"}], "cl": [{"tk": "OURE11", "q": 225.0, "p": 0.93, "v": 209.25, "tp": "dividendo", "na": "VRTM11"}, {"tk": "UNIP6", "q": 49.0, "p": 0.0, "v": 72.65, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "HABT11", "q": 58.0, "p": 1.1, "v": 63.8, "tp": "dividendo"}, {"tk": "HFOF11", "q": 87.0, "p": 0.63, "v": 54.81, "tp": "dividendo"}, {"tk": "GAME11", "q": 599.0, "p": 0.09, "v": 53.91, "tp": "dividendo"}, {"tk": "CVBI11", "q": 47.0, "p": 1.08, "v": 50.76, "tp": "dividendo"}, {"tk": "CPTI11", "q": 10.0, "p": 1.75, "v": 17.5, "tp": "dividendo"}, {"tk": "BRCR11", "q": 22.0, "p": 0.5, "v": 11.0, "tp": "dividendo"}, {"tk": "DEVA11", "q": 16.0, "p": 0.68, "v": 10.88, "tp": "dividendo"}, {"tk": "HCTR11", "q": 33.0, "p": 0.32, "v": 10.56, "tp": "dividendo"}, {"tk": "XPLG11", "q": 12.0, "p": 0.78, "v": 9.36, "tp": "dividendo"}, {"tk": "HGRE11", "q": 8.0, "p": 0.78, "v": 6.24, "tp": "dividendo"}, {"tk": "HSLG11", "q": 8.0, "p": 0.74, "v": 5.92, "tp": "dividendo"}, {"tk": "MXRF11", "q": 15.0, "p": 0.1, "v": 1.5, "tp": "dividendo"}, {"tk": "ITSA4", "q": 30.0, "p": 0.0, "v": 0.6, "tp": "dividendo"}, {"tk": "CNES11", "q": 22.0, "p": 0.008, "v": 0.17, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "SPHD", "q": 1.0, "p": 3.65, "v": 3.65, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}]}, "2024-05": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.7, "v": 147.7, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.75, "v": 120.75, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.09, "v": 90.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.81, "v": 70.47, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HABT11", "q": 50.0, "p": 1.13, "v": 56.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.1, "v": 43.0, "tp": "dividendo"}, {"tk": "BRCR11", "q": 557.0, "p": 0.85, "v": 42.19, "tp": "amortizacao"}, {"tk": "VISC11", "q": 20.0, "p": 1.0, "v": 20.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.9, "v": 18.0, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.08, "v": 16.0, "tp": "dividendo"}, {"tk": "CNES11", "q": 557.0, "p": 0.008, "v": 4.5, "tp": "dividendo"}], "cl": [{"tk": "OURE11", "q": 225.0, "p": 0.93, "v": 209.25, "tp": "dividendo", "na": "VRTM11"}, {"tk": "HABT11", "q": 58.0, "p": 1.13, "v": 65.54, "tp": "dividendo"}, {"tk": "CSNA3", "q": 78.0, "p": 0.0, "v": 55.87, "tp": "dividendo"}, {"tk": "HFOF11", "q": 87.0, "p": 0.63, "v": 54.81, "tp": "dividendo"}, {"tk": "GAME11", "q": 600.0, "p": 0.09, "v": 54.0, "tp": "dividendo"}, {"tk": "CVBI11", "q": 47.0, "p": 1.11, "v": 52.17, "tp": "dividendo"}, {"tk": "TAEE11", "q": 37.0, "p": 0.0, "v": 41.91, "tp": "dividendo"}, {"tk": "CPTI11", "q": 34.0, "p": 1.1, "v": 37.4, "tp": "dividendo"}, {"tk": "GOAU3", "q": 73.0, "p": 0.0, "v": 13.87, "tp": "dividendo"}, {"tk": "HCTR11", "q": 33.0, "p": 0.38, "v": 12.54, "tp": "dividendo"}, {"tk": "BRCR11", "q": 22.0, "p": 0.5, "v": 11.0, "tp": "dividendo"}, {"tk": "DEVA11", "q": 16.0, "p": 0.65, "v": 10.4, "tp": "dividendo"}, {"tk": "XPLG11", "q": 12.0, "p": 0.78, "v": 9.36, "tp": "dividendo"}, {"tk": "HGRE11", "q": 8.0, "p": 0.78, "v": 6.24, "tp": "dividendo"}, {"tk": "HSLG11", "q": 8.0, "p": 0.74, "v": 5.92, "tp": "dividendo"}, {"tk": "MXRF11", "q": 18.0, "p": 0.1, "v": 1.8, "tp": "dividendo"}, {"tk": "BRCR11", "q": 22.0, "p": 0.85, "v": 1.68, "tp": "amortizacao"}, {"tk": "BCSA34", "q": 1.0, "p": 0.355, "v": 0.35, "tp": "dividendo"}, {"tk": "CNES11", "q": 22.0, "p": 0.008, "v": 0.17, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "O", "q": 1.0, "p": 10.45, "v": 10.45, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 3.6, "v": 3.6, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.6, "v": 2.6, "tp": "dividendo"}]}, "2024-06": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.7, "v": 147.7, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.75, "v": 120.75, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.08, "v": 80.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.74, "v": 64.38, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HABT11", "q": 50.0, "p": 1.05, "v": 52.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.105, "v": 45.15, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 1.0, "v": 20.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.87, "v": 17.4, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.078, "v": 15.6, "tp": "dividendo"}, {"tk": "CNES11", "q": 557.0, "p": 0.008, "v": 4.42, "tp": "dividendo"}], "cl": [{"tk": "OURE11", "q": 225.0, "p": 0.95, "v": 213.75, "tp": "dividendo", "na": "VRTM11"}, {"tk": "HABT11", "q": 58.0, "p": 1.05, "v": 60.9, "tp": "dividendo"}, {"tk": "HFOF11", "q": 87.0, "p": 0.63, "v": 54.81, "tp": "dividendo"}, {"tk": "GAME11", "q": 600.0, "p": 0.09, "v": 54.0, "tp": "dividendo"}, {"tk": "CVBI11", "q": 47.0, "p": 0.85, "v": 39.95, "tp": "dividendo"}, {"tk": "HCTR11", "q": 112.0, "p": 0.32, "v": 35.84, "tp": "dividendo"}, {"tk": "CPTI11", "q": 34.0, "p": 1.0, "v": 34.0, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.48, "v": 33.6, "tp": "dividendo"}, {"tk": "TAEE11", "q": 37.0, "p": 0.0, "v": 13.23, "tp": "dividendo"}, {"tk": "BRCR11", "q": 22.0, "p": 0.5, "v": 11.0, "tp": "dividendo"}, {"tk": "XPLG11", "q": 12.0, "p": 0.78, "v": 9.36, "tp": "dividendo"}, {"tk": "HGRE11", "q": 8.0, "p": 0.78, "v": 6.24, "tp": "dividendo"}, {"tk": "HSLG11", "q": 8.0, "p": 0.74, "v": 5.92, "tp": "dividendo"}, {"tk": "MXRF11", "q": 19.0, "p": 0.1, "v": 1.9, "tp": "dividendo"}, {"tk": "CNES11", "q": 22.0, "p": 0.008, "v": 0.17, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "CCI", "q": 1.0, "p": 41.73, "v": 41.73, "tp": "dividendo"}, {"tk": "DUK", "q": 1.0, "p": 26.54, "v": 26.54, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 10.45, "v": 10.45, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 3.7, "v": 3.7, "tp": "dividendo"}, {"tk": "VT", "q": 1.0, "p": 3.1, "v": 3.1, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}]}, "2024-07": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.7, "v": 147.7, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.75, "v": 120.75, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.09, "v": 90.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.74, "v": 64.38, "tp": "dividendo", "na": "IRIM11"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.0, "v": 50.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.105, "v": 45.15, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.85, "v": 17.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.077, "v": 15.4, "tp": "dividendo"}, {"tk": "CNES11", "q": 557.0, "p": 0.009, "v": 4.8, "tp": "dividendo"}], "cl": [{"tk": "OURE11", "q": 225.0, "p": 1.085, "v": 244.12, "tp": "dividendo", "na": "VRTM11"}, {"tk": "HFOF11", "q": 157.0, "p": 0.63, "v": 98.91, "tp": "dividendo"}, {"tk": "HCTR11", "q": 112.0, "p": 0.53, "v": 59.36, "tp": "dividendo"}, {"tk": "HABT11", "q": 58.0, "p": 1.0, "v": 58.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 606.0, "p": 0.09, "v": 54.54, "tp": "dividendo"}, {"tk": "CVBI11", "q": 47.0, "p": 0.88, "v": 41.36, "tp": "dividendo"}, {"tk": "CPTI11", "q": 34.0, "p": 1.0, "v": 34.0, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.43, "v": 30.1, "tp": "dividendo"}, {"tk": "HGRE11", "q": 8.0, "p": 1.5, "v": 12.0, "tp": "dividendo"}, {"tk": "BRCR11", "q": 22.0, "p": 0.5, "v": 11.0, "tp": "dividendo"}, {"tk": "XPLG11", "q": 12.0, "p": 0.78, "v": 9.36, "tp": "dividendo"}, {"tk": "HSLG11", "q": 8.0, "p": 0.74, "v": 5.92, "tp": "dividendo"}, {"tk": "MXRF11", "q": 20.0, "p": 0.1, "v": 2.0, "tp": "dividendo"}, {"tk": "ITSA4", "q": 30.0, "p": 0.0, "v": 0.6, "tp": "dividendo"}, {"tk": "CNES11", "q": 22.0, "p": 0.009, "v": 0.18, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "O", "q": 1.0, "p": 10.45, "v": 10.45, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 3.65, "v": 3.65, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}]}, "2024-08": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.7, "v": 147.7, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.6, "v": 110.4, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.09, "v": 90.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.74, "v": 64.38, "tp": "dividendo", "na": "IRIM11"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.0, "v": 50.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.1, "v": 43.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.85, "v": 17.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 200.0, "p": 0.081, "v": 16.2, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CNES11", "q": 557.0, "p": 0.006, "v": 3.28, "tp": "dividendo"}], "cl": [{"tk": "OURE11", "q": 225.0, "p": 6.742, "v": 789.03, "tp": "amortizacao", "na": "VRTM11", "ds": "Liquidação OURE11 → VRTM11 · R$6,742/cota em dinheiro · 8,4766 cotas VRTM11 por cota"}, {"tk": "HFOF11", "q": 157.0, "p": 0.63, "v": 98.91, "tp": "dividendo"}, {"tk": "URPR11", "q": 62.0, "p": 1.0, "v": 62.0, "tp": "dividendo"}, {"tk": "HABT11", "q": 58.0, "p": 1.0, "v": 58.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 606.0, "p": 0.09, "v": 54.54, "tp": "dividendo"}, {"tk": "CVBI11", "q": 47.0, "p": 0.97, "v": 45.59, "tp": "dividendo"}, {"tk": "BBSE3", "q": 32.0, "p": 0.0, "v": 44.5, "tp": "dividendo"}, {"tk": "HCTR11", "q": 112.0, "p": 0.36, "v": 40.32, "tp": "dividendo"}, {"tk": "CPTI11", "q": 34.0, "p": 1.0, "v": 34.0, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.46, "v": 32.2, "tp": "dividendo"}, {"tk": "BRCR11", "q": 22.0, "p": 0.5, "v": 11.0, "tp": "dividendo"}, {"tk": "BMGB4", "q": 139.0, "p": 0.0, "v": 9.92, "tp": "dividendo"}, {"tk": "XPLG11", "q": 12.0, "p": 0.78, "v": 9.36, "tp": "dividendo"}, {"tk": "BBAS3", "q": 19.0, "p": 0.0, "v": 8.08, "tp": "dividendo", "ds": "4 pagamentos no mês (dividendo + JCP)"}, {"tk": "HGRE11", "q": 8.0, "p": 0.78, "v": 6.24, "tp": "dividendo"}, {"tk": "HSLG11", "q": 8.0, "p": 0.74, "v": 5.92, "tp": "dividendo"}, {"tk": "GOAU3", "q": 73.0, "p": 0.0, "v": 5.84, "tp": "dividendo"}, {"tk": "ITSA4", "q": 30.0, "p": 0.0, "v": 4.2, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "MXRF11", "q": 20.0, "p": 0.1, "v": 2.0, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 1.31, "tp": "dividendo", "ds": "3 pagamentos no mês (dividendo + JCP)"}, {"tk": "CNES11", "q": 22.0, "p": 0.006, "v": 0.12, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "O", "q": 1.0, "p": 10.9, "v": 10.9, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 3.65, "v": 3.65, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}]}, "2024-09": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.7, "v": 147.7, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.6, "v": 110.4, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.09, "v": 90.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.7, "v": 60.9, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HABT11", "q": 50.0, "p": 0.95, "v": 47.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.09, "v": 46.44, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.1, "v": 43.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.83, "v": 16.6, "tp": "dividendo"}, {"tk": "CPTS11", "q": 200.0, "p": 0.081, "v": 16.2, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.78, "v": 15.6, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CNES11", "q": 557.0, "p": 0.006, "v": 3.49, "tp": "dividendo"}], "cl": [{"tk": "VRTM11", "q": 1907.2, "p": 0.09, "v": 171.65, "tp": "dividendo"}, {"tk": "HFOF11", "q": 184.0, "p": 0.63, "v": 115.92, "tp": "dividendo"}, {"tk": "VALE3", "q": 55.0, "p": 0.0, "v": 97.88, "tp": "dividendo"}, {"tk": "CPTI11", "q": 72.0, "p": 1.0, "v": 72.0, "tp": "dividendo"}, {"tk": "URPR11", "q": 62.0, "p": 1.0, "v": 62.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 614.0, "p": 0.09, "v": 55.26, "tp": "dividendo"}, {"tk": "HABT11", "q": 58.0, "p": 0.95, "v": 55.1, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.39, "v": 51.09, "tp": "dividendo"}, {"tk": "CVBI11", "q": 47.0, "p": 0.86, "v": 40.42, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.45, "v": 31.5, "tp": "dividendo"}, {"tk": "BRCR11", "q": 32.0, "p": 0.5, "v": 16.0, "tp": "dividendo"}, {"tk": "XPLG11", "q": 15.0, "p": 0.78, "v": 11.7, "tp": "dividendo"}, {"tk": "HGRE11", "q": 8.0, "p": 0.78, "v": 6.24, "tp": "dividendo"}, {"tk": "HSLG11", "q": 8.0, "p": 0.74, "v": 5.92, "tp": "dividendo"}, {"tk": "BBAS3", "q": 19.0, "p": 0.0, "v": 3.01, "tp": "dividendo"}, {"tk": "MXRF11", "q": 20.0, "p": 0.09, "v": 1.8, "tp": "dividendo"}, {"tk": "CNES11", "q": 22.0, "p": 0.006, "v": 0.13, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.09, "v": 0.99, "tp": "dividendo"}], "rf": [], "re": [{"tk": "CCI", "q": 1.0, "p": 41.28, "v": 41.28, "tp": "dividendo"}, {"tk": "DUK", "q": 1.0, "p": 28.54, "v": 28.54, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 10.45, "v": 10.45, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 3.65, "v": 3.65, "tp": "dividendo"}, {"tk": "VT", "q": 1.0, "p": 2.65, "v": 2.65, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}]}, "2024-10": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.7, "v": 147.7, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.6, "v": 110.4, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.09, "v": 90.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.8, "v": 69.6, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HABT11", "q": 50.0, "p": 1.0, "v": 50.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.09, "v": 46.44, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.78, "v": 15.6, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.072, "v": 14.4, "tp": "dividendo"}, {"tk": "CNES11", "q": 557.0, "p": 0.005, "v": 2.87, "tp": "dividendo"}], "cl": [{"tk": "VRTM11", "q": 2390.0, "p": 0.08, "v": 191.2, "tp": "dividendo"}, {"tk": "HFOF11", "q": 200.0, "p": 0.6, "v": 120.0, "tp": "dividendo"}, {"tk": "CPTI11", "q": 82.0, "p": 1.0, "v": 82.0, "tp": "dividendo"}, {"tk": "URPR11", "q": 62.0, "p": 0.95, "v": 58.9, "tp": "dividendo"}, {"tk": "HABT11", "q": 58.0, "p": 1.0, "v": 58.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 614.0, "p": 0.09, "v": 55.26, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.39, "v": 51.09, "tp": "dividendo"}, {"tk": "BRCR11", "q": 75.0, "p": 0.5, "v": 37.5, "tp": "dividendo"}, {"tk": "CVBI11", "q": 47.0, "p": 0.78, "v": 36.66, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.45, "v": 31.5, "tp": "dividendo"}, {"tk": "XPLG11", "q": 15.0, "p": 0.78, "v": 11.7, "tp": "dividendo"}, {"tk": "HGRE11", "q": 8.0, "p": 0.78, "v": 6.24, "tp": "dividendo"}, {"tk": "HSLG11", "q": 8.0, "p": 0.74, "v": 5.92, "tp": "dividendo"}, {"tk": "MXRF11", "q": 20.0, "p": 0.09, "v": 1.8, "tp": "dividendo"}, {"tk": "ITSA4", "q": 30.0, "p": 0.0, "v": 0.6, "tp": "dividendo"}, {"tk": "CNES11", "q": 22.0, "p": 0.005, "v": 0.11, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.09, "v": 0.99, "tp": "dividendo"}], "rf": [], "re": [{"tk": "DUK", "q": 1.0, "p": 26.54, "v": 26.54, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 10.85, "v": 10.85, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 3.85, "v": 3.85, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}]}, "2024-11": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.7, "v": 147.7, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.6, "v": 110.4, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.08, "v": 80.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.75, "v": 65.25, "tp": "dividendo", "na": "IRIM11"}, {"tk": "MXRF11", "q": 516.0, "p": 0.09, "v": 46.44, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 0.9, "v": 45.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.78, "v": 15.6, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.062, "v": 12.4, "tp": "dividendo"}, {"tk": "CNES11", "q": 557.0, "p": 0.007, "v": 3.65, "tp": "dividendo"}], "cl": [{"tk": "UNIP6", "q": 129.0, "p": 0.0, "v": 353.39, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "VRTM11", "q": 2500.0, "p": 0.085, "v": 212.5, "tp": "dividendo"}, {"tk": "HFOF11", "q": 221.0, "p": 0.58, "v": 128.18, "tp": "dividendo"}, {"tk": "CPTI11", "q": 110.0, "p": 1.0, "v": 110.0, "tp": "dividendo"}, {"tk": "HABT11", "q": 100.0, "p": 0.9, "v": 90.0, "tp": "dividendo"}, {"tk": "HSLG11", "q": 90.0, "p": 0.74, "v": 66.6, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.87, "v": 64.38, "tp": "dividendo"}, {"tk": "CSNA3", "q": 110.0, "p": 0.0, "v": 60.55, "tp": "dividendo"}, {"tk": "GAME11", "q": 617.0, "p": 0.09, "v": 55.53, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.37, "v": 48.47, "tp": "dividendo"}, {"tk": "CVBI11", "q": 47.0, "p": 0.9, "v": 42.3, "tp": "dividendo"}, {"tk": "BRCR11", "q": 75.0, "p": 0.5, "v": 37.5, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.45, "v": 31.5, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.78, "v": 27.3, "tp": "dividendo"}, {"tk": "TAEE11", "q": 44.0, "p": 0.0, "v": 26.25, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "BMGB4", "q": 139.0, "p": 0.0, "v": 9.92, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 0.78, "v": 7.8, "tp": "dividendo"}, {"tk": "MXRF11", "q": 20.0, "p": 0.09, "v": 1.8, "tp": "dividendo"}, {"tk": "BCSA34", "q": 1.0, "p": 0.426, "v": 0.42, "tp": "dividendo"}, {"tk": "CNES11", "q": 22.0, "p": 0.007, "v": 0.14, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.09, "v": 0.99, "tp": "dividendo"}], "rf": [], "re": [{"tk": "O", "q": 1.0, "p": 10.45, "v": 10.45, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 3.75, "v": 3.75, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.1, "v": 2.1, "tp": "dividendo"}]}, "2024-12": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.7, "v": 147.7, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.6, "v": 110.4, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.08, "v": 80.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.77, "v": 66.99, "tp": "dividendo", "na": "IRIM11"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.02, "v": 51.0, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.78, "v": 15.6, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.075, "v": 15.0, "tp": "dividendo"}, {"tk": "CNES11", "q": 557.0, "p": 0.01, "v": 5.42, "tp": "dividendo"}], "cl": [{"tk": "VRTM11", "q": 2500.0, "p": 0.09, "v": 225.0, "tp": "dividendo"}, {"tk": "HFOF11", "q": 221.0, "p": 0.56, "v": 123.76, "tp": "dividendo"}, {"tk": "CPTI11", "q": 110.0, "p": 1.0, "v": 110.0, "tp": "dividendo"}, {"tk": "HABT11", "q": 100.0, "p": 1.02, "v": 102.0, "tp": "dividendo"}, {"tk": "HSLG11", "q": 90.0, "p": 0.74, "v": 66.6, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.88, "v": 65.12, "tp": "dividendo"}, {"tk": "GAME11", "q": 617.0, "p": 0.09, "v": 55.53, "tp": "dividendo"}, {"tk": "CVBI11", "q": 47.0, "p": 0.9, "v": 42.3, "tp": "dividendo"}, {"tk": "BRCR11", "q": 75.0, "p": 0.5, "v": 37.5, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.43, "v": 30.1, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.78, "v": 27.3, "tp": "dividendo"}, {"tk": "BMGB4", "q": 139.0, "p": 0.0, "v": 13.94, "tp": "dividendo"}, {"tk": "BBAS3", "q": 19.0, "p": 0.0, "v": 10.66, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "GOAU3", "q": 73.0, "p": 0.0, "v": 9.49, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 0.78, "v": 7.8, "tp": "dividendo"}, {"tk": "MXRF11", "q": 20.0, "p": 0.1, "v": 2.0, "tp": "dividendo"}, {"tk": "CNES11", "q": 22.0, "p": 0.01, "v": 0.21, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "O", "q": 1.0, "p": 42.03, "v": 42.03, "tp": "dividendo"}, {"tk": "DUK", "q": 1.0, "p": 26.59, "v": 26.59, "tp": "dividendo"}, {"tk": "IWDA", "q": 1.0, "p": 14.24, "v": 14.24, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 3.8, "v": 3.8, "tp": "dividendo"}, {"tk": "VT", "q": 1.0, "p": 2.8, "v": 2.8, "tp": "dividendo"}]}, "2025-01": {"ri": [{"tk": "HGFF11", "q": 211.0, "p": 1.35, "v": 284.85, "tp": "dividendo_especial", "na": "PSEC11", "ds": "Rendimento especial · ganho de capital com venda de ativos (dez/2024)"}, {"tk": "BRCR11", "q": 557.0, "p": 0.5, "v": 278.5, "tp": "dividendo"}, {"tk": "HGBS11", "q": 69.0, "p": 1.6, "v": 110.4, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.09, "v": 90.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.93, "v": 80.91, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HABT11", "q": 50.0, "p": 1.05, "v": 52.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.78, "v": 15.6, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.075, "v": 15.0, "tp": "dividendo"}, {"tk": "CNES11", "q": 558.9, "p": 0.004, "v": 2.23, "tp": "dividendo"}], "cl": [{"tk": "VRTM11", "q": 2520.0, "p": 0.09, "v": 226.8, "tp": "dividendo"}, {"tk": "HABT11", "q": 151.0, "p": 1.05, "v": 158.55, "tp": "dividendo"}, {"tk": "HFOF11", "q": 221.0, "p": 0.56, "v": 123.76, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.74, "v": 111.0, "tp": "dividendo"}, {"tk": "CPTI11", "q": 110.0, "p": 1.0, "v": 110.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1007.0, "p": 0.09, "v": 90.63, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.69, "v": 90.39, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.88, "v": 65.12, "tp": "dividendo"}, {"tk": "CVBI11", "q": 57.0, "p": 1.05, "v": 59.85, "tp": "dividendo"}, {"tk": "BRCR11", "q": 75.0, "p": 0.5, "v": 37.5, "tp": "dividendo"}, {"tk": "ISAE4", "q": 56.0, "p": 0.0, "v": 37.46, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.44, "v": 30.8, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.78, "v": 27.3, "tp": "dividendo"}, {"tk": "TAEE11", "q": 44.0, "p": 0.0, "v": 26.79, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "HGRE11", "q": 10.0, "p": 0.78, "v": 7.8, "tp": "dividendo"}, {"tk": "MXRF11", "q": 20.0, "p": 0.1, "v": 2.0, "tp": "dividendo"}, {"tk": "ITSA4", "q": 30.0, "p": 0.0, "v": 0.6, "tp": "dividendo"}, {"tk": "CNES11", "q": 20.1, "p": 0.004, "v": 0.08, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "CCI", "q": 1.0, "p": 35.73, "v": 35.73, "tp": "dividendo"}, {"tk": "SLG", "q": 1.0, "p": 10.55, "v": 10.55, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 9.95, "v": 9.95, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.0, "v": 1.0, "tp": "dividendo"}]}, "2025-02": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.48, "v": 267.36, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.68, "v": 143.48, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.6, "v": 110.4, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.1, "v": 100.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.75, "v": 65.25, "tp": "dividendo", "na": "IRIM11"}, {"tk": "CVBI11", "q": 57.0, "p": 1.05, "v": 59.85, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.1, "v": 55.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.09, "v": 46.44, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.83, "v": 16.6, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 200.0, "p": 0.075, "v": 15.0, "tp": "dividendo"}, {"tk": "CNES11", "q": 552.3, "p": 0.013, "v": 7.24, "tp": "dividendo"}], "cl": [{"tk": "VRTM11", "q": 2691.0, "p": 0.09, "v": 242.19, "tp": "dividendo"}, {"tk": "HABT11", "q": 165.0, "p": 1.1, "v": 181.5, "tp": "dividendo"}, {"tk": "CPTI11", "q": 136.0, "p": 1.0, "v": 136.0, "tp": "dividendo"}, {"tk": "HFOF11", "q": 221.0, "p": 0.56, "v": 123.76, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.65, "v": 97.5, "tp": "dividendo"}, {"tk": "GAME11", "q": 1007.0, "p": 0.095, "v": 95.66, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.81, "v": 59.94, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.32, "v": 41.92, "tp": "dividendo"}, {"tk": "ISAE4", "q": 56.0, "p": 0.0, "v": 37.46, "tp": "dividendo"}, {"tk": "RBHG11", "q": 45.0, "p": 0.8, "v": 36.0, "tp": "dividendo"}, {"tk": "BRCR11", "q": 75.0, "p": 0.48, "v": 36.0, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.41, "v": 28.7, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 0.85, "v": 8.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 20.0, "p": 0.09, "v": 1.8, "tp": "dividendo"}, {"tk": "CNES11", "q": 26.7, "p": 0.013, "v": 0.35, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "RBHG11", "q": 113.0, "p": 0.8, "v": 90.4, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "CVBI11", "q": 37.0, "p": 1.05, "v": 38.85, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.09, "v": 0.99, "tp": "dividendo"}], "rf": [], "re": [{"tk": "SLG", "q": 1.0, "p": 10.55, "v": 10.55, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 9.95, "v": 9.95, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.0, "v": 1.0, "tp": "dividendo"}]}, "2025-03": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.45, "v": 250.65, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.68, "v": 143.48, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.6, "v": 110.4, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.09, "v": 90.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.8, "v": 69.6, "tp": "dividendo", "na": "IRIM11"}, {"tk": "CVBI11", "q": 57.0, "p": 1.05, "v": 59.85, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.08, "v": 54.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.09, "v": 46.44, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.85, "v": 17.0, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.08, "v": 16.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo"}, {"tk": "CNES11", "q": 550.8, "p": 0.007, "v": 3.9, "tp": "dividendo"}], "cl": [{"tk": "VRTM11", "q": 2691.0, "p": 0.09, "v": 242.19, "tp": "dividendo"}, {"tk": "HABT11", "q": 165.0, "p": 1.08, "v": 178.2, "tp": "dividendo"}, {"tk": "VALE3", "q": 55.0, "p": 0.0, "v": 142.13, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "CPTI11", "q": 136.0, "p": 1.0, "v": 136.0, "tp": "dividendo"}, {"tk": "HFOF11", "q": 221.0, "p": 0.56, "v": 123.76, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.65, "v": 97.5, "tp": "dividendo"}, {"tk": "GAME11", "q": 1007.0, "p": 0.095, "v": 95.66, "tp": "dividendo"}, {"tk": "BBSE3", "q": 32.0, "p": 0.0, "v": 73.9, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "URPR11", "q": 74.0, "p": 0.82, "v": 60.68, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.32, "v": 41.92, "tp": "dividendo"}, {"tk": "ISAE4", "q": 56.0, "p": 0.0, "v": 37.46, "tp": "dividendo"}, {"tk": "RBHG11", "q": 45.0, "p": 0.8, "v": 36.0, "tp": "dividendo"}, {"tk": "BRCR11", "q": 75.0, "p": 0.45, "v": 33.75, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.43, "v": 30.1, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "ITSA4", "q": 31.5, "p": 0.0, "v": 18.12, "tp": "dividendo", "ds": "4 pagamentos no mês (dividendo + JCP)"}, {"tk": "BBAS3", "q": 19.0, "p": 0.0, "v": 10.7, "tp": "dividendo", "ds": "5 pagamentos no mês (dividendo + JCP)"}, {"tk": "HGRE11", "q": 10.0, "p": 0.85, "v": 8.5, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 6.14, "tp": "dividendo", "ds": "5 pagamentos no mês (dividendo + JCP)"}, {"tk": "GOAU3", "q": 73.0, "p": 0.0, "v": 3.65, "tp": "dividendo"}, {"tk": "MXRF11", "q": 20.0, "p": 0.09, "v": 1.8, "tp": "dividendo"}, {"tk": "CNES11", "q": 28.2, "p": 0.007, "v": 0.2, "tp": "dividendo"}], "ge": [{"tk": "MFII11", "q": 89.0, "p": 1.11, "v": 98.79, "tp": "dividendo"}, {"tk": "RBHG11", "q": 114.0, "p": 0.8, "v": 91.2, "tp": "dividendo"}, {"tk": "TGAR11", "q": 66.0, "p": 1.0, "v": 66.0, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "KNSC11", "q": 500.0, "p": 0.09, "v": 45.0, "tp": "dividendo"}, {"tk": "CVBI11", "q": 37.0, "p": 1.05, "v": 38.85, "tp": "dividendo"}, {"tk": "VRTM11", "q": 312.0, "p": 0.09, "v": 28.08, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.09, "v": 0.99, "tp": "dividendo"}], "rf": [], "re": [{"tk": "DUK", "q": 1.0, "p": 11.0, "v": 11.0, "tp": "dividendo"}, {"tk": "SLG", "q": 1.0, "p": 10.55, "v": 10.55, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 9.95, "v": 9.95, "tp": "dividendo"}, {"tk": "VT", "q": 1.0, "p": 3.5, "v": 3.5, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.0, "v": 1.0, "tp": "dividendo"}]}, "2025-04": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.45, "v": 250.65, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.68, "v": 143.48, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.6, "v": 110.4, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.1, "v": 100.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.72, "v": 62.64, "tp": "dividendo", "na": "IRIM11"}, {"tk": "CVBI11", "q": 57.0, "p": 1.05, "v": 59.85, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.0, "v": 50.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.09, "v": 46.44, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.85, "v": 17.0, "tp": "dividendo", "na": "PMLL11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.082, "v": 16.4, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo"}, {"tk": "CNES11", "q": 579.0, "p": 0.006, "v": 3.34, "tp": "dividendo"}], "cl": [{"tk": "UNIP6", "q": 129.0, "p": 0.0, "v": 296.43, "tp": "dividendo"}, {"tk": "VRTM11", "q": 2691.0, "p": 0.09, "v": 242.19, "tp": "dividendo"}, {"tk": "HABT11", "q": 165.0, "p": 1.0, "v": 165.0, "tp": "dividendo"}, {"tk": "CPTI11", "q": 136.0, "p": 1.0, "v": 136.0, "tp": "dividendo"}, {"tk": "HFOF11", "q": 221.0, "p": 0.56, "v": 123.76, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.65, "v": 97.5, "tp": "dividendo"}, {"tk": "GAME11", "q": 1007.0, "p": 0.095, "v": 95.66, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.8, "v": 59.2, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.3, "v": 39.3, "tp": "dividendo"}, {"tk": "RBHG11", "q": 45.0, "p": 0.8, "v": 36.0, "tp": "dividendo"}, {"tk": "BRCR11", "q": 75.0, "p": 0.45, "v": 33.75, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.41, "v": 28.7, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "BMGB4", "q": 139.0, "p": 0.0, "v": 11.82, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 0.85, "v": 8.5, "tp": "dividendo"}, {"tk": "ITSA4", "q": 31.0, "p": 0.0, "v": 4.09, "tp": "dividendo", "ds": "3 pagamentos no mês (dividendo + JCP)"}, {"tk": "MXRF11", "q": 20.0, "p": 0.09, "v": 1.8, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MFII11", "q": 89.0, "p": 1.11, "v": 98.79, "tp": "dividendo"}, {"tk": "RBHG11", "q": 114.0, "p": 0.8, "v": 91.2, "tp": "dividendo"}, {"tk": "TGAR11", "q": 66.0, "p": 1.0, "v": 66.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 500.0, "p": 0.1, "v": 50.0, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "CVBI11", "q": 37.0, "p": 1.05, "v": 38.85, "tp": "dividendo"}, {"tk": "VRTM11", "q": 312.0, "p": 0.09, "v": 28.08, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.09, "v": 0.99, "tp": "dividendo"}], "rf": [], "re": [{"tk": "CCI", "q": 1.0, "p": 35.73, "v": 35.73, "tp": "dividendo"}, {"tk": "SLG", "q": 1.0, "p": 10.55, "v": 10.55, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 9.95, "v": 9.95, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.0, "v": 1.0, "tp": "dividendo"}]}, "2025-05": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.45, "v": 250.65, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.68, "v": 143.48, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 69.0, "p": 1.6, "v": 110.4, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.11, "v": 110.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.83, "v": 72.21, "tp": "dividendo", "na": "IRIM11"}, {"tk": "CVBI11", "q": 57.0, "p": 1.05, "v": 59.85, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.15, "v": 57.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "CPTS11", "q": 200.0, "p": 0.085, "v": 17.0, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.85, "v": 17.0, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo"}, {"tk": "CNES11", "q": 579.0, "p": 0.006, "v": 3.3, "tp": "dividendo"}], "cl": [{"tk": "VRTM11", "q": 2691.0, "p": 0.09, "v": 242.19, "tp": "dividendo"}, {"tk": "HABT11", "q": 165.0, "p": 1.15, "v": 189.75, "tp": "dividendo"}, {"tk": "CPTI11", "q": 136.0, "p": 1.0, "v": 136.0, "tp": "dividendo"}, {"tk": "HFOF11", "q": 221.0, "p": 0.56, "v": 123.76, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.65, "v": 97.5, "tp": "dividendo"}, {"tk": "GAME11", "q": 1007.0, "p": 0.095, "v": 95.66, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.69, "v": 51.06, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.32, "v": 41.92, "tp": "dividendo"}, {"tk": "RBHG11", "q": 45.0, "p": 0.8, "v": 36.0, "tp": "dividendo"}, {"tk": "BRCR11", "q": 75.0, "p": 0.45, "v": 33.75, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.46, "v": 32.2, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "TAEE11", "q": 44.0, "p": 0.0, "v": 24.34, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 0.85, "v": 8.5, "tp": "dividendo"}, {"tk": "GOAU3", "q": 73.0, "p": 0.0, "v": 5.84, "tp": "dividendo"}, {"tk": "MXRF11", "q": 20.0, "p": 0.1, "v": 2.0, "tp": "dividendo"}, {"tk": "BCSA34", "q": 1.0, "p": 0.497, "v": 0.49, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MFII11", "q": 89.0, "p": 1.1, "v": 97.9, "tp": "dividendo"}, {"tk": "RBHG11", "q": 114.0, "p": 0.8, "v": 91.2, "tp": "dividendo"}, {"tk": "TGAR11", "q": 66.0, "p": 1.0, "v": 66.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 500.0, "p": 0.11, "v": 55.0, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "CVBI11", "q": 37.0, "p": 1.05, "v": 38.85, "tp": "dividendo"}, {"tk": "VRTM11", "q": 312.0, "p": 0.09, "v": 28.08, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "SLG", "q": 1.0, "p": 10.55, "v": 10.55, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 9.95, "v": 9.95, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.0, "v": 1.0, "tp": "dividendo"}]}, "2025-06": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.68, "v": 143.48, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 690.0, "p": 0.16, "v": 110.4, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.1, "v": 100.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.82, "v": 71.34, "tp": "dividendo", "na": "IRIM11"}, {"tk": "CVBI11", "q": 57.0, "p": 1.05, "v": 59.85, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.15, "v": 57.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "CPTS11", "q": 200.0, "p": 0.087, "v": 17.4, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.85, "v": 17.0, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.8, "v": 16.0, "tp": "dividendo"}], "cl": [{"tk": "VRTM11", "q": 2691.0, "p": 0.09, "v": 242.19, "tp": "dividendo"}, {"tk": "HABT11", "q": 165.0, "p": 1.15, "v": 189.75, "tp": "dividendo"}, {"tk": "CPTI11", "q": 136.0, "p": 1.0, "v": 136.0, "tp": "dividendo"}, {"tk": "HFOF11", "q": 2210.0, "p": 0.056, "v": 123.76, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.65, "v": 97.5, "tp": "dividendo"}, {"tk": "GAME11", "q": 1007.0, "p": 0.095, "v": 95.66, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.28, "v": 36.68, "tp": "dividendo"}, {"tk": "RBHG11", "q": 45.0, "p": 0.8, "v": 36.0, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.45, "v": 33.3, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.45, "v": 31.5, "tp": "dividendo"}, {"tk": "BRCR11", "q": 75.0, "p": 0.41, "v": 30.75, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 0.85, "v": 8.5, "tp": "dividendo"}, {"tk": "BBAS3", "q": 19.0, "p": 0.0, "v": 6.86, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "MXRF11", "q": 20.0, "p": 0.1, "v": 2.0, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MFII11", "q": 89.0, "p": 1.1, "v": 97.9, "tp": "dividendo"}, {"tk": "RBHG11", "q": 114.0, "p": 0.8, "v": 91.2, "tp": "dividendo"}, {"tk": "TGAR11", "q": 66.0, "p": 1.0, "v": 66.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 500.0, "p": 0.1, "v": 50.0, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "CVBI11", "q": 37.0, "p": 1.05, "v": 38.85, "tp": "dividendo"}, {"tk": "VRTM11", "q": 312.0, "p": 0.09, "v": 28.08, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "DUK", "q": 1.0, "p": 11.0, "v": 11.0, "tp": "dividendo"}, {"tk": "SLG", "q": 1.0, "p": 10.55, "v": 10.55, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 9.95, "v": 9.95, "tp": "dividendo"}, {"tk": "VT", "q": 1.0, "p": 3.5, "v": 3.5, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.0, "v": 1.0, "tp": "dividendo"}]}, "2025-07": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.68, "v": 143.48, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 690.0, "p": 0.16, "v": 110.4, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.09, "v": 90.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.84, "v": 73.08, "tp": "dividendo", "na": "IRIM11"}, {"tk": "CVBI11", "q": 57.0, "p": 1.05, "v": 59.85, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.15, "v": 57.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "CPTS11", "q": 200.0, "p": 0.088, "v": 17.6, "tp": "dividendo"}, {"tk": "MALL11", "q": 20.0, "p": 0.86, "v": 17.2, "tp": "dividendo", "na": "PMLL11"}, {"tk": "VISC11", "q": 20.0, "p": 0.81, "v": 16.2, "tp": "dividendo"}, {"tk": "CNES11", "q": 579.0, "p": 0.007, "v": 3.78, "tp": "dividendo"}, {"tk": "CNES11", "q": 576.4, "p": 0.004, "v": 2.23, "tp": "dividendo"}], "cl": [{"tk": "VRTM11", "q": 2691.0, "p": 0.09, "v": 242.19, "tp": "dividendo"}, {"tk": "HABT11", "q": 165.0, "p": 1.15, "v": 189.75, "tp": "dividendo"}, {"tk": "CPTI11", "q": 136.0, "p": 1.0, "v": 136.0, "tp": "dividendo"}, {"tk": "HFOF11", "q": 2210.0, "p": 0.056, "v": 123.76, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.65, "v": 97.5, "tp": "dividendo"}, {"tk": "GAME11", "q": 1007.0, "p": 0.095, "v": 95.66, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.376, "v": 49.24, "tp": "dividendo"}, {"tk": "RBHG11", "q": 45.0, "p": 0.8, "v": 36.0, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.45, "v": 33.3, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.46, "v": 32.2, "tp": "dividendo"}, {"tk": "BRCR11", "q": 75.0, "p": 0.41, "v": 30.75, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 2.55, "v": 25.5, "tp": "dividendo_especial", "ds": "Rendimento especial · ganho de capital com venda de imóveis"}, {"tk": "MXRF11", "q": 20.0, "p": 0.1, "v": 2.0, "tp": "dividendo"}, {"tk": "ITSA4", "q": 31.0, "p": 0.0, "v": 0.62, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}, {"tk": "CNES11", "q": 2.6, "p": 0.004, "v": 0.01, "tp": "dividendo"}], "ge": [{"tk": "MFII11", "q": 89.0, "p": 1.11, "v": 98.79, "tp": "dividendo"}, {"tk": "RBHG11", "q": 114.0, "p": 0.8, "v": 91.2, "tp": "dividendo"}, {"tk": "TGAR11", "q": 66.0, "p": 1.0, "v": 66.0, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "KNSC11", "q": 500.0, "p": 0.09, "v": 45.0, "tp": "dividendo"}, {"tk": "CVBI11", "q": 37.0, "p": 1.05, "v": 38.85, "tp": "dividendo"}, {"tk": "VRTM11", "q": 312.0, "p": 0.09, "v": 28.08, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "CCI", "q": 1.0, "p": 35.78, "v": 35.78, "tp": "dividendo"}, {"tk": "SLG", "q": 1.0, "p": 10.55, "v": 10.55, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 9.95, "v": 9.95, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.0, "v": 1.0, "tp": "dividendo"}]}, "2025-08": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.68, "v": 143.48, "tp": "dividendo", "na": "PSEC11"}, {"tk": "HGBS11", "q": 690.0, "p": 0.15, "v": 103.5, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.1, "v": 100.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.78, "v": 67.86, "tp": "dividendo", "na": "IRIM11"}, {"tk": "CVBI11", "q": 57.0, "p": 1.05, "v": 59.85, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 1.05, "v": 52.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "CPTS11", "q": 200.0, "p": 0.086, "v": 17.2, "tp": "dividendo"}, {"tk": "PMLL11", "q": 20.0, "p": 0.86, "v": 17.2, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.81, "v": 16.2, "tp": "dividendo"}, {"tk": "CNES11", "q": 568.8, "p": 0.008, "v": 4.46, "tp": "dividendo"}], "cl": [{"tk": "UNIP6", "q": 129.0, "p": 0.0, "v": 477.42, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "VRTM11", "q": 2691.0, "p": 0.09, "v": 242.19, "tp": "dividendo"}, {"tk": "HABT11", "q": 165.0, "p": 1.05, "v": 173.25, "tp": "dividendo"}, {"tk": "CPTI11", "q": 136.0, "p": 1.0, "v": 136.0, "tp": "dividendo"}, {"tk": "HFOF11", "q": 2210.0, "p": 0.056, "v": 123.76, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.66, "v": 99.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1007.0, "p": 0.095, "v": 95.66, "tp": "dividendo"}, {"tk": "BBSE3", "q": 32.0, "p": 0.0, "v": 62.14, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.3, "v": 39.3, "tp": "dividendo"}, {"tk": "RBHG11", "q": 45.0, "p": 0.8, "v": 36.0, "tp": "dividendo"}, {"tk": "BRCR11", "q": 75.0, "p": 0.41, "v": 30.75, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.4, "v": 29.6, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.34, "v": 23.8, "tp": "dividendo"}, {"tk": "TAEE11", "q": 44.0, "p": 0.0, "v": 20.44, "tp": "dividendo"}, {"tk": "BMGB4", "q": 139.0, "p": 0.0, "v": 11.82, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 0.85, "v": 8.5, "tp": "dividendo"}, {"tk": "ITSA4", "q": 31.0, "p": 0.0, "v": 6.46, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "GOAU3", "q": 73.0, "p": 0.0, "v": 5.84, "tp": "dividendo"}, {"tk": "MXRF11", "q": 20.0, "p": 0.1, "v": 2.0, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 1.83, "tp": "dividendo", "ds": "3 pagamentos no mês (dividendo + JCP)"}, {"tk": "CNES11", "q": 10.2, "p": 0.008, "v": 0.08, "tp": "dividendo"}], "ge": [{"tk": "MFII11", "q": 89.0, "p": 1.06, "v": 94.34, "tp": "dividendo"}, {"tk": "RBHG11", "q": 114.0, "p": 0.8, "v": 91.2, "tp": "dividendo"}, {"tk": "TGAR11", "q": 66.0, "p": 1.0, "v": 66.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 500.0, "p": 0.1, "v": 50.0, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "CVBI11", "q": 37.0, "p": 1.05, "v": 38.85, "tp": "dividendo"}, {"tk": "VRTM11", "q": 312.0, "p": 0.09, "v": 28.08, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "SLG", "q": 1.0, "p": 10.55, "v": 10.55, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 9.95, "v": 9.95, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.0, "v": 1.0, "tp": "dividendo"}]}, "2025-09": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 0.68, "v": 143.48, "tp": "dividendo", "na": "PSEC11"}, {"tk": "CVBI11", "q": 100.0, "p": 1.05, "v": 105.0, "tp": "dividendo"}, {"tk": "HGBS11", "q": 690.0, "p": 0.15, "v": 103.5, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.09, "v": 90.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.7, "v": 60.9, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HABT11", "q": 50.0, "p": 1.05, "v": 52.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "PMLL11", "q": 20.0, "p": 0.86, "v": 17.2, "tp": "dividendo"}, {"tk": "CPTS11", "q": 200.0, "p": 0.085, "v": 17.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.81, "v": 16.2, "tp": "dividendo"}, {"tk": "CNES11", "q": 539.1, "p": 0.008, "v": 4.46, "tp": "dividendo"}], "cl": [{"tk": "VRTM11", "q": 3000.0, "p": 0.09, "v": 270.0, "tp": "dividendo"}, {"tk": "HABT11", "q": 200.0, "p": 1.05, "v": 210.0, "tp": "dividendo"}, {"tk": "HFOF11", "q": 3000.0, "p": 0.056, "v": 168.0, "tp": "dividendo"}, {"tk": "CPTI11", "q": 158.0, "p": 1.0, "v": 158.0, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.67, "v": 100.5, "tp": "dividendo"}, {"tk": "RBHG11", "q": 120.0, "p": 0.8, "v": 96.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1007.0, "p": 0.095, "v": 95.66, "tp": "dividendo"}, {"tk": "VALE3", "q": 55.0, "p": 0.0, "v": 88.61, "tp": "dividendo"}, {"tk": "KNSC11", "q": 700.0, "p": 0.09, "v": 63.0, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.3, "v": 39.3, "tp": "dividendo"}, {"tk": "BRCR11", "q": 75.0, "p": 0.41, "v": 30.75, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.4, "v": 29.6, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.32, "v": 22.4, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 0.85, "v": 8.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 20.0, "p": 0.1, "v": 2.0, "tp": "dividendo"}, {"tk": "CNES11", "q": 39.9, "p": 0.008, "v": 0.33, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "MFII11", "q": 89.0, "p": 1.06, "v": 94.34, "tp": "dividendo"}, {"tk": "RBHG11", "q": 114.0, "p": 0.8, "v": 91.2, "tp": "dividendo"}, {"tk": "TGAR11", "q": 66.0, "p": 1.0, "v": 66.0, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "KNSC11", "q": 500.0, "p": 0.09, "v": 45.0, "tp": "dividendo"}, {"tk": "CVBI11", "q": 37.0, "p": 1.05, "v": 38.85, "tp": "dividendo"}, {"tk": "VRTM11", "q": 312.0, "p": 0.09, "v": 28.08, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "DUK", "q": 1.0, "p": 11.0, "v": 11.0, "tp": "dividendo"}, {"tk": "SLG", "q": 1.0, "p": 10.55, "v": 10.55, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 9.95, "v": 9.95, "tp": "dividendo"}, {"tk": "VT", "q": 1.0, "p": 3.5, "v": 3.5, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.0, "v": 1.0, "tp": "dividendo"}]}, "2025-10": {"ri": [{"tk": "HGFF11", "q": 211.0, "p": 1.99, "v": 419.89, "tp": "amortizacao", "na": "PSEC11", "ds": "Amortização · incorporação HGFF11 → RVBI11 → PSEC11 · R$1,9829/cota"}, {"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "HGBS11", "q": 690.0, "p": 0.15, "v": 103.5, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.1, "v": 100.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 0.76, "v": 66.12, "tp": "dividendo", "na": "IRIM11"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 0.95, "v": 47.5, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "HGFF11", "q": 211.0, "p": 1.983, "v": 37.04, "tp": "resgate", "na": "PSEC11", "ds": "Leilão de fração · incorporação HGFF11 → PSEC11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.09, "v": 18.0, "tp": "dividendo"}, {"tk": "PMLL11", "q": 20.0, "p": 0.86, "v": 17.2, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.81, "v": 16.2, "tp": "dividendo"}, {"tk": "CNES11", "q": 556.5, "p": 0.008, "v": 4.46, "tp": "dividendo"}], "cl": [{"tk": "VRTM11", "q": 3000.0, "p": 0.09, "v": 270.0, "tp": "dividendo"}, {"tk": "HABT11", "q": 200.0, "p": 0.95, "v": 190.0, "tp": "dividendo"}, {"tk": "RBHG11", "q": 220.0, "p": 0.8, "v": 176.0, "tp": "dividendo"}, {"tk": "HFOF11", "q": 3000.0, "p": 0.056, "v": 168.0, "tp": "dividendo"}, {"tk": "CPTI11", "q": 158.0, "p": 1.0, "v": 158.0, "tp": "dividendo"}, {"tk": "PCIP11", "q": 177.0, "p": 0.85, "v": 150.45, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.68, "v": 102.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1007.0, "p": 0.095, "v": 95.66, "tp": "dividendo"}, {"tk": "KNSC11", "q": 700.0, "p": 0.1, "v": 70.0, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.29, "v": 37.99, "tp": "dividendo"}, {"tk": "BRCR11", "q": 75.0, "p": 0.41, "v": 30.75, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.4, "v": 29.6, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.35, "v": 24.5, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 0.85, "v": 8.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 20.0, "p": 0.1, "v": 2.0, "tp": "dividendo"}, {"tk": "ITSA4", "q": 31.0, "p": 0.0, "v": 0.62, "tp": "dividendo"}, {"tk": "CNES11", "q": 22.5, "p": 0.008, "v": 0.18, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "HABT11", "q": 291.0, "p": 0.95, "v": 276.45, "tp": "dividendo"}, {"tk": "RBHG11", "q": 333.0, "p": 0.8, "v": 266.4, "tp": "dividendo"}, {"tk": "MFII11", "q": 217.0, "p": 1.07, "v": 232.19, "tp": "dividendo"}, {"tk": "PCIP11", "q": 215.0, "p": 0.85, "v": 182.75, "tp": "dividendo"}, {"tk": "VRTM11", "q": 1791.0, "p": 0.09, "v": 161.19, "tp": "dividendo"}, {"tk": "CPTI11", "q": 120.0, "p": 1.0, "v": 120.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1179.0, "p": 0.095, "v": 112.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1075.0, "p": 0.1, "v": 107.5, "tp": "dividendo"}, {"tk": "TGAR11", "q": 66.0, "p": 1.0, "v": 66.0, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "URPR11", "q": 105.0, "p": 0.4, "v": 42.0, "tp": "dividendo"}, {"tk": "HFOF11", "q": 670.0, "p": 0.056, "v": 37.52, "tp": "dividendo"}, {"tk": "HGRE11", "q": 43.0, "p": 0.85, "v": 36.55, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "SLG", "q": 1.0, "p": 10.55, "v": 10.55, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 9.95, "v": 9.95, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.0, "v": 1.0, "tp": "dividendo"}]}, "2025-11": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "PSEC11", "q": 227.0, "p": 0.7, "v": 158.9, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 1.25, "v": 108.75, "tp": "dividendo", "na": "IRIM11"}, {"tk": "HGBS11", "q": 690.0, "p": 0.15, "v": 103.5, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.09, "v": 90.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 0.95, "v": 47.5, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "CPTS11", "q": 200.0, "p": 0.09, "v": 18.0, "tp": "dividendo"}, {"tk": "PMLL11", "q": 20.0, "p": 0.86, "v": 17.2, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.81, "v": 16.2, "tp": "dividendo"}, {"tk": "CNES11", "q": 563.8, "p": 0.008, "v": 4.46, "tp": "dividendo"}], "cl": [{"tk": "VRTM11", "q": 3000.0, "p": 0.09, "v": 270.0, "tp": "dividendo"}, {"tk": "HABT11", "q": 250.0, "p": 0.95, "v": 237.5, "tp": "dividendo"}, {"tk": "RBHG11", "q": 269.0, "p": 0.8, "v": 215.2, "tp": "dividendo"}, {"tk": "PCIP11", "q": 230.0, "p": 0.9, "v": 207.0, "tp": "dividendo"}, {"tk": "HFOF11", "q": 3000.0, "p": 0.056, "v": 168.0, "tp": "dividendo"}, {"tk": "CPTI11", "q": 158.0, "p": 1.0, "v": 158.0, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.7, "v": 105.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1008.0, "p": 0.095, "v": 95.76, "tp": "dividendo"}, {"tk": "KNSC11", "q": 700.0, "p": 0.09, "v": 63.0, "tp": "dividendo"}, {"tk": "TAEE11", "q": 44.0, "p": 0.0, "v": 48.18, "tp": "dividendo", "ds": "3 pagamentos no mês (dividendo + JCP)"}, {"tk": "HCTR11", "q": 131.0, "p": 0.29, "v": 37.99, "tp": "dividendo"}, {"tk": "BRCR11", "q": 75.0, "p": 0.41, "v": 30.75, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.35, "v": 25.9, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.33, "v": 23.1, "tp": "dividendo"}, {"tk": "BMGB4", "q": 139.0, "p": 0.0, "v": 11.82, "tp": "dividendo"}, {"tk": "ISAE4", "q": 56.0, "p": 0.0, "v": 10.71, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 0.85, "v": 8.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 23.0, "p": 0.1, "v": 2.3, "tp": "dividendo"}, {"tk": "BCSA34", "q": 1.0, "p": 0.49, "v": 0.48, "tp": "dividendo"}, {"tk": "CNES11", "q": 15.2, "p": 0.008, "v": 0.12, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "HABT11", "q": 291.0, "p": 0.95, "v": 276.45, "tp": "dividendo"}, {"tk": "RBHG11", "q": 333.0, "p": 0.8, "v": 266.4, "tp": "dividendo"}, {"tk": "MFII11", "q": 217.0, "p": 1.07, "v": 232.19, "tp": "dividendo"}, {"tk": "PCIP11", "q": 215.0, "p": 0.9, "v": 193.5, "tp": "dividendo"}, {"tk": "VRTM11", "q": 1791.0, "p": 0.09, "v": 161.19, "tp": "dividendo"}, {"tk": "CPTI11", "q": 120.0, "p": 1.0, "v": 120.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1179.0, "p": 0.095, "v": 112.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1075.0, "p": 0.09, "v": 96.75, "tp": "dividendo"}, {"tk": "TGAR11", "q": 66.0, "p": 1.0, "v": 66.0, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "HFOF11", "q": 670.0, "p": 0.056, "v": 37.52, "tp": "dividendo"}, {"tk": "URPR11", "q": 105.0, "p": 0.35, "v": 36.75, "tp": "dividendo"}, {"tk": "HGRE11", "q": 43.0, "p": 0.85, "v": 36.55, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "SLG", "q": 1.0, "p": 10.55, "v": 10.55, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 10.0, "v": 10.0, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.0, "v": 1.0, "tp": "dividendo"}]}, "2025-12": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "PSEC11", "q": 227.0, "p": 0.65, "v": 147.55, "tp": "dividendo"}, {"tk": "HGBS11", "q": 690.0, "p": 0.15, "v": 103.5, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.09, "v": 90.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.0, "v": 81.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 0.95, "v": 47.5, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "IRIM15", "q": 76.0, "p": 0.318, "v": 24.14, "tp": "dividendo", "na": "IRIM11"}, {"tk": "CPTS11", "q": 200.0, "p": 0.09, "v": 18.0, "tp": "dividendo"}, {"tk": "PMLL11", "q": 20.0, "p": 0.86, "v": 17.2, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.81, "v": 16.2, "tp": "dividendo"}, {"tk": "IRDM11", "q": 87.0, "p": 4.306, "v": 8.31, "tp": "resgate", "na": "IRIM11", "ds": "Leilão de fração · incorporação IRDM11 → IRIM11"}, {"tk": "CNES11", "q": 538.4, "p": 0.01, "v": 5.57, "tp": "dividendo"}], "cl": [{"tk": "UNIP6", "q": 129.0, "p": 0.0, "v": 835.5, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "HABT11", "q": 300.0, "p": 0.95, "v": 285.0, "tp": "dividendo"}, {"tk": "VRTM11", "q": 3000.0, "p": 0.09, "v": 270.0, "tp": "dividendo"}, {"tk": "RBHG11", "q": 269.0, "p": 0.8, "v": 215.2, "tp": "dividendo"}, {"tk": "CPTI11", "q": 200.0, "p": 1.0, "v": 200.0, "tp": "dividendo"}, {"tk": "PCIP11", "q": 230.0, "p": 0.83, "v": 190.9, "tp": "dividendo"}, {"tk": "HFOF11", "q": 3000.0, "p": 0.056, "v": 168.0, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.72, "v": 108.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1008.0, "p": 0.095, "v": 95.76, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.09, "v": 90.0, "tp": "dividendo"}, {"tk": "BRCR11", "q": 100.0, "p": 0.41, "v": 41.0, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.29, "v": 37.99, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.44, "v": 30.8, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.35, "v": 25.9, "tp": "dividendo"}, {"tk": "ITSA4", "q": 31.0, "p": 0.0, "v": 24.03, "tp": "dividendo"}, {"tk": "ISAE4", "q": 56.0, "p": 0.0, "v": 21.42, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "GOAU3", "q": 73.0, "p": 0.0, "v": 13.87, "tp": "dividendo"}, {"tk": "BMGB4", "q": 139.0, "p": 0.0, "v": 11.82, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 0.85, "v": 8.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 61.0, "p": 0.1, "v": 6.1, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 5.65, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "BBAS3", "q": 19.0, "p": 0.0, "v": 1.9, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "CNES11", "q": 40.6, "p": 0.01, "v": 0.42, "tp": "dividendo"}], "ge": [{"tk": "HABT11", "q": 291.0, "p": 0.95, "v": 276.45, "tp": "dividendo"}, {"tk": "RBHG11", "q": 333.0, "p": 0.8, "v": 266.4, "tp": "dividendo"}, {"tk": "MFII11", "q": 217.0, "p": 1.07, "v": 232.19, "tp": "dividendo"}, {"tk": "PCIP11", "q": 215.0, "p": 0.83, "v": 178.45, "tp": "dividendo"}, {"tk": "VRTM11", "q": 1791.0, "p": 0.09, "v": 161.19, "tp": "dividendo"}, {"tk": "CPTI11", "q": 120.0, "p": 1.0, "v": 120.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1179.0, "p": 0.095, "v": 112.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1075.0, "p": 0.09, "v": 96.75, "tp": "dividendo"}, {"tk": "TGAR11", "q": 66.0, "p": 1.0, "v": 66.0, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "HFOF11", "q": 670.0, "p": 0.056, "v": 37.52, "tp": "dividendo"}, {"tk": "URPR11", "q": 105.0, "p": 0.35, "v": 36.75, "tp": "dividendo"}, {"tk": "HGRE11", "q": 43.0, "p": 0.85, "v": 36.55, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "CCI", "q": 1.0, "p": 28.34, "v": 28.34, "tp": "dividendo"}, {"tk": "DUK", "q": 1.0, "p": 11.25, "v": 11.25, "tp": "dividendo"}, {"tk": "SLG", "q": 1.0, "p": 10.55, "v": 10.55, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 10.0, "v": 10.0, "tp": "dividendo"}, {"tk": "VT", "q": 1.0, "p": 7.95, "v": 7.95, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}]}, "2026-01": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "PSEC11", "q": 227.0, "p": 0.65, "v": 147.55, "tp": "dividendo"}, {"tk": "HGBS11", "q": 690.0, "p": 0.15, "v": 103.5, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.25, "v": 101.25, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.09, "v": 90.0, "tp": "dividendo"}, {"tk": "IRIM11", "q": 76.0, "p": 0.89, "v": 67.64, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 0.95, "v": 47.5, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "CPTS11", "q": 200.0, "p": 0.09, "v": 18.0, "tp": "dividendo"}, {"tk": "PMLL11", "q": 20.0, "p": 0.86, "v": 17.2, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.81, "v": 16.2, "tp": "dividendo"}, {"tk": "CNES11", "q": 572.1, "p": 0.003, "v": 1.67, "tp": "dividendo"}], "cl": [{"tk": "HABT11", "q": 300.0, "p": 0.95, "v": 285.0, "tp": "dividendo"}, {"tk": "VRTM11", "q": 3000.0, "p": 0.09, "v": 270.0, "tp": "dividendo"}, {"tk": "RBHG11", "q": 330.0, "p": 0.8, "v": 264.0, "tp": "dividendo"}, {"tk": "CPTI11", "q": 260.0, "p": 1.0, "v": 260.0, "tp": "dividendo"}, {"tk": "PCIP11", "q": 265.0, "p": 0.88, "v": 233.2, "tp": "dividendo"}, {"tk": "HFOF11", "q": 3000.0, "p": 0.056, "v": 168.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1250.0, "p": 0.09, "v": 112.5, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.72, "v": 108.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1008.0, "p": 0.095, "v": 95.76, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.4, "v": 52.4, "tp": "dividendo"}, {"tk": "BRCR11", "q": 100.0, "p": 0.41, "v": 41.0, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.4, "v": 28.0, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.35, "v": 25.9, "tp": "dividendo"}, {"tk": "BMGB4", "q": 139.0, "p": 0.0, "v": 17.37, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 1.5, "v": 15.0, "tp": "dividendo"}, {"tk": "ISAE4", "q": 56.0, "p": 0.0, "v": 11.93, "tp": "dividendo"}, {"tk": "MXRF11", "q": 67.0, "p": 0.1, "v": 6.7, "tp": "dividendo"}, {"tk": "ITSA4", "q": 31.0, "p": 0.0, "v": 0.62, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}, {"tk": "CNES11", "q": 6.9, "p": 0.003, "v": 0.02, "tp": "dividendo"}], "ge": [{"tk": "HABT11", "q": 291.0, "p": 0.95, "v": 276.45, "tp": "dividendo"}, {"tk": "RBHG11", "q": 333.0, "p": 0.8, "v": 266.4, "tp": "dividendo"}, {"tk": "MFII11", "q": 217.0, "p": 1.07, "v": 232.19, "tp": "dividendo"}, {"tk": "PCIP11", "q": 215.0, "p": 0.88, "v": 189.2, "tp": "dividendo"}, {"tk": "VRTM11", "q": 1791.0, "p": 0.09, "v": 161.19, "tp": "dividendo"}, {"tk": "CPTI11", "q": 120.0, "p": 1.0, "v": 120.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1179.0, "p": 0.095, "v": 112.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1075.0, "p": 0.09, "v": 96.75, "tp": "dividendo"}, {"tk": "TGAR11", "q": 66.0, "p": 1.0, "v": 66.0, "tp": "dividendo"}, {"tk": "HGRE11", "q": 43.0, "p": 1.5, "v": 64.5, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "HFOF11", "q": 670.0, "p": 0.056, "v": 37.52, "tp": "dividendo"}, {"tk": "URPR11", "q": 105.0, "p": 0.35, "v": 36.75, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "O", "q": 1.0, "p": 10.05, "v": 10.05, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 2.15, "v": 2.15, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.45, "v": 1.45, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.45, "v": 1.45, "tp": "dividendo"}]}, "2026-02": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "PSEC11", "q": 227.0, "p": 0.65, "v": 147.55, "tp": "dividendo"}, {"tk": "HGBS11", "q": 690.0, "p": 0.16, "v": 110.4, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.09, "v": 90.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 0.88, "v": 71.28, "tp": "dividendo"}, {"tk": "IRIM11", "q": 76.0, "p": 0.69, "v": 52.44, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 0.95, "v": 47.5, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "PMLL11", "q": 20.0, "p": 1.0, "v": 20.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 200.0, "p": 0.09, "v": 18.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.84, "v": 16.8, "tp": "dividendo"}], "cl": [{"tk": "CPTI11", "q": 260.0, "p": 1.15, "v": 299.0, "tp": "dividendo"}, {"tk": "HABT11", "q": 300.0, "p": 0.95, "v": 285.0, "tp": "dividendo"}, {"tk": "VRTM11", "q": 3000.0, "p": 0.09, "v": 270.0, "tp": "dividendo"}, {"tk": "RBHG11", "q": 330.0, "p": 0.8, "v": 264.0, "tp": "dividendo"}, {"tk": "PCIP11", "q": 265.0, "p": 0.83, "v": 219.95, "tp": "dividendo"}, {"tk": "HFOF11", "q": 3000.0, "p": 0.06, "v": 180.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1250.0, "p": 0.09, "v": 112.5, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.72, "v": 108.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1008.0, "p": 0.1, "v": 100.8, "tp": "dividendo"}, {"tk": "BRCR11", "q": 100.0, "p": 0.41, "v": 41.0, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.27, "v": 35.37, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.35, "v": 25.9, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.3, "v": 21.0, "tp": "dividendo"}, {"tk": "ISAE4", "q": 56.0, "p": 0.0, "v": 11.93, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 0.85, "v": 8.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 67.0, "p": 0.1, "v": 6.7, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.1, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "HABT11", "q": 291.0, "p": 0.95, "v": 276.45, "tp": "dividendo"}, {"tk": "RBHG11", "q": 333.0, "p": 0.8, "v": 266.4, "tp": "dividendo"}, {"tk": "MFII11", "q": 217.0, "p": 1.05, "v": 227.85, "tp": "dividendo"}, {"tk": "PCIP11", "q": 215.0, "p": 0.83, "v": 178.45, "tp": "dividendo"}, {"tk": "VRTM11", "q": 1791.0, "p": 0.09, "v": 161.19, "tp": "dividendo"}, {"tk": "CPTI11", "q": 120.0, "p": 1.15, "v": 138.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1179.0, "p": 0.1, "v": 117.9, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1075.0, "p": 0.09, "v": 96.75, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "TGAR11", "q": 66.0, "p": 0.71, "v": 46.86, "tp": "dividendo"}, {"tk": "HFOF11", "q": 670.0, "p": 0.06, "v": 40.2, "tp": "dividendo"}, {"tk": "URPR11", "q": 105.0, "p": 0.35, "v": 36.75, "tp": "dividendo"}, {"tk": "HGRE11", "q": 43.0, "p": 0.85, "v": 36.55, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "O", "q": 1.0, "p": 10.05, "v": 10.05, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.5, "v": 1.5, "tp": "dividendo"}]}, "2026-03": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "PSEC11", "q": 227.0, "p": 0.65, "v": 147.55, "tp": "dividendo"}, {"tk": "HGBS11", "q": 690.0, "p": 0.17, "v": 117.3, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.1, "v": 89.1, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.08, "v": 80.0, "tp": "dividendo"}, {"tk": "IRIM11", "q": 76.0, "p": 0.8, "v": 60.8, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 0.95, "v": 47.5, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.09, "v": 38.7, "tp": "dividendo"}, {"tk": "PMLL11", "q": 20.0, "p": 1.0, "v": 20.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 200.0, "p": 0.09, "v": 18.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.84, "v": 16.8, "tp": "dividendo"}, {"tk": "CNES11", "q": 560.6, "p": 0.023, "v": 12.81, "tp": "dividendo_especial", "ds": "Rendimento acumulado (fev/2026 sem pagamento) · alta vacância CENESP"}], "cl": [{"tk": "CPTI11", "q": 260.0, "p": 1.15, "v": 299.0, "tp": "dividendo"}, {"tk": "HABT11", "q": 300.0, "p": 0.95, "v": 285.0, "tp": "dividendo"}, {"tk": "RBHG11", "q": 330.0, "p": 0.83, "v": 273.9, "tp": "dividendo"}, {"tk": "VRTM11", "q": 3000.0, "p": 0.09, "v": 270.0, "tp": "dividendo"}, {"tk": "PCIP11", "q": 265.0, "p": 0.8, "v": 212.0, "tp": "dividendo"}, {"tk": "HFOF11", "q": 3000.0, "p": 0.06, "v": 180.0, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.72, "v": 108.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1008.0, "p": 0.1, "v": 100.8, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1250.0, "p": 0.08, "v": 100.0, "tp": "dividendo"}, {"tk": "BRCR11", "q": 100.0, "p": 0.41, "v": 41.0, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.26, "v": 34.06, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.35, "v": 25.9, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.3, "v": 21.0, "tp": "dividendo"}, {"tk": "ISAE4", "q": 56.0, "p": 0.0, "v": 11.93, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 0.85, "v": 8.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 67.0, "p": 0.1, "v": 6.7, "tp": "dividendo"}, {"tk": "GOAU3", "q": 97.0, "p": 0.0, "v": 4.85, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.99, "tp": "dividendo", "ds": "2 pagamentos no mês (dividendo + JCP)"}, {"tk": "ITSA4", "q": 31.0, "p": 0.0, "v": 0.48, "tp": "dividendo"}, {"tk": "CNES11", "q": 18.4, "p": 0.023, "v": 0.42, "tp": "dividendo_especial", "ds": "Rendimento acumulado (fev/2026 sem pagamento) · alta vacância CENESP"}], "ge": [{"tk": "HABT11", "q": 291.0, "p": 0.95, "v": 276.45, "tp": "dividendo"}, {"tk": "RBHG11", "q": 333.0, "p": 0.83, "v": 276.39, "tp": "dividendo"}, {"tk": "MFII11", "q": 217.0, "p": 1.05, "v": 227.85, "tp": "dividendo"}, {"tk": "PCIP11", "q": 215.0, "p": 0.8, "v": 172.0, "tp": "dividendo"}, {"tk": "VRTM11", "q": 1791.0, "p": 0.09, "v": 161.19, "tp": "dividendo"}, {"tk": "CPTI11", "q": 120.0, "p": 1.15, "v": 138.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1179.0, "p": 0.1, "v": 117.9, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1075.0, "p": 0.08, "v": 86.0, "tp": "dividendo"}, {"tk": "TGAR11", "q": 66.0, "p": 0.72, "v": 47.52, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "HFOF11", "q": 670.0, "p": 0.06, "v": 40.2, "tp": "dividendo"}, {"tk": "URPR11", "q": 105.0, "p": 0.35, "v": 36.75, "tp": "dividendo"}, {"tk": "HGRE11", "q": 43.0, "p": 0.85, "v": 36.55, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "DUK", "q": 1.0, "p": 11.25, "v": 11.25, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 10.05, "v": 10.05, "tp": "dividendo"}, {"tk": "VT", "q": 1.0, "p": 2.35, "v": 2.35, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.45, "v": 1.45, "tp": "dividendo"}]}, "2026-04": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "PSEC11", "q": 227.0, "p": 0.65, "v": 147.55, "tp": "dividendo"}, {"tk": "HGBS11", "q": 690.0, "p": 0.17, "v": 117.3, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.11, "v": 110.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.1, "v": 89.1, "tp": "dividendo"}, {"tk": "IRIM11", "q": 76.0, "p": 0.75, "v": 57.0, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.095, "v": 49.02, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 0.95, "v": 47.5, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.07, "v": 30.1, "tp": "dividendo"}, {"tk": "PMLL11", "q": 20.0, "p": 1.0, "v": 20.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 200.0, "p": 0.09, "v": 18.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.84, "v": 16.8, "tp": "dividendo"}, {"tk": "CNES11", "q": 573.3, "p": 0.009, "v": 5.01, "tp": "dividendo"}], "cl": [{"tk": "CPTI11", "q": 260.0, "p": 1.15, "v": 299.0, "tp": "dividendo"}, {"tk": "HABT11", "q": 300.0, "p": 0.95, "v": 285.0, "tp": "dividendo"}, {"tk": "RBHG11", "q": 330.0, "p": 0.85, "v": 280.5, "tp": "dividendo"}, {"tk": "VRTM11", "q": 3000.0, "p": 0.09, "v": 270.0, "tp": "dividendo"}, {"tk": "PCIP11", "q": 265.0, "p": 0.85, "v": 225.25, "tp": "dividendo"}, {"tk": "HFOF11", "q": 3000.0, "p": 0.06, "v": 180.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1250.0, "p": 0.11, "v": 137.5, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.72, "v": 108.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1008.0, "p": 0.1, "v": 100.8, "tp": "dividendo"}, {"tk": "BRCR11", "q": 100.0, "p": 0.41, "v": 41.0, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.23, "v": 30.13, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.35, "v": 25.9, "tp": "dividendo"}, {"tk": "ISAE4", "q": 56.0, "p": 0.0, "v": 23.73, "tp": "dividendo", "ds": "3 pagamentos no mês (dividendo + JCP)"}, {"tk": "DEVA11", "q": 70.0, "p": 0.3, "v": 21.0, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 0.85, "v": 8.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 67.0, "p": 0.095, "v": 6.36, "tp": "dividendo"}, {"tk": "ITSA4", "q": 31.0, "p": 0.0, "v": 0.62, "tp": "dividendo"}, {"tk": "CNES11", "q": 5.7, "p": 0.009, "v": 0.05, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "RBHG11", "q": 333.0, "p": 0.85, "v": 283.05, "tp": "dividendo"}, {"tk": "HABT11", "q": 291.0, "p": 0.95, "v": 276.45, "tp": "dividendo"}, {"tk": "MFII11", "q": 217.0, "p": 1.06, "v": 230.02, "tp": "dividendo"}, {"tk": "PCIP11", "q": 215.0, "p": 0.85, "v": 182.75, "tp": "dividendo"}, {"tk": "VRTM11", "q": 1791.0, "p": 0.09, "v": 161.19, "tp": "dividendo"}, {"tk": "CPTI11", "q": 120.0, "p": 1.15, "v": 138.0, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1075.0, "p": 0.11, "v": 118.25, "tp": "dividendo"}, {"tk": "GAME11", "q": 1179.0, "p": 0.1, "v": 117.9, "tp": "dividendo"}, {"tk": "TGAR11", "q": 66.0, "p": 0.72, "v": 47.52, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "HFOF11", "q": 670.0, "p": 0.06, "v": 40.2, "tp": "dividendo"}, {"tk": "URPR11", "q": 105.0, "p": 0.35, "v": 36.75, "tp": "dividendo"}, {"tk": "HGRE11", "q": 43.0, "p": 0.85, "v": 36.55, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.095, "v": 1.04, "tp": "dividendo"}], "rf": [], "re": [{"tk": "CCI", "q": 1.0, "p": 28.34, "v": 28.34, "tp": "dividendo"}, {"tk": "SLG", "q": 1.0, "p": 25.34, "v": 25.34, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 10.05, "v": 10.05, "tp": "dividendo"}, {"tk": "STAG", "q": 1.0, "p": 6.7, "v": 6.7, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.45, "v": 1.45, "tp": "dividendo"}]}, "2026-05": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "PSEC11", "q": 227.0, "p": 0.55, "v": 124.85, "tp": "dividendo"}, {"tk": "HGBS11", "q": 690.0, "p": 0.17, "v": 117.3, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.1, "v": 100.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.1, "v": 89.1, "tp": "dividendo"}, {"tk": "IRIM11", "q": 76.0, "p": 0.9, "v": 68.4, "tp": "dividendo"}, {"tk": "MXRF11", "q": 516.0, "p": 0.1, "v": 51.6, "tp": "dividendo"}, {"tk": "HABT11", "q": 50.0, "p": 0.95, "v": 47.5, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.07, "v": 30.1, "tp": "dividendo"}, {"tk": "PMLL11", "q": 20.0, "p": 1.0, "v": 20.0, "tp": "dividendo"}, {"tk": "CPTS11", "q": 200.0, "p": 0.09, "v": 18.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.84, "v": 16.8, "tp": "dividendo"}, {"tk": "CNES11", "q": 557.0, "p": 0.0074, "v": 4.13, "tp": "dividendo"}], "cl": [{"tk": "CPTI11", "q": 260.0, "p": 1.15, "v": 299.0, "tp": "dividendo"}, {"tk": "HABT11", "q": 300.0, "p": 0.95, "v": 285.0, "tp": "dividendo"}, {"tk": "VRTM11", "q": 3000.0, "p": 0.09, "v": 270.0, "tp": "dividendo"}, {"tk": "RBHG11", "q": 330.0, "p": 0.8, "v": 264.0, "tp": "dividendo"}, {"tk": "PCIP11", "q": 265.0, "p": 0.89, "v": 235.85, "tp": "dividendo"}, {"tk": "HFOF11", "q": 3000.0, "p": 0.06, "v": 180.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1344.0, "p": 0.1, "v": 134.4, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1250.0, "p": 0.1, "v": 125.0, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.73, "v": 109.5, "tp": "dividendo"}, {"tk": "BRCR11", "q": 100.0, "p": 0.41, "v": 41.0, "tp": "dividendo"}, {"tk": "TAEE11", "q": 44.0, "p": 0.0, "v": 39.99, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.26, "v": 34.06, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.3, "v": 22.2, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.3, "v": 21.0, "tp": "dividendo"}, {"tk": "XPML11", "q": 18.0, "p": 0.92, "v": 16.56, "tp": "dividendo"}, {"tk": "BMGB4", "q": 139.0, "p": 0.0, "v": 13.9, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 0.85, "v": 8.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 67.0, "p": 0.1, "v": 6.7, "tp": "dividendo"}, {"tk": "BCSA34", "q": 1.0, "p": 0.5, "v": 0.5, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.0, "p": 0.0, "v": 0.05, "tp": "dividendo"}], "ge": [{"tk": "HABT11", "q": 291.0, "p": 0.95, "v": 276.45, "tp": "dividendo"}, {"tk": "RBHG11", "q": 333.0, "p": 0.8, "v": 266.4, "tp": "dividendo"}, {"tk": "MFII11", "q": 217.0, "p": 0.91, "v": 197.47, "tp": "dividendo"}, {"tk": "PCIP11", "q": 215.0, "p": 0.89, "v": 191.35, "tp": "dividendo"}, {"tk": "VRTM11", "q": 1791.0, "p": 0.09, "v": 161.19, "tp": "dividendo"}, {"tk": "CPTI11", "q": 120.0, "p": 1.15, "v": 138.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1179.0, "p": 0.1, "v": 117.9, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1075.0, "p": 0.1, "v": 107.5, "tp": "dividendo"}, {"tk": "TGAR11", "q": 66.0, "p": 0.72, "v": 47.52, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "HFOF11", "q": 670.0, "p": 0.06, "v": 40.2, "tp": "dividendo"}, {"tk": "HGRE11", "q": 43.0, "p": 0.85, "v": 36.55, "tp": "dividendo"}, {"tk": "URPR11", "q": 105.0, "p": 0.3, "v": 31.5, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "O", "q": 1.0, "p": 10.05, "v": 10.05, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.5, "v": 1.5, "tp": "dividendo"}]}, "2026-06": {"ri": [{"tk": "BRCR11", "q": 557.0, "p": 0.41, "v": 228.37, "tp": "dividendo"}, {"tk": "MXRF11", "q": 2043.0, "p": 0.1, "v": 204.3, "tp": "dividendo"}, {"tk": "HABT11", "q": 211.0, "p": 0.95, "v": 200.45, "tp": "dividendo"}, {"tk": "TGAR11", "q": 197.0, "p": 0.72, "v": 141.84, "tp": "dividendo"}, {"tk": "PSEC11", "q": 227.0, "p": 0.55, "v": 124.85, "tp": "dividendo"}, {"tk": "HGBS11", "q": 690.0, "p": 0.17, "v": 117.3, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1000.0, "p": 0.1, "v": 100.0, "tp": "dividendo"}, {"tk": "KNRI11", "q": 81.0, "p": 1.1, "v": 89.1, "tp": "dividendo"}, {"tk": "MFII11", "q": 80.0, "p": 0.91, "v": 72.8, "tp": "dividendo"}, {"tk": "IRIM11", "q": 76.0, "p": 0.95, "v": 72.2, "tp": "dividendo"}, {"tk": "DEVA11", "q": 105.0, "p": 0.3, "v": 31.5, "tp": "dividendo"}, {"tk": "ARRI11", "q": 430.0, "p": 0.07, "v": 30.1, "tp": "dividendo"}, {"tk": "CPTS11", "q": 247.0, "p": 0.09, "v": 22.23, "tp": "dividendo"}, {"tk": "PMLL11", "q": 20.0, "p": 1.0, "v": 20.0, "tp": "dividendo"}, {"tk": "VISC11", "q": 20.0, "p": 0.84, "v": 16.8, "tp": "dividendo"}, {"tk": "CNES11", "q": 557.0, "p": 0.0074, "v": 4.14, "tp": "dividendo"}], "cl": [{"tk": "CPTI11", "q": 260.0, "p": 1.15, "v": 299.0, "tp": "dividendo"}, {"tk": "VRTM11", "q": 3000.0, "p": 0.09, "v": 270.0, "tp": "dividendo"}, {"tk": "RBHG11", "q": 330.0, "p": 0.8, "v": 264.0, "tp": "dividendo"}, {"tk": "PCIP11", "q": 265.0, "p": 0.89, "v": 235.85, "tp": "dividendo"}, {"tk": "HFOF11", "q": 3000.0, "p": 0.06, "v": 180.0, "tp": "dividendo"}, {"tk": "HABT11", "q": 151.0, "p": 0.95, "v": 143.45, "tp": "dividendo"}, {"tk": "HSLG11", "q": 150.0, "p": 0.74, "v": 111.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1008.0, "p": 0.1, "v": 100.8, "tp": "dividendo"}, {"tk": "HCTR11", "q": 131.0, "p": 0.26, "v": 34.06, "tp": "dividendo"}, {"tk": "BRCR11", "q": 75.0, "p": 0.41, "v": 30.75, "tp": "dividendo"}, {"tk": "XPLG11", "q": 35.0, "p": 0.82, "v": 28.7, "tp": "dividendo"}, {"tk": "URPR11", "q": 74.0, "p": 0.29, "v": 21.46, "tp": "dividendo"}, {"tk": "DEVA11", "q": 70.0, "p": 0.3, "v": 21.0, "tp": "dividendo"}, {"tk": "HGRE11", "q": 10.0, "p": 0.85, "v": 8.5, "tp": "dividendo"}, {"tk": "GOAU3", "q": 97.0, "p": 0.0, "v": 7.76, "tp": "dividendo"}, {"tk": "MXRF11", "q": 20.0, "p": 0.1, "v": 2.0, "tp": "dividendo"}, {"tk": "BBAS3", "q": 19.0, "p": 0.0, "v": 1.13, "tp": "dividendo"}, {"tk": "CNES11", "q": 22.0, "p": 0.0074, "v": 0.16, "tp": "dividendo"}, {"tk": "ITUB3", "q": 3.1, "p": 0.0, "v": 0.06, "tp": "dividendo"}], "ge": [{"tk": "HABT11", "q": 291.0, "p": 0.95, "v": 276.45, "tp": "dividendo"}, {"tk": "RBHG11", "q": 333.0, "p": 0.8, "v": 266.4, "tp": "dividendo"}, {"tk": "MFII11", "q": 217.0, "p": 0.91, "v": 197.47, "tp": "dividendo"}, {"tk": "PCIP11", "q": 215.0, "p": 0.89, "v": 191.35, "tp": "dividendo"}, {"tk": "VRTM11", "q": 1791.0, "p": 0.09, "v": 161.19, "tp": "dividendo"}, {"tk": "CPTI11", "q": 120.0, "p": 1.15, "v": 138.0, "tp": "dividendo"}, {"tk": "GAME11", "q": 1179.0, "p": 0.1, "v": 117.9, "tp": "dividendo"}, {"tk": "KNSC11", "q": 1075.0, "p": 0.1, "v": 107.5, "tp": "dividendo"}, {"tk": "TGAR11", "q": 66.0, "p": 0.72, "v": 47.52, "tp": "dividendo"}, {"tk": "XPML11", "q": 51.0, "p": 0.92, "v": 46.92, "tp": "dividendo"}, {"tk": "HFOF11", "q": 670.0, "p": 0.06, "v": 40.2, "tp": "dividendo"}, {"tk": "HGRE11", "q": 43.0, "p": 0.85, "v": 36.55, "tp": "dividendo"}, {"tk": "URPR11", "q": 105.0, "p": 0.29, "v": 30.45, "tp": "dividendo"}, {"tk": "MXRF11", "q": 11.0, "p": 0.1, "v": 1.1, "tp": "dividendo"}], "rf": [], "re": [{"tk": "DUK", "q": 1.0, "p": 11.25, "v": 11.25, "tp": "dividendo"}, {"tk": "O", "q": 1.0, "p": 10.05, "v": 10.05, "tp": "dividendo"}, {"tk": "VT", "q": 1.0, "p": 4.0, "v": 4.0, "tp": "dividendo"}, {"tk": "SPHD", "q": 1.0, "p": 1.5, "v": 1.5, "tp": "dividendo"}]}, "2026-07": {"ri": [], "cl": [], "ge": [], "rf": [], "re": [{"tk": "CCI", "q": 1.0, "p": 28.34, "v": 28.34, "tp": "dividendo"}]}};

const comprasHistorico = {"KNSC11": [{"data": "2026-05-27", "cotas": 546.0, "corretora": "CLEAR", "preco": 9.14}], "HABT11": [{"data": "2026-05-27", "cotas": 136.0, "corretora": "CLEAR", "preco": 73.46}, {"data": "2026-06-30", "cotas": 35.0, "corretora": "CLEAR", "preco": 71.78}], "PCIP11": [{"data": "2026-05-27", "cotas": 71.0, "corretora": "CLEAR", "preco": 83.82}], "XPLG11": [{"data": "2026-05-27", "cotas": 20.0, "corretora": "CLEAR", "preco": 97.18}, {"data": "2026-06-30", "cotas": 27.0, "corretora": "CLEAR", "preco": 92.49}], "XPML11": [{"data": "2026-05-27", "cotas": 18.0, "corretora": "CLEAR", "preco": 106.93}], "VRTM11": [{"data": "2026-05-27", "cotas": 699.0, "corretora": "CLEAR", "preco": 7.16}, {"data": "2026-06-30", "cotas": 353.0, "corretora": "CLEAR", "preco": 7.0}], "GAME11": [{"data": "2026-05-27", "cotas": 336.0, "corretora": "CLEAR", "preco": 8.92}, {"data": "2026-06-30", "cotas": 284.0, "corretora": "CLEAR", "preco": 8.76}], "CPTI11": [{"data": "2026-05-27", "cotas": 101.0, "corretora": "CLEAR", "preco": 88.23}], "MFII11": [{"data": "2026-05-27", "cotas": 147.0, "corretora": "CLEAR", "preco": 54.05}, {"data": "2026-06-30", "cotas": 51.0, "corretora": "CLEAR", "preco": 49.5}], "TGAR11": [{"data": "2026-05-27", "cotas": 107.0, "corretora": "CLEAR", "preco": 58.92}, {"data": "2026-06-30", "cotas": 48.0, "corretora": "CLEAR", "preco": 52.21}], "MXRF11": [{"data": "2026-05-27", "cotas": 3.0, "corretora": "CLEAR", "preco": 9.9}]};


let previsaoData = {"atualizadoEm":"2026-07-01T17:30:58.243182","proximoMes":"2026-07","ativos":[{"ticker":"ARRI11","tipo":"FII","dyPorCota":0.07,"ultimoMes":"2026-05","posicoes":[{"corretora":"Rico","cotas":430}],"totalCotas":430,"previsto":30.1,"dataPag":"2026-07-07","dataEx":"2026-06-30","status":"confirmado"},{"ticker":"BRCR11","tipo":"FII","dyPorCota":null,"ultimoMes":"2026-05","posicoes":[{"corretora":"Rico","cotas":557},{"corretora":"Clear","cotas":100}],"totalCotas":657,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"CNES11","tipo":"FII","dyPorCota":null,"ultimoMes":"2026-04","posicoes":[{"corretora":"Rico","cotas":557},{"corretora":"Clear","cotas":22}],"totalCotas":579,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"CPTI11","tipo":"FII","dyPorCota":null,"ultimoMes":"2026-05","posicoes":[{"corretora":"Clear","cotas":260},{"corretora":"Genial","cotas":120}],"totalCotas":380,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"CPTS11","tipo":"FII","dyPorCota":null,"ultimoMes":"2026-05","posicoes":[{"corretora":"Rico","cotas":200}],"totalCotas":200,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"DEVA11","tipo":"FII","dyPorCota":null,"ultimoMes":"2026-05","posicoes":[{"corretora":"Clear","cotas":70}],"totalCotas":70,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"GAME11","tipo":"FII","dyPorCota":null,"ultimoMes":"2026-04","posicoes":[{"corretora":"Clear","cotas":1008},{"corretora":"Genial","cotas":1179}],"totalCotas":2187,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"HABT11","tipo":"FII","dyPorCota":null,"ultimoMes":"2026-05","posicoes":[{"corretora":"Rico","cotas":50},{"corretora":"Clear","cotas":300},{"corretora":"Genial","cotas":291}],"totalCotas":641,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"HCTR11","tipo":"FII","dyPorCota":null,"ultimoMes":"2026-05","posicoes":[{"corretora":"Clear","cotas":131}],"totalCotas":131,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"HFOF11","tipo":"FII","dyPorCota":0.06,"ultimoMes":"2026-05","posicoes":[{"corretora":"Clear","cotas":3000},{"corretora":"Genial","cotas":670}],"totalCotas":3670,"previsto":220.2,"dataPag":"2026-07-14","dataEx":"2026-06-30","status":"confirmado"},{"ticker":"HGBS11","tipo":"FII","dyPorCota":0.17,"ultimoMes":"2026-05","posicoes":[{"corretora":"Rico","cotas":690}],"totalCotas":690,"previsto":117.3,"dataPag":"2026-07-14","dataEx":"2026-06-30","status":"confirmado"},{"ticker":"HGRE11","tipo":"FII","dyPorCota":1.5,"ultimoMes":"2026-05","posicoes":[{"corretora":"Clear","cotas":10},{"corretora":"Genial","cotas":43}],"totalCotas":53,"previsto":79.5,"dataPag":"2026-07-14","dataEx":"2026-06-30","status":"confirmado"},{"ticker":"HSLG11","tipo":"FII","dyPorCota":0.74,"ultimoMes":"2026-05","posicoes":[{"corretora":"Clear","cotas":150}],"totalCotas":150,"previsto":111.0,"dataPag":"2026-07-15","dataEx":"2026-06-30","status":"confirmado"},{"ticker":"IRIM11","tipo":"FII","dyPorCota":null,"ultimoMes":"2026-05","posicoes":[{"corretora":"Rico","cotas":76}],"totalCotas":76,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"KNRI11","tipo":"FII","dyPorCota":1.38,"ultimoMes":"2026-05","posicoes":[{"corretora":"Rico","cotas":81}],"totalCotas":81,"previsto":111.78,"dataPag":"2026-07-14","dataEx":"2026-06-30","status":"confirmado"},{"ticker":"KNSC11","tipo":"FII","dyPorCota":0.1,"ultimoMes":"2026-05","posicoes":[{"corretora":"Rico","cotas":1000},{"corretora":"Clear","cotas":1250},{"corretora":"Genial","cotas":1075}],"totalCotas":3325,"previsto":332.5,"dataPag":"2026-07-13","dataEx":"2026-06-30","status":"confirmado"},{"ticker":"MFII11","tipo":"FII","dyPorCota":0.91,"ultimoMes":"2026-05","posicoes":[{"corretora":"Genial","cotas":217}],"totalCotas":217,"previsto":197.47,"dataPag":"2026-07-14","dataEx":"2026-06-30","status":"confirmado"},{"ticker":"MXRF11","tipo":"FII","dyPorCota":0.1,"ultimoMes":"2026-05","posicoes":[{"corretora":"Rico","cotas":516},{"corretora":"Clear","cotas":67},{"corretora":"Genial","cotas":11}],"totalCotas":594,"previsto":59.4,"dataPag":"2026-07-14","dataEx":"2026-06-30","status":"confirmado"},{"ticker":"PCIP11","tipo":"FII","dyPorCota":null,"ultimoMes":"2026-05","posicoes":[{"corretora":"Clear","cotas":265},{"corretora":"Genial","cotas":215}],"totalCotas":480,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"PMLL11","tipo":"FII","dyPorCota":1.0,"ultimoMes":"2026-05","posicoes":[{"corretora":"Rico","cotas":20}],"totalCotas":20,"previsto":20.0,"dataPag":"2026-07-14","dataEx":"2026-06-30","status":"confirmado"},{"ticker":"PSEC11","tipo":"FII","dyPorCota":null,"ultimoMes":"2026-05","posicoes":[{"corretora":"Rico","cotas":227}],"totalCotas":227,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"RBHG11","tipo":"FII","dyPorCota":0.8,"ultimoMes":"2026-05","posicoes":[{"corretora":"Clear","cotas":330},{"corretora":"Genial","cotas":333}],"totalCotas":663,"previsto":530.4,"dataPag":"2026-07-14","dataEx":"2026-06-30","status":"confirmado"},{"ticker":"TGAR11","tipo":"FII","dyPorCota":0.72,"ultimoMes":"2026-05","posicoes":[{"corretora":"Genial","cotas":66}],"totalCotas":66,"previsto":47.52,"dataPag":"2026-07-14","dataEx":"2026-06-30","status":"confirmado"},{"ticker":"URPR11","tipo":"FII","dyPorCota":null,"ultimoMes":"2026-05","posicoes":[{"corretora":"Clear","cotas":74},{"corretora":"Genial","cotas":105}],"totalCotas":179,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"VISC11","tipo":"FII","dyPorCota":null,"ultimoMes":"2026-05","posicoes":[{"corretora":"Rico","cotas":20}],"totalCotas":20,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"VRTM11","tipo":"FII","dyPorCota":0.09,"ultimoMes":"2026-05","posicoes":[{"corretora":"Clear","cotas":3000},{"corretora":"Genial","cotas":1791}],"totalCotas":4791,"previsto":431.19,"dataPag":"2026-07-15","dataEx":"2026-06-30","status":"confirmado"},{"ticker":"XPLG11","tipo":"FII","dyPorCota":0.82,"ultimoMes":"2026-05","posicoes":[{"corretora":"Clear","cotas":35}],"totalCotas":35,"previsto":28.7,"dataPag":"2026-07-14","dataEx":"2026-06-30","status":"confirmado"},{"ticker":"XPML11","tipo":"FII","dyPorCota":null,"ultimoMes":"2026-04","posicoes":[{"corretora":"Genial","cotas":51}],"totalCotas":51,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"UNIP6","tipo":"ACAO","dyPorCota":null,"ultimoMes":null,"posicoes":[{"corretora":"Clear","cotas":129}],"totalCotas":129,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"VALE3","tipo":"ACAO","dyPorCota":null,"ultimoMes":null,"posicoes":[{"corretora":"Clear","cotas":55}],"totalCotas":55,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"TAEE11","tipo":"ACAO","dyPorCota":null,"ultimoMes":null,"posicoes":[{"corretora":"Clear","cotas":44}],"totalCotas":44,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"ISAE4","tipo":"ACAO","dyPorCota":null,"ultimoMes":null,"posicoes":[{"corretora":"Clear","cotas":56}],"totalCotas":56,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"BBSE3","tipo":"ACAO","dyPorCota":null,"ultimoMes":null,"posicoes":[{"corretora":"Clear","cotas":32}],"totalCotas":32,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"GOAU3","tipo":"ACAO","dyPorCota":null,"ultimoMes":null,"posicoes":[{"corretora":"Clear","cotas":97}],"totalCotas":97,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"BMGB4","tipo":"ACAO","dyPorCota":null,"ultimoMes":null,"posicoes":[{"corretora":"Clear","cotas":139}],"totalCotas":139,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"CSNA3","tipo":"ACAO","dyPorCota":null,"ultimoMes":null,"posicoes":[{"corretora":"Clear","cotas":110}],"totalCotas":110,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"ITSA4","tipo":"ACAO","dyPorCota":0.018182,"ultimoMes":null,"posicoes":[{"corretora":"Clear","cotas":31}],"totalCotas":31,"previsto":0.56,"dataPag":"2026-07-01","dataEx":"2026-05-29","status":"confirmado"},{"ticker":"BBAS3","tipo":"ACAO","dyPorCota":null,"ultimoMes":null,"posicoes":[{"corretora":"Clear","cotas":19}],"totalCotas":19,"previsto":0,"dataPag":null,"dataEx":null,"status":"aguardando"},{"ticker":"ITUB3","tipo":"ACAO","dyPorCota":0.018182,"ultimoMes":null,"posicoes":[{"corretora":"Clear","cotas":3}],"totalCotas":3,"previsto":0.05,"dataPag":"2026-07-01","dataEx":"2026-05-29","status":"confirmado"},{"ticker":"CCI","tipo":"REITS","dyPorCota":30.62,"ultimoMes":"2026-07","posicoes":[{"corretora":"Clear","cotas":1}],"totalCotas":1,"previsto":30.62,"dataPag":"2026-07-01","dataEx":"2026-07-01","status":"confirmado"}],"confirmed":{"2026-07":{"ARRI11":{"dy":0.07,"dataPag":"2026-07-07","dataEx":"2026-06-30"},"HGBS11":{"dy":0.17,"dataPag":"2026-07-14","dataEx":"2026-06-30"},"KNSC11":{"dy":0.1,"dataPag":"2026-07-13","dataEx":"2026-06-30"},"KNRI11":{"dy":1.38,"dataPag":"2026-07-14","dataEx":"2026-06-30"},"PMLL11":{"dy":1.0,"dataPag":"2026-07-14","dataEx":"2026-06-30"},"MXRF11":{"dy":0.1,"dataPag":"2026-07-14","dataEx":"2026-06-30"},"VRTM11":{"dy":0.09,"dataPag":"2026-07-15","dataEx":"2026-06-30"},"RBHG11":{"dy":0.8,"dataPag":"2026-07-14","dataEx":"2026-06-30"},"HFOF11":{"dy":0.06,"dataPag":"2026-07-14","dataEx":"2026-06-30"},"XPLG11":{"dy":0.82,"dataPag":"2026-07-14","dataEx":"2026-06-30"},"HSLG11":{"dy":0.74,"dataPag":"2026-07-15","dataEx":"2026-06-30"},"MFII11":{"dy":0.91,"dataPag":"2026-07-14","dataEx":"2026-06-30"},"HGRE11":{"dy":1.5,"dataPag":"2026-07-14","dataEx":"2026-06-30"},"TGAR11":{"dy":0.72,"dataPag":"2026-07-14","dataEx":"2026-06-30"},"ITSA4":{"dy":0.018182,"dataPag":"2026-07-01","dataEx":"2026-05-29"},"ITUB3":{"dy":0.018182,"dataPag":"2026-07-01","dataEx":"2026-05-29"},"CCI":{"dy":30.62,"dataPag":"2026-07-01","dataEx":"2026-07-01"}}}};

// Extrato de aportes por mês — Excel (sem day-trade)
const extratoAportesData={
  "2021-01": [
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "XPIN11",
      "q": 3.0,
      "p": 115.07,
      "v": 345.21,
      "dt": "2021-01-26"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "CEOC11",
      "q": 1.0,
      "p": 70.45,
      "v": 70.45,
      "dt": "2021-01-28"
    }
  ],
  "2021-02": [
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "MXRF11",
      "q": 1000.0,
      "p": 10.51,
      "v": 10510.0,
      "dt": "2021-02-01"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "CPTS11",
      "q": 50.0,
      "p": 102.0,
      "v": 5100.0,
      "dt": "2021-02-02"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "KNIP11",
      "q": 20.0,
      "p": 112.67,
      "v": 2253.4,
      "dt": "2021-02-02"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "VINO11",
      "q": 10.0,
      "p": 63.39,
      "v": 633.9,
      "dt": "2021-02-02"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "XPCI11",
      "q": 11.0,
      "p": 95.42,
      "v": 1049.62,
      "dt": "2021-02-02"
    }
  ],
  "2021-03": [
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "Vendas / Saques",
      "q": 1,
      "p": 195993.56,
      "v": 195993.56,
      "dt": "2021-03-31"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "CEOC11",
      "q": 89.0,
      "p": 70.9,
      "v": 6310.1,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "CPTS11",
      "q": 100.0,
      "p": 99.67,
      "v": 9967.0,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "KNIP11",
      "q": 50.0,
      "p": 116.59,
      "v": 5829.5,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "KNIP11",
      "q": 30.0,
      "p": 116.6,
      "v": 3498.0,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "MALL11",
      "q": 110.0,
      "p": 96.27,
      "v": 10589.7,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "MCCI11",
      "q": 18.0,
      "p": 103.98,
      "v": 1871.64,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "MCCI11",
      "q": 33.0,
      "p": 103.97,
      "v": 3431.01,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "MCCI11",
      "q": 49.0,
      "p": 103.99,
      "v": 5095.51,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "MXRF11",
      "q": 1000.0,
      "p": 10.36,
      "v": 10360.0,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "MXRF11",
      "q": 1792.0,
      "p": 10.39,
      "v": 18618.88,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "RBRP11",
      "q": 23.0,
      "p": 89.88,
      "v": 2067.24,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "RBRP11",
      "q": 77.0,
      "p": 89.9,
      "v": 6922.3,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "RECR11",
      "q": 28.0,
      "p": 107.05,
      "v": 2997.4,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "RECR11",
      "q": 22.0,
      "p": 107.04,
      "v": 2354.88,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "TORD11",
      "q": 500.0,
      "p": 11.19,
      "v": 5595.0,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "VINO11",
      "q": 90.0,
      "p": 61.43,
      "v": 5528.7,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "XPCI11",
      "q": 89.0,
      "p": 95.9,
      "v": 8535.1,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "XPIN11",
      "q": 97.0,
      "p": 112.94,
      "v": 10955.18,
      "dt": "2021-03-15"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "ARRI11",
      "q": 30.0,
      "p": 95.79,
      "v": 2873.7,
      "dt": "2021-03-16"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "BCRI11",
      "q": 120.0,
      "p": 112.34,
      "v": 13480.8,
      "dt": "2021-03-16"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "CVBI11",
      "q": 130.0,
      "p": 108.49,
      "v": 14103.7,
      "dt": "2021-03-16"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "FEXC11",
      "q": 10.0,
      "p": 95.1,
      "v": 951.0,
      "dt": "2021-03-16"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "HABT11",
      "q": 140.0,
      "p": 118.95,
      "v": 16653.0,
      "dt": "2021-03-16"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "MFII11",
      "q": 80.0,
      "p": 119.28,
      "v": 9542.4,
      "dt": "2021-03-16"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "MGFF11",
      "q": 5.0,
      "p": 86.2,
      "v": 431.0,
      "dt": "2021-03-16"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "OUFF11",
      "q": 5.0,
      "p": 83.0,
      "v": 415.0,
      "dt": "2021-03-16"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "OURE11",
      "q": 10.0,
      "p": 88.89,
      "v": 888.9,
      "dt": "2021-03-16"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "PORD11",
      "q": 90.0,
      "p": 102.62,
      "v": 9235.8,
      "dt": "2021-03-16"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "TGAR11",
      "q": 2.0,
      "p": 136.99,
      "v": 273.98,
      "dt": "2021-03-16"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "TGAR11",
      "q": 108.0,
      "p": 137.1,
      "v": 14806.8,
      "dt": "2021-03-16"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "TRXF11",
      "q": 4.0,
      "p": 107.25,
      "v": 429.0,
      "dt": "2021-03-16"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "TRXF11",
      "q": 5.0,
      "p": 107.19,
      "v": 535.95,
      "dt": "2021-03-16"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "VRTA11",
      "q": 10.0,
      "p": 114.36,
      "v": 1143.6,
      "dt": "2021-03-16"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "XPSF11",
      "q": 20.0,
      "p": 96.42,
      "v": 1928.4,
      "dt": "2021-03-16"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "ARRI11",
      "q": 18.0,
      "p": 95.99,
      "v": 1727.82,
      "dt": "2021-03-22"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "CPTS11",
      "q": 18.0,
      "p": 100.7,
      "v": 1812.6,
      "dt": "2021-03-22"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "CVBI11",
      "q": 20.0,
      "p": 106.4,
      "v": 2128.0,
      "dt": "2021-03-22"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "HABT11",
      "q": 25.0,
      "p": 118.35,
      "v": 2958.75,
      "dt": "2021-03-22"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "KNIP11",
      "q": 4.0,
      "p": 114.05,
      "v": 456.2,
      "dt": "2021-03-22"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "KNIP11",
      "q": 6.0,
      "p": 114.04,
      "v": 684.24,
      "dt": "2021-03-22"
    }
  ],
  "2021-04": [
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "TAEE11F",
      "q": 1.0,
      "p": 40.85,
      "v": 40.85,
      "dt": "2021-04-26"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "BCFF11",
      "q": 20.0,
      "p": 85.71,
      "v": 1714.2,
      "dt": "2021-04-28"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "CEOC11",
      "q": 1.0,
      "p": 70.87,
      "v": 70.87,
      "dt": "2021-04-28"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "CPTS11",
      "q": 50.0,
      "p": 101.8,
      "v": 5090.0,
      "dt": "2021-04-28"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "CVBI11",
      "q": 90.0,
      "p": 104.78,
      "v": 9430.2,
      "dt": "2021-04-28"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "DEVA11",
      "q": 51.0,
      "p": 110.0,
      "v": 5610.0,
      "dt": "2021-04-28"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "DEVA11",
      "q": 54.0,
      "p": 109.93,
      "v": 5936.22,
      "dt": "2021-04-28"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "FEXC11",
      "q": 200.0,
      "p": 93.8,
      "v": 18760.0,
      "dt": "2021-04-28"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "PORD11",
      "q": 50.0,
      "p": 103.0,
      "v": 5150.0,
      "dt": "2021-04-28"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "RECR11",
      "q": 120.0,
      "p": 107.66,
      "v": 12919.2,
      "dt": "2021-04-28"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "TGAR11",
      "q": 50.0,
      "p": 139.74,
      "v": 6987.0,
      "dt": "2021-04-28"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "VISC11",
      "q": 20.0,
      "p": 107.54,
      "v": 2150.8,
      "dt": "2021-04-28"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "XPCI11",
      "q": 100.0,
      "p": 97.3,
      "v": 9730.0,
      "dt": "2021-04-28"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "BCRI11",
      "q": 22.0,
      "p": 118.17,
      "v": 2599.74,
      "dt": "2021-04-29"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "CPTS11",
      "q": 29.0,
      "p": 101.58,
      "v": 2945.82,
      "dt": "2021-04-29"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "FEXC11",
      "q": 56.0,
      "p": 93.93,
      "v": 5260.08,
      "dt": "2021-04-29"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "HABT11",
      "q": 46.0,
      "p": 121.66,
      "v": 5596.36,
      "dt": "2021-04-29"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "TORD11",
      "q": 2.0,
      "p": 10.56,
      "v": 21.12,
      "dt": "2021-04-29"
    }
  ],
  "2021-06": [
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "TAEE11F",
      "q": 1.0,
      "p": 39.79,
      "v": 39.79,
      "dt": "2021-06-04"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "BCFF11",
      "q": 20.0,
      "p": 74.13,
      "v": 1482.6,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "CEOC11",
      "q": 91.0,
      "p": 66.01,
      "v": 6006.91,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "DEVA11",
      "q": 105.0,
      "p": 102.5,
      "v": 10762.5,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "FEXC11",
      "q": 266.0,
      "p": 86.3,
      "v": 22955.8,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "MCCI11",
      "q": 100.0,
      "p": 99.46,
      "v": 9946.0,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "MFII11",
      "q": 80.0,
      "p": 104.52,
      "v": 8361.6,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "MGFF11",
      "q": 5.0,
      "p": 76.08,
      "v": 380.4,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "MXRF11",
      "q": 1043.0,
      "p": 9.82,
      "v": 10242.26,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "MXRF11",
      "q": 5.0,
      "p": 9.82,
      "v": 49.1,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "OUFF11",
      "q": 5.0,
      "p": 75.22,
      "v": 376.1,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "OURE11",
      "q": 10.0,
      "p": 84.46,
      "v": 844.6,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "RBRP11",
      "q": 26.0,
      "p": 75.18,
      "v": 1954.68,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "RBRP11",
      "q": 27.0,
      "p": 75.19,
      "v": 2030.13,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "RBRP11",
      "q": 47.0,
      "p": 75.2,
      "v": 3534.4,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "TORD11",
      "q": 502.0,
      "p": 9.94,
      "v": 4989.88,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "TRXF11",
      "q": 9.0,
      "p": 101.49,
      "v": 913.41,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "VINO11",
      "q": 100.0,
      "p": 56.93,
      "v": 5693.0,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "VRTA11",
      "q": 10.0,
      "p": 104.95,
      "v": 1049.5,
      "dt": "2021-06-28"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "XPSF11",
      "q": 20.0,
      "p": 89.59,
      "v": 1791.8,
      "dt": "2021-06-28"
    }
  ],
  "2021-08": [
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "MXRF11",
      "q": 1.0,
      "p": 9.95,
      "v": 9.95,
      "dt": "2021-08-25"
    }
  ],
  "2021-09": [
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "ARRI11",
      "q": 15.0,
      "p": 99.73,
      "v": 1495.95,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "BCRI11",
      "q": 142.0,
      "p": 108.41,
      "v": 15394.22,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "CPTS11",
      "q": 4.0,
      "p": 98.47,
      "v": 393.88,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "CPTS11",
      "q": 2.0,
      "p": 98.46,
      "v": 196.92,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "CPTS11",
      "q": 206.0,
      "p": 98.42,
      "v": 20274.52,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "CPTS11",
      "q": 3.0,
      "p": 98.44,
      "v": 295.32,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "CPTS11",
      "q": 7.0,
      "p": 98.48,
      "v": 689.36,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "CPTS11",
      "q": 2.0,
      "p": 98.43,
      "v": 196.86,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "CPTS11",
      "q": 3.0,
      "p": 98.45,
      "v": 295.35,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "CVBI11",
      "q": 240.0,
      "p": 102.69,
      "v": 24645.6,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "HABT11",
      "q": 10.0,
      "p": 123.32,
      "v": 1233.2,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "HABT11",
      "q": 6.0,
      "p": 123.33,
      "v": 739.98,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "HABT11",
      "q": 145.0,
      "p": 123.23,
      "v": 17868.35,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "KNIP11",
      "q": 110.0,
      "p": 104.89,
      "v": 11537.9,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "MALL11",
      "q": 90.0,
      "p": 93.64,
      "v": 8427.6,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "MXRF11",
      "q": 1006.0,
      "p": 9.98,
      "v": 10039.88,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "PORD11",
      "q": 140.0,
      "p": 95.29,
      "v": 13340.6,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "RECR11",
      "q": 170.0,
      "p": 105.94,
      "v": 18009.8,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "TGAR11",
      "q": 197.0,
      "p": 129.21,
      "v": 25454.37,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "XPCI11",
      "q": 1.0,
      "p": 99.7,
      "v": 99.7,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "XPCI11",
      "q": 199.0,
      "p": 99.69,
      "v": 19838.31,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Venda",
      "corr": "RICO",
      "tk": "XPIN11",
      "q": 100.0,
      "p": 96.61,
      "v": 9661.0,
      "dt": "2021-09-06"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "HGBS11",
      "q": 58.0,
      "p": 188.73,
      "v": 10946.34,
      "dt": "2021-09-13"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "HGFF11",
      "q": 200.0,
      "p": 76.43,
      "v": 15286.0,
      "dt": "2021-09-13"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "KNSC11",
      "q": 100.0,
      "p": 98.23,
      "v": 9823.0,
      "dt": "2021-09-13"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "BRCR11",
      "q": 544.0,
      "p": 73.6,
      "v": 40038.4,
      "dt": "2021-09-14"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "IRDM11",
      "q": 87.0,
      "p": 115.35,
      "v": 10035.45,
      "dt": "2021-09-14"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "KNRI11",
      "q": 74.0,
      "p": 135.93,
      "v": 10058.82,
      "dt": "2021-09-14"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "MXRF11",
      "q": 500.0,
      "p": 10.03,
      "v": 5015.0,
      "dt": "2021-09-14"
    }
  ],
  "2021-10": [
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "HGFF11",
      "q": 11.0,
      "p": 73.91,
      "v": 813.01,
      "dt": "2021-10-21"
    }
  ],
  "2021-11": [
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "BRCR11",
      "q": 13.0,
      "p": 62.27,
      "v": 809.51,
      "dt": "2021-11-17"
    }
  ],
  "2021-12": [
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "KNRI11",
      "q": 4.0,
      "p": 133.99,
      "v": 535.96,
      "dt": "2021-12-14"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "KNRI11",
      "q": 1.0,
      "p": 133.89,
      "v": 133.89,
      "dt": "2021-12-14"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "KNRI11",
      "q": 2.0,
      "p": 134.0,
      "v": 268.0,
      "dt": "2021-12-14"
    }
  ],
  "2022-02": [
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "ARRI11",
      "q": 9.0,
      "p": 99.99,
      "v": 899.91,
      "dt": "2022-02-16"
    }
  ],
  "2022-03": [
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "HGBS11",
      "q": 6.0,
      "p": 164.5,
      "v": 987.0,
      "dt": "2022-03-22"
    }
  ],
  "2022-05": [
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "HGBS11",
      "q": 5.0,
      "p": 175.99,
      "v": 879.95,
      "dt": "2022-05-23"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "ARRI11",
      "q": 1.0,
      "p": 95.18,
      "v": 95.18,
      "dt": "2022-05-30"
    }
  ],
  "2022-06": [
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "MXRF11",
      "q": 2.0,
      "p": 9.71,
      "v": 19.42,
      "dt": "2022-06-02"
    },
    {
      "tipo": "Compra",
      "corr": "RICO",
      "tk": "MXRF11",
      "q": 14.0,
      "p": 9.64,
      "v": 134.96,
      "dt": "2022-06-10"
    }
  ],
  "2023-01": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CCI",
      "q": 1.0,
      "p": 145.0,
      "v": 145.0,
      "dt": "2023-01-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 3.0,
      "p": 8.86,
      "v": 26.58,
      "dt": "2023-01-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "ITSA4",
      "q": 29.0,
      "p": 8.43,
      "v": 244.47,
      "dt": "2023-01-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "MXRF11",
      "q": 4.0,
      "p": 10.23,
      "v": 40.92,
      "dt": "2023-01-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "STAG",
      "q": 1.0,
      "p": 35.04,
      "v": 35.04,
      "dt": "2023-01-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "TAEE11",
      "q": 35.0,
      "p": 36.53,
      "v": 1278.55,
      "dt": "2023-01-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "TESOURO",
      "q": 1.0,
      "p": 323.38,
      "v": 323.38,
      "dt": "2023-01-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "TESOURO",
      "q": 1.0,
      "p": 322.94,
      "v": 322.94,
      "dt": "2023-01-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "TESOURO",
      "q": 1.0,
      "p": 331.98,
      "v": 331.98,
      "dt": "2023-01-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VRTM11",
      "q": 6.0,
      "p": 77.89,
      "v": 467.34,
      "dt": "2023-01-31"
    }
  ],
  "2023-02": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CDB 16%",
      "q": 1.0,
      "p": 1940.0,
      "v": 1940.0,
      "dt": "2023-02-19"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "APT",
      "q": 2.7,
      "p": 4.15,
      "v": 11.21,
      "dt": "2023-02-28"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CCI",
      "q": 1.0,
      "p": 132.0,
      "v": 132.0,
      "dt": "2023-02-28"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "MXRF11",
      "q": 3.0,
      "p": 10.23,
      "v": 30.69,
      "dt": "2023-02-28"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "MXRF11",
      "q": 3.0,
      "p": 10.22,
      "v": 30.66,
      "dt": "2023-02-28"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "MXRF11",
      "q": 4.0,
      "p": 10.23,
      "v": 40.92,
      "dt": "2023-02-28"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "OURE11",
      "q": 6.0,
      "p": 75.8,
      "v": 454.8,
      "dt": "2023-02-28"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "STAG",
      "q": 1.0,
      "p": 35.04,
      "v": 35.04,
      "dt": "2023-02-28"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "UNIP6",
      "q": 7.0,
      "p": 79.95,
      "v": 559.65,
      "dt": "2023-02-28"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VALE3",
      "q": 10.0,
      "p": 85.34,
      "v": 853.4,
      "dt": "2023-02-28"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VRTM11",
      "q": 6.0,
      "p": 76.2,
      "v": 457.2,
      "dt": "2023-02-28"
    }
  ],
  "2023-03": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "LCA",
      "q": 1.0,
      "p": 1940.0,
      "v": 1940.0,
      "dt": "2023-03-23"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "LCA",
      "q": 1.0,
      "p": 1940.0,
      "v": 1940.0,
      "dt": "2023-03-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "MXRF11",
      "q": 4.0,
      "p": 10.3,
      "v": 41.2,
      "dt": "2023-03-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "SLG",
      "q": 8.2,
      "p": 22.77,
      "v": 186.71,
      "dt": "2023-03-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "UNIP6",
      "q": 20.0,
      "p": 72.35,
      "v": 1447.0,
      "dt": "2023-03-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VRTM11",
      "q": 6.0,
      "p": 73.52,
      "v": 441.12,
      "dt": "2023-03-31"
    }
  ],
  "2023-04": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "LCA",
      "q": 1.0,
      "p": 1940.0,
      "v": 1940.0,
      "dt": "2023-04-23"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CCI",
      "q": 1.54,
      "p": 121.49,
      "v": 187.09,
      "dt": "2023-04-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CSNA3",
      "q": 3.0,
      "p": 13.9,
      "v": 41.7,
      "dt": "2023-04-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "DEVA11",
      "q": 8.0,
      "p": 61.39,
      "v": 491.12,
      "dt": "2023-04-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "UNIP6",
      "q": 22.0,
      "p": 64.12,
      "v": 1410.64,
      "dt": "2023-04-30"
    }
  ],
  "2023-05": [
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "MXRF11",
      "q": 4.0,
      "p": 10.6,
      "v": 42.4,
      "dt": "2023-05-11"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "BCSA34",
      "q": 1.0,
      "p": 17.11,
      "v": 17.11,
      "dt": "2023-05-29"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "BBSE3",
      "q": 4.0,
      "p": 32.05,
      "v": 128.2,
      "dt": "2023-05-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "BCSA3",
      "q": 1.0,
      "p": 17.11,
      "v": 17.11,
      "dt": "2023-05-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "DEVA11",
      "q": 8.0,
      "p": 61.39,
      "v": 491.12,
      "dt": "2023-05-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "DUK",
      "q": 2.11,
      "p": 88.71,
      "v": 187.18,
      "dt": "2023-05-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "IPCA+6,57",
      "q": 1.0,
      "p": 1940.0,
      "v": 1940.0,
      "dt": "2023-05-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VALE3",
      "q": 20.0,
      "p": 65.13,
      "v": 1302.6,
      "dt": "2023-05-31"
    }
  ],
  "2023-06": [
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "MXRF11",
      "q": 3.0,
      "p": 10.72,
      "v": 32.16,
      "dt": "2023-06-14"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "HCTR11",
      "q": 33.0,
      "p": 58.5,
      "v": 1930.5,
      "dt": "2023-06-26"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CCI",
      "q": 1.801,
      "p": 110.18,
      "v": 198.43,
      "dt": "2023-06-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CSNA3",
      "q": 75.0,
      "p": 12.49,
      "v": 936.75,
      "dt": "2023-06-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HCTR11",
      "q": 33.0,
      "p": 58.78,
      "v": 1939.74,
      "dt": "2023-06-30"
    }
  ],
  "2023-07": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "IPCA+7,50",
      "q": 1.0,
      "p": 2000.0,
      "v": 2000.0,
      "dt": "2023-07-09"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 3.0,
      "p": 9.22,
      "v": 27.66,
      "dt": "2023-07-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "O",
      "q": 1.75,
      "p": 60.97,
      "v": 106.7,
      "dt": "2023-07-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "PCIP11",
      "q": 47.0,
      "p": 92.0,
      "v": 4324.0,
      "dt": "2023-07-31"
    }
  ],
  "2023-08": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "BRCR11",
      "q": 5.0,
      "p": 60.75,
      "v": 303.75,
      "dt": "2023-08-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 218.0,
      "p": 9.15,
      "v": 1994.7,
      "dt": "2023-08-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HFOF11",
      "q": 33.0,
      "p": 80.61,
      "v": 2660.13,
      "dt": "2023-08-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "MXRF11",
      "q": 3.0,
      "p": 10.96,
      "v": 32.88,
      "dt": "2023-08-31"
    }
  ],
  "2023-09": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 6.0,
      "p": 9.19,
      "v": 55.14,
      "dt": "2023-09-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "O",
      "q": 0.87,
      "p": 56.18,
      "v": 48.88,
      "dt": "2023-09-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "STAG",
      "q": 1.46,
      "p": 34.3,
      "v": 50.08,
      "dt": "2023-09-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VRTM11",
      "q": 63.0,
      "p": 78.4,
      "v": 4939.2,
      "dt": "2023-09-30"
    }
  ],
  "2023-10": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "BRCR11",
      "q": 17.0,
      "p": 56.9,
      "v": 967.16,
      "dt": "2023-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 5.0,
      "p": 9.15,
      "v": 45.75,
      "dt": "2023-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HFOF11",
      "q": 40.0,
      "p": 74.0,
      "v": 2960.0,
      "dt": "2023-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HGRE11",
      "q": 8.0,
      "p": 127.89,
      "v": 1023.12,
      "dt": "2023-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "O",
      "q": 1.1,
      "p": 49.34,
      "v": 54.27,
      "dt": "2023-10-31"
    }
  ],
  "2023-11": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 3.0,
      "p": 9.07,
      "v": 27.21,
      "dt": "2023-11-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HFOF11",
      "q": 14.0,
      "p": 73.01,
      "v": 1022.14,
      "dt": "2023-11-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HSLG11",
      "q": 8.0,
      "p": 92.08,
      "v": 736.64,
      "dt": "2023-11-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "MXRF11",
      "q": 1.0,
      "p": 10.94,
      "v": 10.94,
      "dt": "2023-11-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "O",
      "q": 0.934,
      "p": 53.4,
      "v": 49.88,
      "dt": "2023-11-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VRTM11",
      "q": 6.0,
      "p": 74.11,
      "v": 441.66,
      "dt": "2023-11-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "XPLG11",
      "q": 7.0,
      "p": 107.1,
      "v": 749.7,
      "dt": "2023-11-30"
    }
  ],
  "2023-12": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 223.0,
      "p": 8.98,
      "v": 2002.54,
      "dt": "2023-12-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HABT11",
      "q": 58.0,
      "p": 85.7,
      "v": 4970.6,
      "dt": "2023-12-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "O",
      "q": 0.847,
      "p": 55.04,
      "v": 46.62,
      "dt": "2023-12-31"
    }
  ],
  "2024-01": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "BBSE3",
      "q": 3.0,
      "p": 34.36,
      "v": 103.08,
      "dt": "2024-01-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 5.0,
      "p": 9.23,
      "v": 46.15,
      "dt": "2024-01-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "ISAE4",
      "q": 1.0,
      "p": 26.25,
      "v": 26.25,
      "dt": "2024-01-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "SPHD",
      "q": 1.41,
      "p": 41.74,
      "v": 58.85,
      "dt": "2024-01-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "TAEE11",
      "q": 2.0,
      "p": 36.92,
      "v": 73.84,
      "dt": "2024-01-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VALE3",
      "q": 1.0,
      "p": 69.33,
      "v": 69.33,
      "dt": "2024-01-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VRTM11",
      "q": 67.0,
      "p": 73.94,
      "v": 4953.98,
      "dt": "2024-01-30"
    }
  ],
  "2024-02": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "BBSE3",
      "q": 14.0,
      "p": 33.83,
      "v": 473.62,
      "dt": "2024-02-28"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CPTI11",
      "q": 10.0,
      "p": 101.3,
      "v": 1013.0,
      "dt": "2024-02-28"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 10.0,
      "p": 9.06,
      "v": 90.6,
      "dt": "2024-02-28"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GOAU3",
      "q": 73.0,
      "p": 10.27,
      "v": 749.71,
      "dt": "2024-02-28"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VRTM11",
      "q": 46.0,
      "p": 72.44,
      "v": 3332.24,
      "dt": "2024-02-28"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VT",
      "q": 0.46,
      "p": 107.33,
      "v": 49.37,
      "dt": "2024-02-28"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "XPLG11",
      "q": 5.0,
      "p": 111.45,
      "v": 557.25,
      "dt": "2024-02-28"
    }
  ],
  "2024-03": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 123.0,
      "p": 9.0,
      "v": 1107.0,
      "dt": "2024-03-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "ISAE4",
      "q": 55.0,
      "p": 24.6,
      "v": 1353.0,
      "dt": "2024-03-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "O",
      "q": 1.0,
      "p": 52.13,
      "v": 52.13,
      "dt": "2024-03-31"
    },
    {
      "tipo": "Bonificação",
      "corr": "CLEAR",
      "tk": "UNIP6",
      "q": 10.0,
      "p": 23.32,
      "v": 233.20,
      "dt": "2024-04-23"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VALE3",
      "q": 24.0,
      "p": 61.65,
      "v": 1479.6,
      "dt": "2024-03-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VRTM11",
      "q": 25.0,
      "p": 72.01,
      "v": 1798.25,
      "dt": "2024-03-31"
    }
  ],
  "2024-04": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CPTI11",
      "q": 24.0,
      "p": 100.77,
      "v": 2418.48,
      "dt": "2024-04-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 1.0,
      "p": 9.24,
      "v": 9.24,
      "dt": "2024-04-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "MXRF11",
      "q": 3.0,
      "p": 10.42,
      "v": 31.26,
      "dt": "2024-04-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "UNIP6",
      "q": 51.0,
      "p": 64.5,
      "v": 3289.5,
      "dt": "2024-04-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VT",
      "q": 0.523,
      "p": 106.12,
      "v": 55.5,
      "dt": "2024-04-30"
    }
  ],
  "2024-05": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "DEVA11",
      "q": 54.0,
      "p": 46.27,
      "v": 2498.58,
      "dt": "2024-05-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 2.0,
      "p": 8.95,
      "v": 17.9,
      "dt": "2024-05-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HCTR11",
      "q": 79.0,
      "p": 31.79,
      "v": 2511.41,
      "dt": "2024-05-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "MXRF11",
      "q": 1.0,
      "p": 10.26,
      "v": 10.26,
      "dt": "2024-05-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "O",
      "q": 0.92,
      "p": 52.99,
      "v": 48.75,
      "dt": "2024-05-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "UNIP6",
      "q": 14.0,
      "p": 51.67,
      "v": 723.38,
      "dt": "2024-05-31"
    }
  ],
  "2024-06": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "BBSE3",
      "q": 11.0,
      "p": 32.59,
      "v": 358.49,
      "dt": "2024-06-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CSNA3",
      "q": 32.0,
      "p": 12.02,
      "v": 384.64,
      "dt": "2024-06-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 1.0,
      "p": 9.05,
      "v": 9.05,
      "dt": "2024-06-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HFOF11",
      "q": 70.0,
      "p": 71.2,
      "v": 4984.0,
      "dt": "2024-06-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "IWDA",
      "q": 1.9083,
      "p": 101.66,
      "v": 194.0,
      "dt": "2024-06-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "MXRF11",
      "q": 1.0,
      "p": 10.14,
      "v": 10.13,
      "dt": "2024-06-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "TAEE11",
      "q": 7.0,
      "p": 33.92,
      "v": 237.44,
      "dt": "2024-06-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "UNIP6",
      "q": 5.0,
      "p": 48.25,
      "v": 241.25,
      "dt": "2024-06-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VT",
      "q": 0.44093,
      "p": 113.51,
      "v": 50.05,
      "dt": "2024-06-30"
    }
  ],
  "2024-07": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "BBAS3",
      "q": 19.0,
      "p": 26.42,
      "v": 501.98,
      "dt": "2024-07-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "BMGB4",
      "q": 139.0,
      "p": 3.57,
      "v": 496.23,
      "dt": "2024-07-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 3.0,
      "p": 9.16,
      "v": 27.48,
      "dt": "2024-07-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "IWDA",
      "q": 1.7,
      "p": 104.54,
      "v": 177.72,
      "dt": "2024-07-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "URPR11",
      "q": 62.0,
      "p": 80.18,
      "v": 4971.16,
      "dt": "2024-07-31"
    }
  ],
  "2024-08": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "BRCR11",
      "q": 10.0,
      "p": 50.47,
      "v": 504.7,
      "dt": "2024-08-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CPTI11",
      "q": 38.0,
      "p": 96.54,
      "v": 3668.52,
      "dt": "2024-08-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 8.0,
      "p": 9.16,
      "v": 73.28,
      "dt": "2024-08-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HCTR11",
      "q": 19.0,
      "p": 28.8,
      "v": 547.17,
      "dt": "2024-08-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HFOF11",
      "q": 27.0,
      "p": 69.88,
      "v": 1886.76,
      "dt": "2024-08-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VRTM11",
      "q": 7.0,
      "p": 8.32,
      "v": 58.0,
      "dt": "2024-08-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "XPLG11",
      "q": 3.0,
      "p": 103.37,
      "v": 310.11,
      "dt": "2024-08-31"
    }
  ],
  "2024-09": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "BRCR11",
      "q": 18.0,
      "p": 49.15,
      "v": 884.7,
      "dt": "2024-09-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CPTI11",
      "q": 10.0,
      "p": 95.25,
      "v": 952.08,
      "dt": "2024-09-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HFOF11",
      "q": 16.0,
      "p": 68.63,
      "v": 1098.08,
      "dt": "2024-09-30"
    }
  ],
  "2024-10": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "BRCR11",
      "q": 25.0,
      "p": 45.5,
      "v": 1137.64,
      "dt": "2024-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CPTI11",
      "q": 8.0,
      "p": 93.15,
      "v": 745.2,
      "dt": "2024-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 3.0,
      "p": 8.9,
      "v": 26.42,
      "dt": "2024-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HABT11",
      "q": 17.0,
      "p": 83.6,
      "v": 1421.2,
      "dt": "2024-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HFOF11",
      "q": 21.0,
      "p": 62.83,
      "v": 1320.04,
      "dt": "2024-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HGRE11",
      "q": 2.0,
      "p": 104.76,
      "v": 209.52,
      "dt": "2024-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HSLG11",
      "q": 17.0,
      "p": 82.9,
      "v": 1409.3,
      "dt": "2024-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "URPR11",
      "q": 12.0,
      "p": 75.95,
      "v": 911.1,
      "dt": "2024-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VRTM11",
      "q": 476.0,
      "p": 8.4,
      "v": 3998.4,
      "dt": "2024-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "XPLG11",
      "q": 5.0,
      "p": 99.5,
      "v": 497.5,
      "dt": "2024-10-31"
    }
  ],
  "2024-11": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CPTI11",
      "q": 20.0,
      "p": 90.84,
      "v": 1817.3,
      "dt": "2024-11-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HABT11",
      "q": 25.0,
      "p": 81.14,
      "v": 2028.5,
      "dt": "2024-11-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HSLG11",
      "q": 65.0,
      "p": 79.02,
      "v": 5136.3,
      "dt": "2024-11-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VRTM11",
      "q": 110.0,
      "p": 7.95,
      "v": 874.5,
      "dt": "2024-11-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "XPLG11",
      "q": 15.0,
      "p": 96.96,
      "v": 1454.46,
      "dt": "2024-11-30"
    }
  ],
  "2024-12": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HABT11",
      "q": 8.0,
      "p": 69.6,
      "v": 556.8,
      "dt": "2024-12-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HSLG11",
      "q": 7.0,
      "p": 76.99,
      "v": 538.8,
      "dt": "2024-12-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "PCIP11",
      "q": 10.0,
      "p": 76.68,
      "v": 766.8,
      "dt": "2024-12-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VRTM11",
      "q": 20.0,
      "p": 6.73,
      "v": 139.98,
      "dt": "2024-12-31"
    }
  ],
  "2025-01": [
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "CPTI11",
      "q": 26.0,
      "p": 75.0,
      "v": 1950.0,
      "dt": "2025-01-29"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "RBHG11",
      "q": 113.0,
      "p": 66.0,
      "v": 7458.0,
      "dt": "2025-01-29"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "RBHG11",
      "q": 45.0,
      "p": 66.1,
      "v": 2974.5,
      "dt": "2025-01-29"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CPTI11",
      "q": 26.0,
      "p": 75.02,
      "v": 1950.52,
      "dt": "2025-01-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 390.0,
      "p": 7.88,
      "v": 3073.2,
      "dt": "2025-01-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HABT11",
      "q": 43.0,
      "p": 71.8,
      "v": 3087.4,
      "dt": "2025-01-30"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "HABT11",
      "q": 11.0,
      "p": 70.55,
      "v": 776.05,
      "dt": "2025-01-30"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "HABT11",
      "q": 3.0,
      "p": 70.54,
      "v": 211.62,
      "dt": "2025-01-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HSLG11",
      "q": 53.0,
      "p": 72.39,
      "v": 3836.67,
      "dt": "2025-01-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "RBHG11",
      "q": 45.0,
      "p": 66.12,
      "v": 2975.4,
      "dt": "2025-01-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VRTM11",
      "q": 171.0,
      "p": 6.33,
      "v": 1082.29,
      "dt": "2025-01-30"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "VRTM11",
      "q": 171.0,
      "p": 6.33,
      "v": 1082.43,
      "dt": "2025-01-30"
    }
  ],
  "2025-02": [
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "MFII11",
      "q": 89.0,
      "p": 78.9,
      "v": 7022.1,
      "dt": "2025-02-03"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "CVBI11",
      "q": 13.0,
      "p": 76.89,
      "v": 999.57,
      "dt": "2025-02-04"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "KNSC11",
      "q": 500.0,
      "p": 8.13,
      "v": 4065.0,
      "dt": "2025-02-04"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "TGAR11",
      "q": 66.0,
      "p": 76.0,
      "v": 5016.0,
      "dt": "2025-02-04"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "VRTM11",
      "q": 12.0,
      "p": 6.3,
      "v": 75.6,
      "dt": "2025-02-04"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "XPML11",
      "q": 51.0,
      "p": 97.2,
      "v": 4957.2,
      "dt": "2025-02-04"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "CVBI11",
      "q": 24.0,
      "p": 76.28,
      "v": 1830.72,
      "dt": "2025-02-05"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "RBHG11",
      "q": 1.0,
      "p": 62.35,
      "v": 62.35,
      "dt": "2025-02-05"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "VRTM11",
      "q": 300.0,
      "p": 6.3,
      "v": 1890.0,
      "dt": "2025-02-05"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HABT11",
      "q": 14.0,
      "p": 70.55,
      "v": 987.7,
      "dt": "2025-02-28"
    }
  ],
  "2025-05": [
    {
      "tipo": "Bonificação",
      "corr": "CLEAR",
      "tk": "HFOF11",
      "q": 1989.0,
      "p": 0,
      "v": 0,
      "dt": "2025-05-31"
    }
  ],
  "2025-07": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "RESERVA1",
      "q": 1.0,
      "p": 15750.0,
      "v": 15750.0,
      "dt": "2025-07-25"
    }
  ],
  "2025-08": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CPTI11",
      "q": 22.0,
      "p": 81.16,
      "v": 1785.52,
      "dt": "2025-08-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HABT11",
      "q": 35.0,
      "p": 78.91,
      "v": 2761.85,
      "dt": "2025-08-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HFOF11",
      "q": 790.0,
      "p": 5.86,
      "v": 4629.4,
      "dt": "2025-08-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "KNSC11",
      "q": 700.0,
      "p": 8.68,
      "v": 6076.0,
      "dt": "2025-08-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "PCIP11",
      "q": 43.0,
      "p": 84.61,
      "v": 3638.23,
      "dt": "2025-08-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "RBHG11",
      "q": 75.0,
      "p": 66.2,
      "v": 4965.0,
      "dt": "2025-08-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "VRTM11",
      "q": 309.0,
      "p": 6.88,
      "v": 2125.92,
      "dt": "2025-08-31"
    }
  ],
  "2025-09": [
    {
      "tipo": "Venda",
      "corr": "GENIAL",
      "tk": "Vendas / Saques",
      "q": 1,
      "p": 22423.16,
      "v": 22423.16,
      "dt": "2025-09-30"
    },
    {
      "tipo": "Venda",
      "corr": "CLEAR",
      "tk": "Vendas / Saques",
      "q": 1,
      "p": 2263.23,
      "v": 2263.23,
      "dt": "2025-09-30"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "HABT11",
      "q": 29.0,
      "p": 77.26,
      "v": 2240.54,
      "dt": "2025-09-09"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "HABT11",
      "q": 262.0,
      "p": 77.27,
      "v": 20244.74,
      "dt": "2025-09-09"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "RBHG11",
      "q": 1.0,
      "p": 65.38,
      "v": 65.38,
      "dt": "2025-09-09"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "RBHG11",
      "q": 36.0,
      "p": 65.88,
      "v": 2371.68,
      "dt": "2025-09-09"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "CVBI11",
      "q": 178.0,
      "p": 84.4,
      "v": 15023.2,
      "dt": "2025-09-11"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "GAME11",
      "q": 1179.0,
      "p": 8.49,
      "v": 10009.71,
      "dt": "2025-09-11"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "HFOF11",
      "q": 670.0,
      "p": 5.99,
      "v": 4013.3,
      "dt": "2025-09-11"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "RBHG11",
      "q": 21.0,
      "p": 64.74,
      "v": 1359.54,
      "dt": "2025-09-11"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "RBHG11",
      "q": 1.0,
      "p": 64.72,
      "v": 64.72,
      "dt": "2025-09-11"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "RBHG11",
      "q": 91.0,
      "p": 64.71,
      "v": 5888.61,
      "dt": "2025-09-11"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "RBHG11",
      "q": 69.0,
      "p": 64.75,
      "v": 4467.75,
      "dt": "2025-09-11"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "CPTI11",
      "q": 120.0,
      "p": 83.16,
      "v": 9979.2,
      "dt": "2025-09-15"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "HGRE11",
      "q": 5.0,
      "p": 116.17,
      "v": 580.85,
      "dt": "2025-09-15"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "HGRE11",
      "q": 38.0,
      "p": 116.18,
      "v": 4414.84,
      "dt": "2025-09-15"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "KNSC11",
      "q": 575.0,
      "p": 8.7,
      "v": 5002.5,
      "dt": "2025-09-15"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "MFII11",
      "q": 47.0,
      "p": 79.28,
      "v": 3726.16,
      "dt": "2025-09-15"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "MFII11",
      "q": 6.0,
      "p": 79.21,
      "v": 475.26,
      "dt": "2025-09-15"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "MFII11",
      "q": 13.0,
      "p": 79.25,
      "v": 1030.25,
      "dt": "2025-09-15"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "MFII11",
      "q": 62.0,
      "p": 79.22,
      "v": 4911.64,
      "dt": "2025-09-15"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "URPR11",
      "q": 105.0,
      "p": 38.02,
      "v": 3992.1,
      "dt": "2025-09-15"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "VRTM11",
      "q": 1479.0,
      "p": 6.77,
      "v": 10012.83,
      "dt": "2025-09-15"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "CVBI11",
      "q": 77.0,
      "p": 83.97,
      "v": 6465.69,
      "dt": "2025-09-17"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "RBHG11",
      "q": 1.0,
      "p": 65.27,
      "v": 65.27,
      "dt": "2025-09-17"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "RBHG11",
      "q": 1.0,
      "p": 65.27,
      "v": 65.27,
      "dt": "2025-09-17"
    },
    {
      "tipo": "Compra",
      "corr": "GENIAL",
      "tk": "RBHG11",
      "q": 98.0,
      "p": 65.28,
      "v": 6397.44,
      "dt": "2025-09-17"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "PCIP11",
      "q": 77.0,
      "p": 83.97,
      "v": 6465.69,
      "dt": "2025-09-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "RBHG11",
      "q": 100.0,
      "p": 65.27,
      "v": 6527.0,
      "dt": "2025-09-30"
    },
    {
      "tipo": "Bonificação",
      "corr": "CLEAR",
      "tk": "VRTM11",
      "q": 1682.0,
      "p": 0,
      "v": 0,
      "dt": "2025-09-30"
    }
  ],
  "2025-10": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "GAME11",
      "q": 1.0,
      "p": 8.44,
      "v": 8.44,
      "dt": "2025-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HABT11",
      "q": 50.0,
      "p": 72.56,
      "v": 3618.0,
      "dt": "2025-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "MXRF11",
      "q": 3.0,
      "p": 9.65,
      "v": 28.95,
      "dt": "2025-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "PCIP11",
      "q": 53.0,
      "p": 79.58,
      "v": 4217.74,
      "dt": "2025-10-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "RBHG11",
      "q": 49.0,
      "p": 63.79,
      "v": 3125.71,
      "dt": "2025-10-31"
    }
  ],
  "2025-11": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "BRCR11",
      "q": 25.0,
      "p": 42.48,
      "v": 1062.0,
      "dt": "2025-11-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CPTI11",
      "q": 42.0,
      "p": 82.59,
      "v": 3468.78,
      "dt": "2025-11-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "HABT11",
      "q": 50.0,
      "p": 70.22,
      "v": 3511.0,
      "dt": "2025-11-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "KNSC11",
      "q": 300.0,
      "p": 8.64,
      "v": 2592.0,
      "dt": "2025-11-30"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "MXRF11",
      "q": 38.0,
      "p": 9.61,
      "v": 365.18,
      "dt": "2025-11-30"
    }
  ],
  "2025-12": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "CPTI11",
      "q": 60.0,
      "p": 83.42,
      "v": 5005.2,
      "dt": "2025-12-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "KNSC11",
      "q": 250.0,
      "p": 8.64,
      "v": 2160.0,
      "dt": "2025-12-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "MXRF11",
      "q": 6.0,
      "p": 9.54,
      "v": 57.24,
      "dt": "2025-12-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "PCIP11",
      "q": 35.0,
      "p": 82.44,
      "v": 2885.4,
      "dt": "2025-12-31"
    },
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "RBHG11",
      "q": 61.0,
      "p": 62.17,
      "v": 3792.37,
      "dt": "2025-12-31"
    }
  ],
  "2026-04": [
    {
      "tipo": "Compra",
      "corr": "CLEAR",
      "tk": "LCA",
      "q": 1.0,
      "p": 15000.0,
      "v": 15000.0,
      "dt": "2026-04-01"
    }
  ]
};

const divHistDetail = {"currentMonth": "2026-07", "data": {"2026-06":{"CNES11":{"dy":0.007273,"totalExtrato":0.16,"tipo":"FII","dataPag":"2026-06-29","cl":0.16,"cotas_cl":22},"XPML11":{"dy":0.92,"totalExtrato":16.56,"tipo":"FII","dataPag":"2026-06-25","cl":16.56,"cotas_cl":18},"GAME11":{"dy":0.1,"totalExtrato":134.4,"tipo":"FII","dataPag":"2026-06-22","cl":134.4,"cotas_cl":1344},"PCIP11":{"dy":0.89,"totalExtrato":299.04,"tipo":"FII","dataPag":"2026-06-16","cl":299.04,"cotas_cl":336},"XPLG11":{"dy":0.82,"totalExtrato":45.1,"tipo":"FII","dataPag":"2026-06-15","cl":45.1,"cotas_cl":55},"VRTM11":{"dy":0.09,"totalExtrato":332.91,"tipo":"FII","dataPag":"2026-06-15","cl":332.91,"cotas_cl":3699},"URPR11":{"dy":0.29,"totalExtrato":21.46,"tipo":"FII","dataPag":"2026-06-15","cl":21.46,"cotas_cl":74},"TGAR11":{"dy":0.72,"totalExtrato":77.04,"tipo":"FII","dataPag":"2026-06-15","cl":77.04,"cotas_cl":107},"RBHG11":{"dy":0.8,"totalExtrato":264.0,"tipo":"FII","dataPag":"2026-06-15","cl":264.0,"cotas_cl":330},"MXRF11":{"dy":0.1,"totalExtrato":7.0,"tipo":"FII","dataPag":"2026-06-15","cl":7.0,"cotas_cl":70},"MFII11":{"dy":0.91,"totalExtrato":133.77,"tipo":"FII","dataPag":"2026-06-15","cl":133.77,"cotas_cl":147},"HSLG11":{"dy":0.74,"totalExtrato":111.0,"tipo":"FII","dataPag":"2026-06-15","cl":111.0,"cotas_cl":150},"HGRE11":{"dy":0.85,"totalExtrato":8.5,"tipo":"FII","dataPag":"2026-06-15","cl":8.5,"cotas_cl":10},"HFOF11":{"dy":0.06,"totalExtrato":180.0,"tipo":"FII","dataPag":"2026-06-15","cl":180.0,"cotas_cl":3000},"HCTR11":{"dy":0.26,"totalExtrato":34.06,"tipo":"FII","dataPag":"2026-06-15","cl":34.06,"cotas_cl":131},"DEVA11":{"dy":0.3,"totalExtrato":21.0,"tipo":"FII","dataPag":"2026-06-15","cl":21.0,"cotas_cl":70},"CPTI11":{"dy":1.15,"totalExtrato":415.15,"tipo":"FII","dataPag":"2026-06-15","cl":415.15,"cotas_cl":361},"BRCR11":{"dy":0.41,"totalExtrato":41.0,"tipo":"FII","dataPag":"2026-06-15","cl":41.0,"cotas_cl":100},"KNSC11":{"dy":0.1,"totalExtrato":179.6,"tipo":"FII","dataPag":"2026-06-12","cl":179.6,"cotas_cl":1796},"HABT11":{"dy":0.95,"totalExtrato":414.2,"tipo":"FII","dataPag":"2026-06-12","cl":414.2,"cotas_cl":436},"BBAS3":{"dy":0.116842,"totalExtrato":2.22,"tipo":"ACAO","dataPag":"2026-06-11","cl":2.22,"cotas_cl":19},"GOAU3":{"dy":0.08,"totalExtrato":7.76,"tipo":"ACAO","dataPag":"2026-06-10","cl":7.76,"cotas_cl":97},"ITUB3":{"dy":0.016667,"totalExtrato":0.05,"tipo":"ACAO","dataPag":"2026-06-01","cl":0.05,"cotas_cl":3},"ARRI11":{"dy":0.07,"totalExtrato":30.1,"tipo":"FII","dataPag":"2026-06-08"},"CPTS11":{"dy":0.09,"totalExtrato":18.0,"tipo":"FII","dataPag":"2026-06-22"},"HGBS11":{"dy":0.17,"totalExtrato":117.3,"tipo":"FII","dataPag":"2026-06-15"},"IRIM11":{"dy":0.95,"totalExtrato":72.2,"tipo":"FII","dataPag":"2026-06-17"},"KNRI11":{"dy":1.1,"totalExtrato":89.1,"tipo":"FII","dataPag":"2026-06-15"},"PMLL11":{"dy":1.0,"totalExtrato":20.0,"tipo":"FII","dataPag":"2026-06-15"},"PSEC11":{"dy":0.55,"totalExtrato":124.85,"tipo":"FII","dataPag":"2026-06-16"},"VISC11":{"dy":0.84,"totalExtrato":16.8,"tipo":"FII","dataPag":"2026-06-15"}},"2021-04": {"ARRI11": {"dy": 1.146042, "totalExtrato": 55.01, "tipo": "FII"}, "CPTS11": {"dy": 1.01, "totalExtrato": 169.68, "tipo": "FII"}, "HABT11": {"dy": 1.5, "totalExtrato": 247.5, "tipo": "FII"}, "MFII11": {"dy": 0.97, "totalExtrato": 77.6, "tipo": "FII"}, "MXRF11": {"dy": 0.08, "totalExtrato": 143.36, "tipo": "FII"}, "TGAR11": {"dy": 1.3, "totalExtrato": 143.0, "tipo": "FII"}}, "2021-05": {"ARRI11": {"dy": 1.045208, "totalExtrato": 50.17, "tipo": "FII"}, "CPTS11": {"dy": 1.05, "totalExtrato": 259.35, "tipo": "FII"}, "DEVA11": {"dy": 1.37, "totalExtrato": 143.85, "tipo": "FII"}, "HABT11": {"dy": 1.8, "totalExtrato": 379.8, "tipo": "FII"}, "MFII11": {"dy": 0.91, "totalExtrato": 72.8, "tipo": "FII"}, "MXRF11": {"dy": 0.08, "totalExtrato": 143.36, "tipo": "FII"}, "TAEE11": {"dy": 0.983333, "totalExtrato": 2.95, "tipo": "ACAO"}, "TGAR11": {"dy": 1.26, "totalExtrato": 201.6, "tipo": "FII"}, "VISC11": {"dy": 0.25, "totalExtrato": 5.0, "tipo": "FII"}}, "2021-06": {"ARRI11": {"dy": 1.115833, "totalExtrato": 53.56, "tipo": "FII"}, "CPTS11": {"dy": 1.0, "totalExtrato": 247.0, "tipo": "FII"}, "DEVA11": {"dy": 1.1, "totalExtrato": 115.5, "tipo": "FII"}, "HABT11": {"dy": 1.8, "totalExtrato": 379.8, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "MFII11": {"dy": 0.91, "totalExtrato": 72.8, "tipo": "FII"}, "MXRF11": {"dy": 0.07, "totalExtrato": 143.01, "tipo": "FII"}, "TGAR11": {"dy": 1.16, "totalExtrato": 185.6, "tipo": "FII"}, "VISC11": {"dy": 0.35, "totalExtrato": 7.0, "tipo": "FII"}}, "2021-07": {"ARRI11": {"dy": 1.766667, "totalExtrato": 84.8, "tipo": "FII"}, "CPTS11": {"dy": 1.0, "totalExtrato": 247.0, "tipo": "FII"}, "HABT11": {"dy": 2.0, "totalExtrato": 422.0, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "MXRF11": {"dy": 0.07, "totalExtrato": 70.35, "tipo": "FII"}, "TGAR11": {"dy": 1.11, "totalExtrato": 218.67, "tipo": "FII"}, "VISC11": {"dy": 0.42, "totalExtrato": 8.4, "tipo": "FII"}}, "2021-08": {"ARRI11": {"dy": 0.86875, "totalExtrato": 41.7, "tipo": "FII"}, "CPTS11": {"dy": 1.01, "totalExtrato": 249.47, "tipo": "FII"}, "HABT11": {"dy": 1.6, "totalExtrato": 337.6, "tipo": "FII"}, "ITUB3": {"dy": 0.047778, "totalExtrato": 0.43, "tipo": "ACAO"}, "MXRF11": {"dy": 0.07, "totalExtrato": 70.35, "tipo": "FII"}, "TGAR11": {"dy": 1.08, "totalExtrato": 212.76, "tipo": "FII"}, "VISC11": {"dy": 0.5, "totalExtrato": 10.0, "tipo": "FII"}}, "2021-09": {"ARRI11": {"dy": 0.911458, "totalExtrato": 43.75, "tipo": "FII"}, "CPTS11": {"dy": 0.999, "totalExtrato": 19.98, "tipo": "FII"}, "HABT11": {"dy": 1.5, "totalExtrato": 316.5, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "MXRF11": {"dy": 0.08, "totalExtrato": 80.48, "tipo": "FII"}, "TGAR11": {"dy": 1.1, "totalExtrato": 216.7, "tipo": "FII"}, "VISC11": {"dy": 0.55, "totalExtrato": 11.0, "tipo": "FII"}}, "2021-10": {"ARRI11": {"dy": 1.11, "totalExtrato": 36.63, "tipo": "FII"}, "BRCR11": {"dy": 0.46, "totalExtrato": 250.24, "tipo": "FII"}, "CPTS11": {"dy": 1.0, "totalExtrato": 20.0, "tipo": "FII"}, "HABT11": {"dy": 1.5, "totalExtrato": 75.0, "tipo": "FII"}, "HGBS11": {"dy": 0.85, "totalExtrato": 49.3, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 0.77, "totalExtrato": 56.98, "tipo": "FII"}, "KNSC11": {"dy": 1.24, "totalExtrato": 124.0, "tipo": "FII"}, "MXRF11": {"dy": 0.08, "totalExtrato": 40.0, "tipo": "FII"}, "VISC11": {"dy": 0.58, "totalExtrato": 11.6, "tipo": "FII"}}, "2021-11": {"ARRI11": {"dy": 1.41, "totalExtrato": 46.53, "tipo": "FII"}, "BRCR11": {"dy": 0.46, "totalExtrato": 250.24, "tipo": "FII"}, "CPTS11": {"dy": 1.01, "totalExtrato": 20.2, "tipo": "FII"}, "HABT11": {"dy": 1.5, "totalExtrato": 75.0, "tipo": "FII"}, "HGBS11": {"dy": 0.9, "totalExtrato": 52.2, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 0.77, "totalExtrato": 56.98, "tipo": "FII"}, "KNSC11": {"dy": 1.3, "totalExtrato": 130.0, "tipo": "FII"}, "MXRF11": {"dy": 0.09, "totalExtrato": 45.0, "tipo": "FII"}, "VISC11": {"dy": 0.62, "totalExtrato": 12.4, "tipo": "FII"}}, "2021-12": {"ARRI11": {"dy": 1.47, "totalExtrato": 48.51, "tipo": "FII"}, "BRCR11": {"dy": 0.5, "totalExtrato": 278.5, "tipo": "FII"}, "CPTS11": {"dy": 1.0, "totalExtrato": 20.0, "tipo": "FII"}, "HABT11": {"dy": 1.5, "totalExtrato": 75.0, "tipo": "FII"}, "HGBS11": {"dy": 1.05, "totalExtrato": 60.9, "tipo": "FII"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 0.77, "totalExtrato": 56.98, "tipo": "FII"}, "KNSC11": {"dy": 1.4, "totalExtrato": 140.0, "tipo": "FII"}, "MXRF11": {"dy": 0.08, "totalExtrato": 40.0, "tipo": "FII"}, "TAEE11": {"dy": 0.715, "totalExtrato": 2.86, "tipo": "ACAO"}, "VISC11": {"dy": 0.61, "totalExtrato": 12.2, "tipo": "FII"}}, "2022-01": {"ARRI11": {"dy": 1.75, "totalExtrato": 57.75, "tipo": "FII"}, "BRCR11": {"dy": 0.5, "totalExtrato": 278.5, "tipo": "FII"}, "CPTS11": {"dy": 1.1, "totalExtrato": 22.0, "tipo": "FII"}, "HABT11": {"dy": 1.3, "totalExtrato": 65.0, "tipo": "FII"}, "HGBS11": {"dy": 1.1, "totalExtrato": 63.8, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 0.88, "totalExtrato": 71.28, "tipo": "FII"}, "KNSC11": {"dy": 1.45, "totalExtrato": 145.0, "tipo": "FII"}, "MXRF11": {"dy": 0.09, "totalExtrato": 45.0, "tipo": "FII"}, "VISC11": {"dy": 0.81, "totalExtrato": 16.2, "tipo": "FII"}}, "2022-02": {"ARRI11": {"dy": 1.31, "totalExtrato": 43.23, "tipo": "FII"}, "BRCR11": {"dy": 0.5, "totalExtrato": 278.5, "tipo": "FII"}, "CPTS11": {"dy": 1.1, "totalExtrato": 22.0, "tipo": "FII"}, "HABT11": {"dy": 1.2, "totalExtrato": 60.0, "tipo": "FII"}, "HGBS11": {"dy": 1.15, "totalExtrato": 66.7, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 0.81, "totalExtrato": 65.61, "tipo": "FII"}, "KNSC11": {"dy": 1.25, "totalExtrato": 125.0, "tipo": "FII"}, "MXRF11": {"dy": 0.09, "totalExtrato": 45.0, "tipo": "FII"}, "VISC11": {"dy": 0.68, "totalExtrato": 13.6, "tipo": "FII"}}, "2022-03": {"ARRI11": {"dy": 1.3, "totalExtrato": 54.6, "tipo": "FII"}, "BRCR11": {"dy": 0.5, "totalExtrato": 278.5, "tipo": "FII"}, "CPTS11": {"dy": 1.1, "totalExtrato": 22.0, "tipo": "FII"}, "HABT11": {"dy": 1.3, "totalExtrato": 65.0, "tipo": "FII"}, "HGBS11": {"dy": 1.15, "totalExtrato": 66.7, "tipo": "FII"}, "ITUB3": {"dy": 0.082222, "totalExtrato": 0.74, "tipo": "ACAO"}, "KNRI11": {"dy": 0.81, "totalExtrato": 65.61, "tipo": "FII"}, "KNSC11": {"dy": 1.0, "totalExtrato": 100.0, "tipo": "FII"}, "MXRF11": {"dy": 0.09, "totalExtrato": 45.0, "tipo": "FII"}, "VISC11": {"dy": 0.68, "totalExtrato": 13.6, "tipo": "FII"}}, "2022-04": {"ARRI11": {"dy": 1.34, "totalExtrato": 56.28, "tipo": "FII"}, "BRCR11": {"dy": 0.5, "totalExtrato": 278.5, "tipo": "FII"}, "CPTS11": {"dy": 1.1, "totalExtrato": 22.0, "tipo": "FII"}, "HABT11": {"dy": 1.2, "totalExtrato": 60.0, "tipo": "FII"}, "HGBS11": {"dy": 1.15, "totalExtrato": 73.6, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 0.81, "totalExtrato": 65.61, "tipo": "FII"}, "KNSC11": {"dy": 1.12, "totalExtrato": 112.0, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 50.0, "tipo": "FII"}, "VISC11": {"dy": 0.68, "totalExtrato": 13.6, "tipo": "FII"}}, "2022-05": {"ARRI11": {"dy": 1.282143, "totalExtrato": 53.85, "tipo": "FII"}, "BRCR11": {"dy": 0.5, "totalExtrato": 278.5, "tipo": "FII"}, "CPTS11": {"dy": 1.08, "totalExtrato": 21.6, "tipo": "FII"}, "HABT11": {"dy": 1.25, "totalExtrato": 62.5, "tipo": "FII"}, "HGBS11": {"dy": 1.2, "totalExtrato": 76.8, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 0.84, "totalExtrato": 68.04, "tipo": "FII"}, "KNSC11": {"dy": 1.14, "totalExtrato": 114.0, "tipo": "FII"}, "MXRF11": {"dy": 0.11, "totalExtrato": 55.0, "tipo": "FII"}, "TAEE11": {"dy": 1.16, "totalExtrato": 4.64, "tipo": "ACAO"}, "VISC11": {"dy": 0.7, "totalExtrato": 14.0, "tipo": "FII"}}, "2022-06": {"ARRI11": {"dy": 1.41, "totalExtrato": 60.63, "tipo": "FII"}, "BRCR11": {"dy": 0.47, "totalExtrato": 261.79, "tipo": "FII"}, "CPTS11": {"dy": 1.12, "totalExtrato": 22.4, "tipo": "FII"}, "HABT11": {"dy": 1.4, "totalExtrato": 70.0, "tipo": "FII"}, "HGBS11": {"dy": 1.25, "totalExtrato": 86.25, "tipo": "FII"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 0.84, "totalExtrato": 68.04, "tipo": "FII"}, "KNSC11": {"dy": 1.35, "totalExtrato": 135.0, "tipo": "FII"}, "MXRF11": {"dy": 0.11, "totalExtrato": 55.0, "tipo": "FII"}, "VISC11": {"dy": 0.7, "totalExtrato": 14.0, "tipo": "FII"}}, "2022-07": {"ARRI11": {"dy": 1.18, "totalExtrato": 50.74, "tipo": "FII"}, "BRCR11": {"dy": 0.47, "totalExtrato": 261.79, "tipo": "FII"}, "CPTS11": {"dy": 1.1, "totalExtrato": 22.0, "tipo": "FII"}, "HABT11": {"dy": 1.3, "totalExtrato": 65.0, "tipo": "FII"}, "HGBS11": {"dy": 1.4, "totalExtrato": 96.6, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 0.84, "totalExtrato": 68.04, "tipo": "FII"}, "KNSC11": {"dy": 1.09, "totalExtrato": 109.0, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 51.6, "tipo": "FII"}, "VISC11": {"dy": 0.7, "totalExtrato": 14.0, "tipo": "FII"}}, "2022-08": {"ARRI11": {"dy": 1.31, "totalExtrato": 56.33, "tipo": "FII"}, "BRCR11": {"dy": 0.47, "totalExtrato": 261.79, "tipo": "FII"}, "CPTS11": {"dy": 1.1, "totalExtrato": 22.0, "tipo": "FII"}, "HABT11": {"dy": 1.3, "totalExtrato": 65.0, "tipo": "FII"}, "HGBS11": {"dy": 1.3, "totalExtrato": 89.7, "tipo": "FII"}, "ITUB3": {"dy": 0.135, "totalExtrato": 0.81, "tipo": "ACAO"}, "KNRI11": {"dy": 0.91, "totalExtrato": 73.71, "tipo": "FII"}, "KNSC11": {"dy": 0.91, "totalExtrato": 91.0, "tipo": "FII"}, "MXRF11": {"dy": 0.12, "totalExtrato": 61.92, "tipo": "FII"}, "TAEE11": {"dy": 0.69, "totalExtrato": 2.76, "tipo": "ACAO"}, "VISC11": {"dy": 0.71, "totalExtrato": 14.2, "tipo": "FII"}}, "2022-09": {"ARRI11": {"dy": 0.11, "totalExtrato": 47.3, "tipo": "FII"}, "BRCR11": {"dy": 0.47, "totalExtrato": 261.79, "tipo": "FII"}, "CPTS11": {"dy": 1.1, "totalExtrato": 22.0, "tipo": "FII"}, "HABT11": {"dy": 1.03, "totalExtrato": 51.5, "tipo": "FII"}, "HGBS11": {"dy": 1.3, "totalExtrato": 89.7, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 0.91, "totalExtrato": 73.71, "tipo": "FII"}, "KNSC11": {"dy": 0.7, "totalExtrato": 70.0, "tipo": "FII"}, "MXRF11": {"dy": 0.11, "totalExtrato": 56.76, "tipo": "FII"}, "VISC11": {"dy": 0.72, "totalExtrato": 14.4, "tipo": "FII"}}, "2022-10": {"ARRI11": {"dy": 0.14, "totalExtrato": 60.2, "tipo": "FII"}, "BRCR11": {"dy": 0.47, "totalExtrato": 261.79, "tipo": "FII"}, "CPTS11": {"dy": 1.05, "totalExtrato": 21.0, "tipo": "FII"}, "HABT11": {"dy": 1.0, "totalExtrato": 50.0, "tipo": "FII"}, "HGBS11": {"dy": 1.35, "totalExtrato": 93.15, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 0.91, "totalExtrato": 73.71, "tipo": "FII"}, "KNSC11": {"dy": 0.5, "totalExtrato": 50.0, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 51.6, "tipo": "FII"}, "VISC11": {"dy": 0.74, "totalExtrato": 14.8, "tipo": "FII"}}, "2022-11": {"ARRI11": {"dy": 0.11, "totalExtrato": 47.3, "tipo": "FII"}, "BRCR11": {"dy": 0.47, "totalExtrato": 261.79, "tipo": "FII"}, "CPTS11": {"dy": 0.85, "totalExtrato": 17.0, "tipo": "FII"}, "HABT11": {"dy": 0.9, "totalExtrato": 45.0, "tipo": "FII"}, "HGBS11": {"dy": 1.35, "totalExtrato": 93.15, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 0.91, "totalExtrato": 73.71, "tipo": "FII"}, "KNSC11": {"dy": 0.52, "totalExtrato": 52.0, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 51.6, "tipo": "FII"}, "VISC11": {"dy": 0.75, "totalExtrato": 15.0, "tipo": "FII"}}, "2022-12": {"ARRI11": {"dy": 0.13, "totalExtrato": 55.9, "tipo": "FII"}, "BRCR11": {"dy": 0.5, "totalExtrato": 278.5, "tipo": "FII"}, "CPTS11": {"dy": 0.37, "totalExtrato": 7.4, "tipo": "FII"}, "HABT11": {"dy": 0.92, "totalExtrato": 46.0, "tipo": "FII"}, "HGBS11": {"dy": 1.4, "totalExtrato": 96.6, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 0.91, "totalExtrato": 73.71, "tipo": "FII"}, "KNSC11": {"dy": 0.75, "totalExtrato": 75.0, "tipo": "FII"}, "MXRF11": {"dy": 0.08, "totalExtrato": 41.28, "tipo": "FII"}, "TAEE11": {"dy": 0.321667, "totalExtrato": 1.93, "tipo": "ACAO"}, "VISC11": {"dy": 0.76, "totalExtrato": 15.2, "tipo": "FII"}}, "2023-01": {"ARRI11": {"dy": 0.13, "totalExtrato": 55.9, "tipo": "FII"}, "BRCR11": {"dy": 0.47, "totalExtrato": 261.79, "tipo": "FII"}, "CPTS11": {"dy": 0.58, "totalExtrato": 11.6, "tipo": "FII"}, "HABT11": {"dy": 1.17, "totalExtrato": 58.5, "tipo": "FII"}, "HGBS11": {"dy": 1.4, "totalExtrato": 96.6, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.94, "totalExtrato": 94.0, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 51.6, "tipo": "FII"}, "TAEE11": {"dy": 1.335, "totalExtrato": 2.67, "tipo": "ACAO"}, "VISC11": {"dy": 0.85, "totalExtrato": 17.0, "tipo": "FII"}}, "2023-02": {"ARRI11": {"dy": 0.13, "totalExtrato": 55.9, "tipo": "FII"}, "BRCR11": {"dy": 0.47, "totalExtrato": 261.79, "tipo": "FII"}, "CPTS11": {"dy": 0.75, "totalExtrato": 15.0, "tipo": "FII"}, "HABT11": {"dy": 1.18, "totalExtrato": 59.0, "tipo": "FII"}, "HGBS11": {"dy": 1.4, "totalExtrato": 96.6, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 0.91, "totalExtrato": 73.71, "tipo": "FII"}, "KNSC11": {"dy": 1.04, "totalExtrato": 104.0, "tipo": "FII"}, "MXRF11": {"dy": 0.11, "totalExtrato": 56.76, "tipo": "FII"}, "VISC11": {"dy": 0.82, "totalExtrato": 16.4, "tipo": "FII"}}, "2023-03": {"ARRI11": {"dy": 0.07, "totalExtrato": 30.1, "tipo": "FII"}, "BRCR11": {"dy": 0.46, "totalExtrato": 256.22, "tipo": "FII"}, "CPTS11": {"dy": 0.76, "totalExtrato": 15.2, "tipo": "FII"}, "HABT11": {"dy": 1.2, "totalExtrato": 60.0, "tipo": "FII"}, "HGBS11": {"dy": 1.4, "totalExtrato": 96.6, "tipo": "FII"}, "ITUB3": {"dy": 0.211667, "totalExtrato": 1.27, "tipo": "ACAO"}, "KNRI11": {"dy": 0.95, "totalExtrato": 76.95, "tipo": "FII"}, "KNSC11": {"dy": 0.87, "totalExtrato": 87.0, "tipo": "FII"}, "MXRF11": {"dy": 0.12, "totalExtrato": 62.76, "tipo": "FII"}, "VALE3": {"dy": 1.827, "totalExtrato": 18.27, "tipo": "ACAO"}, "VISC11": {"dy": 0.8, "totalExtrato": 16.0, "tipo": "FII"}}, "2023-04": {"ARRI11": {"dy": 0.110093, "totalExtrato": 47.34, "tipo": "FII"}, "BRCR11": {"dy": 0.46, "totalExtrato": 256.22, "tipo": "FII"}, "CPTS11": {"dy": 0.71, "totalExtrato": 14.2, "tipo": "FII"}, "DEVA11": {"dy": 0.7, "totalExtrato": 11.2, "tipo": "FII"}, "HABT11": {"dy": 1.25, "totalExtrato": 62.5, "tipo": "FII"}, "HGBS11": {"dy": 1.4, "totalExtrato": 96.6, "tipo": "FII"}, "ITSA4": {"dy": 0.02, "totalExtrato": 0.58, "tipo": "ACAO"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 0.95, "totalExtrato": 76.95, "tipo": "FII"}, "KNSC11": {"dy": 1.05, "totalExtrato": 105.0, "tipo": "FII"}, "MXRF11": {"dy": 0.12, "totalExtrato": 62.76, "tipo": "FII"}, "VISC11": {"dy": 0.82, "totalExtrato": 16.4, "tipo": "FII"}}, "2023-05": {"ARRI11": {"dy": 0.11, "totalExtrato": 47.3, "tipo": "FII"}, "BRCR11": {"dy": 0.45, "totalExtrato": 250.65, "tipo": "FII"}, "CPTS11": {"dy": 0.81, "totalExtrato": 16.2, "tipo": "FII"}, "CSNA3": {"dy": 0.606667, "totalExtrato": 3.64, "tipo": "ACAO"}, "DEVA11": {"dy": 0.85, "totalExtrato": 13.6, "tipo": "FII"}, "HABT11": {"dy": 1.27, "totalExtrato": 63.5, "tipo": "FII"}, "HGBS11": {"dy": 1.45, "totalExtrato": 100.05, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 0.95, "totalExtrato": 76.95, "tipo": "FII"}, "KNSC11": {"dy": 0.95, "totalExtrato": 95.0, "tipo": "FII"}, "MXRF11": {"dy": 0.12, "totalExtrato": 63.72, "tipo": "FII"}, "UNIP6": {"dy": 0.958333, "totalExtrato": 51.75, "tipo": "ACAO"}, "VISC11": {"dy": 0.82, "totalExtrato": 16.4, "tipo": "FII"}}, "2023-06": {"ARRI11": {"dy": 0.11, "totalExtrato": 47.3, "tipo": "FII"}, "BRCR11": {"dy": 0.45, "totalExtrato": 250.65, "tipo": "FII"}, "CPTS11": {"dy": 0.85, "totalExtrato": 17.0, "tipo": "FII"}, "DEVA11": {"dy": 0.65, "totalExtrato": 10.4, "tipo": "FII"}, "HABT11": {"dy": 1.3, "totalExtrato": 65.0, "tipo": "FII"}, "HGBS11": {"dy": 1.45, "totalExtrato": 100.05, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 0.95, "totalExtrato": 76.95, "tipo": "FII"}, "KNSC11": {"dy": 1.05, "totalExtrato": 105.0, "tipo": "FII"}, "MXRF11": {"dy": 0.12, "totalExtrato": 64.2, "tipo": "FII"}, "VISC11": {"dy": 0.82, "totalExtrato": 16.4, "tipo": "FII"}}, "2023-07": {"ARRI11": {"dy": 0.11, "totalExtrato": 47.3, "tipo": "FII"}, "BRCR11": {"dy": 0.45, "totalExtrato": 250.65, "tipo": "FII"}, "CPTS11": {"dy": 0.88, "totalExtrato": 17.6, "tipo": "FII"}, "DEVA11": {"dy": 0.6, "totalExtrato": 9.6, "tipo": "FII"}, "HABT11": {"dy": 1.2, "totalExtrato": 60.0, "tipo": "FII"}, "HCTR11": {"dy": 0.5, "totalExtrato": 16.5, "tipo": "FII"}, "HGBS11": {"dy": 1.45, "totalExtrato": 100.05, "tipo": "FII"}, "ITSA4": {"dy": 0.02, "totalExtrato": 0.58, "tipo": "ACAO"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 1.51, "totalExtrato": 122.31, "tipo": "FII"}, "KNSC11": {"dy": 0.8, "totalExtrato": 80.0, "tipo": "FII"}, "MXRF11": {"dy": 0.12, "totalExtrato": 64.56, "tipo": "FII"}, "VISC11": {"dy": 0.85, "totalExtrato": 17.0, "tipo": "FII"}}, "2023-08": {"ARRI11": {"dy": 0.1, "totalExtrato": 43.0, "tipo": "FII"}, "BBSE3": {"dy": 1.6075, "totalExtrato": 6.43, "tipo": "ACAO"}, "BRCR11": {"dy": 0.45, "totalExtrato": 250.65, "tipo": "FII"}, "CPTS11": {"dy": 0.89, "totalExtrato": 17.8, "tipo": "FII"}, "DEVA11": {"dy": 0.5, "totalExtrato": 8.0, "tipo": "FII"}, "GAME11": {"dy": 0.1, "totalExtrato": 0.3, "tipo": "FII"}, "HABT11": {"dy": 1.2, "totalExtrato": 60.0, "tipo": "FII"}, "HCTR11": {"dy": 0.5, "totalExtrato": 16.5, "tipo": "FII"}, "HGBS11": {"dy": 1.55, "totalExtrato": 106.95, "tipo": "FII"}, "ITSA4": {"dy": 0.081207, "totalExtrato": 4.71, "tipo": "ACAO"}, "ITUB3": {"dy": 0.152222, "totalExtrato": 1.37, "tipo": "ACAO"}, "KNRI11": {"dy": 0.95, "totalExtrato": 76.95, "tipo": "FII"}, "KNSC11": {"dy": 0.7, "totalExtrato": 70.0, "tipo": "FII"}, "MXRF11": {"dy": 0.12, "totalExtrato": 64.56, "tipo": "FII"}, "TAEE11": {"dy": 0.297048, "totalExtrato": 31.19, "tipo": "ACAO"}, "VISC11": {"dy": 0.85, "totalExtrato": 17.0, "tipo": "FII"}}, "2023-09": {"ARRI11": {"dy": 0.1, "totalExtrato": 43.0, "tipo": "FII"}, "BRCR11": {"dy": 0.41, "totalExtrato": 230.42, "tipo": "FII"}, "CPTS11": {"dy": 0.79, "totalExtrato": 15.8, "tipo": "FII"}, "DEVA11": {"dy": 0.47, "totalExtrato": 7.52, "tipo": "FII"}, "GAME11": {"dy": 0.1, "totalExtrato": 22.1, "tipo": "FII"}, "HABT11": {"dy": 1.0, "totalExtrato": 50.0, "tipo": "FII"}, "HCTR11": {"dy": 0.170303, "totalExtrato": 5.62, "tipo": "FII"}, "HFOF11": {"dy": 0.63, "totalExtrato": 20.79, "tipo": "FII"}, "HGBS11": {"dy": 2.0, "totalExtrato": 138.0, "tipo": "FII"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 0.95, "totalExtrato": 76.95, "tipo": "FII"}, "KNSC11": {"dy": 0.8, "totalExtrato": 80.0, "tipo": "FII"}, "MXRF11": {"dy": 0.11, "totalExtrato": 59.51, "tipo": "FII"}, "VALE3": {"dy": 1.630667, "totalExtrato": 48.92, "tipo": "ACAO"}, "VISC11": {"dy": 0.92, "totalExtrato": 18.4, "tipo": "FII"}}, "2023-10": {"ARRI11": {"dy": 0.1, "totalExtrato": 43.0, "tipo": "FII"}, "BRCR11": {"dy": 0.41, "totalExtrato": 230.42, "tipo": "FII"}, "CPTS11": {"dy": 0.054, "totalExtrato": 10.8, "tipo": "FII"}, "DEVA11": {"dy": 0.49, "totalExtrato": 7.84, "tipo": "FII"}, "GAME11": {"dy": 0.1, "totalExtrato": 22.7, "tipo": "FII"}, "HABT11": {"dy": 1.0, "totalExtrato": 50.0, "tipo": "FII"}, "HCTR11": {"dy": 0.27, "totalExtrato": 8.91, "tipo": "FII"}, "HFOF11": {"dy": 0.63, "totalExtrato": 20.79, "tipo": "FII"}, "HGBS11": {"dy": 2.0, "totalExtrato": 138.0, "tipo": "FII"}, "ITSA4": {"dy": 0.02, "totalExtrato": 0.58, "tipo": "ACAO"}, "ITUB3": {"dy": 0.013333, "totalExtrato": 0.04, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.75, "totalExtrato": 75.0, "tipo": "FII"}, "MXRF11": {"dy": 0.11, "totalExtrato": 59.51, "tipo": "FII"}, "VISC11": {"dy": 0.92, "totalExtrato": 18.4, "tipo": "FII"}}, "2023-11": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BRCR11": {"dy": 0.41, "totalExtrato": 237.39, "tipo": "FII"}, "CPTS11": {"dy": 0.061, "totalExtrato": 12.2, "tipo": "FII"}, "CSNA3": {"dy": 0.742692, "totalExtrato": 57.93, "tipo": "ACAO"}, "DEVA11": {"dy": 0.52, "totalExtrato": 8.32, "tipo": "FII"}, "GAME11": {"dy": 0.1, "totalExtrato": 23.2, "tipo": "FII"}, "HABT11": {"dy": 1.0, "totalExtrato": 50.0, "tipo": "FII"}, "HCTR11": {"dy": 0.34, "totalExtrato": 11.22, "tipo": "FII"}, "HFOF11": {"dy": 0.63, "totalExtrato": 45.99, "tipo": "FII"}, "HGBS11": {"dy": 2.0, "totalExtrato": 138.0, "tipo": "FII"}, "HGRE11": {"dy": 0.78, "totalExtrato": 6.24, "tipo": "FII"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.8, "totalExtrato": 80.0, "tipo": "FII"}, "MXRF11": {"dy": 0.11, "totalExtrato": 59.51, "tipo": "FII"}, "VISC11": {"dy": 1.0, "totalExtrato": 20.0, "tipo": "FII"}}, "2023-12": {"ARRI11": {"dy": 0.1, "totalExtrato": 43.0, "tipo": "FII"}, "BRCR11": {"dy": 0.41, "totalExtrato": 237.39, "tipo": "FII"}, "CPTS11": {"dy": 0.061, "totalExtrato": 12.2, "tipo": "FII"}, "DEVA11": {"dy": 0.47, "totalExtrato": 7.52, "tipo": "FII"}, "GAME11": {"dy": 0.1, "totalExtrato": 45.8, "tipo": "FII"}, "HABT11": {"dy": 1.0, "totalExtrato": 50.0, "tipo": "FII"}, "HCTR11": {"dy": 0.34, "totalExtrato": 11.22, "tipo": "FII"}, "HFOF11": {"dy": 0.63, "totalExtrato": 54.81, "tipo": "FII"}, "HGBS11": {"dy": 2.0, "totalExtrato": 138.0, "tipo": "FII"}, "HGRE11": {"dy": 0.78, "totalExtrato": 6.24, "tipo": "FII"}, "HSLG11": {"dy": 0.74, "totalExtrato": 5.92, "tipo": "FII"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.07, "totalExtrato": 70.0, "tipo": "FII"}, "MXRF11": {"dy": 0.11, "totalExtrato": 59.62, "tipo": "FII"}, "TAEE11": {"dy": 0.253143, "totalExtrato": 17.72, "tipo": "ACAO"}, "UNIP6": {"dy": 1.563061, "totalExtrato": 76.59, "tipo": "ACAO"}, "VALE3": {"dy": 1.108333, "totalExtrato": 66.5, "tipo": "ACAO"}, "VISC11": {"dy": 1.0, "totalExtrato": 20.0, "tipo": "FII"}, "XPLG11": {"dy": 0.78, "totalExtrato": 5.46, "tipo": "FII"}}, "2024-01": {"ARRI11": {"dy": 0.1, "totalExtrato": 43.0, "tipo": "FII"}, "BRCR11": {"dy": 0.41, "totalExtrato": 237.39, "tipo": "FII"}, "CPTS11": {"dy": 0.065, "totalExtrato": 13.0, "tipo": "FII"}, "DEVA11": {"dy": 0.42, "totalExtrato": 6.72, "tipo": "FII"}, "GAME11": {"dy": 0.1, "totalExtrato": 46.1, "tipo": "FII"}, "HABT11": {"dy": 0.98, "totalExtrato": 105.84, "tipo": "FII"}, "HCTR11": {"dy": 0.35, "totalExtrato": 11.55, "tipo": "FII"}, "HFOF11": {"dy": 0.63, "totalExtrato": 54.81, "tipo": "FII"}, "HGBS11": {"dy": 2.0, "totalExtrato": 138.0, "tipo": "FII"}, "HGRE11": {"dy": 1.2, "totalExtrato": 9.6, "tipo": "FII"}, "HSLG11": {"dy": 0.74, "totalExtrato": 5.92, "tipo": "FII"}, "ITSA4": {"dy": 0.020033, "totalExtrato": 0.61, "tipo": "ACAO"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.07, "totalExtrato": 70.0, "tipo": "FII"}, "MXRF11": {"dy": 0.11, "totalExtrato": 59.62, "tipo": "FII"}, "TAEE11": {"dy": 0.661714, "totalExtrato": 23.16, "tipo": "ACAO"}, "VISC11": {"dy": 1.0, "totalExtrato": 20.0, "tipo": "FII"}, "XPLG11": {"dy": 0.78, "totalExtrato": 5.46, "tipo": "FII"}}, "2024-02": {"ARRI11": {"dy": 0.1, "totalExtrato": 43.0, "tipo": "FII"}, "BBSE3": {"dy": 0.628095, "totalExtrato": 26.38, "tipo": "ACAO"}, "BRCR11": {"dy": 0.41, "totalExtrato": 237.39, "tipo": "FII"}, "CPTS11": {"dy": 0.07, "totalExtrato": 14.0, "tipo": "FII"}, "DEVA11": {"dy": 0.62, "totalExtrato": 9.92, "tipo": "FII"}, "GAME11": {"dy": 0.09, "totalExtrato": 41.94, "tipo": "FII"}, "HABT11": {"dy": 1.0, "totalExtrato": 108.0, "tipo": "FII"}, "HCTR11": {"dy": 0.34, "totalExtrato": 11.22, "tipo": "FII"}, "HFOF11": {"dy": 0.63, "totalExtrato": 54.81, "tipo": "FII"}, "HGBS11": {"dy": 1.75, "totalExtrato": 120.75, "tipo": "FII"}, "HGRE11": {"dy": 0.78, "totalExtrato": 6.24, "tipo": "FII"}, "HSLG11": {"dy": 0.74, "totalExtrato": 5.92, "tipo": "FII"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.08, "totalExtrato": 80.0, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 54.2, "tipo": "FII"}, "VISC11": {"dy": 1.0, "totalExtrato": 20.0, "tipo": "FII"}, "XPLG11": {"dy": 0.78, "totalExtrato": 5.46, "tipo": "FII"}}, "2024-03": {"ARRI11": {"dy": 0.1, "totalExtrato": 43.0, "tipo": "FII"}, "BRCR11": {"dy": 0.41, "totalExtrato": 237.39, "tipo": "FII"}, "CPTI11": {"dy": 1.5, "totalExtrato": 15.0, "tipo": "FII"}, "CPTS11": {"dy": 0.076, "totalExtrato": 15.2, "tipo": "FII"}, "DEVA11": {"dy": 0.6, "totalExtrato": 9.6, "tipo": "FII"}, "GAME11": {"dy": 0.09, "totalExtrato": 42.84, "tipo": "FII"}, "GOAU3": {"dy": 0.05, "totalExtrato": 3.65, "tipo": "ACAO"}, "HABT11": {"dy": 1.05, "totalExtrato": 113.4, "tipo": "FII"}, "HCTR11": {"dy": 0.387879, "totalExtrato": 12.8, "tipo": "FII"}, "HFOF11": {"dy": 0.63, "totalExtrato": 54.81, "tipo": "FII"}, "HGBS11": {"dy": 1.75, "totalExtrato": 120.75, "tipo": "FII"}, "HGRE11": {"dy": 0.78, "totalExtrato": 6.24, "tipo": "FII"}, "HSLG11": {"dy": 0.74, "totalExtrato": 5.92, "tipo": "FII"}, "ITSA4": {"dy": 0.111699, "totalExtrato": 16.47, "tipo": "ACAO"}, "ITUB3": {"dy": 0.394167, "totalExtrato": 4.73, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.08, "totalExtrato": 80.0, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 54.2, "tipo": "FII"}, "VALE3": {"dy": 2.738387, "totalExtrato": 84.89, "tipo": "ACAO"}, "VISC11": {"dy": 1.0, "totalExtrato": 20.0, "tipo": "FII"}, "XPLG11": {"dy": 0.78, "totalExtrato": 9.36, "tipo": "FII"}}, "2024-04": {"ARRI11": {"dy": 0.1, "totalExtrato": 43.0, "tipo": "FII"}, "BRCR11": {"dy": 0.5, "totalExtrato": 289.5, "tipo": "FII"}, "CNES11": {"dy": 0.007858, "totalExtrato": 4.55, "tipo": "FII"}, "CPTI11": {"dy": 1.75, "totalExtrato": 17.5, "tipo": "FII"}, "CPTS11": {"dy": 0.079, "totalExtrato": 15.8, "tipo": "FII"}, "DEVA11": {"dy": 0.68, "totalExtrato": 10.88, "tipo": "FII"}, "GAME11": {"dy": 0.09, "totalExtrato": 53.91, "tipo": "FII"}, "HABT11": {"dy": 1.1, "totalExtrato": 118.8, "tipo": "FII"}, "HCTR11": {"dy": 0.32, "totalExtrato": 10.56, "tipo": "FII"}, "HFOF11": {"dy": 0.63, "totalExtrato": 54.81, "tipo": "FII"}, "HGBS11": {"dy": 1.75, "totalExtrato": 120.75, "tipo": "FII"}, "HGRE11": {"dy": 0.78, "totalExtrato": 6.24, "tipo": "FII"}, "HSLG11": {"dy": 0.74, "totalExtrato": 5.92, "tipo": "FII"}, "ITSA4": {"dy": 0.02, "totalExtrato": 0.6, "tipo": "ACAO"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.09, "totalExtrato": 90.0, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 54.2, "tipo": "FII"}, "UNIP6": {"dy": 0.741327, "totalExtrato": 72.65, "tipo": "ACAO"}, "VISC11": {"dy": 1.0, "totalExtrato": 20.0, "tipo": "FII"}, "XPLG11": {"dy": 0.78, "totalExtrato": 9.36, "tipo": "FII"}}, "2024-05": {"ARRI11": {"dy": 0.1, "totalExtrato": 43.0, "tipo": "FII"}, "BRCR11": {"dy": 0.287884, "totalExtrato": 333.37, "tipo": "FII"}, "CNES11": {"dy": 0.008066, "totalExtrato": 4.67, "tipo": "FII"}, "CPTI11": {"dy": 1.1, "totalExtrato": 37.4, "tipo": "FII"}, "CPTS11": {"dy": 0.08, "totalExtrato": 16.0, "tipo": "FII"}, "CSNA3": {"dy": 0.716282, "totalExtrato": 55.87, "tipo": "ACAO"}, "DEVA11": {"dy": 0.65, "totalExtrato": 10.4, "tipo": "FII"}, "GAME11": {"dy": 0.09, "totalExtrato": 54.0, "tipo": "FII"}, "GOAU3": {"dy": 0.19, "totalExtrato": 13.87, "tipo": "ACAO"}, "HABT11": {"dy": 1.13, "totalExtrato": 122.04, "tipo": "FII"}, "HCTR11": {"dy": 0.38, "totalExtrato": 12.54, "tipo": "FII"}, "HFOF11": {"dy": 0.63, "totalExtrato": 54.81, "tipo": "FII"}, "HGBS11": {"dy": 1.75, "totalExtrato": 120.75, "tipo": "FII"}, "HGRE11": {"dy": 0.78, "totalExtrato": 6.24, "tipo": "FII"}, "HSLG11": {"dy": 0.74, "totalExtrato": 5.92, "tipo": "FII"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.09, "totalExtrato": 90.0, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 54.5, "tipo": "FII"}, "TAEE11": {"dy": 1.132703, "totalExtrato": 41.91, "tipo": "ACAO"}, "VISC11": {"dy": 1.0, "totalExtrato": 20.0, "tipo": "FII"}, "XPLG11": {"dy": 0.78, "totalExtrato": 9.36, "tipo": "FII"}}, "2024-06": {"ARRI11": {"dy": 0.105, "totalExtrato": 45.15, "tipo": "FII"}, "BRCR11": {"dy": 0.5, "totalExtrato": 289.5, "tipo": "FII"}, "CNES11": {"dy": 0.007927, "totalExtrato": 4.59, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 34.0, "tipo": "FII"}, "CPTS11": {"dy": 0.078, "totalExtrato": 15.6, "tipo": "FII"}, "DEVA11": {"dy": 0.48, "totalExtrato": 33.6, "tipo": "FII"}, "GAME11": {"dy": 0.09, "totalExtrato": 54.0, "tipo": "FII"}, "HABT11": {"dy": 1.05, "totalExtrato": 113.4, "tipo": "FII"}, "HCTR11": {"dy": 0.32, "totalExtrato": 35.84, "tipo": "FII"}, "HFOF11": {"dy": 0.63, "totalExtrato": 54.81, "tipo": "FII"}, "HGBS11": {"dy": 1.75, "totalExtrato": 120.75, "tipo": "FII"}, "HGRE11": {"dy": 0.78, "totalExtrato": 6.24, "tipo": "FII"}, "HSLG11": {"dy": 0.74, "totalExtrato": 5.92, "tipo": "FII"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.08, "totalExtrato": 80.0, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 54.6, "tipo": "FII"}, "TAEE11": {"dy": 0.357568, "totalExtrato": 13.23, "tipo": "ACAO"}, "VISC11": {"dy": 1.0, "totalExtrato": 20.0, "tipo": "FII"}, "XPLG11": {"dy": 0.78, "totalExtrato": 9.36, "tipo": "FII"}}, "2024-07": {"ARRI11": {"dy": 0.105, "totalExtrato": 45.15, "tipo": "FII"}, "BRCR11": {"dy": 0.5, "totalExtrato": 289.5, "tipo": "FII"}, "CNES11": {"dy": 0.008601, "totalExtrato": 4.98, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 34.0, "tipo": "FII"}, "CPTS11": {"dy": 0.077, "totalExtrato": 15.4, "tipo": "FII"}, "DEVA11": {"dy": 0.43, "totalExtrato": 30.1, "tipo": "FII"}, "GAME11": {"dy": 0.09, "totalExtrato": 54.54, "tipo": "FII"}, "HABT11": {"dy": 1.0, "totalExtrato": 108.0, "tipo": "FII"}, "HCTR11": {"dy": 0.53, "totalExtrato": 59.36, "tipo": "FII"}, "HFOF11": {"dy": 0.63, "totalExtrato": 98.91, "tipo": "FII"}, "HGBS11": {"dy": 1.75, "totalExtrato": 120.75, "tipo": "FII"}, "HGRE11": {"dy": 1.5, "totalExtrato": 12.0, "tipo": "FII"}, "HSLG11": {"dy": 0.74, "totalExtrato": 5.92, "tipo": "FII"}, "ITSA4": {"dy": 0.02, "totalExtrato": 0.6, "tipo": "ACAO"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.09, "totalExtrato": 90.0, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 54.7, "tipo": "FII"}, "VISC11": {"dy": 0.85, "totalExtrato": 17.0, "tipo": "FII"}, "XPLG11": {"dy": 0.78, "totalExtrato": 9.36, "tipo": "FII"}}, "2024-08": {"ARRI11": {"dy": 0.1, "totalExtrato": 43.0, "tipo": "FII"}, "BBAS3": {"dy": 0.106316, "totalExtrato": 8.08, "tipo": "ACAO"}, "BBSE3": {"dy": 1.390625, "totalExtrato": 44.5, "tipo": "ACAO"}, "BMGB4": {"dy": 0.071367, "totalExtrato": 9.92, "tipo": "ACAO"}, "BRCR11": {"dy": 0.5, "totalExtrato": 289.5, "tipo": "FII"}, "CNES11": {"dy": 0.005872, "totalExtrato": 3.4, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 34.0, "tipo": "FII"}, "CPTS11": {"dy": 0.081, "totalExtrato": 16.2, "tipo": "FII"}, "DEVA11": {"dy": 0.46, "totalExtrato": 32.2, "tipo": "FII"}, "GAME11": {"dy": 0.09, "totalExtrato": 54.54, "tipo": "FII"}, "GOAU3": {"dy": 0.08, "totalExtrato": 5.84, "tipo": "ACAO"}, "HABT11": {"dy": 1.0, "totalExtrato": 108.0, "tipo": "FII"}, "HCTR11": {"dy": 0.36, "totalExtrato": 40.32, "tipo": "FII"}, "HFOF11": {"dy": 0.63, "totalExtrato": 98.91, "tipo": "FII"}, "HGBS11": {"dy": 1.6, "totalExtrato": 110.4, "tipo": "FII"}, "HGRE11": {"dy": 0.78, "totalExtrato": 6.24, "tipo": "FII"}, "HSLG11": {"dy": 0.74, "totalExtrato": 5.92, "tipo": "FII"}, "ITSA4": {"dy": 0.07, "totalExtrato": 4.2, "tipo": "ACAO"}, "ITUB3": {"dy": 0.145556, "totalExtrato": 1.31, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.09, "totalExtrato": 90.0, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 54.7, "tipo": "FII"}, "URPR11": {"dy": 1.0, "totalExtrato": 62.0, "tipo": "FII"}, "VISC11": {"dy": 0.85, "totalExtrato": 17.0, "tipo": "FII"}, "XPLG11": {"dy": 0.78, "totalExtrato": 9.36, "tipo": "FII"}}, "2024-09": {"ARRI11": {"dy": 0.1, "totalExtrato": 43.0, "tipo": "FII"}, "BBAS3": {"dy": 0.158421, "totalExtrato": 3.01, "tipo": "ACAO"}, "BRCR11": {"dy": 0.5, "totalExtrato": 294.5, "tipo": "FII"}, "CNES11": {"dy": 0.006252, "totalExtrato": 3.62, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 72.0, "tipo": "FII"}, "CPTS11": {"dy": 0.081, "totalExtrato": 16.2, "tipo": "FII"}, "DEVA11": {"dy": 0.45, "totalExtrato": 31.5, "tipo": "FII"}, "GAME11": {"dy": 0.09, "totalExtrato": 55.26, "tipo": "FII"}, "HABT11": {"dy": 0.95, "totalExtrato": 102.6, "tipo": "FII"}, "HCTR11": {"dy": 0.39, "totalExtrato": 51.09, "tipo": "FII"}, "HFOF11": {"dy": 0.63, "totalExtrato": 115.92, "tipo": "FII"}, "HGBS11": {"dy": 1.6, "totalExtrato": 110.4, "tipo": "FII"}, "HGRE11": {"dy": 0.78, "totalExtrato": 6.24, "tipo": "FII"}, "HSLG11": {"dy": 0.74, "totalExtrato": 5.92, "tipo": "FII"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.09, "totalExtrato": 90.0, "tipo": "FII"}, "MXRF11": {"dy": 0.09, "totalExtrato": 49.23, "tipo": "FII"}, "URPR11": {"dy": 1.0, "totalExtrato": 62.0, "tipo": "FII"}, "VALE3": {"dy": 1.779636, "totalExtrato": 97.88, "tipo": "ACAO"}, "VISC11": {"dy": 0.83, "totalExtrato": 16.6, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 171.65, "tipo": "FII"}, "XPLG11": {"dy": 0.78, "totalExtrato": 11.7, "tipo": "FII"}}, "2024-10": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BRCR11": {"dy": 0.5, "totalExtrato": 316.0, "tipo": "FII"}, "CNES11": {"dy": 0.005147, "totalExtrato": 2.98, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 82.0, "tipo": "FII"}, "CPTS11": {"dy": 0.072, "totalExtrato": 14.4, "tipo": "FII"}, "DEVA11": {"dy": 0.45, "totalExtrato": 31.5, "tipo": "FII"}, "GAME11": {"dy": 0.09, "totalExtrato": 55.26, "tipo": "FII"}, "HABT11": {"dy": 1.0, "totalExtrato": 108.0, "tipo": "FII"}, "HCTR11": {"dy": 0.39, "totalExtrato": 51.09, "tipo": "FII"}, "HFOF11": {"dy": 0.6, "totalExtrato": 120.0, "tipo": "FII"}, "HGBS11": {"dy": 1.6, "totalExtrato": 110.4, "tipo": "FII"}, "HGRE11": {"dy": 0.78, "totalExtrato": 6.24, "tipo": "FII"}, "HSLG11": {"dy": 0.74, "totalExtrato": 5.92, "tipo": "FII"}, "ITSA4": {"dy": 0.02, "totalExtrato": 0.6, "tipo": "ACAO"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.09, "totalExtrato": 90.0, "tipo": "FII"}, "MXRF11": {"dy": 0.09, "totalExtrato": 49.23, "tipo": "FII"}, "URPR11": {"dy": 0.95, "totalExtrato": 58.9, "tipo": "FII"}, "VISC11": {"dy": 0.8, "totalExtrato": 16.0, "tipo": "FII"}, "VRTM11": {"dy": 0.08, "totalExtrato": 191.2, "tipo": "FII"}, "XPLG11": {"dy": 0.78, "totalExtrato": 11.7, "tipo": "FII"}}, "2024-11": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BMGB4": {"dy": 0.071367, "totalExtrato": 9.92, "tipo": "ACAO"}, "BRCR11": {"dy": 0.5, "totalExtrato": 316.0, "tipo": "FII"}, "CNES11": {"dy": 0.006546, "totalExtrato": 3.79, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 110.0, "tipo": "FII"}, "CPTS11": {"dy": 0.062, "totalExtrato": 12.4, "tipo": "FII"}, "CSNA3": {"dy": 0.550455, "totalExtrato": 60.55, "tipo": "ACAO"}, "DEVA11": {"dy": 0.45, "totalExtrato": 31.5, "tipo": "FII"}, "GAME11": {"dy": 0.09, "totalExtrato": 55.53, "tipo": "FII"}, "HABT11": {"dy": 0.9, "totalExtrato": 135.0, "tipo": "FII"}, "HCTR11": {"dy": 0.37, "totalExtrato": 48.47, "tipo": "FII"}, "HFOF11": {"dy": 0.58, "totalExtrato": 128.18, "tipo": "FII"}, "HGBS11": {"dy": 1.6, "totalExtrato": 110.4, "tipo": "FII"}, "HGRE11": {"dy": 0.78, "totalExtrato": 7.8, "tipo": "FII"}, "HSLG11": {"dy": 0.74, "totalExtrato": 66.6, "tipo": "FII"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.08, "totalExtrato": 80.0, "tipo": "FII"}, "MXRF11": {"dy": 0.09, "totalExtrato": 49.23, "tipo": "FII"}, "TAEE11": {"dy": 0.298295, "totalExtrato": 26.25, "tipo": "ACAO"}, "UNIP6": {"dy": 1.369729, "totalExtrato": 353.39, "tipo": "ACAO"}, "URPR11": {"dy": 0.87, "totalExtrato": 64.38, "tipo": "FII"}, "VISC11": {"dy": 0.8, "totalExtrato": 16.0, "tipo": "FII"}, "VRTM11": {"dy": 0.085, "totalExtrato": 212.5, "tipo": "FII"}, "XPLG11": {"dy": 0.78, "totalExtrato": 27.3, "tipo": "FII"}}, "2024-12": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BBAS3": {"dy": 0.280526, "totalExtrato": 10.66, "tipo": "ACAO"}, "BMGB4": {"dy": 0.100288, "totalExtrato": 13.94, "tipo": "ACAO"}, "BRCR11": {"dy": 0.5, "totalExtrato": 316.0, "tipo": "FII"}, "CNES11": {"dy": 0.009724, "totalExtrato": 5.63, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 110.0, "tipo": "FII"}, "CPTS11": {"dy": 0.075, "totalExtrato": 15.0, "tipo": "FII"}, "DEVA11": {"dy": 0.43, "totalExtrato": 30.1, "tipo": "FII"}, "GAME11": {"dy": 0.09, "totalExtrato": 55.53, "tipo": "FII"}, "GOAU3": {"dy": 0.13, "totalExtrato": 9.49, "tipo": "ACAO"}, "HABT11": {"dy": 1.02, "totalExtrato": 153.0, "tipo": "FII"}, "HFOF11": {"dy": 0.56, "totalExtrato": 123.76, "tipo": "FII"}, "HGBS11": {"dy": 1.6, "totalExtrato": 110.4, "tipo": "FII"}, "HGRE11": {"dy": 0.78, "totalExtrato": 7.8, "tipo": "FII"}, "HSLG11": {"dy": 0.74, "totalExtrato": 66.6, "tipo": "FII"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.08, "totalExtrato": 80.0, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 54.7, "tipo": "FII"}, "URPR11": {"dy": 0.88, "totalExtrato": 65.12, "tipo": "FII"}, "VISC11": {"dy": 0.8, "totalExtrato": 16.0, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 225.0, "tipo": "FII"}, "XPLG11": {"dy": 0.78, "totalExtrato": 27.3, "tipo": "FII"}}, "2025-01": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BRCR11": {"dy": 0.5, "totalExtrato": 316.0, "tipo": "FII"}, "CNES11": {"dy": 0.00399, "totalExtrato": 2.31, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 110.0, "tipo": "FII"}, "CPTS11": {"dy": 0.075, "totalExtrato": 15.0, "tipo": "FII"}, "DEVA11": {"dy": 0.44, "totalExtrato": 30.8, "tipo": "FII"}, "GAME11": {"dy": 0.09, "totalExtrato": 90.63, "tipo": "FII"}, "HABT11": {"dy": 1.05, "totalExtrato": 211.05, "tipo": "FII"}, "HCTR11": {"dy": 0.69, "totalExtrato": 90.39, "tipo": "FII"}, "HFOF11": {"dy": 0.56, "totalExtrato": 123.76, "tipo": "FII"}, "HGBS11": {"dy": 1.6, "totalExtrato": 110.4, "tipo": "FII"}, "HGRE11": {"dy": 0.78, "totalExtrato": 7.8, "tipo": "FII"}, "HSLG11": {"dy": 0.74, "totalExtrato": 111.0, "tipo": "FII"}, "ISAE4": {"dy": 0.668929, "totalExtrato": 37.46, "tipo": "ACAO"}, "ITSA4": {"dy": 0.02, "totalExtrato": 0.6, "tipo": "ACAO"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.09, "totalExtrato": 90.0, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 54.7, "tipo": "FII"}, "TAEE11": {"dy": 0.304432, "totalExtrato": 26.79, "tipo": "ACAO"}, "URPR11": {"dy": 0.88, "totalExtrato": 65.12, "tipo": "FII"}, "VISC11": {"dy": 0.8, "totalExtrato": 16.0, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 226.8, "tipo": "FII"}, "XPLG11": {"dy": 0.78, "totalExtrato": 27.3, "tipo": "FII"}}, "2025-02": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BRCR11": {"dy": 0.48, "totalExtrato": 303.36, "tipo": "FII"}, "CNES11": {"dy": 0.013109, "totalExtrato": 7.59, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 136.0, "tipo": "FII"}, "CPTS11": {"dy": 0.075, "totalExtrato": 15.0, "tipo": "FII"}, "DEVA11": {"dy": 0.41, "totalExtrato": 28.7, "tipo": "FII"}, "GAME11": {"dy": 0.094995, "totalExtrato": 95.66, "tipo": "FII"}, "HABT11": {"dy": 1.1, "totalExtrato": 236.5, "tipo": "FII"}, "HCTR11": {"dy": 0.32, "totalExtrato": 41.92, "tipo": "FII"}, "HFOF11": {"dy": 0.56, "totalExtrato": 123.76, "tipo": "FII"}, "HGBS11": {"dy": 1.6, "totalExtrato": 110.4, "tipo": "FII"}, "HGRE11": {"dy": 0.85, "totalExtrato": 8.5, "tipo": "FII"}, "HSLG11": {"dy": 0.65, "totalExtrato": 97.5, "tipo": "FII"}, "ISAE4": {"dy": 0.668929, "totalExtrato": 37.46, "tipo": "ACAO"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.1, "totalExtrato": 100.0, "tipo": "FII"}, "MXRF11": {"dy": 0.09, "totalExtrato": 49.23, "tipo": "FII"}, "RBHG11": {"dy": 0.8, "totalExtrato": 126.4, "tipo": "FII"}, "URPR11": {"dy": 0.81, "totalExtrato": 59.94, "tipo": "FII"}, "VISC11": {"dy": 0.8, "totalExtrato": 16.0, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 242.19, "tipo": "FII"}, "XPLG11": {"dy": 0.82, "totalExtrato": 28.7, "tipo": "FII"}, "XPML11": {"dy": 0.92, "totalExtrato": 46.92, "tipo": "FII"}}, "2025-03": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BBAS3": {"dy": 0.112632, "totalExtrato": 10.7, "tipo": "ACAO"}, "BBSE3": {"dy": 1.154687, "totalExtrato": 73.9, "tipo": "ACAO"}, "BRCR11": {"dy": 0.45, "totalExtrato": 284.4, "tipo": "FII"}, "CNES11": {"dy": 0.007081, "totalExtrato": 4.1, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 136.0, "tipo": "FII"}, "CPTS11": {"dy": 0.08, "totalExtrato": 16.0, "tipo": "FII"}, "DEVA11": {"dy": 0.43, "totalExtrato": 30.1, "tipo": "FII"}, "GAME11": {"dy": 0.094995, "totalExtrato": 95.66, "tipo": "FII"}, "GOAU3": {"dy": 0.05, "totalExtrato": 3.65, "tipo": "ACAO"}, "HABT11": {"dy": 1.08, "totalExtrato": 232.2, "tipo": "FII"}, "HCTR11": {"dy": 0.32, "totalExtrato": 41.92, "tipo": "FII"}, "HFOF11": {"dy": 0.56, "totalExtrato": 123.76, "tipo": "FII"}, "HGBS11": {"dy": 1.6, "totalExtrato": 110.4, "tipo": "FII"}, "HGRE11": {"dy": 0.85, "totalExtrato": 8.5, "tipo": "FII"}, "HSLG11": {"dy": 0.65, "totalExtrato": 97.5, "tipo": "FII"}, "ISAE4": {"dy": 0.668929, "totalExtrato": 37.46, "tipo": "ACAO"}, "ITSA4": {"dy": 0.146721, "totalExtrato": 18.12, "tipo": "ACAO"}, "ITUB3": {"dy": 0.409333, "totalExtrato": 6.14, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.09, "totalExtrato": 135.0, "tipo": "FII"}, "MFII11": {"dy": 1.11, "totalExtrato": 98.79, "tipo": "FII"}, "MXRF11": {"dy": 0.09, "totalExtrato": 49.23, "tipo": "FII"}, "RBHG11": {"dy": 0.8, "totalExtrato": 127.2, "tipo": "FII"}, "TGAR11": {"dy": 1.0, "totalExtrato": 66.0, "tipo": "FII"}, "URPR11": {"dy": 0.82, "totalExtrato": 60.68, "tipo": "FII"}, "VALE3": {"dy": 1.292091, "totalExtrato": 142.13, "tipo": "ACAO"}, "VISC11": {"dy": 0.8, "totalExtrato": 16.0, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 270.27, "tipo": "FII"}, "XPLG11": {"dy": 0.82, "totalExtrato": 28.7, "tipo": "FII"}, "XPML11": {"dy": 0.92, "totalExtrato": 46.92, "tipo": "FII"}}, "2025-04": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BMGB4": {"dy": 0.085036, "totalExtrato": 11.82, "tipo": "ACAO"}, "BRCR11": {"dy": 0.45, "totalExtrato": 284.4, "tipo": "FII"}, "CNES11": {"dy": 0.005769, "totalExtrato": 3.34, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 136.0, "tipo": "FII"}, "CPTS11": {"dy": 0.082, "totalExtrato": 16.4, "tipo": "FII"}, "DEVA11": {"dy": 0.41, "totalExtrato": 28.7, "tipo": "FII"}, "GAME11": {"dy": 0.094995, "totalExtrato": 95.66, "tipo": "FII"}, "HABT11": {"dy": 1.0, "totalExtrato": 215.0, "tipo": "FII"}, "HCTR11": {"dy": 0.3, "totalExtrato": 39.3, "tipo": "FII"}, "HFOF11": {"dy": 0.56, "totalExtrato": 123.76, "tipo": "FII"}, "HGBS11": {"dy": 1.6, "totalExtrato": 110.4, "tipo": "FII"}, "HGRE11": {"dy": 0.85, "totalExtrato": 8.5, "tipo": "FII"}, "HSLG11": {"dy": 0.65, "totalExtrato": 97.5, "tipo": "FII"}, "ITSA4": {"dy": 0.043978, "totalExtrato": 4.09, "tipo": "ACAO"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.1, "totalExtrato": 150.0, "tipo": "FII"}, "MFII11": {"dy": 1.11, "totalExtrato": 98.79, "tipo": "FII"}, "MXRF11": {"dy": 0.09, "totalExtrato": 49.23, "tipo": "FII"}, "RBHG11": {"dy": 0.8, "totalExtrato": 127.2, "tipo": "FII"}, "TGAR11": {"dy": 1.0, "totalExtrato": 66.0, "tipo": "FII"}, "UNIP6": {"dy": 2.297907, "totalExtrato": 296.43, "tipo": "ACAO"}, "URPR11": {"dy": 0.8, "totalExtrato": 59.2, "tipo": "FII"}, "VISC11": {"dy": 0.8, "totalExtrato": 16.0, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 270.27, "tipo": "FII"}, "XPLG11": {"dy": 0.82, "totalExtrato": 28.7, "tipo": "FII"}, "XPML11": {"dy": 0.92, "totalExtrato": 46.92, "tipo": "FII"}}, "2025-05": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BRCR11": {"dy": 0.45, "totalExtrato": 284.4, "tipo": "FII"}, "CNES11": {"dy": 0.005699, "totalExtrato": 3.3, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 136.0, "tipo": "FII"}, "CPTS11": {"dy": 0.085, "totalExtrato": 17.0, "tipo": "FII"}, "DEVA11": {"dy": 0.46, "totalExtrato": 32.2, "tipo": "FII"}, "GAME11": {"dy": 0.094995, "totalExtrato": 95.66, "tipo": "FII"}, "GOAU3": {"dy": 0.08, "totalExtrato": 5.84, "tipo": "ACAO"}, "HABT11": {"dy": 1.15, "totalExtrato": 247.25, "tipo": "FII"}, "HCTR11": {"dy": 0.32, "totalExtrato": 41.92, "tipo": "FII"}, "HFOF11": {"dy": 0.56, "totalExtrato": 123.76, "tipo": "FII"}, "HGBS11": {"dy": 1.6, "totalExtrato": 110.4, "tipo": "FII"}, "HGRE11": {"dy": 0.85, "totalExtrato": 8.5, "tipo": "FII"}, "HSLG11": {"dy": 0.65, "totalExtrato": 97.5, "tipo": "FII"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.11, "totalExtrato": 165.0, "tipo": "FII"}, "MFII11": {"dy": 1.1, "totalExtrato": 97.9, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 54.7, "tipo": "FII"}, "RBHG11": {"dy": 0.8, "totalExtrato": 127.2, "tipo": "FII"}, "TAEE11": {"dy": 0.553182, "totalExtrato": 24.34, "tipo": "ACAO"}, "TGAR11": {"dy": 1.0, "totalExtrato": 66.0, "tipo": "FII"}, "URPR11": {"dy": 0.69, "totalExtrato": 51.06, "tipo": "FII"}, "VISC11": {"dy": 0.8, "totalExtrato": 16.0, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 270.27, "tipo": "FII"}, "XPLG11": {"dy": 0.82, "totalExtrato": 28.7, "tipo": "FII"}, "XPML11": {"dy": 0.92, "totalExtrato": 46.92, "tipo": "FII"}}, "2025-06": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BBAS3": {"dy": 0.180526, "totalExtrato": 6.86, "tipo": "ACAO"}, "BRCR11": {"dy": 0.41, "totalExtrato": 259.12, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 136.0, "tipo": "FII"}, "CPTS11": {"dy": 0.087, "totalExtrato": 17.4, "tipo": "FII"}, "DEVA11": {"dy": 0.45, "totalExtrato": 31.5, "tipo": "FII"}, "GAME11": {"dy": 0.094995, "totalExtrato": 95.66, "tipo": "FII"}, "HABT11": {"dy": 1.15, "totalExtrato": 247.25, "tipo": "FII"}, "HCTR11": {"dy": 0.28, "totalExtrato": 36.68, "tipo": "FII"}, "HFOF11": {"dy": 0.056, "totalExtrato": 123.76, "tipo": "FII"}, "HGBS11": {"dy": 0.16, "totalExtrato": 110.4, "tipo": "FII"}, "HGRE11": {"dy": 0.85, "totalExtrato": 8.5, "tipo": "FII"}, "HSLG11": {"dy": 0.65, "totalExtrato": 97.5, "tipo": "FII"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.1, "totalExtrato": 150.0, "tipo": "FII"}, "MFII11": {"dy": 1.1, "totalExtrato": 97.9, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 54.7, "tipo": "FII"}, "RBHG11": {"dy": 0.8, "totalExtrato": 127.2, "tipo": "FII"}, "TGAR11": {"dy": 1.0, "totalExtrato": 66.0, "tipo": "FII"}, "URPR11": {"dy": 0.45, "totalExtrato": 33.3, "tipo": "FII"}, "VISC11": {"dy": 0.8, "totalExtrato": 16.0, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 270.27, "tipo": "FII"}, "XPLG11": {"dy": 0.82, "totalExtrato": 28.7, "tipo": "FII"}, "XPML11": {"dy": 0.92, "totalExtrato": 46.92, "tipo": "FII"}}, "2025-07": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BRCR11": {"dy": 0.41, "totalExtrato": 259.12, "tipo": "FII"}, "CNES11": {"dy": 0.005199, "totalExtrato": 6.02, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 136.0, "tipo": "FII"}, "CPTS11": {"dy": 0.088, "totalExtrato": 17.6, "tipo": "FII"}, "DEVA11": {"dy": 0.46, "totalExtrato": 32.2, "tipo": "FII"}, "GAME11": {"dy": 0.094995, "totalExtrato": 95.66, "tipo": "FII"}, "HABT11": {"dy": 1.15, "totalExtrato": 247.25, "tipo": "FII"}, "HCTR11": {"dy": 0.375878, "totalExtrato": 49.24, "tipo": "FII"}, "HFOF11": {"dy": 0.056, "totalExtrato": 123.76, "tipo": "FII"}, "HGBS11": {"dy": 0.16, "totalExtrato": 110.4, "tipo": "FII"}, "HGRE11": {"dy": 2.55, "totalExtrato": 25.5, "tipo": "FII"}, "HSLG11": {"dy": 0.65, "totalExtrato": 97.5, "tipo": "FII"}, "ITSA4": {"dy": 0.02, "totalExtrato": 0.62, "tipo": "ACAO"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.09, "totalExtrato": 135.0, "tipo": "FII"}, "MFII11": {"dy": 1.11, "totalExtrato": 98.79, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 54.7, "tipo": "FII"}, "RBHG11": {"dy": 0.8, "totalExtrato": 127.2, "tipo": "FII"}, "TGAR11": {"dy": 1.0, "totalExtrato": 66.0, "tipo": "FII"}, "URPR11": {"dy": 0.45, "totalExtrato": 33.3, "tipo": "FII"}, "VISC11": {"dy": 0.81, "totalExtrato": 16.2, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 270.27, "tipo": "FII"}, "XPLG11": {"dy": 0.82, "totalExtrato": 28.7, "tipo": "FII"}, "XPML11": {"dy": 0.92, "totalExtrato": 46.92, "tipo": "FII"}}, "2025-08": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BBSE3": {"dy": 1.941875, "totalExtrato": 62.14, "tipo": "ACAO"}, "BMGB4": {"dy": 0.085036, "totalExtrato": 11.82, "tipo": "ACAO"}, "BRCR11": {"dy": 0.41, "totalExtrato": 259.12, "tipo": "FII"}, "CNES11": {"dy": 0.007841, "totalExtrato": 4.54, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 136.0, "tipo": "FII"}, "CPTS11": {"dy": 0.086, "totalExtrato": 17.2, "tipo": "FII"}, "DEVA11": {"dy": 0.34, "totalExtrato": 23.8, "tipo": "FII"}, "GAME11": {"dy": 0.094995, "totalExtrato": 95.66, "tipo": "FII"}, "GOAU3": {"dy": 0.08, "totalExtrato": 5.84, "tipo": "ACAO"}, "HABT11": {"dy": 1.05, "totalExtrato": 225.75, "tipo": "FII"}, "HCTR11": {"dy": 0.3, "totalExtrato": 39.3, "tipo": "FII"}, "HFOF11": {"dy": 0.056, "totalExtrato": 123.76, "tipo": "FII"}, "HGBS11": {"dy": 0.15, "totalExtrato": 103.5, "tipo": "FII"}, "HGRE11": {"dy": 0.85, "totalExtrato": 8.5, "tipo": "FII"}, "HSLG11": {"dy": 0.66, "totalExtrato": 99.0, "tipo": "FII"}, "ITSA4": {"dy": 0.104194, "totalExtrato": 6.46, "tipo": "ACAO"}, "ITUB3": {"dy": 0.203333, "totalExtrato": 1.83, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.1, "totalExtrato": 150.0, "tipo": "FII"}, "MFII11": {"dy": 1.06, "totalExtrato": 94.34, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 54.7, "tipo": "FII"}, "PMLL11": {"dy": 0.86, "totalExtrato": 17.2, "tipo": "FII"}, "RBHG11": {"dy": 0.8, "totalExtrato": 127.2, "tipo": "FII"}, "TAEE11": {"dy": 0.464545, "totalExtrato": 20.44, "tipo": "ACAO"}, "TGAR11": {"dy": 1.0, "totalExtrato": 66.0, "tipo": "FII"}, "UNIP6": {"dy": 1.850465, "totalExtrato": 477.42, "tipo": "ACAO"}, "URPR11": {"dy": 0.4, "totalExtrato": 29.6, "tipo": "FII"}, "VISC11": {"dy": 0.81, "totalExtrato": 16.2, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 270.27, "tipo": "FII"}, "XPLG11": {"dy": 0.82, "totalExtrato": 28.7, "tipo": "FII"}, "XPML11": {"dy": 0.92, "totalExtrato": 46.92, "tipo": "FII"}}, "2025-09": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BRCR11": {"dy": 0.41, "totalExtrato": 259.12, "tipo": "FII"}, "CNES11": {"dy": 0.008273, "totalExtrato": 4.79, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 158.0, "tipo": "FII"}, "CPTS11": {"dy": 0.085, "totalExtrato": 17.0, "tipo": "FII"}, "DEVA11": {"dy": 0.32, "totalExtrato": 22.4, "tipo": "FII"}, "GAME11": {"dy": 0.094995, "totalExtrato": 95.66, "tipo": "FII"}, "HABT11": {"dy": 1.05, "totalExtrato": 262.5, "tipo": "FII"}, "HCTR11": {"dy": 0.3, "totalExtrato": 39.3, "tipo": "FII"}, "HFOF11": {"dy": 0.056, "totalExtrato": 168.0, "tipo": "FII"}, "HGBS11": {"dy": 0.15, "totalExtrato": 103.5, "tipo": "FII"}, "HGRE11": {"dy": 0.85, "totalExtrato": 8.5, "tipo": "FII"}, "HSLG11": {"dy": 0.67, "totalExtrato": 100.5, "tipo": "FII"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.09, "totalExtrato": 198.0, "tipo": "FII"}, "MFII11": {"dy": 1.06, "totalExtrato": 94.34, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 54.7, "tipo": "FII"}, "PMLL11": {"dy": 0.86, "totalExtrato": 17.2, "tipo": "FII"}, "RBHG11": {"dy": 0.8, "totalExtrato": 187.2, "tipo": "FII"}, "TGAR11": {"dy": 1.0, "totalExtrato": 66.0, "tipo": "FII"}, "URPR11": {"dy": 0.4, "totalExtrato": 29.6, "tipo": "FII"}, "VALE3": {"dy": 1.611091, "totalExtrato": 88.61, "tipo": "ACAO"}, "VISC11": {"dy": 0.81, "totalExtrato": 16.2, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 298.08, "tipo": "FII"}, "XPLG11": {"dy": 0.82, "totalExtrato": 28.7, "tipo": "FII"}, "XPML11": {"dy": 0.92, "totalExtrato": 46.92, "tipo": "FII"}}, "2025-10": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BRCR11": {"dy": 0.41, "totalExtrato": 259.12, "tipo": "FII"}, "CNES11": {"dy": 0.008014, "totalExtrato": 4.64, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 278.0, "tipo": "FII"}, "CPTS11": {"dy": 0.09, "totalExtrato": 18.0, "tipo": "FII"}, "DEVA11": {"dy": 0.35, "totalExtrato": 24.5, "tipo": "FII"}, "GAME11": {"dy": 0.094995, "totalExtrato": 207.66, "tipo": "FII"}, "HABT11": {"dy": 0.95, "totalExtrato": 513.95, "tipo": "FII"}, "HCTR11": {"dy": 0.29, "totalExtrato": 37.99, "tipo": "FII"}, "HFOF11": {"dy": 0.056, "totalExtrato": 205.52, "tipo": "FII"}, "HGBS11": {"dy": 0.15, "totalExtrato": 103.5, "tipo": "FII"}, "HGRE11": {"dy": 0.85, "totalExtrato": 45.05, "tipo": "FII"}, "HSLG11": {"dy": 0.68, "totalExtrato": 102.0, "tipo": "FII"}, "ITSA4": {"dy": 0.02, "totalExtrato": 0.62, "tipo": "ACAO"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.1, "totalExtrato": 277.5, "tipo": "FII"}, "MFII11": {"dy": 1.07, "totalExtrato": 232.19, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 54.7, "tipo": "FII"}, "PCIP11": {"dy": 0.85, "totalExtrato": 333.2, "tipo": "FII"}, "PMLL11": {"dy": 0.86, "totalExtrato": 17.2, "tipo": "FII"}, "RBHG11": {"dy": 0.8, "totalExtrato": 442.4, "tipo": "FII"}, "TGAR11": {"dy": 1.0, "totalExtrato": 66.0, "tipo": "FII"}, "URPR11": {"dy": 0.4, "totalExtrato": 71.6, "tipo": "FII"}, "VISC11": {"dy": 0.81, "totalExtrato": 16.2, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 431.19, "tipo": "FII"}, "XPLG11": {"dy": 0.82, "totalExtrato": 28.7, "tipo": "FII"}, "XPML11": {"dy": 0.92, "totalExtrato": 46.92, "tipo": "FII"}}, "2025-11": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BMGB4": {"dy": 0.085036, "totalExtrato": 11.82, "tipo": "ACAO"}, "BRCR11": {"dy": 0.41, "totalExtrato": 259.12, "tipo": "FII"}, "CNES11": {"dy": 0.00791, "totalExtrato": 4.58, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 278.0, "tipo": "FII"}, "CPTS11": {"dy": 0.09, "totalExtrato": 18.0, "tipo": "FII"}, "DEVA11": {"dy": 0.33, "totalExtrato": 23.1, "tipo": "FII"}, "GAME11": {"dy": 0.094998, "totalExtrato": 207.76, "tipo": "FII"}, "HABT11": {"dy": 0.95, "totalExtrato": 561.45, "tipo": "FII"}, "HCTR11": {"dy": 0.29, "totalExtrato": 37.99, "tipo": "FII"}, "HFOF11": {"dy": 0.056, "totalExtrato": 205.52, "tipo": "FII"}, "HGBS11": {"dy": 0.15, "totalExtrato": 103.5, "tipo": "FII"}, "HGRE11": {"dy": 0.85, "totalExtrato": 45.05, "tipo": "FII"}, "HSLG11": {"dy": 0.7, "totalExtrato": 105.0, "tipo": "FII"}, "ISAE4": {"dy": 0.19125, "totalExtrato": 10.71, "tipo": "ACAO"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.09, "totalExtrato": 249.75, "tipo": "FII"}, "MFII11": {"dy": 1.07, "totalExtrato": 232.19, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 55.0, "tipo": "FII"}, "PCIP11": {"dy": 0.9, "totalExtrato": 400.5, "tipo": "FII"}, "PMLL11": {"dy": 0.86, "totalExtrato": 17.2, "tipo": "FII"}, "PSEC11": {"dy": 0.7, "totalExtrato": 158.9, "tipo": "FII"}, "RBHG11": {"dy": 0.8, "totalExtrato": 481.6, "tipo": "FII"}, "TAEE11": {"dy": 0.365, "totalExtrato": 48.18, "tipo": "ACAO"}, "TGAR11": {"dy": 1.0, "totalExtrato": 66.0, "tipo": "FII"}, "URPR11": {"dy": 0.35, "totalExtrato": 62.65, "tipo": "FII"}, "VISC11": {"dy": 0.81, "totalExtrato": 16.2, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 431.19, "tipo": "FII"}, "XPLG11": {"dy": 0.82, "totalExtrato": 28.7, "tipo": "FII"}, "XPML11": {"dy": 0.92, "totalExtrato": 46.92, "tipo": "FII"}}, "2025-12": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BBAS3": {"dy": 0.05, "totalExtrato": 1.9, "tipo": "ACAO"}, "BMGB4": {"dy": 0.085036, "totalExtrato": 11.82, "tipo": "ACAO"}, "BRCR11": {"dy": 0.41, "totalExtrato": 269.37, "tipo": "FII"}, "CNES11": {"dy": 0.010345, "totalExtrato": 5.99, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 320.0, "tipo": "FII"}, "CPTS11": {"dy": 0.09, "totalExtrato": 18.0, "tipo": "FII"}, "DEVA11": {"dy": 0.44, "totalExtrato": 30.8, "tipo": "FII"}, "GAME11": {"dy": 0.094998, "totalExtrato": 207.76, "tipo": "FII"}, "GOAU3": {"dy": 0.19, "totalExtrato": 13.87, "tipo": "ACAO"}, "HABT11": {"dy": 0.95, "totalExtrato": 608.95, "tipo": "FII"}, "HCTR11": {"dy": 0.29, "totalExtrato": 37.99, "tipo": "FII"}, "HFOF11": {"dy": 0.056, "totalExtrato": 205.52, "tipo": "FII"}, "HGBS11": {"dy": 0.15, "totalExtrato": 103.5, "tipo": "FII"}, "HGRE11": {"dy": 0.85, "totalExtrato": 45.05, "tipo": "FII"}, "HSLG11": {"dy": 0.72, "totalExtrato": 108.0, "tipo": "FII"}, "ISAE4": {"dy": 0.19125, "totalExtrato": 21.42, "tipo": "ACAO"}, "ITSA4": {"dy": 0.775161, "totalExtrato": 24.03, "tipo": "ACAO"}, "ITUB3": {"dy": 0.941667, "totalExtrato": 5.65, "tipo": "ACAO"}, "KNRI11": {"dy": 1.0, "totalExtrato": 81.0, "tipo": "FII"}, "KNSC11": {"dy": 0.09, "totalExtrato": 276.75, "tipo": "FII"}, "MFII11": {"dy": 1.07, "totalExtrato": 232.19, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 58.8, "tipo": "FII"}, "PCIP11": {"dy": 0.83, "totalExtrato": 369.35, "tipo": "FII"}, "PMLL11": {"dy": 0.86, "totalExtrato": 17.2, "tipo": "FII"}, "PSEC11": {"dy": 0.65, "totalExtrato": 147.55, "tipo": "FII"}, "RBHG11": {"dy": 0.8, "totalExtrato": 481.6, "tipo": "FII"}, "TGAR11": {"dy": 1.0, "totalExtrato": 66.0, "tipo": "FII"}, "UNIP6": {"dy": 3.238372, "totalExtrato": 835.5, "tipo": "ACAO"}, "URPR11": {"dy": 0.35, "totalExtrato": 62.65, "tipo": "FII"}, "VISC11": {"dy": 0.81, "totalExtrato": 16.2, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 431.19, "tipo": "FII"}, "XPLG11": {"dy": 0.82, "totalExtrato": 28.7, "tipo": "FII"}, "XPML11": {"dy": 0.92, "totalExtrato": 46.92, "tipo": "FII"}}, "2026-01": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BMGB4": {"dy": 0.124964, "totalExtrato": 17.37, "tipo": "ACAO"}, "BRCR11": {"dy": 0.41, "totalExtrato": 269.37, "tipo": "FII"}, "CNES11": {"dy": 0.002919, "totalExtrato": 1.69, "tipo": "FII"}, "CPTI11": {"dy": 1.0, "totalExtrato": 380.0, "tipo": "FII"}, "CPTS11": {"dy": 0.09, "totalExtrato": 18.0, "tipo": "FII"}, "DEVA11": {"dy": 0.4, "totalExtrato": 28.0, "tipo": "FII"}, "GAME11": {"dy": 0.094998, "totalExtrato": 207.76, "tipo": "FII"}, "HABT11": {"dy": 0.95, "totalExtrato": 608.95, "tipo": "FII"}, "HCTR11": {"dy": 0.4, "totalExtrato": 52.4, "tipo": "FII"}, "HFOF11": {"dy": 0.056, "totalExtrato": 205.52, "tipo": "FII"}, "HGBS11": {"dy": 0.15, "totalExtrato": 103.5, "tipo": "FII"}, "HGRE11": {"dy": 1.5, "totalExtrato": 79.5, "tipo": "FII"}, "HSLG11": {"dy": 0.72, "totalExtrato": 108.0, "tipo": "FII"}, "IRIM11": {"dy": 0.89, "totalExtrato": 67.64, "tipo": "FII"}, "ISAE4": {"dy": 0.213036, "totalExtrato": 11.93, "tipo": "ACAO"}, "ITSA4": {"dy": 0.02, "totalExtrato": 0.62, "tipo": "ACAO"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.25, "totalExtrato": 101.25, "tipo": "FII"}, "KNSC11": {"dy": 0.09, "totalExtrato": 299.25, "tipo": "FII"}, "MFII11": {"dy": 1.07, "totalExtrato": 232.19, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 59.4, "tipo": "FII"}, "PCIP11": {"dy": 0.88, "totalExtrato": 422.4, "tipo": "FII"}, "PMLL11": {"dy": 0.86, "totalExtrato": 17.2, "tipo": "FII"}, "PSEC11": {"dy": 0.65, "totalExtrato": 147.55, "tipo": "FII"}, "RBHG11": {"dy": 0.8, "totalExtrato": 530.4, "tipo": "FII"}, "TGAR11": {"dy": 1.0, "totalExtrato": 66.0, "tipo": "FII"}, "URPR11": {"dy": 0.35, "totalExtrato": 62.65, "tipo": "FII"}, "VISC11": {"dy": 0.81, "totalExtrato": 16.2, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 431.19, "tipo": "FII"}, "XPLG11": {"dy": 0.82, "totalExtrato": 28.7, "tipo": "FII"}, "XPML11": {"dy": 0.92, "totalExtrato": 46.92, "tipo": "FII"}}, "2026-02": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BRCR11": {"dy": 0.41, "totalExtrato": 269.37, "tipo": "FII"}, "CPTI11": {"dy": 1.15, "totalExtrato": 437.0, "tipo": "FII"}, "CPTS11": {"dy": 0.09, "totalExtrato": 18.0, "tipo": "FII"}, "DEVA11": {"dy": 0.3, "totalExtrato": 21.0, "tipo": "FII"}, "GAME11": {"dy": 0.1, "totalExtrato": 218.7, "tipo": "FII"}, "HABT11": {"dy": 0.95, "totalExtrato": 608.95, "tipo": "FII"}, "HCTR11": {"dy": 0.27, "totalExtrato": 35.37, "tipo": "FII"}, "HFOF11": {"dy": 0.06, "totalExtrato": 220.2, "tipo": "FII"}, "HGBS11": {"dy": 0.16, "totalExtrato": 110.4, "tipo": "FII"}, "HGRE11": {"dy": 0.85, "totalExtrato": 45.05, "tipo": "FII"}, "HSLG11": {"dy": 0.72, "totalExtrato": 108.0, "tipo": "FII"}, "IRIM11": {"dy": 0.69, "totalExtrato": 52.44, "tipo": "FII"}, "ISAE4": {"dy": 0.213036, "totalExtrato": 11.93, "tipo": "ACAO"}, "ITUB3": {"dy": 0.016181, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 0.88, "totalExtrato": 71.28, "tipo": "FII"}, "KNSC11": {"dy": 0.09, "totalExtrato": 299.25, "tipo": "FII"}, "MFII11": {"dy": 1.05, "totalExtrato": 227.85, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 59.4, "tipo": "FII"}, "PCIP11": {"dy": 0.83, "totalExtrato": 398.4, "tipo": "FII"}, "PMLL11": {"dy": 1.0, "totalExtrato": 20.0, "tipo": "FII"}, "PSEC11": {"dy": 0.65, "totalExtrato": 147.55, "tipo": "FII"}, "RBHG11": {"dy": 0.8, "totalExtrato": 530.4, "tipo": "FII"}, "TGAR11": {"dy": 0.71, "totalExtrato": 46.86, "tipo": "FII"}, "URPR11": {"dy": 0.35, "totalExtrato": 62.65, "tipo": "FII"}, "VISC11": {"dy": 0.84, "totalExtrato": 16.8, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 431.19, "tipo": "FII"}, "XPLG11": {"dy": 0.82, "totalExtrato": 28.7, "tipo": "FII"}, "XPML11": {"dy": 0.92, "totalExtrato": 46.92, "tipo": "FII"}}, "2026-03": {"ARRI11": {"dy": 0.09, "totalExtrato": 38.7, "tipo": "FII"}, "BRCR11": {"dy": 0.41, "totalExtrato": 269.37, "tipo": "FII"}, "CNES11": {"dy": 0.02285, "totalExtrato": 13.23, "tipo": "FII"}, "CPTI11": {"dy": 1.15, "totalExtrato": 437.0, "tipo": "FII"}, "CPTS11": {"dy": 0.09, "totalExtrato": 18.0, "tipo": "FII"}, "DEVA11": {"dy": 0.3, "totalExtrato": 21.0, "tipo": "FII"}, "GAME11": {"dy": 0.1, "totalExtrato": 218.7, "tipo": "FII"}, "GOAU3": {"dy": 0.05, "totalExtrato": 4.85, "tipo": "ACAO"}, "HABT11": {"dy": 0.95, "totalExtrato": 608.95, "tipo": "FII"}, "HCTR11": {"dy": 0.26, "totalExtrato": 34.06, "tipo": "FII"}, "HFOF11": {"dy": 0.06, "totalExtrato": 220.2, "tipo": "FII"}, "HGBS11": {"dy": 0.17, "totalExtrato": 117.3, "tipo": "FII"}, "HGRE11": {"dy": 0.85, "totalExtrato": 45.05, "tipo": "FII"}, "HSLG11": {"dy": 0.72, "totalExtrato": 108.0, "tipo": "FII"}, "IRIM11": {"dy": 0.8, "totalExtrato": 60.8, "tipo": "FII"}, "ISAE4": {"dy": 0.213036, "totalExtrato": 11.93, "tipo": "ACAO"}, "ITSA4": {"dy": 0.015484, "totalExtrato": 0.48, "tipo": "ACAO"}, "ITUB3": {"dy": 0.165, "totalExtrato": 0.99, "tipo": "ACAO"}, "KNRI11": {"dy": 1.1, "totalExtrato": 89.1, "tipo": "FII"}, "KNSC11": {"dy": 0.08, "totalExtrato": 266.0, "tipo": "FII"}, "MFII11": {"dy": 1.05, "totalExtrato": 227.85, "tipo": "FII"}, "MXRF11": {"dy": 0.1, "totalExtrato": 59.4, "tipo": "FII"}, "PCIP11": {"dy": 0.8, "totalExtrato": 384.0, "tipo": "FII"}, "PMLL11": {"dy": 1.0, "totalExtrato": 20.0, "tipo": "FII"}, "PSEC11": {"dy": 0.65, "totalExtrato": 147.55, "tipo": "FII"}, "RBHG11": {"dy": 0.83, "totalExtrato": 550.29, "tipo": "FII"}, "TGAR11": {"dy": 0.72, "totalExtrato": 47.52, "tipo": "FII"}, "URPR11": {"dy": 0.35, "totalExtrato": 62.65, "tipo": "FII"}, "VISC11": {"dy": 0.84, "totalExtrato": 16.8, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 431.19, "tipo": "FII"}, "XPLG11": {"dy": 0.82, "totalExtrato": 28.7, "tipo": "FII"}, "XPML11": {"dy": 0.92, "totalExtrato": 46.92, "tipo": "FII"}}, "2026-04": {"ARRI11": {"dy": 0.07, "totalExtrato": 30.1, "tipo": "FII"}, "BRCR11": {"dy": 0.41, "totalExtrato": 269.37, "tipo": "FII"}, "CNES11": {"dy": 0.008739, "totalExtrato": 5.06, "tipo": "FII"}, "CPTI11": {"dy": 1.15, "totalExtrato": 437.0, "tipo": "FII"}, "CPTS11": {"dy": 0.09, "totalExtrato": 18.0, "tipo": "FII"}, "DEVA11": {"dy": 0.3, "totalExtrato": 21.0, "tipo": "FII"}, "GAME11": {"dy": 0.1, "totalExtrato": 218.7, "tipo": "FII"}, "HABT11": {"dy": 0.95, "totalExtrato": 608.95, "tipo": "FII"}, "HCTR11": {"dy": 0.23, "totalExtrato": 30.13, "tipo": "FII"}, "HFOF11": {"dy": 0.06, "totalExtrato": 220.2, "tipo": "FII"}, "HGBS11": {"dy": 0.17, "totalExtrato": 117.3, "tipo": "FII"}, "HGRE11": {"dy": 0.85, "totalExtrato": 45.05, "tipo": "FII"}, "HSLG11": {"dy": 0.72, "totalExtrato": 108.0, "tipo": "FII"}, "IRIM11": {"dy": 0.75, "totalExtrato": 57.0, "tipo": "FII"}, "ISAE4": {"dy": 0.14125, "totalExtrato": 23.73, "tipo": "ACAO"}, "ITSA4": {"dy": 0.02, "totalExtrato": 0.62, "tipo": "ACAO"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO"}, "KNRI11": {"dy": 1.1, "totalExtrato": 89.1, "tipo": "FII"}, "KNSC11": {"dy": 0.11, "totalExtrato": 365.75, "tipo": "FII"}, "MFII11": {"dy": 1.06, "totalExtrato": 230.02, "tipo": "FII"}, "MXRF11": {"dy": 0.094983, "totalExtrato": 56.42, "tipo": "FII"}, "PCIP11": {"dy": 0.85, "totalExtrato": 408.0, "tipo": "FII"}, "PMLL11": {"dy": 1.0, "totalExtrato": 20.0, "tipo": "FII"}, "PSEC11": {"dy": 0.65, "totalExtrato": 147.55, "tipo": "FII"}, "RBHG11": {"dy": 0.85, "totalExtrato": 563.55, "tipo": "FII"}, "TGAR11": {"dy": 0.72, "totalExtrato": 47.52, "tipo": "FII"}, "URPR11": {"dy": 0.35, "totalExtrato": 62.65, "tipo": "FII"}, "VISC11": {"dy": 0.84, "totalExtrato": 16.8, "tipo": "FII"}, "VRTM11": {"dy": 0.09, "totalExtrato": 431.19, "tipo": "FII"}, "XPLG11": {"dy": 0.82, "totalExtrato": 28.7, "tipo": "FII"}, "XPML11": {"dy": 0.92, "totalExtrato": 46.92, "tipo": "FII"}}, "2026-05": {"ARRI11": {"dy": 0.07, "totalExtrato": 30.1, "tipo": "FII", "dataPag": "2026-05-08"}, "BRCR11": {"dy": 0.41, "totalExtrato": 269.37, "tipo": "FII", "dataPag": "2026-05-15"}, "CPTI11": {"dy": 1.15, "totalExtrato": 437.0, "tipo": "FII", "dataPag": "2026-05-15"}, "CPTS11": {"dy": 0.09, "totalExtrato": 18.0, "tipo": "FII", "dataPag": "2026-05-20"}, "DEVA11": {"dy": 0.3, "totalExtrato": 21.0, "tipo": "FII", "dataPag": "2026-05-15"}, "HABT11": {"dy": 0.95, "totalExtrato": 608.95, "tipo": "FII", "dataPag": "2026-05-12"}, "HCTR11": {"dy": 0.26, "totalExtrato": 34.06, "tipo": "FII", "dataPag": "2026-05-15"}, "HFOF11": {"dy": 0.06, "totalExtrato": 220.2, "tipo": "FII", "dataPag": "2026-05-15"}, "HGBS11": {"dy": 0.17, "totalExtrato": 117.3, "tipo": "FII", "dataPag": "2026-05-15"}, "HGRE11": {"dy": 0.85, "totalExtrato": 45.05, "tipo": "FII", "dataPag": "2026-05-15"}, "HSLG11": {"dy": 0.73, "totalExtrato": 109.5, "tipo": "FII", "dataPag": "2026-05-15"}, "IRIM11": {"dy": 0.9, "totalExtrato": 68.4, "tipo": "FII", "dataPag": "2026-05-19"}, "ITUB3": {"dy": 0.016667, "totalExtrato": 0.05, "tipo": "ACAO", "dataPag": "2026-05-04"}, "KNRI11": {"dy": 1.1, "totalExtrato": 89.1, "tipo": "FII", "dataPag": "2026-05-15"}, "KNSC11": {"dy": 0.1, "totalExtrato": 332.5, "tipo": "FII", "dataPag": "2026-05-14"}, "MFII11": {"dy": 0.91, "totalExtrato": 197.47, "tipo": "FII", "dataPag": "2026-05-15"}, "MXRF11": {"dy": 0.1, "totalExtrato": 59.4, "tipo": "FII", "dataPag": "2026-05-15"}, "PCIP11": {"dy": 0.89, "totalExtrato": 427.2, "tipo": "FII", "dataPag": "2026-05-18"}, "PMLL11": {"dy": 1.0, "totalExtrato": 20.0, "tipo": "FII", "dataPag": "2026-05-15"}, "PSEC11": {"dy": 0.55, "totalExtrato": 124.85, "tipo": "FII", "dataPag": "2026-05-18"}, "RBHG11": {"dy": 0.8, "totalExtrato": 530.4, "tipo": "FII", "dataPag": "2026-05-15"}, "TGAR11": {"dy": 0.72, "totalExtrato": 47.52, "tipo": "FII", "dataPag": "2026-05-15"}, "URPR11": {"dy": 0.3, "totalExtrato": 53.7, "tipo": "FII", "dataPag": "2026-05-15"}, "VISC11": {"dy": 0.84, "totalExtrato": 16.8, "tipo": "FII", "dataPag": "2026-05-15"}, "VRTM11": {"dy": 0.09, "totalExtrato": 431.19, "tipo": "FII", "dataPag": "2026-05-15"}, "XPLG11": {"dy": 0.82, "totalExtrato": 28.7, "tipo": "FII", "dataPag": "2026-05-15"}, "CNES11": {"dy": 0.007418, "totalExtrato": 4.3, "tipo": "FII", "dataPag": "2026-05-28"}, "GAME11": {"dy": 0.1, "totalExtrato": 218.7, "tipo": "FII", "dataPag": "2026-05-22"}, "BMGB4": {"dy": 0.1, "totalExtrato": 13.9, "tipo": "ACAO", "dataPag": "2026-05-21"}, "TAEE11": {"dy": 0.9089, "totalExtrato": 39.99, "tipo": "ACAO", "dataPag": "2026-05-27"}, "XPML11": {"dy": 0.92, "totalExtrato": 46.92, "tipo": "FII", "dataPag": "2026-05-25"}}, "2021-02": {"CPTS11": {"dy": 1.05, "totalExtrato": 52.5, "tipo": "FII"}}, "2021-03": {"CPTS11": {"dy": 1.05, "totalExtrato": 52.5, "tipo": "FII"}, "MXRF11": {"dy": 0.08, "totalExtrato": 80.0, "tipo": "FII"}}}};

const confirmedData = {"buscadoEm": "2026-05-22", "fonte": "statusinvest", "thisMonth": "2026-05", "nextMonth": "2026-06", "confirmed": {"2026-05": {"ARRI11": {"dy": 0.07, "dataPag": "2026-05-08", "dataEx": "2026-04-30"}, "BRCR11": {"dy": 0.41, "dataPag": "2026-05-15", "dataEx": "2026-05-08"}, "CNES11": {"dy": 0.007418, "dataPag": "2026-05-28", "dataEx": "2026-05-21"}, "CPTS11": {"dy": 0.09, "dataPag": "2026-05-20", "dataEx": "2026-05-13"}, "HABT11": {"dy": 0.95, "dataPag": "2026-05-12", "dataEx": "2026-04-30"}, "HGBS11": {"dy": 0.17, "dataPag": "2026-05-15", "dataEx": "2026-04-30"}, "IRIM11": {"dy": 0.9, "dataPag": "2026-05-19", "dataEx": "2026-05-12"}, "KNRI11": {"dy": 1.1, "dataPag": "2026-05-15", "dataEx": "2026-04-30"}, "KNSC11": {"dy": 0.1, "dataPag": "2026-05-14", "dataEx": "2026-04-30"}, "MXRF11": {"dy": 0.1, "dataPag": "2026-05-15", "dataEx": "2026-04-30"}, "PMLL11": {"dy": 1.0, "dataPag": "2026-05-15", "dataEx": "2026-04-30"}, "PSEC11": {"dy": 0.55, "dataPag": "2026-05-18", "dataEx": "2026-05-11"}, "VISC11": {"dy": 0.84, "dataPag": "2026-05-15", "dataEx": "2026-04-30"}, "CPTI11": {"dy": 1.15, "dataPag": "2026-05-15", "dataEx": "2026-04-30"}, "PCIP11": {"dy": 0.89, "dataPag": "2026-05-18", "dataEx": "2026-05-11"}, "RBHG11": {"dy": 0.8, "dataPag": "2026-05-15", "dataEx": "2026-04-30"}, "VRTM11": {"dy": 0.09, "dataPag": "2026-05-15", "dataEx": "2026-04-30"}, "HFOF11": {"dy": 0.06, "dataPag": "2026-05-15", "dataEx": "2026-04-30"}, "HSLG11": {"dy": 0.73, "dataPag": "2026-05-15", "dataEx": "2026-04-30"}, "GAME11": {"dy": 0.1, "dataPag": "2026-05-22", "dataEx": "2026-05-12"}, "XPLG11": {"dy": 0.82, "dataPag": "2026-05-15", "dataEx": "2026-04-30"}, "HCTR11": {"dy": 0.26, "dataPag": "2026-05-15", "dataEx": "2026-05-08"}, "URPR11": {"dy": 0.3, "dataPag": "2026-05-15", "dataEx": "2026-04-30"}, "DEVA11": {"dy": 0.3, "dataPag": "2026-05-15", "dataEx": "2026-05-08"}, "HGRE11": {"dy": 0.85, "dataPag": "2026-05-15", "dataEx": "2026-04-30"}, "XPML11": {"dy": 0.92, "dataPag": "2026-05-25", "dataEx": "2026-05-18"}, "MFII11": {"dy": 0.91, "dataPag": "2026-05-15", "dataEx": "2026-04-30"}, "TGAR11": {"dy": 0.72, "dataPag": "2026-05-15", "dataEx": "2026-04-30"}, "TAEE11": {"dy": 0.9089, "dataPag": "2026-05-27", "dataEx": "2026-04-29"}, "BMGB4": {"dy": 0.1, "dataPag": "2026-05-21", "dataEx": "2026-05-11"}, "ITUB3": {"dy": 0.018182, "dataPag": "2026-05-04", "dataEx": "2026-03-31"}}, "2026-06": {"GOAU3": {"dy": 0.08, "dataPag": "2026-06-10", "dataEx": "2026-05-13"}, "BBAS3": {"dy": 0.059684, "dataPag": "2026-06-11", "dataEx": "2026-06-01"}}}};
window.monthlyData = monthlyData;



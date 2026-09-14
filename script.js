const svgNS = "http://www.w3.org/2000/svg";
const xlinkNS = "http://www.w3.org/1999/xlink";

const icDataMain = [

  // Тип 'IC': координаты 'x','y' верхнего левого угла первого вывода,
  // количество выводов, угол поворота (0 или 90)
  [ 'U1',   'U1', 'IC', 168.642, 113.141, 40,  0, ],
  [ 'U2',   'U2', 'IC', 191.501, 113.141, 40,  0, ],
  [ 'U3',   'U3', 'IC',  53.897, 140.891, 64,  0, ],
  [ 'U4',   'U4', 'IC',  92.442, 105.522, 40,  0, ],
  [ 'U5',   'U5', 'IC', 206.742, 146.161, 18,  0, ],
  [ 'U6',   'U6', 'IC', 290.562, 115.681, 32,  0, ],
  [ 'U7',   'U7', 'IC', 313.421, 115.681, 32,  0, ],
  [ 'U8_9_10_11',   'U8', 'IC',   8.622,  82.662, 18, 90, ],
  [ 'U8_9_10_11',   'U9', 'IC',   8.622, 113.141, 18, 90, ],
  [ 'U8_9_10_11',   'U10', 'IC',   8.622,  97.901, 18, 90, ],
  [ 'U8_9_10_11',   'U11', 'IC',   8.622, 128.381, 18, 90, ],
  [ 'U12_13_14',    'U12', 'IC', 145.781, 113.141, 20,  0, ],
  [ 'U12_13_14',    'U13', 'IC', 145.781, 146.161, 20,  0, ],
  [ 'U12_13_14',    'U14', 'IC', 161.022, 146.161, 20,  0, ],
  [ 'U15_16_17_18', 'U15', 'IC', 234.681, 102.981, 16, 90, ],
  [ 'U15_16_17_18', 'U16', 'IC', 234.681, 138.542, 16, 90, ],
  [ 'U15_16_17_18', 'U17', 'IC', 234.681, 123.302, 16, 90, ],
  [ 'U15_16_17_18', 'U18', 'IC', 234.681, 153.781, 16, 90, ],
  [ 'U19_20_21',    'U19', 'IC', 267.702,  66.151, 20, 90, ],
  [ 'U19_20_21',    'U20', 'IC', 300.721,  67.421, 20, 90, ],
  [ 'U19_20_21',    'U21', 'IC', 201.661,  67.421, 20, 90, ],
  [ 'U22',          'U22', 'IC', 206.742, 100.442, 20,  0, ],
  [ 'U23_24',       'U23', 'IC', 221.982, 100.442, 20,  0, ],
  [ 'U23_24',       'U24', 'IC', 166.101,  34.401, 20, 90, ],
  [ 'U25_26',       'U25', 'IC', 234.681,  72.501, 20, 90, ],
  [ 'U25_26',       'U26', 'IC', 234.681,  87.742, 20, 90, ],
  [ 'U27',          'U27', 'IC', 221.982, 146.161, 16,  0, ],
  [ 'U28_29',       'U28', 'IC',  77.201, 133.462, 16,  0, ],
  [ 'U28_29',       'U29', 'IC',  92.442, 133.462, 16,  0, ],
  [ 'U30_31',       'U30', 'IC', 176.262, 141.082, 16,  0, ],
  [ 'U30_31',       'U31', 'IC', 191.501, 141.082, 16,  0, ],
  [ 'U32',          'U32', 'IC', 321.041, 143.621, 16,  0, ],
  [ 'U33',          'U33', 'IC', 199.121,  34.401, 14, 90, ],
  [ 'U34_35_36',    'U34', 'IC', 133.082,  77.582, 14,  0, ],
  [ 'U34_35_36',    'U35', 'IC', 120.381,  77.582, 14,  0, ],
  [ 'U34_35_36',    'U36', 'IC', 107.681,  77.582, 14,  0, ],
  [ 'U37_38_39',    'U37', 'IC', 133.081, 133.462, 14,  0, ],
  [ 'U37_38_39',    'U38', 'IC', 120.381, 133.462, 14,  0, ],
  [ 'U37_38_39',    'U39', 'IC', 120.381, 105.522, 14,  0, ],
  [ 'U40_41',       'U40', 'IC', 133.522, 105.522, 14,  0, ],
  [ 'U40_41',       'U41', 'IC', 267.702, 113.141, 14,  0, ],
  [ 'U42',          'U42', 'IC', 107.681, 133.462, 14,  0, ],
  [ 'U43',          'U43', 'IC',   8.622,  57.261, 14, 90, ],
  [ 'U44',          'U44', 'IC', 107.681, 105.522, 14,  0, ],
  [ 'U45',          'U45', 'IC', 145.781,  77.582, 14,  0, ],
  [ 'U46',          'U46', 'IC', 267.702, 143.621, 16,  0, ],
  [ 'U47',          'U47', 'IC',  41.642,  62.341, 24, 90, ],
  [ 'U48',          'U48', 'IC', 100.061,  47.102,  8, 90, ],
  [ 'U49',          'U49', 'IC', 135.621,  47.102,  8, 90, ],


  // Тип 'C': форма корпуса 'A'-'E', коордтната 'x' левого края,
  // координата 'y' верхнего края, угол поворота
  [ 'C1_58',   'C1', 'C', 'E', 158.037, 117.777,  0, ],
  [ 'C1_58',   'C2', 'C', 'E', 180.897, 117.777,  0, ],
  [ 'C1_58',   'C3', 'C', 'E',  41.197, 143.177,  0, ],
  [ 'C1_58',   'C4', 'C', 'E',  81.837, 110.157,  0, ],
  [ 'C1_58',   'C5', 'C', 'E', 199.947, 150.797,  0, ],
  [ 'C1_58',   'C6', 'C', 'E', 279.957, 120.317,  0, ],
  [ 'C1_58',   'C7', 'C', 'E', 302.817, 120.317,  0, ],
  [ 'C1_58',   'C8', 'C', 'E',   3.097,  75.867, 90, ],
  [ 'C1_58',   'C9', 'C', 'E',   3.097, 106.347, 90, ],
  [ 'C1_58',  'C10', 'C', 'E',   3.097,  91.107, 90, ],
  [ 'C1_58',  'C11', 'C', 'E',   3.097, 121.587, 90, ],
  [ 'C1_58',  'C12', 'C', 'E', 138.987, 117.777,  0, ],
  [ 'C1_58',  'C13', 'C', 'E', 138.987, 150.797,  0, ],
  [ 'C1_58',  'C14', 'C', 'E', 154.227, 150.797,  0, ],
  [ 'C1_58',  'C15', 'C', 'E', 229.157,  96.187, 90, ],
  [ 'C1_58',  'C16', 'C', 'E', 229.157, 131.747, 90, ],
  [ 'C1_58',  'C17', 'C', 'E', 229.157, 116.507, 90, ],
  [ 'C1_58',  'C18', 'C', 'E', 229.157, 146.987, 90, ],
  [ 'C1_58',  'C19', 'C', 'E', 262.177,  59.357, 90, ],
  [ 'C1_58',  'C20', 'C', 'E', 295.197,  60.627, 90, ],
  [ 'C1_58',  'C21', 'C', 'E', 196.137,  60.627, 90, ],
  [ 'C1_58',  'C22', 'C', 'E', 199.947, 105.077,  0, ],
  [ 'C1_58',  'C23', 'C', 'E', 215.187, 105.077,  0, ],
  [ 'C1_58',  'C24', 'C', 'E', 160.577,  27.607, 90, ],
  [ 'C1_58',  'C25', 'C', 'E', 229.157,  65.707, 90, ],
  [ 'C1_58',  'C26', 'C', 'E', 229.157,  80.947, 90, ],
  [ 'C1_58',  'C27', 'C', 'E', 215.187, 150.797,  0, ],
  [ 'C1_58',  'C28', 'C', 'E',  70.407, 138.097,  0, ],
  [ 'C1_58',  'C29', 'C', 'E',  85.647, 138.097,  0, ],
  [ 'C1_58',  'C30', 'C', 'E', 184.707, 145.717,  0, ],
  [ 'C1_58',  'C31', 'C', 'E', 169.467, 145.717,  0, ],
  [ 'C1_58',  'C32', 'C', 'E', 314.247, 148.257,  0, ],
  [ 'C1_58',  'C33', 'C', 'E', 193.597,  27.607, 90, ],
  [ 'C1_58',  'C34', 'C', 'E', 126.287,  82.217,  0, ],
  [ 'C1_58',  'C35', 'C', 'E', 113.587,  82.217,  0, ],
  [ 'C1_58',  'C36', 'C', 'E', 100.887,  82.217,  0, ],
  [ 'C1_58',  'C37', 'C', 'E', 126.287, 138.097,  0, ],
  [ 'C1_58',  'C38', 'C', 'E', 113.587, 138.097,  0, ],
  [ 'C1_58',  'C39', 'C', 'E', 113.587, 110.157,  0, ],
  [ 'C1_58',  'C40', 'C', 'E', 126.287, 110.157,  0, ],
  [ 'C1_58',  'C41', 'C', 'E', 260.907, 119.047,  0, ],
  [ 'C1_58',  'C42', 'C', 'E', 100.887, 138.097,  0, ],
  [ 'C1_58',  'C43', 'C', 'E',   3.097,  50.467, 90, ],
  [ 'C1_58',  'C44', 'C', 'E', 100.887, 110.157,  0, ],
  [ 'C1_58',  'C45', 'C', 'E', 138.987,  82.217,  0, ],
  [ 'C1_58',  'C46', 'C', 'E', 272.337, 135.557, 90, ],
  [ 'C1_58',  'C47', 'C', 'E',  69.137,  66.977, 90, ],
  [ 'C1_58',  'C48', 'C', 'E',  91.997,  40.307, 90, ],
  [ 'C1_58',  'C49', 'C', 'E', 130.097,  40.307, 90, ],
  [ 'C1_58',  'C50', 'C', 'E',  53.897,  40.307, 90, ],
  [ 'C1_58',  'C51', 'C', 'E',  48.817,  66.977, 90, ],
  [ 'C1_58',  'C52', 'C', 'E',  46.277,  66.977, 90, ],
  [ 'C1_58',  'C53', 'C', 'E',  51.357,  66.977, 90, ],
  [ 'C1_58',  'C54', 'C', 'E',  58.977,  66.977, 90, ],
  [ 'C1_58',  'C55', 'C', 'E',  79.297,  40.307, 90, ],
  [ 'C1_58',  'C56', 'C', 'E',  33.577,  75.867, 90, ],
  [ 'C1_58',  'C57', 'C', 'E',  94.537,  40.307, 90, ],
  [ 'C1_58',  'C58', 'C', 'E',  56.437, 112.697, 90, ],
  [ 'C59_64', 'C59', 'C', 'A',  72.772,  27.432,  0, ],
  [ 'C59_64', 'C60', 'C', 'A',  98.172,  27.432,  0, ],
  [ 'C59_64', 'C61', 'C', 'A',  85.472,  27.432,  0, ],
  [ 'C59_64', 'C62', 'C', 'A',  34.672,  29.972,  0, ],
  [ 'C59_64', 'C63', 'C', 'A',  60.072,  27.432,  0, ],
  [ 'C59_64', 'C64', 'C', 'A',  47.372,  28.702,  0, ],
  [ 'C65_67', 'C65', 'C', 'C',   6.043,  38.173,  0, ],
  [ 'C65_67', 'C66', 'C', 'C',  13.663,  38.173,  0, ],
  [ 'C65_67', 'C67', 'C', 'C',  21.283,  38.173,  0, ],
  [ 'C68_70', 'C68', 'C', 'E', 292.657, 120.317,  0, ],
  [ 'C68_70', 'C69', 'C', 'E',  65.327,  66.977, 90, ],
  [ 'C68_70', 'C70', 'C', 'E',  41.197, 148.257,  0, ],
  [ 'C71_71', 'C71', 'C', 'B', 146.394,  32.474,  0, ],
  [ 'C71_71', 'C72', 'C', 'B', 110.834,  28.664,  0, ],
  [ 'C71_71', 'C73', 'C', 'B', 126.074,  52.794,  0, ],
  [ 'C71_71', 'C74', 'C', 'B', 141.314,  52.794,  0, ],
  [ 'C71_71', 'C75', 'C', 'B', 148.934,  52.794,  0, ],
  [ 'C71_71', 'C76', 'C', 'B',  82.894,  48.984,  0, ],
  [ 'C71_71', 'C77', 'C', 'B',  70.194,  43.904,  0, ],
  [ 'C78',    'C78', 'C', 'B', 133.694,  52.794,  0, ],
  [ 'C79_80', 'C79', 'C', 'E', 119.937,  40.307, 90, ],
  [ 'C79_80', 'C80', 'C', 'E', 142.797,  30.147, 90, ],
  [ 'C81',    'C81', 'C', 'E', 112.317,  40.307, 90, ],
  [ 'C82_84', 'C82', 'C', 'E',  41.197,  66.977, 90, ],
  [ 'C82_84', 'C83', 'C', 'E',  43.737,  66.977, 90, ],
  [ 'C82_84', 'C84', 'C', 'E',  38.657,  66.977, 90, ],
  [ 'C85',    'C85', 'C', 'E',  61.517,  66.977, 90, ],
  [ 'C86_87', 'C86', 'C', 'E', 197.407, 148.257, 90, ],
  [ 'C86_87', 'C87', 'C', 'E', 192.327, 148.257, 90, ],
  [ 'C88_90', 'C88', 'C', 'D', 185.088, 148.638,  0, ],
  [ 'C88_90', 'C89', 'C', 'D',  11.098, 139.748,  0, ],
  [ 'C88_90', 'C90', 'C', 'D',  18.718,  66.088,  0, ],
  [ 'C91',    'C91', 'C', 'E',  61.517,  40.307, 90, ],
  [ 'C92_93', 'C92', 'C', 'E',  10.717, 146.987,  0, ],
  [ 'C92_93', 'C93', 'C', 'E',  18.337,  63.167,  0, ],
  [ 'C94',    'C94', 'C', 'E',  56.437,  66.977, 90, ],

  // Тип 'R': коордтнаты 'x' и 'y' левого верхнего закругления, угол поворота
  [ 'R1',     'R1', 'R',   5.637,   63.929, 90, ],
  [ 'R2_3',   'R2', 'R',  25.957,  142.669, 90, ],
  [ 'R2_3',   'R3', 'R', 147.877,   41.069, 90, ],
  [ 'R4',     'R4', 'R', 158.037,   41.069, 90, ],
  [ 'R5_6',   'R5', 'R', 194.867,  147.749, 90, ],
  [ 'R5_6',   'R6', 'R', 210.107,  142.669, 90, ],
  [ 'R7_8',   'R7', 'R',  76.757,   41.069, 90, ],
  [ 'R7_8',   'R8', 'R', 117.397,   28.369, 90, ],
  [ 'R9',     'R9', 'R',  56.437,   41.069, 90, ],
  [ 'R10',    'R10', 'R', 116.889,   54.277,  0, ],
  [ 'R11_14', 'R11', 'R', 150.417,   41.069, 90, ],
  [ 'R11_14', 'R12', 'R', 152.957,   41.069, 90, ],
  [ 'R11_14', 'R13', 'R', 297.229,  127.937,  0, ],
  [ 'R11_14', 'R14', 'R',  51.357,   14.399, 90, ],
  [ 'R15',    'R15', 'R', 114.857,   41.069, 90, ],
  [ 'R16_22', 'R16', 'R', 116.889,   51.737,  0, ],
  [ 'R16_22', 'R17', 'R', 116.889,   49.197,  0, ],
  [ 'R16_22', 'R18', 'R', 125.017,   41.069, 90, ],
  [ 'R16_22', 'R19', 'R', 125.017,   28.369, 90, ],
  [ 'R16_22', 'R20', 'R', 155.497,   41.069, 90, ],
  [ 'R16_22', 'R21', 'R', 101.649,   54.277,  0, ],
  [ 'R16_22', 'R22', 'R', 101.649,   51.737,  0, ],
  [ 'R23_24', 'R23', 'R', 155.497,   28.369, 90, ],
  [ 'R23_24', 'R24', 'R', 152.957,   28.369, 90, ],
  [ 'R25_26', 'R25', 'R',  53.897,   69.009, 90, ],
  [ 'R25_26', 'R26', 'R',  86.917,   41.069, 90, ],
  [ 'R27_33', 'R27', 'R',  33.577,   58.849, 90, ],
  [ 'R27_33', 'R28', 'R',  36.117,   58.849, 90, ],
  [ 'R27_33', 'R29', 'R', 101.649,  112.697,  0, ],
  [ 'R27_33', 'R30', 'R',   8.177,   63.929, 90, ],
  [ 'R27_33', 'R31', 'R', 127.557,   41.069, 90, ],
  [ 'R27_33', 'R32', 'R', 122.477,   41.069, 90, ],
  [ 'R27_33', 'R33', 'R',  53.897,   14.399, 90, ],
  [ 'R34',    'R34', 'R',  84.377,   41.069, 90, ],
  [ 'R35',    'R35', 'R',  25.957,   14.399, 90, ],
  [ 'R36',    'R36', 'R',  23.417,   14.399, 90, ],
  [ 'R37_42', 'R37', 'R',  22.909,  131.747,  0, ],
  [ 'R37_42', 'R38', 'R',  10.209,  135.557,  0, ],
  [ 'R37_42', 'R39', 'R',  10.209,  131.747,  0, ],
  [ 'R37_42', 'R40', 'R',  22.909,  135.557,  0, ],
  [ 'R37_42', 'R41', 'R', 119.937,   28.369, 90, ],
  [ 'R37_42', 'R42', 'R', 127.557,   28.369, 90, ],
  [ 'R43_48', 'R43', 'R',  48.817,   42.339, 90, ],
  [ 'R43_48', 'R44', 'R',  66.597,   41.069, 90, ],
  [ 'R43_48', 'R45', 'R',  64.057,   41.069, 90, ],
  [ 'R43_48', 'R46', 'R',  41.197,   42.339, 90, ],
  [ 'R43_48', 'R47', 'R',  43.737,   42.339, 90, ],
  [ 'R43_48', 'R48', 'R',  46.277,   42.339, 90, ],

  // Тип 'RR': коордтнаты 'x' и 'y' левого или верхнего отрезка,
  // количество выводов, угол поворота
  [ 'RR1_4',  'RR1',  'RR',  68.883,   81.963, 10, 90, ],
  [ 'RR1_4',  'RR2',  'RR',  61.263,   92.123, 10, 90, ],
  [ 'RR1_4',  'RR3',  'RR',  61.263,  117.523, 10, 90, ],
  [ 'RR1_4',  'RR4',  'RR', 233.983,   59.230, 10,  0, ],
  [ 'RR5_7',  'RR5',  'RR', 200.963,   71.930, 10,  0, ],
  [ 'RR5_7',  'RR6',  'RR',  70.153,  142.923, 10,  0, ],
  [ 'RR5_7',  'RR7',  'RR', 181.913,   43.990, 10,  0, ],
  [ 'RR8_10', 'RR8',  'RR',  82.853,  148.003,  6,  0, ],
  [ 'RR9',    'RR9',  'RR',  38.403,   76.883,  6,  0, ],
  [ 'RR8_10', 'RR10', 'RR', 322.950,  130.350,  6,  90, ],

  [ 'RY1',  'RY1', 'B', 155.243, 10.843, 7.874, 12.954 ],

  // Индуктивности обозначены идентично резисторам
  [ 'L1',   'L1', 'R',  58.977,   41.069, 90, ],
  [ 'L2_3', 'L2', 'R',  38.657,  147.749, 90, ],
  [ 'L2_3', 'L3', 'R',  51.357,   42.339, 90, ],

  // Тип 'D': коордтнаты 'x' и 'y' левого верхнего закругления, угол поворота
  [ 'D1',  'D1', 'D', 165.657,   15.415, 90, ],

  // Тип 'Q': коордтнаты 'x' и 'y' нижней линии обозначения
  [ 'Q1_2', 'Q1', 'Q', 133.780,   36.751, ],
  [ 'Q1_2', 'Q2', 'Q',  32.180,   54.531, ],

  [ 'Y1',  'Y1', 'Y',  21.322, 147.332, ],
  [ 'Y2',  'Y2', 'B', 173.048, 151.584, 8.331, 3.251 ],
  [ 'Y3',  'Y3', 'Y',  13.701,  68.592, ],

  // Предохранитель обозначен идентично конденсатору типа 'E'
  [ 'F1',  'F1',  'C', 'E', 119.937, 143.177,  0, ],

  [ 'J1',   'J1', 'B',    9.772,   9.812,   9.256, 14.752, ],
  [ 'J2',   'J2', 'B',   59.866,  13.383,  10.668,  6.985, ],
  [ 'J3',   'J3', 'B',  110.666,  13.383,  10.668,  6.985, ],
  [ 'J4',   'J4', 'B',   83.473,   9.573,  14.254, 13.254, ],
  [ 'J5',   'J5', 'B',   29.323,   9.573,  20.954, 19.054, ],
  [ 'J6',   'J6', 'B',  130.923,   9.573,  20.954, 19.054, ],
  [ 'J7_8', 'J7', 'B',   49.579, 146.733,  31.242, 12.954, ],
  [ 'J7_8', 'J8', 'B',  100.379, 146.733,  31.242, 12.954, ],
  [ 'J9',   'J9',  'B',  170.123,   9.573,   44.154, 15.374, ],
  [ 'J10',  'J10', 'B',    5.383,  29.258,   20.574, 5.969, ],
  [ 'J11',  'J11', 'B',  180.670,  48.335,   28.140, 9.090, ],
  [ 'J12',  'J12', 'B',  325.423,  76.883,  5.080, 50.800, ],
  [ 'J13',  'J13', 'B',  209.853,  50.213,    5.080, 5.080, ],
  [ 'J14',  'J14', 'RR',  64.755, 102.410, 13, 90, ],

  [ 'SLOT1_2',  'SLOT1', 'B',   247.191, 39.291,   70.104,  9.144, ],
  [ 'SLOT1_2',  'SLOT2', 'B',   247.191, 16.431,   70.104,  9.144, ],

  [ 'BT1',  'BT1',   'BT',  280.973, 132.763, 23.114, ],

  [ 'JP1_2',                 'JP1',  'RR', 287.323,  127.810, 2,  0, ],
  [ 'JP1_2',                 'JP2',  'RR',  95.553,   66.850, 2, 90, ],
  [ 'JP3_6',                 'JP3',  'RR',  56.183,  102.410, 3, 90, ],
  [ 'JP3_6',                 'JP4',  'RR',  28.243,   56.690, 3, 90, ],
  [ 'JP3_6',                 'JP5',  'RR',  66.343,   77.010, 3,  0, ],
  [ 'JP3_6',                 'JP6',  'RR',  56.183,   77.010, 3,  0, ],
  [ 'JP7_8',                 'JP7',  'B',  305.103,   135.303,  7.620, 5.080, ],
  [ 'JP7_8',                 'JP8',  'B',  260.653,    89.583,  7.620, 5.080, ],
];

const icDataKey = [ '', 

  [ 'kU1',                   'U1', 'IC', 144.2, 28.332, 15, 90, ],
  [ 'kU2',                   'U2', 'IC', 144.2, 15.632, 14, 90, ],

  [ 'kD1',                   'D1', 'C', 'D',  211.4,    9.4,  0, ],
  [ 'kD2',                   'D2', 'C', 'D',   17.2,   80.3,  0, ],
  [ 'kD3',                   'D3', 'C', 'D',  202.7,  118.5,  0, ],
  [ 'kD4_6',                 'D4', 'D',  43.304,  113.231, 90, ],
  [ 'kD4_6',                 'D5', 'D',  45.844,  113.231, 90, ],
  [ 'kD4_6',                 'D6', 'D',  48.384,  113.231, 90, ],

  [ 'kR1_3',                 'R1', 'R', 179.1,  9.7, 90, ],
  [ 'kR1_3',                 'R2', 'R', 173.9,  9.7, 90, ],
  [ 'kR1_3',                 'R3', 'R', 176.5,  9.7, 90, ],

  [ 'kRN1',                  'RN1',  'RR',  181.3,   25.15, 6,  0, ],

  [ 'kC1_C2',                'C1', 'C', 'E',  138.5,   7.567, 90, ],
  [ 'kC1_C2',                'C2', 'C', 'E',  138.5,  20.267, 90, ],
  [ 'kC3',                   'C3', 'C', 'B',  172.5,   21.3,  0, ],

  [ 'kJ1',                   'J1',  'B',  186.560,   17.6,  206.920-186.560, 5.080, ],
                           
  [ 'kSW1-SW64_SW66-SW73',  'SW1', 'SW', 197.164,  33.919, ],
  [ 'kSW1-SW64_SW66-SW73',  'SW2', 'SW',  25.714,  33.919, ],
  [ 'kSW1-SW64_SW66-SW73',  'SW3', 'SW',  44.764,  33.919, ],
  [ 'kSW1-SW64_SW66-SW73',  'SW4', 'SW',  63.814,  33.919, ],
  [ 'kSW1-SW64_SW66-SW73',  'SW5', 'SW',  82.864,  33.919, ],
  [ 'kSW1-SW64_SW66-SW73',  'SW6', 'SW', 101.914,  33.919, ],
  [ 'kSW1-SW64_SW66-SW73',  'SW7', 'SW', 120.964,  33.919, ],
  [ 'kSW1-SW64_SW66-SW73',  'SW8', 'SW', 140.014,  33.919, ],
  [ 'kSW1-SW64_SW66-SW73',  'SW9', 'SW', 159.064,  33.919, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW10', 'SW', 178.114,  33.919, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW11', 'SW', 216.214,  33.919, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW12', 'SW', 235.264,  33.919, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW13', 'SW', 268.602,  52.969, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW14', 'SW', 225.739,  52.969, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW15', 'SW', 244.789,  52.969, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW16', 'SW', 211.452,  72.019, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW17', 'SW', 230.502,  72.019, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW18', 'SW',   6.664,  33.919, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW19', 'SW', 182.877,  91.069, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW20', 'SW', 201.927,  91.069, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW21', 'SW', 220.977,  91.069, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW22', 'SW', 247.171, 110.119, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW23', 'SW',  40.002,  72.019, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW24', 'SW', 125.727,  91.069, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW25', 'SW',  87.627,  91.069, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW26', 'SW',  78.102,  72.019, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW27', 'SW',  73.339,  52.969, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW28', 'SW',  97.152,  72.019, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW29', 'SW', 116.019,  72.019, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW30', 'SW', 135.252,  72.019, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW31', 'SW', 168.589,  52.969, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW32', 'SW', 154.302,  72.019, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW33', 'SW', 173.352,  72.019, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW34', 'SW', 192.402,  72.019, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW35', 'SW', 163.827,  91.069, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW36', 'SW', 144.777,  91.069, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW37', 'SW', 187.639,  52.969, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW38', 'SW', 206.689,  52.969, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW39', 'SW',  35.239,  52.969, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW40', 'SW',  92.389,  52.969, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW41', 'SW',  59.052,  72.019, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW42', 'SW', 111.439,  52.969, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW43', 'SW', 149.539,  52.969, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW44', 'SW', 106.677,  91.069, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW45', 'SW',  54.289,  52.969, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW46', 'SW',  68.577,  91.069, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW47', 'SW', 130.489,  52.969, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW48', 'SW',  49.527,  91.069, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW49', 'SW',  18.571,  91.069, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW50', 'SW',   9.046, 110.119, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW51', 'SW',  56.671, 110.119, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW52', 'SW',  13.808,  72.019, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW53', 'SW', 199.546, 110.119, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW54', 'SW',  44.764,   5.344, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW55', 'SW',  63.814,   5.344, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW56', 'SW',  82.864,   5.344, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW57', 'SW', 101.914,   5.344, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW58', 'SW', 120.964,   5.344, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW59', 'SW',   6.664,   5.344, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW60', 'SW',  11.427,  52.969, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW61', 'SW', 320.989,  52.969, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW62', 'SW', 263.839,  33.919, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW63', 'SW', 223.358, 110.119, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW64', 'SW', 261.458,  72.019, ],
  [ 'kSW65',               'SW65', 'SW', 128.108, 110.119, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW66', 'SW', 320.989,  33.919, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW67', 'SW', 301.939,  33.919, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW68', 'SW', 301.939,  52.969, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW69', 'SW', 282.889, 110.119, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW70', 'SW', 301.939,  91.069, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW71', 'SW', 301.939, 110.119, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW72', 'SW', 320.989, 110.119, ],
  [ 'kSW1-SW64_SW66-SW73', 'SW73', 'SW', 256.696,  91.069, ],
];


var GlobalWidth = undefined;
var GlobalViewWidth = undefined;
var GlobalSvg_id = undefined;
var GlobalColour = undefined;
var GlobalMainOrKey = undefined;

/* Отобразить диапазон компонентов, например ('R', 2, 5) -> R2,R3,R4,R5 */
function drawElementsFromTo(letter, indexFrom, indexTo) {
  for (i = indexFrom; i <= indexTo; i++) {
    var name = letter + i.toString();
    drawElement(name);
  }
}

/* Отобразить список компонентов, например ('R2,R3,R4,R5') -> R2,R3,R4,R5 */
function drawElements(names) {
  var namelist = names.split(",");
  for (const name of namelist) {
    drawElement(name);
  }
}

/* Отобразить компонент */
function drawElement(name) {
  const svg = document.getElementById(GlobalSvg_id);

  var data = undefined;
  const icData = GlobalMainOrKey ? icDataMain : icDataKey;

  // Проходим по каждому элементу массива
  for (let i = 0; i < icData.length; i++) {
    // Проверяем, совпадает ли иденьтификатор элемента с искомым
    if (icData[i][1] === name) {
      // Если совпало — запоминаем элемент
      data = icData[i];
    }
  }

  // Если ничего не нашли — выход
  if (data == undefined) return;

  if (data[2] === 'IC') drawIC(data);
  if (data[2] === 'C')  drawCap(data);
  if (data[2] === 'R')  drawRes(data);
  if (data[2] === 'RR') drawResNet(data);
  if (data[2] === 'D')  drawDiode(data);
  if (data[2] === 'Q')  drawTransistor(data);
  if (data[2] === 'Y')  drawOscillator(data);
  if (data[2] === 'B')  drawBox(data);
  if (data[2] === 'BT') drawBattery(data);
  if (data[2] === 'SW') drawKey(data);
}

function scaleCoord(coordMM) {
  return coordMM * GlobalWidth / GlobalViewWidth; // Для mainboard.svg установлен viewBox="11 3 338 168"
}

function drawIC(data) {

  const svg = document.getElementById(GlobalSvg_id);
  var name = data[1];

  /* Рассчитать параметры обозначения микросхемы */
  var x1 = data[3];         // Положение первого вывода по горизонтали
  var y1 = data[4];         // Положение первого вывода по вертикали
  var pinNum = data[5];     // Количество выводов микросхемы
  var xs = (pinNum == 64 ? 40 : 55) * 0.0254; // размеры площадки mil -> mm
  var step =  (pinNum == 64 ? 70 : 100) * 0.0254; // шаг между площадками mil -> mm
  var width = (pinNum <= 20 ? 300 : (pinNum == 64 ? 750 : (pinNum == 24 ? 400 : 600))) * 0.0254; // ширина по выводам
  var angle = data[6];
  var fontSize = pinNum <= 20 ? 12 : 28; // Размер шрифта обозначения микросхемы

  /* Рассчитать параметры рамки обозначения микросхемы */
  var x = scaleCoord(angle == 0 ? x1 + xs/2 - width : x1 + xs/2 - step);
  var y = scaleCoord(angle == 0 ? y1 + xs/2 - pinNum/2 * step : y1 + xs/2 - width);
  var w = scaleCoord(angle == 0 ? width : (pinNum/2 + 1) * step);
  var h = scaleCoord(angle == 0 ? (pinNum/2 + 1) * step : width);

  /* Создать рамку по обозначению микросхемы */
  var rect = document.createElementNS(svgNS,"rect");
  rect.setAttributeNS(null,"x",x);
  rect.setAttributeNS(null,"y",y);
  rect.setAttributeNS(null,"width",w);
  rect.setAttributeNS(null,"height",h);
  rect.setAttributeNS(null,"fill","none");
  rect.setAttributeNS(null,"stroke", GlobalColour);
  rect.setAttributeNS(null,"stroke-width",4.0);
  rect.setAttributeNS(null,"rx",5.0);
  svg.appendChild(rect);

  /* Создать невидимый прямоугольник, появляющийся при наведении курсора */
  var hollow = document.createElementNS(svgNS,"rect");
  hollow.setAttributeNS(null,"x",x);
  hollow.setAttributeNS(null,"y",y);
  hollow.setAttributeNS(null,"width",w);
  hollow.setAttributeNS(null,"height",h);
  hollow.setAttributeNS(null,"fill","red");
  hollow.setAttributeNS(null,"stroke","red");
  hollow.setAttributeNS(null,"stroke-width",4.0);
  hollow.setAttributeNS(null,"rx",5.0);
  hollow.setAttributeNS(null,"fill-opacity",0);
  hollow.setAttributeNS(null,"stroke-opacity",0);
  hollow.setAttributeNS(null,"id", (GlobalMainOrKey ? "" : "k") + name);
  hollow.classList.add("hollow-hover");
  svg.appendChild(hollow);

  /* Создать всплывающую подсказку с текстовым обозначением компонента */
  const title = document.createElementNS(svgNS, "title");
  title.textContent = name;
  /* Добавить подсказку к невидимому прямоугольнику */
  hollow.appendChild(title);

  if (GlobalColour != "none") {
    /* Создать текстовое обозначение микросхемы */
    var text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"x",x+w/2);
    text.setAttributeNS(null,"y",y+h/2 + fontSize * 0.1);
    text.setAttributeNS(null,"font-size", fontSize.toString() + "px");
    text.setAttributeNS(null,"fill", GlobalColour);
    text.setAttributeNS(null,"stroke","black");
    text.setAttributeNS(null,"stroke-width",0.5);
    text.setAttributeNS(null,"font-family","Noto Sans");
    text.setAttributeNS(null,"font-weight","bold");
    text.setAttributeNS(null,"text-anchor","middle");
    text.setAttributeNS(null,"dominant-baseline","middle");
    text.appendChild(document.createTextNode(name));
    svg.appendChild(text);
  }

  /* Создать ссылку */
  const ref = document.createElementNS(svgNS, 'a');
  ref.setAttributeNS(xlinkNS, "href", "./bom.html#" + data[0]);
  /* Связать элемент с ссылкой */
  ref.appendChild(hollow);
  /* Добавить ссылку к документу */
  svg.appendChild(ref);
}

function drawCap(data) {

  const svg = document.getElementById(GlobalSvg_id);
  var name = data[1];

  if (data[3] === 'A' ||
      data[3] === 'B' ||
      data[3] === 'C' ||
      data[3] === 'D') {

    /* Рассчитать параметры окружности обозначения конденсатора */
    const rA = scaleCoord(10.257/2); // Радиус для конденсатора типа 'A'
    const rB = scaleCoord(5.253/2);  // Радиус для конденсатора типа 'B'
    const rC = scaleCoord(6.554/2);  // Радиус для конденсатора типа 'C'
    const rD = scaleCoord(6.604/2);  // Радиус для конденсатора типа 'D'
    var r = data[3] === 'A' ? rA :   // Радиус для конденсатора в зависимости от обозначения типа
           (data[3] === 'B' ? rB :
           (data[3] === 'C' ? rC :
           (data[3] === 'D' ? rD :
             undefined)));
    var x = scaleCoord(data[4]) + r; // Центр для конденсатора типа 'A'-'D' по горизонтали
    var y = scaleCoord(data[5]) + r; // Центр для конденсатора типа 'A'-'D' по вертикали

    /* Создать окружность по обозначению конденсатора */
    var circle = document.createElementNS(svgNS,"circle");
    circle.setAttributeNS(null,"cx",x);
    circle.setAttributeNS(null,"cy",y);
    circle.setAttributeNS(null,"r",r);
    circle.setAttributeNS(null,"fill","none");
    circle.setAttributeNS(null,"stroke", GlobalColour);
    circle.setAttributeNS(null,"stroke-width",2.0);
    svg.appendChild(circle);

    /* Создать невидимый круг, появляющийся при наведении курсора */
    var hollow = document.createElementNS(svgNS,"circle");
    hollow.setAttributeNS(null,"cx",x);
    hollow.setAttributeNS(null,"cy",y);
    hollow.setAttributeNS(null,"r",r);
    hollow.setAttributeNS(null,"fill","red");
    hollow.setAttributeNS(null,"stroke","red");
    hollow.setAttributeNS(null,"stroke-width",2.0);
    hollow.setAttributeNS(null,"fill-opacity",0);
    hollow.setAttributeNS(null,"stroke-opacity",0);
    hollow.setAttributeNS(null,"id", (GlobalMainOrKey ? "" : "k") + name);
    hollow.classList.add("hollow-hover");
    svg.appendChild(hollow);

    /* Создать всплывающую подсказку с текстовым обозначением компонента */
    const title = document.createElementNS(svgNS, "title");
    title.textContent = name;
    /* Добавить подсказку к невидимому прямоугольнику */
    hollow.appendChild(title);

    /* Создать ссылку */
    const ref = document.createElementNS(svgNS, 'a');
    ref.setAttributeNS(xlinkNS, "href", "./bom.html#" + data[0]);
    /* Связать невидимый круг со ссылкой */
    ref.appendChild(hollow);
    /* Добавить ссылку к документу */
    svg.appendChild(ref);
  } else if (data[3] === 'E') {

    /* Рассчитать параметры рамки обозначения конденсатора */
    var angle = data[6];
    var x = scaleCoord(data[4] + (angle === 0 ? 0.10 : 0.1));
    var y = scaleCoord(data[5] + (angle === 0 ? 0.05 : 0.15));
    var w = scaleCoord(angle === 0 ? 7.112 : 2.032);
    var h = scaleCoord(angle === 0 ? 2.032 : 7.112);

    /* Создать рамку по обозначению конденсатора */
    var rect = document.createElementNS(svgNS,"rect");
    rect.setAttributeNS(null,"x",x);
    rect.setAttributeNS(null,"y",y);
    rect.setAttributeNS(null,"width",w);
    rect.setAttributeNS(null,"height",h);
    rect.setAttributeNS(null,"fill","none");
    rect.setAttributeNS(null,"stroke", GlobalColour);
    rect.setAttributeNS(null,"stroke-width",1.5);
    rect.setAttributeNS(null,"rx",2.0);
    svg.appendChild(rect);

    /* Создать невидимый прямоугольник, появляющийся при наведении курсора */
    var hollow = document.createElementNS(svgNS,"rect");
    hollow.setAttributeNS(null,"x",x);
    hollow.setAttributeNS(null,"y",y);
    hollow.setAttributeNS(null,"width",w);
    hollow.setAttributeNS(null,"height",h);
    hollow.setAttributeNS(null,"fill","red");
    hollow.setAttributeNS(null,"stroke","red");
    hollow.setAttributeNS(null,"stroke-width",1.5);
    hollow.setAttributeNS(null,"rx",2.0);
    hollow.setAttributeNS(null,"fill-opacity",0);
    hollow.setAttributeNS(null,"stroke-opacity",0);
    hollow.setAttributeNS(null,"id", (GlobalMainOrKey ? "" : "k") + name);
    hollow.classList.add("hollow-hover");
    svg.appendChild(hollow);

    /* Создать всплывающую подсказку с текстовым обозначением компонента */
    const title = document.createElementNS(svgNS, "title");
    title.textContent = name;
    /* Добавить подсказку к невидимому прямоугольнику */
    hollow.appendChild(title);

    /* Создать ссылку */
    const ref = document.createElementNS(svgNS, 'a');
    ref.setAttributeNS(xlinkNS, "href", "./bom.html#" + data[0]);
    /* Связать невидимый прямоугольник с ссылкой */
    ref.appendChild(hollow);
    /* Добавить ссылку к документу */
    svg.appendChild(ref);
  }
}

function drawRes(data) {

  const svg = document.getElementById(GlobalSvg_id);
  const name = data[1];

  /* Рассчитать параметры рамки обозначения резистора */
  var angle = data[5];
  var x = scaleCoord(data[3] + (angle === 0 ? 0.12 : 0.10));
  var y = scaleCoord(data[4] + (angle === 0 ? 0.00 : 0.09));
  var w = scaleCoord(angle === 0 ? 5.588 : 2.032);
  var h = scaleCoord(angle === 0 ? 2.032 : 5.588);

  /* Создать рамку по обозначению резистора */
  var rect = document.createElementNS(svgNS,"rect");
  rect.setAttributeNS(null,"x",x);
  rect.setAttributeNS(null,"y",y);
  rect.setAttributeNS(null,"width",w);
  rect.setAttributeNS(null,"height",h);
  rect.setAttributeNS(null,"fill","none");
  rect.setAttributeNS(null,"stroke", GlobalColour);
  rect.setAttributeNS(null,"stroke-width",1.5);
  rect.setAttributeNS(null,"rx",1.0);
  svg.appendChild(rect);

  /* Создать невидимый прямоугольник, появляющийся при наведении курсора */
  var hollow = document.createElementNS(svgNS,"rect");
  hollow.setAttributeNS(null,"x",x);
  hollow.setAttributeNS(null,"y",y);
  hollow.setAttributeNS(null,"width",w);
  hollow.setAttributeNS(null,"height",h);
  hollow.setAttributeNS(null,"fill","red");
  hollow.setAttributeNS(null,"stroke","red");
  hollow.setAttributeNS(null,"stroke-width",1.5);
  hollow.setAttributeNS(null,"rx",1.0);
  hollow.setAttributeNS(null,"fill-opacity",0);
  hollow.setAttributeNS(null,"stroke-opacity",0);
  hollow.setAttributeNS(null,"id", (GlobalMainOrKey ? "" : "k") + name);
  hollow.setAttributeNS(null,"scroll-margin-top", 40);
  hollow.classList.add("hollow-hover");
  svg.appendChild(hollow);

  /* Создать всплывающую подсказку с текстовым обозначением компонента */
  const title = document.createElementNS(svgNS, "title");
  title.textContent = name;
  /* Добавить подсказку к невидимому прямоугольнику */
  hollow.appendChild(title);

  /* Создать ссылку */
  const ref = document.createElementNS(svgNS, 'a');
  ref.setAttributeNS(xlinkNS, "href", "./bom.html#" + data[0]);
  /* Связать невидимый прямоугольник с ссылкой */
  ref.appendChild(hollow);
  /* Добавить ссылку к документу */
  svg.appendChild(ref);
}

function drawResNet(data) {

  const svg = document.getElementById(GlobalSvg_id);
  const name = data[1];

  // Тип 'RR': коордтнаты 'x' и 'y' левого или верхнего отрезка,
  // количество выводов, угол поворота
  // [ 'RR9', 'RR',  38.403,   76.883,  6, 0, ],

  /* Рассчитать параметры рамки обозначения блока резисторов */
  var angle = data[6];
  var x = scaleCoord(data[3] + 0.254/2);
  var y = scaleCoord(data[4] + 0.254/2);
  var w = scaleCoord(angle === 0 ? 100 * 0.0254 * data[5] : 2.54);
  var h = scaleCoord(angle === 0 ? 2.54 : 100 * 0.0254 * data[5]);

  /* Создать рамку по обозначению блока резисторов */
  var rect = document.createElementNS(svgNS,"rect");
  rect.setAttributeNS(null,"x",x);
  rect.setAttributeNS(null,"y",y);
  rect.setAttributeNS(null,"width",w);
  rect.setAttributeNS(null,"height",h);
  rect.setAttributeNS(null,"fill","none");
  rect.setAttributeNS(null,"stroke", GlobalColour);
  rect.setAttributeNS(null,"stroke-width",1.5);
  rect.setAttributeNS(null,"rx",1.0);
  svg.appendChild(rect);

  /* Создать невидимый прямоугольник, появляющийся при наведении курсора */
  var hollow = document.createElementNS(svgNS,"rect");
  hollow.setAttributeNS(null,"x",x);
  hollow.setAttributeNS(null,"y",y);
  hollow.setAttributeNS(null,"width",w);
  hollow.setAttributeNS(null,"height",h);
  hollow.setAttributeNS(null,"fill","red");
  hollow.setAttributeNS(null,"stroke","red");
  hollow.setAttributeNS(null,"stroke-width",1.5);
  hollow.setAttributeNS(null,"rx",1.0);
  hollow.setAttributeNS(null,"fill-opacity",0);
  hollow.setAttributeNS(null,"stroke-opacity",0);
  hollow.setAttributeNS(null,"id", (GlobalMainOrKey ? "" : "k") + name);
  hollow.classList.add("hollow-hover");
  svg.appendChild(hollow);

  /* Создать всплывающую подсказку с текстовым обозначением компонента */
  const title = document.createElementNS(svgNS, "title");
  title.textContent = name;
  /* Добавить подсказку к невидимому прямоугольнику */
  hollow.appendChild(title);

  /* Создать ссылку */
  const ref = document.createElementNS(svgNS, 'a');
  ref.setAttributeNS(xlinkNS, "href", "./bom.html#" + data[0]);
  /* Связать невидимый прямоугольник с ссылкой */
  ref.appendChild(hollow);
  /* Добавить ссылку к документу */
  svg.appendChild(ref);
}

function drawDiode(data) {

  const svg = document.getElementById(GlobalSvg_id);
  const name = data[1];

  /* Рассчитать параметры рамки обозначения диода */
  var angle = data[5];
  var x = scaleCoord(data[3] + 0.254/2);
  var y = scaleCoord(data[4] - 0.254/4);
  var w = scaleCoord(angle === 0 ? 4.064 : 2.032);
  var h = scaleCoord(angle === 0 ? 2.032 : 4.064);

  /* Создать рамку по обозначению диода */
  var rect = document.createElementNS(svgNS,"rect");
  rect.setAttributeNS(null,"x",x);
  rect.setAttributeNS(null,"y",y);
  rect.setAttributeNS(null,"width",w);
  rect.setAttributeNS(null,"height",h);
  rect.setAttributeNS(null,"fill","none");
  rect.setAttributeNS(null,"stroke", GlobalColour);
  rect.setAttributeNS(null,"stroke-width",1.5);
  rect.setAttributeNS(null,"rx",1.0);
  svg.appendChild(rect);

  /* Создать невидимый прямоугольник, появляющийся при наведении курсора */
  var hollow = document.createElementNS(svgNS,"rect");
  hollow.setAttributeNS(null,"x",x);
  hollow.setAttributeNS(null,"y",y);
  hollow.setAttributeNS(null,"width",w);
  hollow.setAttributeNS(null,"height",h);
  hollow.setAttributeNS(null,"fill","red");
  hollow.setAttributeNS(null,"stroke","red");
  hollow.setAttributeNS(null,"stroke-width",1.5);
  hollow.setAttributeNS(null,"rx",1.0);
  hollow.setAttributeNS(null,"fill-opacity",0);
  hollow.setAttributeNS(null,"stroke-opacity",0);
  hollow.setAttributeNS(null,"id", (GlobalMainOrKey ? "" : "k") + name);
  hollow.classList.add("hollow-hover");
  svg.appendChild(hollow);

  /* Создать всплывающую подсказку с текстовым обозначением компонента */
  const title = document.createElementNS(svgNS, "title");
  title.textContent = name;
  /* Добавить подсказку к невидимому прямоугольнику */
  hollow.appendChild(title);

  /* Создать ссылку */
  const ref = document.createElementNS(svgNS, 'a');
  ref.setAttributeNS(xlinkNS, "href", "./bom.html#" + data[0]);
  /* Связать невидимый прямоугольник с ссылкой */
  ref.appendChild(hollow);
  /* Добавить ссылку к документу */
  svg.appendChild(ref);
}

function drawTransistor(data) {

  const svg = document.getElementById(GlobalSvg_id);
  const name = data[1];

  /* Рассчитать параметры рамки обозначения транзистора */
  var x = scaleCoord(data[3] + 0.254/2);
  var y = scaleCoord(data[4] + 0*0.254/2);
  var d =
    "M " + x.toString() + " " + y.toString() + " " +
    "v " + scaleCoord(-1.905 - 1.5*0.254).toString() + " " +
    "a " + scaleCoord( 2.667 - 0.254/2).toString() + " " + scaleCoord(2.667 - 0.254/2).toString() + " 0 0 1 " + scaleCoord(5.080 - 0.254).toString() + " 0 " +
    "v " + scaleCoord( 1.905 + 1.5*0.254).toString() + " " +
    "Z";

  /* Создать контур по обозначению транзистора */
  var path = document.createElementNS(svgNS,"path");
  path.setAttributeNS(null,"d",d);
  path.setAttributeNS(null,"fill","none");
  path.setAttributeNS(null,"stroke", GlobalColour);
  path.setAttributeNS(null,"stroke-width",1.5);
  svg.appendChild(path);

  /* Создать невидимый контур, появляющийся при наведении курсора */
  var hollow = document.createElementNS(svgNS,"path");
  hollow.setAttributeNS(null,"d",d);
  hollow.setAttributeNS(null,"fill","red");
  hollow.setAttributeNS(null,"stroke", "red");
  hollow.setAttributeNS(null,"stroke-width",1.5);
  hollow.setAttributeNS(null,"fill-opacity",0);
  hollow.setAttributeNS(null,"stroke-opacity",0);
  hollow.setAttributeNS(null,"id", (GlobalMainOrKey ? "" : "k") + name);
  hollow.classList.add("hollow-hover");
  svg.appendChild(hollow);

  /* Создать всплывающую подсказку с текстовым обозначением компонента */
  const title = document.createElementNS(svgNS, "title");
  title.textContent = name;
  /* Добавить подсказку к невидимому прямоугольнику */
  hollow.appendChild(title);

  /* Создать ссылку */
  const ref = document.createElementNS(svgNS, 'a');
  ref.setAttributeNS(xlinkNS, "href", "./bom.html#" + data[0]);
  /* Связать невидимый прямоугольник с ссылкой */
  ref.appendChild(hollow);
  /* Добавить ссылку к документу */
  svg.appendChild(ref);
}

function drawOscillator(data) {

  const svg = document.getElementById(GlobalSvg_id);
  const name = data[1];

  /* Рассчитать параметры рамки обозначения кварца */
  var x = scaleCoord(data[3] - 1.842 + 0.254/2);
  var y = scaleCoord(data[4] + 1.56 + 0.254/4);
  var d =
    "M " + x.toString() + " " + y.toString() + " " +
    "v " + scaleCoord(-7.112 + 0.254).toString() + " " +
    "a " + scaleCoord( 2.667 - 0.254).toString() + " " + scaleCoord(2.667 - 0.254).toString() + " 0 0 1 " + scaleCoord(4.826 - 0*0.254).toString() + " 0 " +
    "v " + scaleCoord( 7.112 - 0.254).toString() + " " +
    "a " + scaleCoord( 2.667 - 0.254).toString() + " " + scaleCoord(2.667 - 0.254).toString() + " 0 0 1 " + scaleCoord(-4.826 + 0*0.254).toString() + " 0";

  /* Создать контур по обозначению кварца */
  var path = document.createElementNS(svgNS,"path");
  path.setAttributeNS(null,"d",d);
  path.setAttributeNS(null,"fill","none");
  path.setAttributeNS(null,"stroke", GlobalColour);
  path.setAttributeNS(null,"stroke-width",1.5);
  svg.appendChild(path);

  /* Создать невидимый контур, появляющийся при наведении курсора */
  var hollow = document.createElementNS(svgNS,"path");
  hollow.setAttributeNS(null,"d",d);
  hollow.setAttributeNS(null,"fill","red");
  hollow.setAttributeNS(null,"stroke", "red");
  hollow.setAttributeNS(null,"stroke-width",1.5);
  hollow.setAttributeNS(null,"fill-opacity",0);
  hollow.setAttributeNS(null,"stroke-opacity",0);
  hollow.setAttributeNS(null,"id", (GlobalMainOrKey ? "" : "k") + name);
  hollow.classList.add("hollow-hover");
  svg.appendChild(hollow);

  /* Создать всплывающую подсказку с текстовым обозначением компонента */
  const title = document.createElementNS(svgNS, "title");
  title.textContent = name;
  /* Добавить подсказку к невидимому прямоугольнику */
  hollow.appendChild(title);

  /* Создать ссылку */
  const ref = document.createElementNS(svgNS, 'a');
  ref.setAttributeNS(xlinkNS, "href", "./bom.html#" + data[0]);
  /* Связать невидимый прямоугольник с ссылкой */
  ref.appendChild(hollow);
  /* Добавить ссылку к документу */
  svg.appendChild(ref);
}

function drawBox(data) {

  const svg = document.getElementById(GlobalSvg_id);
  const name = data[1];

  /* Рассчитать параметры рамки обозначения прямоугольного компонента */
  var x = scaleCoord(data[3]);
  var y = scaleCoord(data[4]);
  var w = scaleCoord(data[5]);
  var h = scaleCoord(data[6]);

  /* Создать рамку по обозначению прямоугольного компонента */
  var rect = document.createElementNS(svgNS,"rect");
  rect.setAttributeNS(null,"x",x);
  rect.setAttributeNS(null,"y",y);
  rect.setAttributeNS(null,"width",w);
  rect.setAttributeNS(null,"height",h);
  rect.setAttributeNS(null,"fill","none");
  rect.setAttributeNS(null,"stroke", GlobalColour);
  rect.setAttributeNS(null,"stroke-width",2.0);
  rect.setAttributeNS(null,"rx",1.0);
  svg.appendChild(rect);

  /* Создать невидимый прямоугольник, появляющийся при наведении курсора */
  var hollow = document.createElementNS(svgNS,"rect");
  hollow.setAttributeNS(null,"x",x);
  hollow.setAttributeNS(null,"y",y);
  hollow.setAttributeNS(null,"width",w);
  hollow.setAttributeNS(null,"height",h);
  hollow.setAttributeNS(null,"fill","red");
  hollow.setAttributeNS(null,"stroke","red");
  hollow.setAttributeNS(null,"stroke-width",2.0);
  hollow.setAttributeNS(null,"rx",1.0);
  hollow.setAttributeNS(null,"fill-opacity",0);
  hollow.setAttributeNS(null,"stroke-opacity",0);
  hollow.setAttributeNS(null,"id", (GlobalMainOrKey ? "" : "k") + name);
  hollow.classList.add("hollow-hover");
  svg.appendChild(hollow);

  /* Создать всплывающую подсказку с текстовым обозначением компонента */
  const title = document.createElementNS(svgNS, "title");
  title.textContent = name;
  /* Добавить подсказку к невидимому прямоугольнику */
  hollow.appendChild(title);

  /* Создать ссылку */
  const ref = document.createElementNS(svgNS, 'a');
  ref.setAttributeNS(xlinkNS, "href", "./bom.html#" + data[0]);
  /* Связать невидимый прямоугольник с ссылкой */
  ref.appendChild(hollow);
  /* Добавить ссылку к документу */
  svg.appendChild(ref);
}

function drawBattery(data) {

  const svg = document.getElementById(GlobalSvg_id);
  var name = data[1];


    /* Рассчитать параметры окружности обозначения панели батарейки */
    var r = scaleCoord(data[5])/2;
    var x = scaleCoord(data[3]) + r; // Центр для конденсатора типа 'A'-'D' по горизонтали
    var y = scaleCoord(data[4]) + r; // Центр для конденсатора типа 'A'-'D' по вертикали

    /* Создать окружность по обозначению панели батарейки */
    var circle = document.createElementNS(svgNS,"circle");
    circle.setAttributeNS(null,"cx",x);
    circle.setAttributeNS(null,"cy",y);
    circle.setAttributeNS(null,"r",r);
    circle.setAttributeNS(null,"fill","none");
    circle.setAttributeNS(null,"stroke", GlobalColour);
    circle.setAttributeNS(null,"stroke-width",2.0);
    svg.appendChild(circle);

    /* Создать невидимый круг, появляющийся при наведении курсора */
    var hollow = document.createElementNS(svgNS,"circle");
    hollow.setAttributeNS(null,"cx",x);
    hollow.setAttributeNS(null,"cy",y);
    hollow.setAttributeNS(null,"r",r);
    hollow.setAttributeNS(null,"fill","red");
    hollow.setAttributeNS(null,"stroke","red");
    hollow.setAttributeNS(null,"stroke-width",2.0);
    hollow.setAttributeNS(null,"fill-opacity",0);
    hollow.setAttributeNS(null,"stroke-opacity",0);
    hollow.setAttributeNS(null,"id", (GlobalMainOrKey ? "" : "k") + name);
    hollow.classList.add("hollow-hover");
    svg.appendChild(hollow);

    /* Создать всплывающую подсказку с текстовым обозначением компонента */
    const title = document.createElementNS(svgNS, "title");
    title.textContent = name;
    /* Добавить подсказку к невидимому прямоугольнику */
    hollow.appendChild(title);

    /* Создать ссылку */
    const ref = document.createElementNS(svgNS, 'a');
    ref.setAttributeNS(xlinkNS, "href", "./bom.html#" + data[0]);
    /* Связать невидимый круг со ссылкой */
    ref.appendChild(hollow);
    /* Добавить ссылку к документу */
    svg.appendChild(ref);
}

function drawKey(data) {

  const svg = document.getElementById(GlobalSvg_id);
  const name = data[1];

  /* Рассчитать параметры рамки обозначения кнопки */
  var x = scaleCoord(data[3] + 0.381/2);
  var y = scaleCoord(data[4] + 0.381/2);
  var w = scaleCoord(12.7);
  var h = scaleCoord(12.7);

  /* Создать рамку по обозначению кнопки */
  var rect = document.createElementNS(svgNS,"rect");
  rect.setAttributeNS(null,"x",x);
  rect.setAttributeNS(null,"y",y);
  rect.setAttributeNS(null,"width",w);
  rect.setAttributeNS(null,"height",h);
  rect.setAttributeNS(null,"fill","none");
  rect.setAttributeNS(null,"stroke", GlobalColour);
  rect.setAttributeNS(null,"stroke-width",2.0);
  rect.setAttributeNS(null,"rx",1.0);
  svg.appendChild(rect);

  /* Создать невидимый прямоугольник, появляющийся при наведении курсора */
  var hollow = document.createElementNS(svgNS,"rect");
  hollow.setAttributeNS(null,"x",x);
  hollow.setAttributeNS(null,"y",y);
  hollow.setAttributeNS(null,"width",w);
  hollow.setAttributeNS(null,"height",h);
  hollow.setAttributeNS(null,"fill","red");
  hollow.setAttributeNS(null,"stroke","red");
  hollow.setAttributeNS(null,"stroke-width",2.0);
  hollow.setAttributeNS(null,"rx",1.0);
  hollow.setAttributeNS(null,"fill-opacity",0);
  hollow.setAttributeNS(null,"stroke-opacity",0);
  hollow.setAttributeNS(null,"id", (GlobalMainOrKey ? "" : "k") + name);
  hollow.classList.add("hollow-hover");
  svg.appendChild(hollow);

  /* Создать всплывающую подсказку с текстовым обозначением компонента */
  const title = document.createElementNS(svgNS, "title");
  title.textContent = name;
  /* Добавить подсказку к невидимому прямоугольнику */
  hollow.appendChild(title);

  /* Создать ссылку */
  const ref = document.createElementNS(svgNS, 'a');
  ref.setAttributeNS(xlinkNS, "href", "./bom.html#" + data[0]);
  /* Связать невидимый прямоугольник с ссылкой */
  ref.appendChild(hollow);
  /* Добавить ссылку к документу */
  svg.appendChild(ref);
}

function onLoad_mainboard(element, viewWidth) {

  GlobalSvg_id = element.id;
  const computedWidth = window.getComputedStyle(document.querySelector('#' + GlobalSvg_id)).width;
  GlobalWidth = parseInt(computedWidth, 10);

  GlobalMainOrKey = true;
  GlobalViewWidth = viewWidth;
  GlobalColour = 'none';

  drawElementsFromTo('U', 1, 49);
  drawElementsFromTo('C', 1, 94);
  drawElementsFromTo('RR', 1, 10);
  drawElementsFromTo('R', 1, 48);
  drawElement('RY1');
  drawElementsFromTo('L', 1, 3);
  drawElement('D1');
  drawElement('Q1');
  drawElement('Q2');
  drawElementsFromTo('Y', 1, 3);
  drawElement('F1');
  drawElementsFromTo('J', 1, 14);
  drawElement('SLOT1');
  drawElement('SLOT2');
  drawElement('BT1');
  drawElementsFromTo('JP', 1, 8);
}

function onLoad_keyboard(element, viewWidth) {

  GlobalSvg_id = element.id;
  const computedWidth = window.getComputedStyle(document.querySelector('#' + GlobalSvg_id)).width;
  GlobalWidth = parseInt(computedWidth, 10);

  GlobalMainOrKey = false;
  GlobalViewWidth = viewWidth;
  GlobalColour = 'none';

  drawElement('U1');
  drawElement('U2');
  drawElementsFromTo('D', 1, 6);
  drawElement('R1');
  drawElement('R2');
  drawElement('R3');
  drawElement('RN1');
  drawElement('C1');
  drawElement('C2');
  drawElement('C3');
  drawElement('J1');
  drawElementsFromTo('SW', 1, 73);
}

/*
window.addEventListener('resize', handleResize()_;

function handleResize {
  const computedWidth = window.getComputedStyle(document.querySelector('#mainboard')).width;
  GlobalWidth = parseInt(computedWidth, 10);
//  console.log(`Новые размеры: ${GlobalWidth}`);
});
*/


const svgNS = 'http://www.w3.org/2000/svg';
const xlinkNS = 'http://www.w3.org/1999/xlink';

/**
 * Таблица преобразования между позиционными обозначениями однотипных элементов
 * плат (далее - простой ID, идентификатор), используемыми в качетве ссылок
 * на посадочные места и обозначенниями строк таблицы используемых элементов bom.html
 * с этими элементами (далее - Complex ID).
 * Для элементов, не входящих в таблицу, обозначение элемента совпадает с
 * обозначением его содержащей строки таблицы используемых элементов bom.html.
 * Для платы клавиатуры позиционное обозначение предваряется буквой 'k'.
 */
const bomTranslateTable = [
  // Системная плата
  [ 'U8_9_10_11',   'U8',  'U9',  'U10', 'U11' ],
  [ 'U12_13_14',    'U12', 'U13', 'U14' ],
  [ 'U15_16_17_18', 'U15', 'U16', 'U17', 'U18' ],
  [ 'U19_20_21',    'U19', 'U20', 'U21' ],
  [ 'U23_24',       'U23', 'U24' ],
  [ 'U25_26',       'U25', 'U26' ],
  [ 'U28_29',       'U28', 'U29' ],
  [ 'U30_31',       'U30', 'U31' ],
  [ 'U34_35_36',    'U34', 'U35', 'U36' ],
  [ 'U37_38_39',    'U37', 'U38', 'U39' ],
  [ 'U40_41',       'U40', 'U41' ],
  [ 'C1_58',        'C1',  'C2',  'C3',  'C4',  'C5',  'C6',  'C7', 'C8', 'C9','C10','C11','C12','C13','C14','C15','C16','C17','C18','C19','C20','C21','C22','C23','C24','C25','C26','C27','C28','C29','C30','C31','C32','C33','C34','C35','C36','C37','C38','C39','C40','C41','C42','C43','C44','C45','C46','C47','C48','C49','C50','C51','C52','C53','C54','C55','C56','C57','C58' ],
  [ 'C59_64',       'C59', 'C60', 'C61', 'C62', 'C63', 'C64' ],
  [ 'C65_67',       'C65', 'C66', 'C67' ],
  [ 'C68_70',       'C68', 'C69', 'C70' ],
  [ 'C71_77',       'C71', 'C72', 'C73', 'C74', 'C75', 'C76', 'C77' ],
  [ 'C79_80',       'C79', 'C80' ],
  [ 'C82_84',       'C82', 'C83', 'C84' ],
  [ 'C86_87',       'C86', 'C87' ],
  [ 'C88_90',       'C88', 'C89', 'C90' ],
  [ 'C92_93',       'C92', 'C93' ],
  [ 'R2_3',         'R2',  'R3' ],
  [ 'R5_6',         'R5',  'R6' ],
  [ 'R7_8',         'R7',  'R8' ],
  [ 'R11_14',       'R11', 'R12', 'R13', 'R14'  ],
  [ 'R16_22',       'R16', 'R17', 'R18', 'R19', 'R20', 'R21', 'R22' ],
  [ 'R23_24',       'R23', 'R24' ],
  [ 'R25_26',       'R25', 'R26' ],
  [ 'R27_33',       'R27', 'R28', 'R29', 'R30', 'R31', 'R32', 'R33' ],
  [ 'R37_42',       'R37', 'R38', 'R39', 'R40', 'R41', 'R42' ],                    
  [ 'R43_48',       'R43', 'R44', 'R45', 'R46', 'R47', 'R48' ],
  [ 'RR1_4',        'RR1', 'RR2', 'RR3', 'RR4' ],
  [ 'RR5_7',        'RR5', 'RR6', 'RR7' ],
  [ 'RR8_10',       'RR8', 'RR9', 'RR10' ],
  [ 'L2_3',         'L2',  'L3' ],
  [ 'Q1_2',         'Q1',  'Q2' ],
  [ 'J7_8',         'J7',  'J8' ],
  [ 'SLOT1_2',      'SLOT1', 'SLOT2' ],
  [ 'JP1_2',        'JP1', 'JP2' ],
  [ 'JP3_6',        'JP3', 'JP4', 'JP5', 'JP6' ],
  [ 'JP7_8',        'JP7', 'JP8' ],

  // Плата клавиатуры
  [ 'kD4_6',        'kD4', 'kD5', 'kD6' ],
  [ 'kR1_3',        'kR1', 'kR2', 'kR3' ],
  [ 'kC1_C2',       'kC1', 'kC2' ],
  [ 'kSW1-SW64_SW66-SW73', 'kSW1', 'kSW2', 'kSW3', 'kSW4', 'kSW5', 'kSW6', 'kSW7', 'kSW8', 'kSW9', 'kSW10',
                           'kSW11','kSW12','kSW13','kSW14','kSW15','kSW16','kSW17','kSW18','kSW19','kSW20',
                           'kSW21','kSW22','kSW23','kSW24','kSW25','kSW26','kSW27','kSW28','kSW29','kSW30',
                           'kSW31','kSW32','kSW33','kSW34','kSW35','kSW36','kSW37','kSW38','kSW39','kSW40',
                           'kSW41','kSW42','kSW43','kSW44','kSW45','kSW46','kSW47','kSW48','kSW49','kSW50',
                           'kSW51','kSW52','kSW53','kSW54','kSW55','kSW56','kSW57','kSW58','kSW59','kSW60',
                           'kSW61','kSW62','kSW63','kSW64',        'kSW66','kSW67','kSW68','kSW69','kSW70',
                           'kSW71','kSW72','kSW73' ]
];

/** Префикс позиционного обозначения элемента */
const GlobalIdPrefix = [ '', 'k' ];

/** Идентификаторы таблиц с левой стороны от рисунков плат */
const GlobalLeftTableId = [ 'MainTable', 'KeyTable' ];

/** Таблицы с элементами плат */
const GlobalDataBoard = [ dataMainBoard, dataKeyBoard ];

/** Массив [ hollowref, group ] ссылок на объекты посадочных площадок для MainBoard */
var GlobalMainRefArray = [];

/** Массив [ hollowref, group ] ссылок на объекты посадочных площадок для KeyBoard */
var GlobalKeyRefArray = [];

/** Таблицы с объектами посадочных площадок */
const GlobalRefArray = [ GlobalMainRefArray, GlobalKeyRefArray ];

/** Массив соответствия сегмент/сеть для MainBoard */
var GlobalMainNetArray = [];

/** Массив соответствия сегмент/сеть для KeyBoard */
var GlobalKeyNetArray = [];

/** Массивы соответствия сегмент/сеть */
const GlobalNetArray = [ GlobalMainNetArray, GlobalKeyNetArray ];


/**
 * Преобразование простого ID или Complex ID в список простых ID
 */
function complexIdToIdList(id) {
  var idList = [];

  // Перебор строк таблицы bomTranslateTable
  for (const line of bomTranslateTable) {
    // Искомый ID - это complex ID текущей строки?
    if (id == line[0]) {
      // Если так, то результат - это остаток строки (список простых ID)
      for (var i = 1; i < line.length; i++) {
        idList.push(line[i]);
      }
    }
  }
  // Если это не complex ID, то результат - это список из одного искомого ID
  if (idList.length == 0) idList.push(id);
  return idList;
}

/**
 * Преобразование простого ID в Complex ID (если он туда входит)
 */
function idToComplexId(id) {

  // Перебор строк таблицы bomTranslateTable
  for (const line of bomTranslateTable) {
    for (var i = 1; i < line.length; i++) {
      // Искомый ID найден в составе Complex ID?
      if (id == line[i]) {
        // Если так, вернуть Complex ID
        return line[0];
      }
    }
  }
  // Если этот ID не входит в состав ни одного Complex ID,
  // вернуть его
  return id;
}

/**
 * Получить список посадочных мест в виде [group, hollowref]
 * для указанного списка идентификаторов элементов
 */
function getFootListById(idList) {

  var footList = [];

  // Отметить все выделенные посадочные места
  for (const id of idList) {

    // Перебрать посадочные места, найти hollowref/group нужного по id
    for (const refArray of GlobalRefArray) {
      for (const r of refArray) {
        if (r != undefined && r[0].id == id) {
          footList.push(r);
        }
      }
    }
  }
  return footList;
}

const colourFixed =        '0,150,0';
const colourFixedPointed = '0,255,0';
const colourPointed =      '255,0,0';
const tableAlpha    =      ',0.4';
const colourFootprint =    '#008484';

/**
 * Окрасить зафиксированние посадочное место
 */
function colorFootprintFixed(fp) {
  const hollowref = fp[0];
  const group = fp[1];
  group.setAttributeNS(null,     'fill-opacity',   1.0);
  group.setAttributeNS(null,     'stroke',         'rgb(' + colourFixed + ')');
  group.setAttributeNS(null,     'stroke-width',   3.0);
  group.setAttributeNS(null,     'stroke-opacity', 1.0);
  hollowref.setAttributeNS(null, 'fill',           'rgb(' + colourFixed + ')');
  hollowref.setAttributeNS(null, 'fill-opacity',   0.4);
}

/**
 * Окрасить зафиксированние посадочное место под курсором
 */
function colorFootprintFixedPointed(fp) {
  const hollowref = fp[0];
  const group = fp[1];
  group.setAttributeNS(null,     'fill-opacity',   1.0);
  group.setAttributeNS(null,     'stroke',         'rgb(' + colourFixedPointed + ')');
  group.setAttributeNS(null,     'stroke-width',   3.0);
  group.setAttributeNS(null,     'stroke-opacity', 1.0);
  hollowref.setAttributeNS(null, 'fill',           'rgb(' + colourFixedPointed + ')');
  hollowref.setAttributeNS(null, 'fill-opacity',   0.4);
}

/**
 * Окрасить посадочное место под курсором
 */
function colorFootprintPointed(fp) {
  const hollowref = fp[0];
  const group = fp[1];
  group.setAttributeNS(null,     'fill-opacity',   1.0);
  group.setAttributeNS(null,     'stroke',         'rgb(' + colourPointed + ')');
  group.setAttributeNS(null,     'stroke-width',   3.0);
  group.setAttributeNS(null,     'stroke-opacity', 1.0);
  hollowref.setAttributeNS(null, 'fill',           'rgb(' + colourPointed + ')');
  hollowref.setAttributeNS(null, 'fill-opacity',   0.4);
}

/**
 * Снять окраску посадочного места
 */
function colorFootprintClean(fp) {
  const hollowref = fp[0];
  const group = fp[1];
  group.setAttributeNS(null,     'fill-opacity',   0.0);
  group.setAttributeNS(null,     'stroke-opacity', 0.0);
  hollowref.setAttributeNS(null, 'fill-opacity',   0.0);
  hollowref.setAttributeNS(null, 'stroke-opacity', 0.0);
}                  

/**
 * Получить из элемента-строки таблицы список
 * посадочных мест в виде [group, hollowref]
 */
function tableRowToFootList(row) {

  if (row.id == '') return [];

  // Очищеный идентификатор ряда таблицы (Убран начальный "table_")
  const id = row.id.slice(6);
  // Список ID одинаковых элементов
  const idList = complexIdToIdList(id);
  // Список посадочных мест одинаковых элементов
  return getFootListById(idList);
}

/**
 * Проверить, зафиксирован ли этот ряд таблицы
 */
function isRowFixed(row) {

  if (FixedRow != undefined && FixedRow == row) return true;

  return false;
}

const OldIC = 'Blue';
const NewIC = 'Coral';

/** Смещение по горизонтали текущего (во время onLoad) изображения */
var GlobalOffsetX = undefined;
/** Смещение по вертикали текущего изображения */
var GlobalOffsetY = undefined;
/** Ширина текущего изображения */
var GlobalWidth = undefined;
/** Ширина выведенного на экран изображения */
var GlobalImageWidth = undefined;
/** Элемент SVG, из которого вызван OnLoad */
var GlobalSvg = undefined;


var GlobalColour = undefined;
var GlobalDot = undefined;

/** Режим работы: true - выбор посадочных мест, false - площадок */
var GlobalModeFootprint = undefined;

/** Зафиксированная строка таблицы платы MainBoard или платы KeyBoard */
var FixedRow = undefined;

/**
 * Сдвинуть таблицу на строку row
 *
 * boardNum - номер платы (0 - MainBoard, 1 - KeyBoard)
 */
function scrollToRow(row, boardNum) {

  const tableID = GlobalLeftTableId[boardNum];

  const container = document.getElementById(tableID);
  const rect = row.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  // Позиция строки относительно начала прокрутки контейнера
  const rowTop = rect.top - containerRect.top + container.scrollTop;

  // Прокрутка только контейнера
  container.scrollTo({
    // небольшой отступ сверху, чтобы строка не прижалась к краю
    top: rowTop - 50,
    behavior: 'smooth'
  });
}

/**
 * Нарисовать рамку с названием рисунка в левом верхнем углу
 */
function drawTitle(title) {

  const x = 15
  const y = 18;
  const h = 68;
  const w = 480;
  const fontSize = 40;

  // Создать рамку для названия рисунка
  var rect = document.createElementNS(svgNS,'rect');
  rect.setAttributeNS(null,'x',x);
  rect.setAttributeNS(null,'y',y);
  rect.setAttributeNS(null,'width',w);
  rect.setAttributeNS(null,'height',h);
  rect.setAttributeNS(null,'fill','white');
  rect.setAttributeNS(null,'stroke', 'DarkCyan');
  rect.setAttributeNS(null,'stroke-width',5.0);
  rect.setAttributeNS(null,'rx',10.0);
  rect.style.pointerEvents = 'none';
  GlobalSvg.appendChild(rect);

  // Создать текстовое название рисунка
  var text = document.createElementNS(svgNS,'text');
  text.setAttributeNS(null,'x',x+w/2);
  text.setAttributeNS(null,'y',y+h/2 + fontSize * 0.1);
  text.setAttributeNS(null,'font-size', fontSize.toString() + 'px');
  text.setAttributeNS(null,'fill', 'Gold');
  text.setAttributeNS(null,'stroke','Black');
  text.setAttributeNS(null,'stroke-width',1.5);
  text.setAttributeNS(null,'font-family','Noto Sans');
  text.setAttributeNS(null,'font-weight','bold');
  text.setAttributeNS(null,'text-anchor','middle');
  text.setAttributeNS(null,'dominant-baseline','middle');
  text.setAttributeNS(null,'style','user-select: none;');
  text.appendChild(document.createTextNode(title));
  GlobalSvg.appendChild(text);
}

/**
 * Установить обработчики кнопок площадки <-> посадочные места
 */
function addButtonsEvents() {

  // Выход, если обработчики уже установлены
  if (GlobalModeFootprint != undefined) return;

  // Установить начальное значение
  GlobalModeFootprint = true;

  // Добавить обработчик события 'click' для конпки buttonP
  document.getElementById('buttonP').addEventListener('click', function(event) {
    GlobalModeFootprint = false;

    // Отключить механизм ссылок посадочных мест
    for (const refArray of GlobalRefArray) {
      for (const ref of refArray) {
        if (ref != undefined) {
          (ref[0]).style.pointerEvents = 'none';
        }
      }
    }
  });

  // Добавить обработчик события 'click' для конпки buttonF
  document.getElementById('buttonF').addEventListener('click', function(event) {
    GlobalModeFootprint = true;

    // Отключить отображение дорожек
    for (const netArray of GlobalNetArray) {
      for (const line of netArray) {
        line[2] = false;
        line[0].setAttributeNS(null,'stroke-opacity', 0.0);
      }
    }

    // Включить механизм ссылок посадочных мест
    for (const refArray of GlobalRefArray) {
      for (const ref of refArray) {
        if (ref != undefined) {
          (ref[0]).style.pointerEvents = 'auto';
        }
      }
    }
  });
}

/**
 * Заполнить списки объектов посадочных мест
 *
 * boardMode - режим отображения элемента (true для рисунков плат, false для этапов сборки)
 * boardNum - номер платы (0 - MainBoard, 1 - KeyBoard)
 */
function collectFootprints(boardNum, boardMode = true) {

  for (const d of GlobalDataBoard[boardNum]) {
    if (d[0] == 'footprint') {
      GlobalRefArray[boardNum].push(drawFootprint(true, d, boardNum, boardMode));
    }
  }
}

/**
 * Заполнить списки объектов дорожек
 *
 * boardNum - номер платы (0 - MainBoard, 1 - KeyBoard)
 */
function collectTracks(boardNum) {

  for (const d of GlobalDataBoard[boardNum]) {
    if (d[0] == 'segment') {
      x1 = scaleCoordX(d[1]);
      y1 = scaleCoordY(d[2]);
      x2 = scaleCoordX(d[3]);
      y2 = scaleCoordY(d[4]);
      w = scaleCoord(d[5]);
      layer = d[6];
      net = d[7];

      var colour = ''
      // Верхние дорожки
      if (layer == 'F.Cu') colour = 'red';
      // Нижние дорожки
      if (layer == 'B.Cu') colour = 'blue';

      if (colour == '') continue;

      line = drawLine(x1, y1, x2, y2, w, colour, true);
      GlobalNetArray[boardNum].push([line, net, false]);
    }
  }
}

/**
 * Добавить обработчики событий левых таблиц
 *
 * boardNum - номер платы (0 - MainBoard, 1 - KeyBoard)
 */
function addTableEvents(boardNum) {

  const tableID = GlobalLeftTableId[boardNum];
  const refArray = GlobalRefArray[boardNum];

  // Получаем таблицу
  const table = document.getElementById(tableID);

  // Назначаем обработчик на таблицу по наведению курсора
  table.addEventListener('mouseover', function(event) {

    // Отключить в режиме "площадок"
    if (!GlobalModeFootprint) return;

    // Элемент, на который наведён курсор
    const target = event.target;
    if (target.tagName == 'TD') {
      // Элемент-ряд таблицы
      const row = target.closest('tr');
      if (row && table.contains(row)) {

        const footList = tableRowToFootList(row);
        if (footList.length != 0) {
          if (isRowFixed(row)) {
            // Подсветить строку как фиксированную указанную
            row.style.backgroundColor = 'rgba(' + colourFixedPointed + tableAlpha + ')';
            // Отметить посадочные места как фиксированные указанные
            for (const f of footList) {
              colorFootprintFixedPointed(f);
            }
          } else {
            // Подсветить строку как указанную
            row.style.backgroundColor = 'rgba(' + colourPointed + tableAlpha + ')';
            // Отметить посадочные места как указанные
            for (const f of footList) {
              colorFootprintPointed(f);
            }
          }
        }
      }
    }
  });

  // Назначаем обработчик на таблицу по убиранию курсора
  table.addEventListener('mouseout', function(event) {

    // Отключить в режиме "площадок"
    if (!GlobalModeFootprint) return;

    // Элемент, на который наведён курсор
    const target = event.target;
    if (target.tagName == 'TD') {
      // Элемент-ряд таблицы
      const row = target.closest('tr');
      if (row && table.contains(row)) {

        const footList = tableRowToFootList(row);
        if (footList.length != 0) {
          if (isRowFixed(row)) {
            // Подсветить фиксированную текущую строку
            row.style.backgroundColor = 'rgba(' + colourFixed + tableAlpha + ')';
            // Подсветить фиксированные элементы
            for (const f of footList) {
              colorFootprintFixed(f);
            }
          } else {
            // Снять подсветку со строки
            row.style.backgroundColor = '';
            // Снять подсветку с посадочных мест
            for (const f of footList) {
              colorFootprintClean(f);
            }
          }
        }
      }
    }
  });


  // Назначаем обработчик на таблицу по нажатию
  table.addEventListener('click', function(event) {

    // Отключить в режиме "площадок"
    if (!GlobalModeFootprint) return;

    // Переход только при нажатой клавише Ctrl
    if (event.ctrlKey) {

      // Выполнить переход как бы БЕЗ нажатия Ctrl
      event.ctrlKey = false;

      if (event.target.tagName == 'TD') {
        // Элемент-ряд таблицы
        const row = event.target.closest('tr');
        if (row && table.contains(row) && row.id != '') {
          // Переход на очищеный идентификатор ряда таблицы (Убран начальный "table_")
          window.location.href = './bom.html#' + row.id.slice(6);
        }
      }
      return;
    }

    // Элемент, на который наведён курсор
    const target = event.target;
    if (target.tagName == 'TD') {

      // Элемент-ряд таблицы
      const row = target.closest('tr');
      if (row && table.contains(row)) {
        const footList = tableRowToFootList(row);
        if (footList.length != 0) {
          // Нажата фиксированная строка
          if (isRowFixed(row)) {
            // Отметить строку как указанную
            row.style.backgroundColor = 'rgba(' + colourPointed + tableAlpha + ')';
            // Отметить посадочные места как указанные
            for (const f of footList) {
              colorFootprintPointed(f);
            }
            // Сбросить статус фиксированной строки
            FixedRow = undefined;

          // Нажата не фиксированная строка
          } else {
            // Если была предыдущая фиксированная строка
            if (FixedRow != undefined) {
              // Очистить цвет предыдущей фиксированной строки
              FixedRow.style.backgroundColor = '';

              // Очистить цвет предыдущих фиксированных элементов
              const oldFootList = tableRowToFootList(FixedRow);
              if (oldFootList.length != 0) {
                for (const f of oldFootList) {
                  colorFootprintClean(f);
                }
              }
            }

            // Окрасить строку как фиксированную указанную
            row.style.backgroundColor = 'rgba(' + colourFixed + tableAlpha + ')';
            // Отметить элементы как фиксированные указанные
            for (const f of footList) {
              colorFootprintFixedPointed(f);
            }
            // Установить статус фиксированной строки
            FixedRow = row;
          }
        }
      }
    }
  });
}

/**
 * Функция, выполняемая при загрузке изображения платы
 *
 * boardNum - номер платы (0 - MainBoard, 1 - KeyBoard)
 */
function onLoad_board(element, boardNum) {

  GlobalSvg = element;
  GlobalColour = 'none';
  GlobalDot = 'none';

  drawBoard(boardNum);

  collectFootprints(boardNum, true);
  collectTracks(boardNum);

  addButtonsEvents();

  addTableEvents(boardNum);
}

/**
 * Пересчитать координаты SVG в экранные координаты
 */
function scaleCoord(coordMM) {
  return coordMM * GlobalImageWidth / GlobalWidth;
}

/**
 * Пересчитать координаты SVG в экранные координаты с учётом горизонтального сдвига
 */
function scaleCoordX(coordMM) {
  return (coordMM + GlobalOffsetX) * GlobalImageWidth / GlobalWidth;
}

/**
 * Пересчитать координаты SVG в экранные координаты с учётом вертикального сдвига
 */
function scaleCoordY(coordMM) {
  return (coordMM + GlobalOffsetY) * GlobalImageWidth / GlobalWidth;
}

/**
 * Нарисовать отрезок
 */
function drawLine(x1,y1,x2,y2,w,colour,trace,parent=undefined) {

  if (GlobalColour != undefined && GlobalColour != '' && GlobalColour != 'none') {
    colour = GlobalColour;
    w = 3.0;
  }

  var line = document.createElementNS(svgNS,'line');
  line.setAttributeNS(null,'x1',x1);
  line.setAttributeNS(null,'y1',y1);
  line.setAttributeNS(null,'x2',x2);
  line.setAttributeNS(null,'y2',y2);

  if (trace) {
    line.setAttributeNS(null,'stroke', colour);
    line.setAttributeNS(null,'stroke-width', w);
    line.setAttributeNS(null,'stroke-opacity', 0.0);
    line.setAttributeNS(null,'style', 'stroke-linecap:round; stroke-linejoin:round; pointer-events:none;');
  } else {
    if (w > 0) {
      line.setAttributeNS(null,'stroke', colour);
      line.setAttributeNS(null,'stroke-width', w);
    }
    line.setAttributeNS(null,'style', 'stroke-linecap:round; stroke-linejoin:round;');
  }

  if (GlobalDot != undefined && GlobalDot != '' && GlobalDot != 'none') {
    line.setAttributeNS(null,'stroke-dasharray', GlobalDot);
  }

  (parent == undefined ? GlobalSvg : parent).appendChild(line);
  return line;
}

/**
 * Вычислить расстояние между двумя точками
 */
function dist(a, b) {
    return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]));
}

/**
 * Нарислвать дугу
 */
function drawArc(sx,sy,mx,my,ex,ey,w,colour,parent=undefined) {

  if (GlobalColour != undefined && GlobalColour != '' && GlobalColour != 'none') {
    colour = GlobalColour;
    w = 3.0;
  }

  var arc = document.createElementNS(svgNS,'path');

  const start = [sx, sy];
  const mid = [mx, my];
  const end = [ex, ey];

  // Длины сторон треугольника
  const a = dist(end, mid);
  const b = dist(mid, start);
  const c = dist(start, end);

  // Вычисляем угол при средней точке
  const angle = Math.acos((a * a + b * b - c * c) / (2 * a * b));

  // Площадь треугольника через известный угол
  const S = a * b * Math.sin(angle) / 2;

  // Вычисляем радиус окружности
  const r = (a * b * c) / (4 * S);

  // 1, если большая дуга (угол больше 180 градусов) и 0 в противном случае
  const largeArcFlag = (angle > Math.PI) ? 1 : 0;
  // 1, если start - mid - end по часовой стрелке и 0, если против при помощи
  // определения знака псевдоскалярного произведения векторов start-end и start-mid
  const sweepFlag = ((end[0] - start[0]) * (mid[1] - start[1]) -
                     (end[1] - start[1]) * (mid[0] - start[0]) < 0) ? 1 : 0;

  // Возвращаем команду для пути
  const d = ['M', start, 'A', r, r, '0', largeArcFlag, sweepFlag, end].join(' ');

  arc.setAttributeNS(null, 'd',d);
  arc.setAttributeNS(null, 'fill', 'none');
  if (w > 0) {
    arc.setAttributeNS(null,'stroke', colour);
    arc.setAttributeNS(null,'stroke-width', w);
  }
  arc.setAttributeNS(null, 'style', 'stroke-linecap:round; stroke-linejoin:round;');

  if (GlobalDot != undefined && GlobalDot != '' && GlobalDot != 'none') {
    arc.setAttributeNS(null,'stroke-dasharray', GlobalDot);
  }

  (parent == undefined ? GlobalSvg : parent).appendChild(arc);

  return r;
}

/**
 * Нарисовать переходное отверстие
 */
function drawVia(x,y,size,drill,net) {

  const colour = 'rgb(100,100,100)';

  const pad = document.createElementNS(svgNS,'circle');
  pad.setAttributeNS(null,'cx',scaleCoordX(x));
  pad.setAttributeNS(null,'cy',scaleCoordY(y));
  pad.setAttributeNS(null,'r',scaleCoord(size/2));
  pad.setAttributeNS(null,'stroke', colour);
  pad.setAttributeNS(null,'fill', 'none');
  pad.setAttributeNS(null,'stroke-width', 0.4);
  GlobalSvg.appendChild(pad);

  const circle = document.createElementNS(svgNS,'circle');
  circle.setAttributeNS(null,'cx',scaleCoordX(x));
  circle.setAttributeNS(null,'cy',scaleCoordY(y));
  circle.setAttributeNS(null,'r',scaleCoord(drill/2));
  GlobalSvg.appendChild(circle);
}

/**
 * Нарисовать окружность
 */
function drawCircle(cx,cy,r,w,stoke_type,fill,colour,parent=undefined) {

  if (GlobalColour != undefined && GlobalColour != '' && GlobalColour != 'none') {
    colour = GlobalColour;
    w = 3.0;
  }

  const circle = document.createElementNS(svgNS,'circle');
  circle.setAttributeNS(null,'cx',cx);
  circle.setAttributeNS(null,'cy',cy);
  circle.setAttributeNS(null,'r',r);

  if (fill) {
    circle.setAttributeNS(null, 'stroke', 'none');
    if (colour != '') circle.setAttributeNS(null, 'fill', colour);
  } else {
    if (w > 0) circle.setAttributeNS(null,'stroke-width', w);
    if (colour != '') circle.setAttributeNS(null, 'stroke', colour);
    circle.setAttributeNS(null, 'fill', 'none');
  }

  if (GlobalDot != undefined && GlobalDot != '' && GlobalDot != 'none') {
    circle.setAttributeNS(null, 'stroke-dasharray', GlobalDot);
  }

  (parent == undefined ? GlobalSvg : parent).appendChild(circle);
}

/**
 * Нарисовать посадочную площадку
 *
 * boardNum - номер платы (0 - MainBoard, 1 - KeyBoard)
 */
function drawPad(boardNum, x, y, size, drill, shape, colour, net, parent=undefined) {

  if (GlobalColour != undefined && GlobalColour != '' && GlobalColour != 'none') {
    colour = GlobalColour;
    w = 3.0;
  }

  if (shape == 'circle')  {
    const pad = document.createElementNS(svgNS,'circle');
    pad.setAttributeNS(null,'cx',x);
    pad.setAttributeNS(null,'cy',y);
    pad.setAttributeNS(null,'r', size/2);
    pad.setAttributeNS(null,'stroke-width', 0.4);
    if (colour != '') pad.setAttributeNS(null,'fill', colour);
    else              pad.setAttributeNS(null,'fill', 'none');
    (parent == undefined ? GlobalSvg : parent).appendChild(pad);
  
  } else if (shape == 'rect') {
    const pad = document.createElementNS(svgNS,'rect');
    pad.setAttributeNS(null,'x',  x - size/2);
    pad.setAttributeNS(null,'y', y - size/2);
    pad.setAttributeNS(null,'width', size);
    pad.setAttributeNS(null,'height', size);
    pad.setAttributeNS(null,'stroke-width', 0.4);
    if (colour != '') pad.setAttributeNS(null,'fill', colour);
    else              pad.setAttributeNS(null,'fill', 'none');
    (parent == undefined ? GlobalSvg : parent).appendChild(pad);
  }

  if (colour != '') {

    const hole = document.createElementNS(svgNS,'circle');
    hole.setAttributeNS(null,'cx', x);
    hole.setAttributeNS(null,'cy', y);
    hole.setAttributeNS(null,'r', drill/2);
    hole.setAttributeNS(null,'stroke', 'none');
    hole.setAttributeNS(null,'fill', '#C0C0C0');
    (parent == undefined ? GlobalSvg : parent).appendChild(hole);

  } else if (net != '') {

    const hollow = document.createElementNS(svgNS,'circle');
    hollow.setAttributeNS(null,'cx',x);
    hollow.setAttributeNS(null,'cy',y);
    hollow.setAttributeNS(null,'r', size/2);
    hollow.setAttributeNS(null,'stroke', 'none');
    hollow.setAttributeNS(null,'fill', 'black');
    hollow.setAttributeNS(null,'fill-opacity', 0);
    GlobalSvg.appendChild(hollow);

    // Добавление обработчика события 'click'
    hollow.addEventListener('click', function(event) {
      if (GlobalModeFootprint) return;
      swapShowTrace(net, boardNum);
      event.stopPropagation();
    });
  }
}

/**
 * Нарисовать текстовую строку
 */
function drawText(type,value,x,y,angle,font_x,font_y,font_t,font_italic,colour,justify) {

  const splitted = value.split(/\r?\n/);

  for (var strnum = 0; strnum < splitted.length; strnum ++) {
    vert = - (splitted.length - 1) / 2 + strnum;

    const text = document.createElementNS(svgNS,'text');
    text.setAttributeNS(null,'x',scaleCoordX(x));
    text.setAttributeNS(null,'y',scaleCoordY(y) + vert * scaleCoord(font_x)*1.49);
    text.setAttributeNS(null,'transform', 'rotate(' + angle + ' ' + scaleCoordX(x) + ' ' + scaleCoordY(y) + ')');
    text.setAttributeNS(null,'font-size', scaleCoord(font_x)*1.49);
    text.setAttributeNS(null,'font-family', 'Noto Sans');
    if (!justify) {
      text.setAttributeNS(null,'style', 'user-select: none; text-anchor: start;');
    } else {
      text.setAttributeNS(null,'style', 'user-select: none; text-anchor: middle;');
    }
    text.setAttributeNS(null,'dominant-baseline', 'middle');

    text.setAttributeNS(null,'lengthAdjust', 'spacing');
//    w = splitted[strnum].length * scaleCoord(font_x) * 1.49 * 0.55; // scaleCoord(font_y)*0.92;
//    text.setAttributeNS(null,'textLength', w);

    text.setAttributeNS(null,'stroke', colour);
    text.setAttributeNS(null,'stroke-width', scaleCoord(font_t)*0.3);

    text.setAttributeNS(null,'fill', colour);
    if (font_italic) {
      text.setAttributeNS(null,'font-style', 'italic');
    }
    text.textContent = splitted[strnum];
    GlobalSvg.appendChild(text);
  }
}

/**
 * Получить идентификатор посадочного места
 */
function getTitle(data) {
  if (data[0] != 'footprint') return '';

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] == 'property' && data[i][1] == 'Reference') {
      return data[i][2];
    }
  }
  return '';
}

/**
 * Добавить точку к ограничивающему прямоугольнику bound[xmin, xmax, ymin, ymax]
 */
function addBound(bound, x, y) {
  var xmin = bound[0] < x ? bound[0] : x;
  var xmax = bound[1] > x ? bound[1] : x;
  var ymin = bound[2] < y ? bound[2] : y;
  var ymax = bound[3] > y ? bound[3] : y;
  return [ xmin, xmax, ymin, ymax ];
}

/**
 * Нарисовать посадочное место
 *
 * isHollow - режим отображения (true - с невидимой зоной, false - просто рисунок)
 * data - строка таблицы dataMainBoard или dataKeyBoard
 * boardNum - номер платы (0 - MainBoard, 1 - KeyBoard)
 * boardMode - режим отображения элемента (true для рисунков плат, false для этапов сборки)
 */
function drawFootprint(isHollow, data, boardNum, boardMode) {

  // Позиционное обозначение элемента
  const title = getTitle(data);

  // Если элемент не имеет позиционного обознечения, то вернуть неопределённое значение
  if (isHollow && title == '') return undefined;

  // Подготовить параметры для поворота изображения вокруг точки установки
  var x = 0;
  var y = 0;
  var angle = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] == 'at') {
      x = data[i][1];
      y = data[i][2];
      angle = data[i][3];
    }
  }
  const cs = Math.cos(-angle * Math.PI / 180);
  const sn = Math.sin(-angle * Math.PI / 180);

  // Группа элементов посадочного места
  const group = document.createElementNS(svgNS, 'g');

  if (isHollow) group.classList.add('hollow-hover');
  GlobalSvg.appendChild(group);

  // Ограничивающий прямоугольник (xmin, xmax, ymin, ymax)
  var bound = [100000, -100000, 100000, -100000 ];
  // Радиус закругления ограничивающего прямоугольника
  var hradi = 0.1;

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] == 'fp_line') {
      const sx = scaleCoordX(data[i][1] * cs - data[i][2] * sn + x);
      const sy = scaleCoordY(data[i][1] * sn + data[i][2] * cs + y);
      const ex = scaleCoordX(data[i][3] * cs - data[i][4] * sn + x);
      const ey = scaleCoordY(data[i][3] * sn + data[i][4] * cs + y);
      const w = scaleCoord(data[i][5]);
      const layer = data[i][7];

      if (layer != 'F.SilkS') continue;

      if (isHollow) {
        drawLine(sx, sy, ex, ey, -1, '',       false, group);
      } else {
        drawLine(sx, sy, ex, ey, w, colourFootprint, false, group);
      }
      bound = addBound(bound, sx, sy);
      bound = addBound(bound, ex, ey);
    }

    if (data[i][0] == 'fp_arc') {
      const sx = scaleCoordX(data[i][1] * cs - data[i][2] * sn + x);
      const sy = scaleCoordY(data[i][1] * sn + data[i][2] * cs + y);
      const mx = scaleCoordX(data[i][3] * cs - data[i][4] * sn + x);
      const my = scaleCoordY(data[i][3] * sn + data[i][4] * cs + y);
      const ex = scaleCoordX(data[i][5] * cs - data[i][6] * sn + x);
      const ey = scaleCoordY(data[i][5] * sn + data[i][6] * cs + y);
      const w = scaleCoord(data[i][7]);
      const layer = data[i][9];

      if (layer != 'F.SilkS') continue;

      var r; 
      if (isHollow) {
        r = drawArc(sx, sy, mx, my, ex, ey, -1, '', group);
      } else {
        r = drawArc(sx, sy, mx, my, ex, ey, w, colourFootprint, group);
      }
      hradi = hradi > r ? hradi : r;
      bound = addBound(bound, sx, sy);
      bound = addBound(bound, mx, my);
      bound = addBound(bound, ex, ey);
    }

    if (data[i][0] == 'fp_circle') {
      const cx0 = data[i][1];
      const cy0 = data[i][2];
      const ex0 = data[i][3];
      const ey0 = data[i][4];

      const cx = scaleCoordX(cx0 * cs - cy0 * sn + x);
      const cy = scaleCoordY(cx0 * sn + cy0 * cs + y);
      const ex = scaleCoordX(ex0 * cs - ey0 * sn + x);
      const ey = scaleCoordX(ex0 * sn + ey0 * cs + y);
      const w = scaleCoord(data[i][5]);
      const stroke_type = data[i][6];
      const fill = data[i][7];
      const layer = data[i][8];

      if (layer != 'F.SilkS') continue;

      // Радиус как растояние от точки center до точки end
      const r = scaleCoord(Math.sqrt((cx0 - ex0) * (cx0 - ex0) + (cy0 - ey0) * (cy0 - ey0)));

      if (isHollow) {
        drawCircle(cx, cy, r, w, stroke_type, fill, '', group);
      } else {
        drawCircle(cx, cy, r, w, stroke_type, fill, colourFootprint, group);
      }
      hradi = hradi > r ? hradi : r;
      bound = addBound(bound, cx - r, cy - r);
      bound = addBound(bound, cx + r, cy + r);
    }

    if (data[i][0] == 'pad') {
      const px = scaleCoordX(data[i][1][1] * cs - data[i][1][2] * sn + x);
      const py = scaleCoordY(data[i][1][1] * sn + data[i][1][2] * cs + y);
      const size = scaleCoord(data[i][3]);
      const drill = scaleCoord(data[i][4]);
      const shape = data[i][2];
      const net = data[i][5];

      if (isHollow) {
        drawPad(boardNum, px, py, size, drill, shape, '', net, group);
      } else {
        drawPad(boardNum, px, py, size, drill, shape, colourFootprint, net, group);
      }
    }

    if (!isHollow && (data[i][0] == 'property' || data[i][0] == 'fp_text')) {
      const type = data[i][1]; // Value/Reference
      const value = data[i][2];
      const tx = data[i][3][1] * cs - data[i][3][2] * sn + x;
      const ty = data[i][3][1] * sn + data[i][3][2] * cs + y;
      const tangle = angle ==   0 && data[i][3][3] ==   0 ?   0 :
        angle ==   0 && data[i][3][3] ==  90 ? -90 :
        angle ==   0 && data[i][3][3] == 180 ?   0 :
        angle ==  90 && data[i][3][3] == 270 ? -90 :
        angle ==  90 && data[i][3][3] ==  90 ? -90 :
        angle == 180 && data[i][3][3] == 180 ?   0 :
        angle == -90 && data[i][3][3] ==  90 ? -90 :
        angle == -90 && data[i][3][3] == 180 ?   0 :
        angle == -90 && data[i][3][3] == 270 ? -90 :
        0;
      const font_x = data[i][4][1];
      const font_y = data[i][4][2];
      const font_t = data[i][4][3];
      const font_i = data[i][4][4];
      const layer = data[i][5];
      const justify = data[i][0] == 'fp_text' ? data[i][6] : 1;

      if (layer != 'F.SilkS') continue;

      drawText(type,value,tx,ty,tangle,font_x,font_y,font_t,font_i,colourFootprint,justify);
    }
  }

  // Нет или недостаточно элементов шелкографии. Определить габариты по площадкам.
  if (bound[0] == 100000 || bound[1] == -100000 || bound[2] == 100000 || bound[3] == -100000) {
    for (let i = 0; i < data.length; i++) {
      if (data[i][0] == 'pad') {
        const px = scaleCoordX(data[i][1][1] * cs - data[i][1][2] * sn + x);
        const py = scaleCoordY(data[i][1][1] * sn + data[i][1][2] * cs + y);
        const size = scaleCoord(data[i][3]);
        const drill = scaleCoord(data[i][4]);
        hradi = hradi > size/2 ? hradi : size/2;
        hradi = hradi > drill/2 ? hradi : drill/2;
        bound = addBound(bound, px - hradi, py - hradi);
        bound = addBound(bound, px + hradi, py + hradi);
      }
    }
  }

  if (GlobalColour != undefined && GlobalColour != '' && GlobalColour != 'none') {

    // Создать текстовое обозначение элемента
    var text = document.createElementNS(svgNS,'text');
    const w = bound[1] - bound[0];
    const h = bound[3] - bound[2];
    const x = bound[0] + w/2;
    const y = bound[2] + h/2;

    var fontSize;
    if (w < 30) {
      fontSize = w * 0.85;
      text.setAttributeNS(null,'transform', 'rotate(-90 ' + x.toString() + ' ' + y.toString() + ')');
    } else {
      fontSize = w / title.length * 1.4;
      if (h < fontSize) {
        fontSize = h * 0.85;
      }
    }

    text.setAttributeNS(null,'x', x);
    text.setAttributeNS(null,'y', y + fontSize * 0.1);
    text.setAttributeNS(null,'font-size', fontSize.toString() + 'px');
    text.setAttributeNS(null,'fill', GlobalColour);
    text.setAttributeNS(null,'stroke','black');
    text.setAttributeNS(null,'stroke-width',0.5);
    text.setAttributeNS(null,'font-family','Noto Sans');
    text.setAttributeNS(null,'font-weight','bold');
    text.setAttributeNS(null,'text-anchor','middle');
    text.setAttributeNS(null,'dominant-baseline','middle');
    text.setAttributeNS(null,'style', 'user-select: none; pointer-events: none;');
    text.textContent = title;
    GlobalSvg.appendChild(text);
  }


  if (!isHollow) return group;

  const titleAddon = GlobalIdPrefix[boardNum];

  // Создать обычно невидимую (при наведении, фиксации заполняется фоном) область
  var hollowref = document.createElementNS(svgNS,'rect');
  hollowref.setAttributeNS(null, 'x', bound[0]);
  hollowref.setAttributeNS(null, 'y', bound[2]);
  hollowref.setAttributeNS(null, 'width', bound[1] - bound[0]);
  hollowref.setAttributeNS(null, 'height', bound[3] - bound[2]);
  hollowref.setAttributeNS(null, 'rx', hradi);

  // Идентификатор для ссылки извне
  if (boardMode) {
    hollowref.setAttributeNS(null, 'id', titleAddon + title);
  }

  // Принадлежность к классу hollow-hover для появления при наведении курсора
  hollowref.classList.add('hollow-hover');
  // Добавить к документу
  GlobalSvg.appendChild(hollowref);

  // Параметры посадочного места для перекраски
  const fp = [ hollowref, group ];

  // Очистить окраску посадочного места
  colorFootprintClean(fp);

  // Создать всплывающую подсказку с текстовым обозначением компонента
  const ttl = document.createElementNS(svgNS, 'title');
  ttl.textContent = title;
  // Добавить подсказку к обозначению элемента
  hollowref.appendChild(ttl);

  /**
   * Привязать изменение стиля посадочного места
   * при наведении курсора на его область
   */
  hollowref.addEventListener('mouseover', function() {

    if (!boardMode) {
      // Подсветить элемент как указанный
      colorFootprintPointed(fp);
      return;
    }

    // Отключить в режиме "площадок"
    if (!GlobalModeFootprint) return;

    // Определить строку в левой таблице по обозначению элемента
    const row = document.getElementById('table_' + idToComplexId(titleAddon + title));

    if (isRowFixed(row)) {
      // Подсветить элемент как фиксированный указанный
      colorFootprintFixedPointed(fp);
      // Подсветить строку как фиксированную указанную
      row.style.backgroundColor = 'rgba(' + colourFixedPointed + tableAlpha + ')';
    } else {
      // Подсветить элемент как указанный
      colorFootprintPointed(fp);
      // Подсветить строку как указанную
      row.style.backgroundColor = 'rgba(' + colourPointed + tableAlpha + ')';
    }
    // Прокрутить таблицу на эту строку
    scrollToRow(row, boardNum);
  });

  /**
   * Привязать изменение стиля посадочного места
   * при уходе курсора из его области
   */
  hollowref.addEventListener('mouseout', function() {

    if (!boardMode) {
      // Убрать подсветку элемента
      colorFootprintClean(fp);
      return;
    }

    // Отключить в режиме "площадок"
    if (!GlobalModeFootprint) return;

    // Определить строку в левой таблице по обозначению элемента
    const row = document.getElementById('table_' + idToComplexId(titleAddon + title));

    if (isRowFixed(row)) {
      // Подсветить фиксированный элемент
      colorFootprintFixed(fp);
      // Подсветить фиксированную текущую строку
      row.style.backgroundColor = 'rgba(' + colourFixed + tableAlpha + ')';
    } else {
      // Убрать подсветку элемента
      colorFootprintClean(fp);
      // Убрать подсветку строки таблицы
      row.style.backgroundColor = '';
    }
  });
  
  /**
   * Привязать переход по ссылке или другие действия к нажатию
   * на посадочное место
   */
  hollowref.addEventListener('click', function(event) {

    if (!boardMode) {
      // Выполнить переход как бы БЕЗ нажатия Ctrl
      window.location.href = './bom.html#' + idToComplexId(titleAddon + title);
      return;
    }

    // Отключить в режиме "площадок"
    if (!GlobalModeFootprint) return;

    // Переход только при нажатой клавише Ctrl
    if (event.ctrlKey) {
      // Выполнить переход как бы БЕЗ нажатия Ctrl
      event.ctrlKey = false;
      window.location.href = './bom.html#' + idToComplexId(titleAddon + title);
      return;
    }

    event.preventDefault();

    // ID нажатого элемента
    const id = titleAddon + title;

    // Идентификатор строки левой таблицы (без 'table_')
    const tableID = idToComplexId(id)

    // Определить строку в левой таблице по обозначению элемента
    const row = document.getElementById('table_' + tableID);
    // Идентификаторы элементов, соответсвующие строке левой таблицы
    idList = complexIdToIdList(tableID);

    // Список посадочных мест одинаковых элементов
    footList = getFootListById(idList);

    // Нажато фиксированное посадочное место
    if (isRowFixed(row)) {
      // Отметить строку как указанную
      // Прокручивать таблицу не надо, это сделано при наведении курсора
      row.style.backgroundColor = 'rgba(' + colourPointed + tableAlpha + ')';

      // Отметить посадочные места как указанные
      for (const f of footList) {
        colorFootprintClean(f);
      }
      // Отметить посадочное место, на котором указатель, как указанное
      colorFootprintPointed(fp);

      // Сбросить статус фиксированной строки
      FixedRow = undefined;

    // Нажато не фиксированное посадочное место
    } else {

      // Если была предыдущая фиксированная строка
      if (FixedRow != undefined) {
        // Очистить цвет предыдущей фиксированной строки
        FixedRow.style.backgroundColor = '';

        // Очистить цвет предыдущих фиксированных элементов
        const oldFootList = tableRowToFootList(FixedRow);
        if (oldFootList.length != 0) {
          for (const f of oldFootList) {
            colorFootprintClean(f);
          }
        }
        // Отметить посадочное место, на котором указатель, как указанное
        colorFootprintPointed(fp);
      }

      // Окрасить строку как фиксированную указанную
      row.style.backgroundColor = 'rgba(' + colourFixedPointed + tableAlpha + ')';
      // Отметить элементы как фиксированные указанные
      for (const f of footList) {
        colorFootprintFixedPointed(f);
      }
      // Установить статус фиксированной строки
      FixedRow = row;
    }
  });

  return fp;
}

/**
 * Переключить отображение дорожек платы
 * 
 * netName - имя сети, к которой относится дорожка
 * boardNum - номер платы (0 - MainBoard, 1 - KeyBoard)
 */
function swapShowTrace(netName, boardNum) {

  for (const a of GlobalNetArray[boardNum]) {
    if (a[1] == netName) {
      const line = a[0];
      // переключить отображение выбранной сети
      a[2] = !a[2];
      line.setAttributeNS(null,'stroke-opacity', a[2] ? 1.0 : 0.0);
    }
  }
}

/**
 * Нарисовать плату
 *
 * boardNum - номер платы (0 - MainBoard, 1 - KeyBoard)
 */
function drawBoard(boardNum) {

  const dataBoard = GlobalDataBoard[boardNum];

  // Ограничивающий прямоугольник (xmin, xmax, ymin, ymax)
  var bound = [100000, -100000, 100000, -100000 ];
  for (const d of dataBoard) {
    if (d[0] == 'gr_arc') {

      const sx = d[1];
      const sy = d[2];
      bound = addBound(bound, sx, sy);

      const mx = d[3];
      const my = d[4];
      bound = addBound(bound, mx, my);

      const ex = d[5];
      const ey = d[6];
      bound = addBound(bound, ex, ey);

    } else if (d[0] == 'gr_line') {

      const x1 = d[1];
      const y1 = d[2];
      bound = addBound(bound, x1, y1);

      const x2 = d[3];
      const y2 = d[4];
      bound = addBound(bound, x2, y2);
    }
  }

  GlobalOffsetX = 2 - parseInt(bound[0], 10);
  GlobalOffsetY = 2 - parseInt(bound[2], 10);
  GlobalWidth = 4 + parseInt(bound[1] - bound[0]);
  GlobalImageWidth = parseInt(window.getComputedStyle(GlobalSvg).width, 10);

  const parent = undefined;

  for (const d of dataBoard) {
    if (d[0] == 'footprint') {
      // Просто рисунок посадочного места
      drawFootprint(false, d, 0, false);
    } else if (d[0] == 'gr_line') {
      const x1 = scaleCoordX(d[1]);
      const y1 = scaleCoordY(d[2]);
      const x2 = scaleCoordX(d[3]);
      const y2 = scaleCoordY(d[4]);
      var w = scaleCoord(d[5]);
      const style = d[6];
      const layer = d[7];

      var colour = '';

      if (layer == 'Dwgs.User' || layer == 'Eco2.User') continue;
      // Верхние, нижние дорожки
      if (layer == 'F.Cu' || layer == 'B.Cu') continue;

      // Контур
      if (layer == 'Edge.Cuts') { colour = '#DADA66'; w = 4.0; }
      // Шелкография
      else if (layer == 'F.SilkS') colour = colourFootprint; //  || layer == 'B.SilkS') {
      else colour = 'none';

      drawLine(x1, y1, x2, y2, w, colour, false, parent);

    } else if (d[0] == 'gr_arc') {
      const sx = scaleCoordX(d[1]);
      const sy = scaleCoordY(d[2]);
      const mx = scaleCoordX(d[3]);
      const my = scaleCoordY(d[4]);
      const ex = scaleCoordX(d[5]);
      const ey = scaleCoordY(d[6]);
      var w = scaleCoord(d[7]);
      const style = d[8];
      const layer = d[9];

      var colour = '';

      if (layer == 'Dwgs.User' || layer == 'Eco2.User') continue;
      // Верхние, нижние дорожки
      if (layer == 'F.Cu' || layer == 'B.Cu') continue;

      // Контур
      if (layer == 'Edge.Cuts') { colour = '#DADA66'; w = 4.0; }
      // Шелкография
      else if (layer == 'F.SilkS') colour = colourFootprint; //  || layer == 'B.SilkS') {
      else colour = 'black';

      drawArc(sx, sy, mx, my, ex, ey, w, colour, parent);

    } else if (d[0] == 'via') {

/*
    } else if (d[0] == 'via') {
      drawVia(
              d[1][1],
              d[1][2],
              d[2],
              d[3],
              d[4],
             );
*/
 
   } else if (d[0] == 'gr_text') {
      const type = '';
      const value =  d[1];
      const x =      d[2][1];
      const y =      d[2][2];
      const angle = -d[2][3];
      const font_x = d[3][1];
      const font_y = d[3][2];
      const font_t = d[3][3];
      const font_i = d[3][4];
      const layer = d[4];
      const justify = d[5];

      var colour = '';

      if (layer == 'Dwgs.User' || layer == 'Eco2.User') continue;
      // Верхние, нижние дорожки
      if (layer == 'F.Cu' || layer == 'B.Cu') continue;

      // Шелкография
      if (layer == 'F.SilkS') colour = colourFootprint; //  || layer == 'B.SilkS') {

      if (colour == '') continue;

      drawText(type, value, x,y,angle,font_x,font_y,font_t,font_i,colour,justify);
    }
  }
}

/**
 * Нарисовать элемент
 *
 * name - имя элемента (идентификатор, позиционное обозначение)
 * boardNum - номер платы (0 - MainBoard, 1 - KeyBoard)
 */
function drawElement(name, boardNum = 0) {

  const dataBoard = GlobalDataBoard[boardNum];

  for (const d of dataBoard) {
    if (d[0] == 'footprint' && name == getTitle(d)) {
      // Просто рисунок посадочного места
      drawFootprint(false, d, 0, false);
      return;
    }
  }
}

/**
 * Подготовить рисунок платы для этапа сборки
 *
 * stepName - строка названия этапа сборки
 * boardNum - номер платы (0 - MainBoard по умолчанию, 1 - KeyBoard)
 */
function showStep(stepName, boardNum = 0) {
  GlobalDot = '';
  GlobalColour = '';

  // Рисунок печатной платы
  drawBoard(boardNum);
  // Подготовка появляющихся при наведении контуров
  collectFootprints(boardNum, false);
  // Рамка с названием этапа
  drawTitle(stepName);
}
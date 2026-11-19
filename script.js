const svgNS = "http://www.w3.org/2000/svg";
const xlinkNS = "http://www.w3.org/1999/xlink";

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
    for (const r of GlobalMainRefArray) {
      if (r != undefined && r[0].id == id) {
        footList.push(r);
      }
    }
    for (const r of GlobalKeyRefArray) {
      if (r != undefined && r[0].id == id) {
        footList.push(r);
      }
    }
  }
  return footList;
}

const colourFixed =        '0,150,0';
const colourFixedPointed = '0,255,0';
const colourPointed =      '255,0,0';
const tableAlpha    =      ',0.4';

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
 * Получить из элемента-строки таблицы номер платы
 */
function tableRowToBoardNum(row) {

  if (row.id == '') return undefined;

  // Очищеный идентификатор ряда таблицы (Убран начальный "table_")
  const id = row.id.slice(6);

  return id[0] == 'k' ? 1 : 0;
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

var GlobalWidth = undefined;
var GlobalViewWidth = undefined;
var GlobalSvg_id = undefined;
var GlobalColour = undefined;
var GlobalMainOrKey = undefined;
var GlobalDot = undefined;

/** Режим работы: true - выбор посадочных мест, false - площадок */
var GlobalModeFootprint = undefined;

/** Массив соответствия сегмент/сеть для MainBoard */
var GlobalMainNetArray = [];

/** Массив соответствия сегмент/сеть для KeyBoard */
var GlobalKeyNetArray = [];

/** Массив [ hollowref, group ] ссылок на объекты посадочных площадок для MainBoard */
var GlobalMainRefArray = [];

/** Массив [ hollowref, group ] ссылок на объекты посадочных площадок для KeyBoard */
var GlobalKeyRefArray = [];

/** Зафиксированная строка таблицы платы MainBoard или платы KeyBoard */
var FixedRow = undefined;

/**
 * Сдвинуть таблицу на строку row
 */
function scrollToRow(row) {

  const boardNum = tableRowToBoardNum(row);
  if (boardNum === undefined) return;

  const tableID = boardNum == 0 ? 'MainTable' : 'KeyTable';

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


// Нарисовать рамку с названием рисунка в левом верхнем углу
function drawTitle(title) {

  const svg = document.getElementById(GlobalSvg_id);
  const x = 15
  const y = 18;
  const h = 68;
  const w = 480;
  const fontSize = 40;

  // Создать рамку для названия рисунка
  var rect = document.createElementNS(svgNS,"rect");
  rect.setAttributeNS(null,"x",x);
  rect.setAttributeNS(null,"y",y);
  rect.setAttributeNS(null,"width",w);
  rect.setAttributeNS(null,"height",h);
  rect.setAttributeNS(null,"fill","white");
  rect.setAttributeNS(null,"stroke", "DarkCyan");
  rect.setAttributeNS(null,"stroke-width",5.0);
  rect.setAttributeNS(null,"rx",10.0);
  svg.appendChild(rect);

  // Создать текстовое название рисунка
  var text = document.createElementNS(svgNS,"text");
  text.setAttributeNS(null,"x",x+w/2);
  text.setAttributeNS(null,"y",y+h/2 + fontSize * 0.1);
  text.setAttributeNS(null,"font-size", fontSize.toString() + "px");
  text.setAttributeNS(null,"fill", "Gold");
  text.setAttributeNS(null,"stroke","Black");
  text.setAttributeNS(null,"stroke-width",1.5);
  text.setAttributeNS(null,"font-family","Noto Sans");
  text.setAttributeNS(null,"font-weight","bold");
  text.setAttributeNS(null,"text-anchor","middle");
  text.setAttributeNS(null,"dominant-baseline","middle");
  text.appendChild(document.createTextNode(title));
  svg.appendChild(text);
}

/**
 * Установить обработчики кнопок площадки <-> посадочные места
 */
function addButtonsEvents() {

  // Установить начальное значение
  GlobalModeFootprint = true;

  // Добавить обработчик события 'click' для конпки buttonP
  document.getElementById('buttonP').addEventListener('click', function(event) {
    GlobalModeFootprint = false;

    // Отключить механизм ссылок посадочных мест
    for (const ref of GlobalMainRefArray) {
      if (ref != undefined) {
        (ref[0]).style.pointerEvents = 'none';
      }
    }
    for (const ref of GlobalKeyRefArray) {
      if (ref != undefined) {
        (ref[0]).style.pointerEvents = 'none';
      }
    }
  });

  // Добавить обработчик события 'click' для конпки buttonF
  document.getElementById('buttonF').addEventListener('click', function(event) {
    GlobalModeFootprint = true;

    // Отключить отображение дорожек
    for (const line of GlobalMainNetArray) {
      line[2] = false;
      line[0].setAttributeNS(null,'stroke-opacity', 0.0);
    }
    for (const line of GlobalKeyNetArray) {
      line[2] = false;
      line[0].setAttributeNS(null,'stroke-opacity', 0.0);
    }

    // Включить механизм ссылок посадочных мест
    for (const ref of GlobalMainRefArray) {
      if (ref != undefined) {
        (ref[0]).style.pointerEvents = 'auto';
      }
    }
    for (const ref of GlobalKeyRefArray) {
      if (ref != undefined) {
        (ref[0]).style.pointerEvents = 'auto';
      }
    }


  });
}

/**
 * Заполнить списки объектов посадочных мест и дорожек
 *
 * boardNum - 0 для MainBoard, 1 для KeyBoard
 */
function collectArrays(dataBoard, refArray, netArray, boardNum) {

  for (let i = 0; i < dataBoard.length; i++) {
    if (dataBoard[i][0] == 'footprint') {
      refArray.push(drawFootprint(dataBoard[i], boardNum));
    }
    if (dataBoard[i][0] == 'segment') {
      x1 = scaleCoordX(dataBoard[i][1]);
      y1 = scaleCoordY(dataBoard[i][2]);
      x2 = scaleCoordX(dataBoard[i][3]);
      y2 = scaleCoordY(dataBoard[i][4]);
      w = scaleCoord(dataBoard[i][5]);
      layer = dataBoard[i][6];
      net = dataBoard[i][7];
      line = drawLine(x1, y1, x2, y2, w, layer, true);
      netArray.push([line, net, false]);
    }
  }
}

function addTableEvents(tableID, refArray) {
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


function onLoad_mainboard(element, viewWidth) {

  GlobalSvg_id = element.id;
  const computedWidth = window.getComputedStyle(document.querySelector('#' + GlobalSvg_id)).width;
  GlobalWidth = parseInt(computedWidth, 10);

  GlobalMainOrKey = true;
  GlobalViewWidth = viewWidth;
  GlobalColour = 'none';
  GlobalDot = 'none';

/*
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
*/


  collectArrays(dataMainBoard, GlobalMainRefArray, GlobalMainNetArray, 0);

  addButtonsEvents();

  addTableEvents('MainTable', GlobalMainRefArray);
}

function onLoad_keyboard(element, viewWidth) {

  GlobalSvg_id = element.id;
  const computedWidth = window.getComputedStyle(document.querySelector('#' + GlobalSvg_id)).width;
  GlobalWidth = parseInt(computedWidth, 10);

  GlobalMainOrKey = false;
  GlobalViewWidth = viewWidth;
  GlobalColour = 'none';
  GlobalDot = 'none';
/*
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
*/

  collectArrays(dataKeyBoard, GlobalKeyRefArray, GlobalKeyNetArray, 1);
  addTableEvents('KeyTable', GlobalKeyRefArray);
}

function scaleCoord(coordMM) {
  return coordMM * GlobalWidth / GlobalViewWidth;
}

function scaleCoordX(coordMM) {
  return (coordMM - (GlobalMainOrKey ? 11.0 : 39.5))  * GlobalWidth / GlobalViewWidth;
  // Для mainboard.svg установлен viewBox="11    3 338 168"
  // Для keyboard.svg  установлен viewBox="39.5 84 338 210"
}

function scaleCoordY(coordMM) {
  return (coordMM - (GlobalMainOrKey ? 3.0 : 84.0))  * GlobalWidth / GlobalViewWidth;
  // Для mainboard.svg установлен viewBox="11    3 338 168"
  // Для keyboard.svg  установлен viewBox="39.5 84 338 210"
}

// Изобразить отрезок 'gr_line','fp_line','segment'
function drawLine(x1,y1,x2,y2,w,layer,trace,parent=undefined) {

  if (layer == 'Dwgs.User' || layer == 'Eco2.User') return;

  // Контур
  if (layer == 'Edge.Cuts') {
    colour = '#DADA66';
    w = 3.0;
  // Шелкография
  } else if (layer == 'F.SilkS' || layer == 'B.SilkS') {
    colour = 'black'; //'rgb(200,255,200)';
  // Верхние дорожки
  } else if (layer == 'F.Cu') {
    colour = 'rgb(255,0,0)';
  // Нижние дорожки
  } else if (layer == 'B.Cu') {
    colour = 'rgb(0,0,255)';
  } else {
    colour = 'black';
  }

  const svg = document.getElementById(GlobalSvg_id);

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
    line.setAttributeNS(null,'style', 'stroke-linecap:round; stroke-linejoin:round;');
  }

  (parent == undefined ? svg : parent).appendChild(line);
  return line;
}

// Функция для вычисления расстояния между двумя точками
function dist(a, b) {
    return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]));
}


function drawArc(sx,sy,mx,my,ex,ey,w,layer,parent=undefined) {
  if (layer == 'Dwgs.User' || layer == 'Eco2.User') return;

  // Контур
  if (layer == 'Edge.Cuts') {
    colour = '#DADA66';
  // Шелкография
  } else if (layer == 'F.SilkS' || layer == 'B.SilkS') {
    colour = 'black'; // 'green';
  // Верхние дорожки
  } else if (layer == 'F.Cu') {
    colour = 'red';
  // Нижние дорожки
  } else if (layer == 'B.Cu') {
    colour = 'blue';
  } else {
    colour = 'black';
  }

  const svg = document.getElementById(GlobalSvg_id);
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
//  arc.setAttributeNS(null,'stroke', colour);
//  arc.setAttributeNS(null,'stroke-width', w);
  arc.setAttributeNS(null, 'style', 'stroke-linecap:round; stroke-linejoin:round;');

  (parent == undefined ? svg : parent).appendChild(arc);

  return r;
}



function drawVia(x,y,size,drill,net) {

  const colour = 'rgb(100,100,100)';

  const svg = document.getElementById(GlobalSvg_id);

  const pad = document.createElementNS(svgNS,'circle');
  pad.setAttributeNS(null,'cx',scaleCoordX(x));
  pad.setAttributeNS(null,'cy',scaleCoordY(y));
  pad.setAttributeNS(null,'r',scaleCoord(size/2));
  pad.setAttributeNS(null,'stroke', colour);
  pad.setAttributeNS(null,'fill', 'none');
  pad.setAttributeNS(null,'stroke-width', 0.4);
  svg.appendChild(pad);

  const circle = document.createElementNS(svgNS,'circle');
  circle.setAttributeNS(null,'cx',scaleCoordX(x));
  circle.setAttributeNS(null,'cy',scaleCoordY(y));
  circle.setAttributeNS(null,'r',scaleCoord(drill/2));
  svg.appendChild(circle);
}

// Изобразить окружность 'fp_circle'
function drawCircle(cx,cy,r,w,stoke_type,fill,layer,parent=undefined) {

  if (layer == 'Dwgs.User' || layer == 'Eco2.User') return;

  // Контур
  if (layer == 'Edge.Cuts') {
    colour = '#DADA66';
  // Шелкография
  } else if (layer == 'F.SilkS' || layer == 'B.SilkS') {
    colour = 'black'; // 'green';
  // Верхние дорожки
  } else if (layer == 'F.Cu') {
    colour = 'red';
  // Нижние дорожки
  } else if (layer == 'B.Cu') {
    colour = 'blue';
  } else {
    colour = 'black';
  }

  const svg = document.getElementById(GlobalSvg_id);
  const circle = document.createElementNS(svgNS,'circle');
  circle.setAttributeNS(null,'cx',cx);
  circle.setAttributeNS(null,'cy',cy);
  circle.setAttributeNS(null,'r',r);

  if (fill) {
    circle.setAttributeNS(null, 'stroke', 'none');
  } else {
//  circle.setAttributeNS(null,'stroke-width', w);
    circle.setAttributeNS(null, 'fill', 'none');
  }

  (parent == undefined ? svg : parent).appendChild(circle);
}

function drawPad(boardNum, x, y, size, drill, shape, net, parent=undefined) {

  const svg = document.getElementById(GlobalSvg_id);

  if (shape == 'circle')  {
    const pad = document.createElementNS(svgNS,'circle');
    pad.setAttributeNS(null,'cx',x);
    pad.setAttributeNS(null,'cy',y);
    pad.setAttributeNS(null,'r', size/2);
    pad.setAttributeNS(null,'stroke-width', 0.4);
    pad.setAttributeNS(null,'fill', 'none');
    (parent == undefined ? svg : parent).appendChild(pad);
  
  } else if (shape == 'rect') {
    const pad = document.createElementNS(svgNS,'rect');
    pad.setAttributeNS(null,'x',  x - size/2);
    pad.setAttributeNS(null,'y', y - size/2);
    pad.setAttributeNS(null,'width', size);
    pad.setAttributeNS(null,'height', size);
    pad.setAttributeNS(null,'stroke-width', 0.4);
    pad.setAttributeNS(null,'fill', 'none');
    (parent == undefined ? svg : parent).appendChild(pad);
  }

  const hole = document.createElementNS(svgNS,'circle');
  hole.setAttributeNS(null,'cx', x);
  hole.setAttributeNS(null,'cy', y);
  hole.setAttributeNS(null,'r', drill/2);
  hole.setAttributeNS(null,'stroke', 'none');
  (parent == undefined ? svg : parent).appendChild(hole);

  const hollow = document.createElementNS(svgNS,'circle');
  hollow.setAttributeNS(null,'cx',x);
  hollow.setAttributeNS(null,'cy',y);
  hollow.setAttributeNS(null,'r', size/2);
  hollow.setAttributeNS(null,'stroke', 'none');
  hollow.setAttributeNS(null,'fill', 'black');
  hollow.setAttributeNS(null,'fill-opacity', 0);
  svg.appendChild(hollow);

  // Добавление обработчика события 'click'
  hollow.addEventListener('click', function(event) {
    if (GlobalModeFootprint) return;
    swapShowTrace(net, boardNum);
    event.stopPropagation();
  });
}

function drawProperty(type,value,x,y,angle,font_x,font_y,font_t,font_italic,layer,justify) {

  if (layer != 'F.SilkS') return;

  const svg = document.getElementById(GlobalSvg_id);

  const colour = 'rgb(100,100,100)';

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
      text.setAttributeNS(null,'style', 'text-anchor: start;');
    } else {
      text.setAttributeNS(null,'style', 'text-anchor: middle;');
    }
    text.setAttributeNS(null,'dominant-baseline', 'middle');

    text.setAttributeNS(null,'lengthAdjust', 'spacing');
    w = splitted[strnum].length * scaleCoord(font_x) * 1.48 * 0.55; // scaleCoord(font_y)*0.92;
    text.setAttributeNS(null,'textLength', w);

    text.setAttributeNS(null,'stroke', 'black');
    text.setAttributeNS(null,'stroke-width', scaleCoord(font_t)*0.3);

    text.setAttributeNS(null,'fill', 'black');
    if (font_italic) {
      text.setAttributeNS(null,'font-style', 'italic');
    }
    text.textContent = splitted[strnum];
    svg.appendChild(text);
  }
}

function getTitle(data) {
  if (data[0] != 'footprint') return '';

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] == 'property' && data[i][1] == 'Reference') {
      return data[i][2];
    }
  }
  return '';
}

// Добавить точку к ограничивающему прямоугольнику bound[xmin, xmax, ymin, ymax]
function addBound(bound, x, y) {
  var xmin = bound[0] < x ? bound[0] : x;
  var xmax = bound[1] > x ? bound[1] : x;
  var ymin = bound[2] < y ? bound[2] : y;
  var ymax = bound[3] > y ? bound[3] : y;
  return [ xmin, xmax, ymin, ymax ];
}

function drawFootprint(data, boardNum) {

  // Позиционное обозначение элемента
  const title = getTitle(data);

  // Если элемент не имеет позиционного обознечения, то вернуть неопределённое значение
  if (title == '') return undefined;

  const titleAddon = boardNum == 0 ? '' : 'k';

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

  // Свойства группы элементов
  const group = document.createElementNS(svgNS, 'g');

// На будущее
// if (GlobalDot != "none") {
//   group.setAttributeNS(null,"stroke-dasharray", GlobalDot);
// }

  group.classList.add('hollow-hover');
  document.getElementById(GlobalSvg_id).appendChild(group);

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

      drawLine(sx, sy, ex, ey, w, layer, false, group);
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

      const r = drawArc(sx, sy, mx, my, ex, ey, w, layer, group);

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
      hradi = hradi > r ? hradi : r;

      drawCircle(cx, cy, r, w, stroke_type, fill, layer, group);
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
      drawPad(boardNum, px, py, size, drill, shape, net, group);
    }

/*
    if (data[i][0] == 'property' || data[i][0] == 'fp_text') {
      drawProperty(
        data[i][1],
        data[i][2],
        data[i][3][1] * cs - data[i][3][2] * sn + x,
        data[i][3][1] * sn + data[i][3][2] * cs + y,
        angle ==   0 && data[i][3][3] ==   0 ?   0 :
        angle ==   0 && data[i][3][3] ==  90 ? -90 :
        angle ==   0 && data[i][3][3] == 180 ?   0 :
        angle ==  90 && data[i][3][3] == 270 ? -90 :
        angle ==  90 && data[i][3][3] ==  90 ? -90 :
        angle == 180 && data[i][3][3] == 180 ?   0 :
        angle == -90 && data[i][3][3] ==  90 ? -90 :
        angle == -90 && data[i][3][3] == 180 ?   0 :
        angle == -90 && data[i][3][3] == 270 ? -90 :
        0,
        data[i][4][1],
        data[i][4][2],
        data[i][4][3],
        data[i][4][4],
        data[i][5],
        data[i][0] == 'fp_text' ? data[i][6] : 1
                  );
    }
*/
  }

  // Нет элементов шелкографии. Определить габариты по площадкам.
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

  // Создать обычно невидимую (при наведении заполняется фоном) область
  // для определения "зоны наведения курсора"
  var hollowref = document.createElementNS(svgNS,'rect');
  hollowref.setAttributeNS(null, 'x', bound[0]);
  hollowref.setAttributeNS(null, 'y', bound[2]);
  hollowref.setAttributeNS(null, 'width', bound[1] - bound[0]);
  hollowref.setAttributeNS(null, 'height', bound[3] - bound[2]);
  hollowref.setAttributeNS(null, 'rx', hradi);
  // Идентификатор для ссылки извне
  hollowref.setAttributeNS(null, 'id', titleAddon + title);
  // Принадлежность к классу hollow-hover для появления при наведении курсора
  hollowref.classList.add('hollow-hover');
  // Добавить к документу
  document.getElementById(GlobalSvg_id).appendChild(hollowref);

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
    scrollToRow(row);
  });

  /**
   * Привязать изменение стиля посадочного места
   * при уходе курсора из его области
   */
  hollowref.addEventListener('mouseout', function() {

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

    // Отключить в режиме "площадок"
    if (!GlobalModeFootprint) return;

    // Переход только при нажатой клавише Ctrl
    if (event.ctrlKey) {
        // Выполнить переход как бы БЕЗ нажатия Ctrl
        event.ctrlKey = false;
        window.location.href = './bom.html#' + idToComplexId(titleAddon + title);
    } else {
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
    }
  });

  return fp;
}


function drawTracks() {

  for (let i = 0; i < dataMainBoard.length; i++) {
    if (dataMainBoard[i][0] == 'gr_line') {
      const x1 = scaleCoordX(dataMainBoard[i][1]);
      const y1 = scaleCoordY(dataMainBoard[i][2]);
      const x2 = scaleCoordX(dataMainBoard[i][3]);
      const y2 = scaleCoordY(dataMainBoard[i][4]);
      const w = scaleCoord(dataMainBoard[i][5]);

      drawLine(x1, x2, y1, y2, w, dataMainBoard[i][7], false);
    }
    if (dataMainBoard[i][0] == 'gr_arc') {
      const sx = scaleCoordX(data[i][1]);
      const sy = scaleCoordY(data[i][2]);
      const mx = scaleCoordX(data[i][3]);
      const my = scaleCoordY(data[i][4]);
      const ex = scaleCoordX(data[i][5]);
      const ey = scaleCoordY(data[i][6]);
      const w = scaleCoord(data[i][7]);

      drawArc(sx, sy, mx, my, ex, ey, w, dataMainBoard[i][9]);
    }
    if (dataMainBoard[i][0] == 'via') {
      drawVia(
              dataMainBoard[i][1][1],
              dataMainBoard[i][1][2],
              dataMainBoard[i][2],
              dataMainBoard[i][3],
              dataMainBoard[i][4],
             );
    }

    if (dataMainBoard[i][0] == 'gr_text') {
      drawProperty(
        '',
        dataMainBoard[i][1],
        dataMainBoard[i][2][1],
        dataMainBoard[i][2][2],
        -dataMainBoard[i][2][3],
        dataMainBoard[i][3][1],
        dataMainBoard[i][3][2],
        dataMainBoard[i][3][3],
        dataMainBoard[i][3][4],
        dataMainBoard[i][4],
        dataMainBoard[i][5]
                  );
    }
  }
}

function swapShowTrace(netName, boardNum) {

  if (boardNum == 0) {
    for (const a of GlobalMainNetArray) {
      if (a[1] == netName) {
        const line = a[0];
        // переключить отображение выбранной сети
        a[2] = !a[2];
        line.setAttributeNS(null,'stroke-opacity', a[2] ? 1.0 : 0.0);
      }
    }
  } else if (boardNum == 1) {
    for (const a of GlobalKeyNetArray) {
      if (a[1] == netName) {
        const line = a[0];
        // переключить отображение выбранной сети
        a[2] = !a[2];
        line.setAttributeNS(null,'stroke-opacity', a[2] ? 1.0 : 0.0);
      }
    }
  }
}

// Масштаб изображения
var scale;
// разница между координатой указателя и смещение изображения
// на начало панорамирования
var startX;
var startY;
// Смещение изображения при панорамировании
var offsetX;
var offsetY;
// Признак панорамирования
var isPanning;
// Размеры исходного изображения
var sourceH;
var sourceW;
// Минимально допустимый масштаб
var minScale;


// Функция обработки нажатия на кнопку закрытия
function handleButtonClick(e) {
  // Предотвратить всплытие события к родительским элементам чтобы не сработал клик по завесе
  e.stopPropagation(); 
  closeVeil(e.target.parentNode);
}

// Функция обработки нажатия на завесу
function handleVeilClick(e) {
  if (e.target.classList.contains('veil'))  {
    closeVeil(e.target);
  }
}

// Обработка изменения масштаба
function setScalePan(s, ofX, ofY, veil, isSmooth) {

  const modalframe = veil.querySelector('.modal-frame');
  // Если этого элемента нет, то эта завеса уже закрыта, выход
  if (!modalframe) return;

  // Ограничение масштабирования исходным масштабом снизу
  // и трёхкратным сверху
  s = Math.max(s, minScale);
  s = Math.min(s, 3);
  scale = s;

  const modalimage = modalframe.querySelector('.modal-image');
  if (!modalimage) return;

  // Попытаться изменить размеры рамки (насколько позволяют павила CSS)
  modalframe.style.width  = Math.round((sourceW * scale)) + 'px';
  modalframe.style.height = Math.round((sourceH * scale)) + 'px';

  // Ограничение смещения границами рамки
  offsetX = check(ofX, sourceW, scale, Math.round(modalframe.getBoundingClientRect().width));
  offsetY = check(ofY, sourceH, scale, Math.round(modalframe.getBoundingClientRect().height));

  if (isSmooth) {
    modalimage.style.transition = 'transform 0.8s ease';
  } else {
    modalimage.style.transition='none';
  }
  modalimage.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px) scale(' + scale + ')';

/*
  // Текущий масштаб
  console.log("Scale=" + scale);
  // Устанавливаем размер рамки
  console.log("FrameS=" + Math.round(sourceW * scale) + " X " + Math.round(sourceH * scale));

  // Размер рамки
  console.log("Frame1=" + Math.round(modalframe.offsetWidth) + " X " + Math.round(modalframe.offsetHeight));
  // Размер изображения с учётом transition (на начало transition)
  console.log("Frame2=" + Math.round(modalframe.getBoundingClientRect().width) + " X " + Math.round(modalframe.getBoundingClientRect().height));
  // Размер рамки как задано в стиле
  console.log("Frame3=" + window.getComputedStyle(modalframe).width + " X " + window.getComputedStyle(modalframe).height);
  // Не определён
  console.log("Frame4=" + modalframe.width + " X " + modalframe.height);

  // Вычисленное смещение
  console.log("Offset=" + offsetX + " X " + offsetY);

  // Размер изображения ожидаемый (исходный умноженный на масштаб)
  console.log("ImageS=" + Math.round(modalimage.offsetWidth * scale) + " X " + Math.round(modalimage.offsetHeight * scale));

  // Исходный размер изображения
  console.log("Image1=" + Math.round(modalimage.offsetWidth) + " X " + Math.round(modalimage.offsetHeight));
  // Размер изображения с учётом transition (на начало transition)
  console.log("Image2=" + Math.round(modalimage.getBoundingClientRect().width) + " X " + Math.round(modalimage.getBoundingClientRect().height));
  // Исходный размер изображения
  console.log("Image3=" + window.getComputedStyle(modalimage).width + " X " + window.getComputedStyle(modalimage).height);
  // Исходный размер изображения
  console.log("Image4=" + Math.round(modalimage.width) + " X " + Math.round(modalimage.height));
*/
}

// Функция обработки колеса мыши для завесы
function handleWheel(e) {
  // На области затемнения вокруг изображения (завесе) не использовать
  if (e.target.classList.contains('veil'))  {
    return;
  }
  // Отменить стандартное действие по событию
  e.preventDefault();
  let shft = e.deltaY;
  // Учесть случай пользоватльской установки шага и нестандартного драйвера мыши
  if (shft === undefined) {
    return;
  }

  // Применить изменение масштаба
  setScalePan(scale + shft / 1000, offsetX, offsetY, e.currentTarget, true);
}


// Ограничения смещения, чтобы не выйти за пределы рамки
function check(x, src, s, frame) {
  // Компенсация центрирования изображения в рамке (половина разницы исходного и масштабированного)
  b = (s - 1) * src / 2;

  if (Math.abs(src * s - frame) < 0.5) {
//    console.log("SRC=FRAME, b=" + b);
    x = b;
  } else if (src * s < frame) {
//    console.log("SRC<FRAME, b=" + b);
    if (x - b > frame - src * s) x = frame - src * s + b;
    if (x - b < 0) x = b;
  } else {
//    console.log("SRC>FRAME, b=" + b);
    if (x - b < frame - src * s) x = frame - src * s + b;
    if (x - b > 0) x = b;
  }
  return Math.round(x);
}

// Функция обработки панорамирования изображения (только для завесы)
function handleGrabbing(e) {
  if (!isPanning) return;

  // Если кнопки отжаты (на случай отпускания за пределами окна браузера)
  if (e.buttons == 0) {
    isPanning = false;

    const veil = e.currentTarget;
    const modalframe = veil.querySelector('.modal-frame');
    const modalimage = modalframe.querySelector('.modal-image');
    modalframe.style.cursor = 'grab';
    modalimage.style.cursor = 'grab';
    return;
  }

  // Отменить стандартное действие по событию
  e.preventDefault();
  // Применить изменение смещений
  setScalePan(scale, e.clientX - startX, e.clientY - startY, e.currentTarget, false);
}

// Функция обработки начала панорамирования по нажатию кнопки (только для рамки)
function handleGrabStart(e) {
  // Отменить стандартное действие по событию
  e.preventDefault();
  isPanning = true;

  const modalframe = e.currentTarget;
  const modalimage = modalframe.querySelector('.modal-image');

  startX = e.clientX - offsetX;
  startY = e.clientY - offsetY;
  modalframe.style.cursor = 'grabbing';
  modalimage.style.cursor = 'grabbing';
}

// Функция обработки остановки панорамирования по отпусканию кнопки (только для завесы)
function handleGrabStop(e) {

  // Отменить стандартное действие по событию
  e.preventDefault();
  isPanning = false;

  const veil = e.currentTarget;
  const modalframe = veil.querySelector('.modal-frame');
  const modalimage = modalframe.querySelector('.modal-image');
  modalframe.style.cursor = 'grab';
  modalimage.style.cursor = 'grab';
}

// Функция обработки кнопки уменьшения масштаба
function handleZoomMinus(e) {
  // Предотвратить всплытие события к родительским элементам чтобы не сработал клик по завесе
  e.stopPropagation();

  // Применить изменение масштаба
  setScalePan(scale - 0.2, offsetX, offsetY, e.currentTarget.parentNode.parentNode, true);
}

// Функция обработки кнопки увеличения масштаба
function handleZoomPlus(e) {
  // Предотвратить всплытие события к родительским элементам чтобы не сработал клик по завесе
  e.stopPropagation();

  // Применить изменение масштаба
  setScalePan(scale + 0.2, offsetX, offsetY, e.currentTarget.parentNode.parentNode, true);
}


// Функция инициализации завесы и рамки с изображением
function openVeil(img, veil) {

  // Создать новый элемент-рамку
  // Это окно, через которое будет показано изображение
  const newModalFrame = document.createElement('div');
  newModalFrame.className = 'modal-frame';
  // Добавить его к элементу-завесе
  veil.appendChild(newModalFrame);

  // Создать элемент <img> класса modal-image
  // Это изображение, которое будет масштабироваться и панорамироваться
  const newModalImage = document.createElement('img');
  newModalImage.className = 'modal-image';
  // Содержимое - это исходное изображение
  newModalImage.src = img.src;

  // Добавить его в элемент-рамку
  newModalFrame.appendChild(newModalImage);

  // Создать элемент <button> класса 'close-btn'
  const newBtn = document.createElement('span');
  newBtn.className = 'close-btn';
  newBtn.innerHTML='&times;';
  // Добавить его в к элементу-завесе
  veil.appendChild(newBtn);

  // Создать элемент <div> класса 'zoom-controls'
  const newZoomControl = document.createElement('div');
  newZoomControl.className = 'zoom-controls';
  veil.appendChild(newZoomControl);

  // Создать элементы-кнопки изменения масштаба
  const newZoomMinus = document.createElement('button');
  newZoomMinus.className = 'zoom-btn';
  newZoomMinus.textContent = '−';

  const newZoomPlus = document.createElement('button');
  newZoomPlus.className = 'zoom-btn';
  newZoomPlus.textContent = '+';

  // Добавить их к элементу-завесе
  newZoomControl.appendChild(newZoomMinus);
  newZoomControl.appendChild(newZoomPlus);

  // Для затеняющей завесы установить свойство flex-контейнера
  veil.style.display = 'flex';

  // Сохранить размеры исходного изображения
  sourceH = img.naturalHeight;
  sourceW = img.naturalWidth;

  // Минимально допустимый масштаб соответствует размеру на экране
  minScale = img.width / sourceW;

  // Начальное состояние для панорамирования, панорамирование не начато
  startX = 0;
  startY = 0;
  isPanning = false;

  // Применить начальные параметры
  setScalePan(1024 / sourceW, 0, 0, veil, false);

  // Привязать к завесе обработчик закрытия по нажатию на завесу (но не на изображение)
  veil.addEventListener('mousedown', handleVeilClick);
  // Привязать к завесе обработчик остановки панорамирования по отпусканию кнопки мыши
  veil.addEventListener('mouseup', handleGrabStop);
  // Привязать к завесе обработчик масштабирования колесом мыши
  veil.addEventListener('wheel', handleWheel, 'passive');
  // Привязать к завесе обработчик панорамирования изображения
  veil.addEventListener('mousemove', handleGrabbing);

  // Привязать к рамке обработчик начала панорамирования по нажатию кнопки мыши
  newModalFrame.addEventListener('mousedown', handleGrabStart);

  // Привязать к кнопке закрытия обработчик
  newBtn.addEventListener('click', handleButtonClick);
  // Привязать к кнопке уменьшения обработчик
  newZoomMinus.addEventListener('click', handleZoomMinus);
  // Привязать к кнопке увеличения обработчик
  newZoomPlus.addEventListener('click', handleZoomPlus);
}

function closeVeil(veil) {

  const modalframe = veil.querySelector('.modal-frame');
  // Если этого элемента нет, то эта завеса уже закрыта, выход
  if (!modalframe) return;

  veil.removeEventListener('mousedown', handleVeilClick);
  veil.removeEventListener('mouseup', handleGrabStop);
  veil.removeEventListener('wheel', handleWheel, 'passive');
  veil.removeEventListener('mousemove', handleGrabbing);

  const modalimage = veil.querySelector('.modal-frame .modal-image');
  const closebtn = veil.querySelector('.close-btn');
  const zoomcontrols = veil.querySelector('.zoom-controls');

  veil.style.display = 'none';
  modalimage.style.transform = 'none';

  // Удалить созданные при открытии элементы
  if (modalframe && modalframe.parentNode) {
    modalframe.removeEventListener('mousedown', handleGrabStart);
    modalframe.parentNode.removeChild(modalframe);
  }
  if (closebtn && closebtn.parentNode) {
    closebtn.removeEventListener('click', handleButtonClick);
    closebtn.parentNode.removeChild(closebtn);
  }
  if (zoomcontrols && zoomcontrols.parentNode) {
    zoomcontrols.parentNode.removeChild(zoomcontrols);
  }
}

// После загрузки всех объектов подготовить завесы
document.addEventListener('DOMContentLoaded', () => {
  // Все элементы <img> с классом overview
  const allImages = document.querySelectorAll('img.overview');
  // Для всех этих элементов...
  allImages.forEach(img => {
    // Создать новый элемент <div> класса 'veil'
    const veil = document.createElement('div');
    veil.className = 'veil';
    // Вставить его после <img>
    img.insertAdjacentElement('afterend', veil);

    // Добавить обработчик нажантия на изображение
    img.addEventListener('click', (e) => {
      openVeil(img, veil);
    });
  });

  // Добавить обработчик нажатия клавиш
  document.addEventListener('keydown', function(event) {
    // Все элементы с классом veil
    const allVeils = document.querySelectorAll('.veil');

    if (event.key === 'Escape') {
      // Отменить стандартное действие по событию
      event.preventDefault();
      // Закрыть все завесы
      allVeils.forEach(veil => { closeVeil(veil); });
    }
    if (event.key === 'ArrowLeft') {
      // Отменить стандартное действие по событию
      event.preventDefault();
      // Учесть во всех завесах (на самом деле только в активной)
      allVeils.forEach(veil => { setScalePan(scale, offsetX + 50, offsetY, veil, false); });
    } else if (event.key === 'ArrowRight') {
      // Отменить стандартное действие по событию
      event.preventDefault();
      // Учесть во всех завесах (на самом деле только в активной)
      allVeils.forEach(veil => { setScalePan(scale, offsetX - 50, offsetY, veil, false); });
    } else if (event.key === 'ArrowUp') {
      // Отменить стандартное действие по событию
      event.preventDefault();
      // Учесть во всех завесах (на самом деле только в активной)
      allVeils.forEach(veil => { setScalePan(scale, offsetX, offsetY + 50, veil, false); });
    } else if (event.key === 'PageUp') {
      // Отменить стандартное действие по событию
      event.preventDefault();
      // Учесть во всех завесах (на самом деле только в активной)
      allVeils.forEach(veil => { setScalePan(scale, offsetX, offsetY + 200, veil, false); });
    } else if (event.key === 'ArrowDown') {
      // Отменить стандартное действие по событию
      event.preventDefault();
      // Учесть во всех завесах (на самом деле только в активной)
      allVeils.forEach(veil => { setScalePan(scale, offsetX, offsetY - 50, veil, false); });
    } else if (event.key === 'PageDown') {
      // Отменить стандартное действие по событию
      event.preventDefault();
      // Учесть во всех завесах (на самом деле только в активной)
      allVeils.forEach(veil => { setScalePan(scale, offsetX, offsetY - 200, veil, false); });
    }
  });

  // Добавить обработчик изменения размера окна браузера
  window.addEventListener('resize', () => {
    // Все элементы с классом veil
    const allVeils = document.querySelectorAll('.veil');

    // Учесть во всех завесах (на самом деле только в активной)
    allVeils.forEach(veil => { setScalePan(scale, offsetX, offsetY, veil, false); });
  });

});

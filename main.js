const navMenu = document.querySelector('.n-nav');
const btnOpen = document.querySelector('.btn-menu');
const menu = document.querySelector('.li-menu');
const btnClose = document.querySelector('.btn-close');

btnOpen.addEventListener('click', (e) => {
  navMenu.classList.add('--open')
  menu.classList.add('--drop')
  btnClose.classList.add('--show')
})

btnClose.addEventListener('click', (e) => {
  navMenu.classList.remove('--open')
  menu.classList.remove('--drop')
  btnClose.classList.remove('--show')
})

navMenu.addEventListener('click', (e) => {
  if(e.target.tagName === 'NAV') {
    navMenu.classList.remove('--open')
    menu.classList.remove('--drop')
    btnClose.classList.remove('--show')
  }
})

document.addEventListener('keydown', (e) => {
  if( e.code === 'Escape') {
    navMenu.classList.remove('--open')
    menu.classList.remove('--drop')
    btnClose.classList.remove('--show')
  }
})


import { createWorker } from '/tesseract.min.js';

const worker = createWorker({
  logger: (data) => console.log(data)
});

async function recognize() {
  const file = document.getElementById('file').files[0];
  const lang = document.getElementById('langs').value;
  await worker.load();
  await worker.loadLanguage(lang);
  await worker.initialize(lang);
  const { data: { text } } = await worker.recognize(file);
  console.log(text);
  await worker.terminate();
  return text;
}

const log = document.getElementById('log');

// Отслеживание прогресса обработки
function updateProgress(data) {
  log.innerHTML = '';
  const statusText = document.createTextNode(data.status);
  const progress = document.createElement('progress');
  progress.max = 1;
  progress.value = data.progress;
  log.appendChild(statusText);
  log.appendChild(progress);
}

// Вывод результата
function setResult(text) {
  log.innerHTML = '';
  text = text.replace(/\n\s*\n/g, '\n');
  const pre = document.createElement('pre');
  pre.innerHTML = text;
  log.appendChild(pre);
}

document.getElementById('start').addEventListener('click', () => {
  const file = document.getElementById('file').files[0];
  if (!file) return;

  const lang = document.getElementById('langs').value;

  recognize(file, lang, updateProgress)
    .then(setResult);
});
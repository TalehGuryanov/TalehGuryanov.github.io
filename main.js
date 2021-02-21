const navMenu = document.querySelector('.n-nav');
const btnOpen = document.querySelectorAll('[data-toggle="worklist"]');
const menu = document.querySelector('.li-menu');
const btnClose = document.querySelector('.btn-close');

for(elem of btnOpen) {
  elem.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu.classList.add('--open')
    menu.classList.add('--drop')
    btnClose.classList.add('--show')
  })
}

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

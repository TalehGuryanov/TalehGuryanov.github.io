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

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

	
window.onload = function() {
  
  document.getElementById("ocr_url").value = ""; // Сбрасываем форму после перезагрузки
  
  var control = document.getElementById("ocr_url");
  
  control.addEventListener("change", function() {
  
    var files = control.files;

    document.getElementById("ocr_button").addEventListener("click", function() {
      
      document.getElementById("ocr_result").innerHTML  = "Идет распознавание текста...";
    
      Tesseract.recognize(files[0].name).then(function(result) {
  
        document.getElementById("ocr_result").innerHTML  = result.text; 
  
      });
  
    });

  });
  
};

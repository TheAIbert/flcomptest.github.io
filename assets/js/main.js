/*-----------------------------------*\
  HEADER
\*-----------------------------------*/

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')


// Removing transitions
const navMenu = document.querySelector('.nav__menu');

window.addEventListener('resize', function() {
    if (window.innerWidth < 1117) {
        navMenu.style.transition = 'top .4s, opacity .3s';
    } else {
        navMenu.style.transition = 'none';
    }
});


// Получаем все элементы .dropdown__menu и .dropdown__submenu
var dropdownMenus = document.querySelectorAll('.dropdown__menu');
var dropdownSubmenus = document.querySelectorAll('.dropdown__submenu');

// Функция для добавления класса с переходами ко всем найденным элементам
function addTransition() {
  dropdownMenus.forEach(function(menu) {
    menu.classList.add('anim_trn');
  });
  
  dropdownSubmenus.forEach(function(submenu) {
    submenu.classList.add('anim_trn');
  });
}

// Функция для удаления класса с переходами у всех найденных элементов
function removeTransition() {
  dropdownMenus.forEach(function(menu) {
    menu.classList.remove('anim_trn');
  });
  
  dropdownSubmenus.forEach(function(submenu) {
    submenu.classList.remove('anim_trn');
  });
}

// Функция для проверки ширины экрана и добавления или удаления класса с переходами
function checkWidth() {
  if (window.innerWidth > 1118) {
    addTransition();
  } else {
    removeTransition();
  }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
// window.addEventListener('load', checkWidth);
window.addEventListener('resize', checkWidth);


/*-----------------------------------*\
  MAIN
\*-----------------------------------*/



/*-----------------------------------*\
  SLIDER
\*-----------------------------------*/
const slides = document.querySelectorAll('.slide');
const navig__btns = document.querySelectorAll('.navig__btn');
let currentSlide = 1;

// JS for image slider manual navigation
const manualNav = function(manual) {
  slides.forEach((slide) => {
    slide.classList.remove('active');

    navig__btns.forEach((navig__btns) => {
      navig__btns.classList.remove('active');
    });

  });

  slides[manual].classList.add('active');
  navig__btns[manual].classList.add('active');
}

navig__btns.forEach((navig__btns, i) => {
  navig__btns.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// JS for image slider autoplay navigation
const repeat = function(activeClass) {
  let active = document.getElementsByClassName('active');
  let i = 1;

  const repeater = () => {
    setTimeout(function() {
      [...active].forEach((activeSldie) => {
        activeSldie.classList.remove('active');
      });

      slides[i].classList.add('active');
      navig__btns[i].classList.add('active');
      i++;

      if (slides.length == i) {
        i = 0;
      }

      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 10000);
  }
  repeater();
}

repeat();



/*-----------------------------------*\
  FOOTER DARK MODE
\*-----------------------------------*/
const darkMode = document.getElementById('dark-mode');
const lightMode = document.getElementById('light-mode');

darkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark__mode')
  darkMode.classList.toggle('hide__mode')
  lightMode.classList.remove('hide__mode')
})

lightMode.addEventListener('click', () => {
  document.body.classList.remove('dark__mode')
  lightMode.classList.toggle('hide__mode')
  darkMode.classList.remove('hide__mode')
})
// Бургер-меню

const menuBurger = document.querySelector('.menu-burger');
const headerMenu = document.querySelector('.header__menu');

const toggleMenu = function() {
    headerMenu.classList.toggle('header__menu_show');
}

menuBurger.addEventListener('click', toggleMenu);
headerMenu.addEventListener('click', toggleMenu);



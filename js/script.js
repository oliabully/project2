// Бургер-меню

const menuBurger = document.querySelector('.menu-burger');
const headerNavigation = document.querySelector('.header__navigation');

const toggleMenu = function() {
    headerNavigation.classList.toggle('header__navigation_show');
}

menuBurger.addEventListener('click', toggleMenu);
headerNavigation.addEventListener('click', toggleMenu);


var overlay = document.getElementsByClassName('hamburger-menu');
var btn = document.getElementsByClassName('hamburger-menu__btn');
console.dir (btn);

function toggleMenu () {
    overlay.classList.toggle('hamburger-menu--active');
}
btn.addEventListener('click', toggleMenu);
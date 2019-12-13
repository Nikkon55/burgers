var overlay = document.querySelector('.hamburger-menu');
var btn = document.querySelector('.hamburger-menu__btn');
var body = document.querySelector ('body');


function toggleMenu (e) {
    e.preventDefault();
    overlay.classList.toggle('hamburger-menu--active');
    if (overlay.classList.contains('hamburger-menu--active')){
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'visible';
    }
}
btn.addEventListener('click', toggleMenu);
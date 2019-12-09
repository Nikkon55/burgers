var overlay = document.querySelector('.hamburger-menu');
var btn = document.querySelector('.hamburger-menu__btn');
var body = document.querySelector ('body');


function toggleMenu () {
    overlay.classList.toggle('hamburger-menu--active');
    if (overlay.classList.contains('hamburger-menu--active')){
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'visible';
    }
}
btn.addEventListener('click', toggleMenu);


// team member info details open
// var trigger = document.querySelectorAll('.team-accordion__link');
// var openTeam = document.querySelectorAll('.team-accordion__item');

 
//     function toggleTeam (e) {
//         e.preventDefault();
//         target = event.target
//         target.classList.toggle ('team-accordion__item--active');
//     }

// trigger.addEventListener('click', toggleTeam);

var item = document.querySelectorAll('.team-accordion__item');
for (var i = 0; i<item.length; i++){
    item[i].addEventListener ('click', function(e){
        e.preventDefault();
        this.classList.toggle ('team-accordion__item--active');
    })
}
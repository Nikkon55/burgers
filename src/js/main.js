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
// below js for menu accordeon
var menuTrigger = document.querySelectorAll ('.menu-accordion__item');
for (var j=0; j<menuTrigger.length;j++){
    menuTrigger[j].addEventListener ('click', function(e){
        e.preventDefault ();
        this.classList.toggle ('menu-accordion__item--active');
    })
}

// below MODAL-REVIEW

const moreInfo = document.querySelectorAll('.btn--color-black');
const modal = document.querySelector('#modal-review');

for (a = 0; a<moreInfo.length; a++){
moreInfo[a].addEventListener ('click', function(e) {
    //e.preventDefault();
    modal.style.display = 'flex';
    console.log('click')
});
}
const closeModal = document.querySelector('.modal-review__close');
closeModal.addEventListener('click', function(e){
    e.preventDefault();
    modal.style.display = 'none';
});

modal.addEventListener ('click', function(e) {
    if (e.target === modal) {
        closeModal.click();
    }
});
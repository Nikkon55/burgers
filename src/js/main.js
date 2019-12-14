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


// order form 

const orderForm = document.querySelector('#order-form');
const sendBtn = document.querySelector('#sendBtn');

sendBtn.addEventListener('click', function (e){
    e.preventDefault();
    if (validateForm(orderForm)){
        const data = {
            name: orderForm.elements.name.value,
            phone: orderForm.elements.phone.value,
            comment: orderForm.elements.comment.value,
            to: 'nikolay.kononenko@gmail.com'
        }
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json'
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail/fail');
        xhr.send (JSON.stringify(data));
        xhr.addEventListener ('load', () => {
            if (xhr.response.status < 400) {
                const formModalFail = document.querySelector('#formFail');
                formModalFail.style.display = 'flex';
                
            }
        })
    }
});



function validateForm(form) {
    let valid = true;
    if (!validateField(form.elements.name)) {
        valid = false;
    }
    if (!validateField(form.elements.phone)) {
        valid = false;
    }
    if (!validateField(form.elements.comment)) {
        valid = false;
    }
    return valid;
}

function validateField(field){
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}


// slider-menu

const slide = (function(){
    const left = document.querySelector('.scroll-left__link');
    const right = document.querySelector('.scroll-right__link');
    const slider = document.querySelector('.slider-menu__list');
    const itemCount = document.querySelectorAll('.slider-menu__content').length;
    let pos = 0;

    function setTransform() {
        slider.style.transform = `translateX(${-pos*slider.offsetwidth}px)`;

    }
    function prev(){
        pos == 0 ? pos = itemCount -1 : pos--;
        setTransform();
    }
    function next(){
        pos = itemCount -1 ? pos = 0 : pos++;
        setTransform();
    }

    function addListener(){
        left.addEventListener('click', prev);
        right.addEventListener('click', next);
        window.addEventListener('resize', setTransform);
    }

    return {
        init: addListener
    }
    
})();

slide.init();
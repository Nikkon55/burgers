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


const hamburgerMenu = document.querySelector('.hamburger-menu__nav');
const navItem = hamburgerMenu.querySelectorAll('.nav__item');
    for (n=0; n<navItem.length; n++) {
        navItem[n].addEventListener('click', function(e){
            if(overlay.classList.contains('hamburger-menu--active')){
                overlay.classList.remove('hamburger-menu--active');
                body.style.overflow = 'visible';
            }
        });
    }   





// team member info details open
// var trigger = document.querySelectorAll('.team-accordion__link');
// var openTeam = document.querySelectorAll('.team-accordion__item');

 
//     function toggleTeam (e) {
//         e.preventDefault();
//         target = event.target
//         target.classList.toggle ('team-accordion__item--active');
//     }

// trigger.addEventListener('click', toggleTeam);

// var item = document.querySelectorAll('.team-accordion__item');
// for (var i = 0; i<item.length; i++){
//     item[i].addEventListener ('click', function(e){
//         e.preventDefault();
//         this.classList.toggle ('team-accordion__item--active');
//     })
// }

const teamlist = document.querySelector('.team-accordion');
teamlist.addEventListener ('click', function(e){
    e.preventDefault();
    let target = e.target;
    const item = target.closest('.team-accordion__item');
    const items = document.querySelectorAll('.team-accordion__item');
    if (target.classList.contains('team-accordion__link')){
        if (!item.classList.contains('team-accordion__item--active')){
            for (let i = 0; i<items.length; i++){
                items[i].classList.remove('team-accordion__item--active');
            }
            item.classList.add('team-accordion__item--active');
        } else {
            item.classList.remove('team-accordion__item--active');
        }
    }
});


/*below js for menu accordeon*/
// var menuTrigger = document.querySelectorAll ('.menu-accordion__item');
// for (var j=0; j<menuTrigger.length;j++){
//     menuTrigger[j].addEventListener ('click', function(e){
//         e.preventDefault ();
//         this.classList.toggle ('menu-accordion__item--active');
//     })
// }

const menuList = document.querySelector('.menu-accordion__list');

menuList.addEventListener ('click', function(e){
    e.preventDefault();
    let trigger = e.target;
    const mItem = trigger.closest('.menu-accordion__item');
    const mItems = document.querySelectorAll('.menu-accordion__item');
    if (trigger.classList.contains('menu-accordion__trigger')||trigger.classList.contains('menu-accordion__title')) {
        if (!mItem.classList.contains('menu-accordion__item--active')){
            for (let m = 0; m<mItems.length; m++){
                mItems[m].classList.remove('menu-accordion__item--active');
            }
            mItem.classList.add('menu-accordion__item--active');
        } else {
            mItem.classList.remove('menu-accordion__item--active');
        }
    }
});


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
        // const data = {
        //     name: orderForm.elements.name.value,
        //     phone: orderForm.elements.phone.value,
        //     comment: orderForm.elements.comment.value,
        //     to: 'nikolay.kononenko@gmail.com'
        // }
        

        let formData = new FormData();
        formData.append ("name", orderForm.elements.name.value);
        formData.append ("phone", orderForm.elements.phone.value);
        formData.append ("comment", orderForm.elements.comment.value);
        formData.append ("to", "nikolay.kononenko@gmail.com");
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail/');
        xhr.setRequestHeader("X-Requested-With", "MLHttpRequest");
        xhr.send (formData);
        xhr.addEventListener ('load', () => {
            if (xhr.response.status < 400) {
                const formModalFail = document.querySelector('#formFail');
                formModalFail.style.display = 'flex';

                const closeModalForm = formModalFail.querySelector('.modal-review__close')
                closeModalForm.addEventListener('click', function(e){
                    e.preventDefault();
                    formModalFail.style.display = 'none';
                });

                formModalFail.addEventListener ('click', function(e) {
                    if (e.target === formModalFail) {
                        closeModalForm.click();
                    }
                });
            } else {
                const formModalSuccess = document.querySelector('#formSuccess');
                formModalSuccess.style.display = 'flex';

                const closeModalFormSuc = formModalSuccess.querySelector('.modal-review__close')
                closeModalFormSuccess.addEventListener('click', function(e){
                    e.preventDefault();
                    formModalSuccess.style.display = 'none';
                });
                formModalSuccess.addEventListener ('click', function(e) {
                    if (e.target === formModalSuccess) {
                        closeModalFormSuccess.click();
                    }
                });

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
        console.log(slider);
        slider.style.transform = `translateX(${-pos*slider.offsetWidth}px)`;

    }
    function prev(e){
        e.preventDefault();
        console.log('click');
        pos == 0 ? pos = itemCount -1 : pos--;
        setTransform();
    }
    function next(e){
        e.preventDefault();
        pos == itemCount -1 ? pos = 0 : pos++;
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


// maps

ymaps.ready(mapsInit);

const placemarks = [
    {
        latitude: 59.94,
        longitude: 30.32,
        hintContent: 'Наш первый ресторан',
        balloonContent: 'Наш первый ресторан'
    },

    {
        latitude: 59.92269150188717,
        longitude: 30.17650998956655,
        hintContent: 'Наш первый морской ресторан',
        balloonContent: 'Наш первый морской ресторан'
    },

    {
        latitude: 59.92638227212006,
        longitude: 30.29625390191777,
        hintContent: 'Наш второй ресторан',
        balloonContent: 'Наш второй ресторан'
    },

    {
        latitude: 59.931982666558795,
        longitude: 30.353417140443163,
        hintContent: 'И еще один',
        balloonContent: 'И еще один'
    }


]

geoObjects=[];
function mapsInit (){
    let map = new ymaps.Map ('map',{
        center: [59.94, 30.32],
        zoom: 13,
        controls: ['zoomControl'],
        behaviors:['drag']

    });

    for (p=0; p<placemarks.length;p++) {
            geoObjects[p] = new ymaps.Placemark([placemarks[p].latitude,placemarks[p].longitude], {
            hintContent: placemarks[p].hintContent,
            balloonContent: placemarks[p].balloonContent
        },
        {
            iconLayout:'default#image',
            iconImageHref: './src/img/map-marker.png',
            iconImageSize: [46,57],
            iconImageOffset: [-23, -57]
    
        })
        const clusterer = new ymaps.Clusterer({
            clusterIconColor: '#e35028'
        });
        map.geoObjects.add (clusterer);
        clusterer.add(geoObjects);
        
    };
    
}


// burger-content

// const ingr = document.querySelector('.burger-content');
// const ingrList = document.querySelector('.burger-content__ingredients')

// ingr.addEventListener('mouseenter', function(e){
// ingr.classList.add ('burger-content--active')

// if (ingr.classList.contains('burger-content--active')){
//     ingrList.style.display = 'flex';
// }
// });

// ingr.addEventListener('mouseleave', function(e){
//     ingr.classList.remove ('burger-content--active')
    
//     if (ingr.classList.contains('burger-content--active')){
//         ingrList.style.display = 'flex';
//     }
//     });

// ingr.addEventListener('click', function(e){
//         e.preventDefault();
// });
///////////////////////////////////////////////////////////////////////

// далее величайший костыль, но работает
const ingr = document.querySelectorAll('.burger-content');
const ingrList = document.querySelectorAll('.burger-content__ingredients')
for (m=0;m<ingr.length;m++){
    let ingrAll = ingr[m];
    ingrAll.addEventListener('mouseenter', function(e){
    
        ingrAll.classList.add ('burger-content--active')
    for (l=0;l<ingrList.length;l++){
        let ingrListAll = ingrList[l];
    if (ingrAll.classList.contains('burger-content--active')){
        ingrListAll.style.display = 'flex';
}
    }
});
}

for (q=0;q<ingr.length;q++){
    let ingrAll = ingr[q];
ingrAll.addEventListener('mouseleave', function(e){
    ingrAll.classList.remove ('burger-content--active')
    
    for (l=0;l<ingrList.length;l++){
        let ingrListAll = ingrList[l];
    if (ingrAll.classList.contains('burger-content')){
        ingrListAll.style.display = 'none';

    }
}
})
}

////////// video section

let video;
let durationControl;
let soundControl;
let intervalId;
const MAX_SOUND_VALUE = 10;


document.addEventListener ('DOMContentLoaded', function() {

    video = document.getElementById('player');

    video.addEventListener('click', playStop);

    let playButtons = document.querySelectorAll('.play');
    for (x=0;x<playButtons.length;x++){
        playButtons[x].addEventListener('click', playStop);
    }

    let muteBtn = document.getElementById('soundIcon');
    muteBtn.addEventListener('click', mute);

    durationControl = document.getElementById('durationLevel');
    durationControl.addEventListener('mousedown', stopInterval);
    durationControl.addEventListener('mouseup', setVideoDuration);
    durationControl.min = 0;
    durationControl.value = 0;

    soundControl = document.getElementById('soundLevel');
    soundControl.addEventListener('mouseup', changeSoundVolume);

    soundControl.min = 0;
    soundControl.max = MAX_SOUND_VALUE;

    video.addEventListener('ended', function(){
        document.querySelector('.video__play-btn-big').classList.toggle('video__play-btn-big--hidden');
        video.currentTime = 0;
    },false);

});

function playStop(){
    document.querySelector('.video__play-btn-big').classList.toggle('video__play-btn-big--hidden');

    durationControl.max = video.duration;

    if (video.paused){
        video.play();
        intervalId = setInterval(updateDuration, 1000/66);
    } else {
        video.pause();
        clearInterval(intervalId);
    }
}

function updateDuration(){
    durationControl.value = video.currentTime;
}

function stopInterval(){
    video.pause();
    clearInterval(intervalId);
}

function setVideoDuration(){
    video.currentTime = durationControl.value;
    intervalId = setInterval(updateDuration, 1000/66);
    if(video.pause){
        video.play();
        document.getElementsByClassName('video__play-btn-big')[0].classList.add('video__play-btn-big--hidden');
    }
}

function mute(){
    if (video.volume===0){
        videoVolume = soundLevel;
        soundControl.value = soundLevel*MAX_SOUND_VALUE;
    } else {
        soundLevel = video.volume;
        video.volume = 0;
        soundControl.value = 0;
    }
}

function changeSoundVolume(){
    video.volume = soundControl.value/MAX_SOUND_VALUE;

}

/// OPS OPS plugin

new fullpage('#fullPage',{
    autoScrolling: true,
    anchors:['int', 'about','burg','rev','vid','tm','mn','od','mp']
})


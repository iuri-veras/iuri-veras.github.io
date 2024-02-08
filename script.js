let menuIcon = document.querySelector('.menu-icon');
let divLinks =  document.querySelector('.links');

menuIcon.addEventListener('click', () => {
    divLinks.classList.toggle('open-menu');

    let lines = document.querySelectorAll('.line');
    
    lines[0].classList.toggle('animate');
    lines[1].classList.toggle('animate');
    lines[2].classList.toggle('animate');

    if(!divLinks.classList.contains('open-menu')){
        divLinks.classList.add('close-menu');
    }
})

divLinks.addEventListener('animationend', event => {
    if(event.animationName === 'closeMenu'){
        divLinks.classList.remove('close-menu')
    }
})
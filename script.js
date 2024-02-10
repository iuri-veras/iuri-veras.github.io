// Barra de navegação

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
        divLinks.classList.remove('close-menu');
    }
})

// Sobre mim
let cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        let current = document.querySelector('.card.active');
        if(current !== card){
            current.classList.remove('active');
            card.classList.add('active');
        }
    })
})

let items = document.querySelectorAll('li')
items[0].addEventListener('onscreen', () => {
    console.log('iuri')
})

// Motivos

let btnEsquerda = document.querySelector('button.left');
let btnDireita = document.querySelector('button.right');
let circles = document.querySelectorAll('.controllers span')
let images = document.querySelectorAll('.content-slider');

let id = 0;
let max = 4;

circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        id = index;
        mudarImagem();
    })
})

function mudarImagem(){
    // Retira a classe do elemento atual
    let currentImg = document.querySelector('.content-slider.current');
    currentImg.classList.remove('current');

    let currentCircle = document.querySelector('.controllers span.current');
    currentCircle.classList.remove('current');

    // Adiciona a classe no novo elemento atual
    images[id].classList.add('current');
    circles[id].classList.add('current');
}

btnDireita.addEventListener('click', () => {
    id += 1
    if(id == max){
        id = 0
    }
})

btnEsquerda.addEventListener('click', () => {
    if(id == 0){
        id = max
    }
    id -= 1
})

btnEsquerda.addEventListener('click', mudarImagem)
btnDireita.addEventListener('click', mudarImagem)
"use strict";

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

$('.carousel').carousel({
  interval: 4000
});




// alert ('Hello');


// const result = confirm("Are you here?");

// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(answer + 5);


// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));


// console.log(typeof(null));
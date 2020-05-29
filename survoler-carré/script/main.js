'use strict';
let divs = document.querySelectorAll('main div');

console.log(divs);

function entrer(evt) {
    console.log("ok");
    
    evt.target.classList.add('survole');
}

function sortir(evt) {
    evt.target.classList.remove('survole');
}

for (let i = 0; i < divs.length; ++i) {
    divs[i].addEventListener('mouseenter', entrer);
    divs[i].addEventListener('mouseout', sortir);
}
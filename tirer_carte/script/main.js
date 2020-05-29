'use strict';
// associe les paragraphes à des variables
let par1 = document.getElementsByTagName('p');
let par2 = par1[1];
par1 = par1[0];

console.log(par1, par2);

// créer les 13 images de cartes dans le premier paragraphe
for (let i = 0; i < 13; ++i) {
    par1.innerHTML += '<img src=cards/a' + (i+1) + '.png>';
}


// créer les 13 images de cartes dans le deuxième paragraphe
for (let i = 0; i < 13; ++i) {
    let img = document.createElement('img');
    img.src = "cards/a" + (i+1) + ".png";

    par2.appendChild(img);
}


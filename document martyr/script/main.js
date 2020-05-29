'use strict';
let p = document.getElementsByTagName('p');
console.log(p.length);

let p1 = document.getElementById('paragraphe1');
console.log(p1.textContent);

let h1 = document.getElementsByTagName('h1');
console.log(h1[0].textContent);

let pfooter = document.querySelector('footer p');
console.log(pfooter.textContent);

p1.innerHTML = "Un <mark>contenu texte</mark> dans un paragraphe du document";

h1.innerHTML = "Petit document <strong>martyr</strong>";

pfooter.innerHTML = "Un contenu <strong>texte</strong> dans un paragraphe du document";

let title = document.getElementsByTagName('title');
console.log(title);
title[0].innerHTML = "Document totalement martyrisé";

let footer = document.getElementsByTagName('footer');
footer[0].innerHTML = "<h2>Bas du document</h2>";

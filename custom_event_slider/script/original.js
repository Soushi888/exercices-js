/**
 * Fichier original.js de Custom Event Slider
 */

// Élément slider
let slider_niveau = document.getElementById("sliderniveau");
// paragraphe de la première section
let par = document.querySelector('main section:nth-of-type(1) p');
// div de la seconde section
let div = document.querySelector('main section:nth-of-type(2) div');
// image de la troisième section
let img = document.querySelector('main section:nth-of-type(3) img');
// Vérification que tous sont là
console.assert(slider_niveau!== null && div!== null && par!==null && img!==null, 'Éléments absents');

// Au changement de la valeur du slider, ajuster les différentes paramètres des éléments des sections
slider_niveau.addEventListener('input', evt => {
    console.log('input event sur le slider');
    let niveau = evt.target.value;
    // Création de divs en nombre lié au niveau
    div.innerHTML = '<div></div>'.repeat(25 * niveau);
    // Ajustement de la taille de la police sur le niveau
    par.style.fontSize = (0.5 + niveau / 3) + 'em';
    // Ajustement des dimensions de la photo sur le niveau
    img.style.width = (50 + niveau * 15) + '%';
    img.style.height = img.style.width;
});

// Provoquer l'appel du listener ce qui met les différents paramètres en phase avec le niveau courant du slider
slider_niveau.dispatchEvent(new CustomEvent('input'));
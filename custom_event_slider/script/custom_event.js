"use strict";

const NIVEAU_CHANGE = "niveauChange";

// Élément slider
let slider_niveau = document.getElementById("sliderniveau");
// paragraphe de la première section
let par = document.querySelector("main section:nth-of-type(1) p");
// div de la seconde section
let div = document.querySelector("main section:nth-of-type(2) div");
// image de la troisième section
let img = document.querySelector("main section:nth-of-type(3) img");

// par + div + img
let jecoute = document.getElementsByClassName("jecoute");

// Au changement de la valeur du slider, ajuster les différentes paramètres des éléments des sections
slider_niveau.addEventListener("input", (evt) => {
  let Event = new CustomEvent("niveauChange", {
    bubbles: true,
    detail: {
      niveau: slider_niveau.value,
    },
  });

  for (let i = 0; i < jecoute.length; ++i) {
    jecoute[i].dispatchEvent(Event);
  }
});


// Provoquer l'appel du listener ce qui met les différents paramètres en phase avec le niveau courant du slider
for (let i = 0; i < jecoute.length; ++i) {
  jecoute[i].addEventListener(NIVEAU_CHANGE, (evt) => {
    // Création de divs en nombre lié au niveau
    div.innerHTML = "<div></div>".repeat(25 * slider_niveau.value);
    // Ajustement de la taille de la police sur le niveau
    par.style.fontSize = 0.5 + slider_niveau.value / 3 + "em";
    // Ajustement des dimensions de la photo sur le niveau
    img.style.width = 50 + slider_niveau.value * 15 + "%";
    img.style.height = img.style.width;
    
  });
}

slider_niveau.dispatchEvent(new CustomEvent("input"));

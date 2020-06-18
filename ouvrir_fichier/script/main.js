"use strict";

console.log("script/main.js loaded");

let inputF = document.querySelector("input[type=file]");
console.assert(inputF !== null, "Input introuvable");

let output = document.getElementById("output");
console.assert(output !== null, "Output introuvable");

inputF.addEventListener("change", (evt) => {
  console.log(evt.target.files);
  for (let file of evt.target.files) {
    console.log(file.name, file.type, file.size, file.lastModified);
    let nouvImg = new Image();
    output.appendChild(nouvImg);
    // chargerDataUrl(file, nouvImg);
    chargerFileReader(file, nouvImg);
  }
});

/**
 * Chargement d'une image avec une data URL
 * @param {File} file Image à encoder
 * @param {*} imgElement Element qui affichera l'image encodée
 */
function chargerDataUrl(file, imgElement) {
  console.log(URL.createObjectURL(file));
  imgElement.src = URL.createObjectURL(file);
  imgElement.addEventListener("load", () => {
    URL.revokeObjectURL(evt.target.src);
  });
}

/**
 * Chargement d'une image avec FileReader
 * @param {File} file Image à encoder
 * @param {*} imgElement Element qui affichera l'image encodée
 */
function chargerFileReader(file, imgElement) {
  let fr = new FileReader();
  fr.readAsDataURL(file);
  fr.addEventListener("load", () => {
      imgElement.src = fr.result;
  });
}

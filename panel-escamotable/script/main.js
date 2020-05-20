/**
 * Panel escamotable
 * Fichier script/main.js
 * lié à la gestion de la page
 */
"use strict";

console.log("script/main.js loaded");

let pan = new Panel(document.getElementById("hote_panel"));

document.querySelector("main > button").addEventListener("click", () => {
  pan.open();
});

// pan.backgroundColor("green");
console.log(pan);

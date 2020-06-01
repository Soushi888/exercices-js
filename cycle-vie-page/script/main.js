"use strict";

let session_data = { 
    debut: Date.now(), 
    fin: null 
};
const LS_PREV_SESSION_DATA = "";

/**
 * Retourne une chaine représentant un timestamp au format h:m:s
 * @param {Number} dt - Un timestamp JS en millisecondes
 * @returns {string} Sa représentation chaîne au format h:m:s
 */
function make_time(dt) {
  let d = new Date(dt);
  return `${d.getHours()}h:${d.getMinutes()}m:${d.getSeconds()}s`;
}

let prev_session_data = localStorage.getItem(LS_PREV_SESSION_DATA);
if (null !== prev_session_data) {
  prev_session_data = JSON.parse(prev_session_data);
  // Afficher les informations correspondant à la session précédente
  document.querySelector("#prev_debut").textContent = make_time(
    prev_session_data.debut
  );
  document.querySelector("#prev_fin").textContent = make_time(
    prev_session_data.fin
  );
  document.querySelector("#temps_ecoule").textContent = (
    (prev_session_data.fin - prev_session_data.debut) /
    1000
  ).toFixed(1);
}

document.addEventListener("DOMContentLoaded", () => {
  let checkboxDOM = document.getElementById("document.DOMContentLoaded");
  checkboxDOM.checked = true;

  let images = document.querySelectorAll("img");

  let left_img_checkbox = document.getElementById("left_img.load");
  let right_img_checkbox = document.getElementById("right_img.load");

  for (let i = 0; i < images.length; ++i) {
    images[i].addEventListener("load", () => {
      if (images[i].id == "left_img") left_img_checkbox.checked = true;
      if (images[i].id == "right_img") right_img_checkbox.checked = true;
    });
  }
});

window.addEventListener("load", () => {
  let window_checkbox = document.getElementById("window.load");
  window_checkbox.checked = true;
});

window.addEventListener("beforeunload", (ev) => {
  let window_beforeunload_checkbox = document.getElementById(
    "window.beforeunload"
  );
  window_beforeunload_checkbox.checked = true;

  let confirmationMsg = "Voulez-vous vraiment quitter ?";
  ev.returnValue = confirmationMsg; // Gecko, Trident, Chrome 34+
  return confirmationMsg; // Gecko, WebKit, Chrome <34
});

window.addEventListener("unload", (ev) => {
  session_data.fin = Date.now();
  localStorage.setItem(LS_PREV_SESSION_DATA, JSON.stringify(session_data));
});

"use strict";

console.log("script/main.js chargé");

const NOM_STORAGE = "listeMemo";
let ulListe, inputTexte, inputDate, bouton_ajouter;

document.addEventListener("DOMContentLoaded", () => {
  console.log("main.js, DOM Construit.");

  ulListe = document.getElementById("liste_aff");
  inputDate = document.getElementById("input_date");
  inputTexte = document.getElementById("input_chaine");
  inputDate.value = dateToYYYY_MM_DD(new Date());
  bouton_ajouter = document.getElementById("bouton_ajouter");

  console.log(ulListe, inputDate, inputTexte);

  let items = chargerItems();
  afficherItems(items);

  bouton_ajouter.addEventListener("click", () => {
    items.push({
      chaine: inputTexte.value,
      date: inputDate.value,
    });
    console.log(items);

    sauvegarderItems(items);
    afficherItems(items);
  });

//   window.addEventListener('unload', () => {
//       sauvegarderItems(items);
//   })
});

/**
 * Charger les items du local sotrage
 */
function chargerItems() {
  let result = new Array();
  let itemStr = localStorage.getItem(NOM_STORAGE);

  if (itemStr !== null && itemStr !== "") {
    try {
      result = JSON.parse(itemStr);
    } catch (e) {
      console.error(e);
    }
  }

  return result;
}

/**
 * Sauvegarder les éléments du tableau items dans le local Storage
 * @param {array} items
 */
function sauvegarderItems(items) {
  localStorage.setItem(NOM_STORAGE, JSON.stringify(items));
}

function afficherItems(items) {
    ulListe.innerHTML = "";
    for (let item of items) {
        let li = ulListe.appendChild(document.createElement('li'));
        li.innerHTML = `<span>${item.chaine}, ${item.date}</span><button>X</button>`;
    }
}

/**
 * Renvoie une date au format aaaa-mm-jj
 * @param {*} date
 * @param {*} withTime
 */
function dateToYYYY_MM_DD(date, withTime) {
  if ("undefined" === typeof withTime) {
    withTime = false;
  }
  function pad(num) {
    return num.toString().length < 2 ? "0" + num : num.toString();
  }
  let result =
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate());
  if (withTime) {
    result +=
      " " +
      pad(date.getHours()) +
      ":" +
      +pad(date.getMinutes()) +
      ":" +
      +pad(date.getSeconds());
  }
  return result;
}

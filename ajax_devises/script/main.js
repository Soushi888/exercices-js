"use strict";

const DECIMALES = 4;
const BASE_URL = "https://api.exchangeratesapi.io/latest";

// Affectation des éléments à des variables
let from_cur = document.getElementById("from_cur"),
  to_cur = document.getElementById("to_cur"),
  from_amount = document.getElementById("from_amount"),
  to_amount = document.getElementById("to_amount"),
  calculate = document.getElementById("calculate"),
  date = document.getElementById("date"),
  ajax_loader = document.querySelector('img[src="images/ajax-loader.gif"]');

console.assert(
  null !== from_cur &&
    null !== to_cur &&
    null !== from_amount &&
    null !== to_amount &&
    null !== calculate &&
    null !== date &&
    null !== ajax_loader,
  "Pb. sel. éléments"
);

// Initialisation des données par défaut
from_cur.options[2].selected = true;
to_cur.options[1].selected = true;
from_amount.value = 1;

calculate.addEventListener("click", () => {
  ajax_loader.style.display = "inline-block";

  let url = BASE_URL + "?base=" + from_amount + "&symbols=" + to_amount;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((taux) => {
      console.log(taux);
    });
});

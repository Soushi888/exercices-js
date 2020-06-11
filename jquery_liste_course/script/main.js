"use strict";

let input = $("input"); // Champs de saisie
input.val(""); // Vide le champs input au rechargement de la page

let ul = $("div ul"); // Liste
let ul_content = []; // Contenu de la liste (pour vérifier les doublons);

input.on("keydown", (evt) => {
  // Si la touche appuyée est Enter et que input contient au moins 1 caractère
  if (evt.key == "Enter" && input.val().trim().length >= 1) {
    let valeur_saisie = input.val().trim();
    // Vérifie si l'élément saisie n'est pas déjà présent dans la liste.
    if ($.inArray(valeur_saisie.toLowerCase(), ul_content) == -1) {
      ul.append("<li>" + valeur_saisie + "</li>");
      ul_content.push(valeur_saisie.toLowerCase());
    } else {
      console.log("doublon !");
    }
    input.val(""); // Remise à 0 du champs de saisie
  }
});

ul.on("click", "li", (evt) => {
  $("li").removeClass("rectification");

  if ($(event.target).attr("class") !== "rectification") {
    $(evt.target).addClass("rectification");
  } else {
    console.log("class removed");
    $(evt.target).removeClass("rectification");
  }
  console.log(evt.target);
});

"use strict";

let input = $("input"); // Champs de saisie
input.val(""); // Vide le champs input au rechargement de la page

let ul = $("div ul"); // Liste
let ul_content = []; // Contenu de la liste (pour vérifier les doublons);

function saisir(valeur_saisie) {
  $("li").each((index, element) => {
    // Si un élément est selectionné et que ce qui est saisi dans le champs n'est pas un doublon, change la valeure de L'élément selectionné.
    if (
      $(element).hasClass("rectification") &&
      $.inArray(valeur_saisie.toLowerCase(), ul_content) == -1
    ) {
      $(element).text(valeur_saisie);
      return;
    }
  });

  // Vérifie si l'élément saisie n'est pas déjà présent dans la liste.
  if ($.inArray(valeur_saisie.toLowerCase(), ul_content) == -1) {
    ul.append("<li>" + valeur_saisie + "</li>");
    ul_content.push(valeur_saisie.toLowerCase());
  } else {
    console.log("doublon !");
  }

  input.val(""); // Remise à 0 du champs de saisie
}

input.on("keydown", (evt) => {
  // Si la touche appuyée est Enter et que input contient au moins 1 caractère
  if (evt.key == "Enter" && input.val().trim().length >= 1) {
    let valeur_saisie = input.val().trim();

    saisir(valeur_saisie);
  }
});

// Selection d'un élément de la liste à modifier
ul.on("click", "li", (evt) => {
  if ($(event.target).hasClass("rectification")) {
    $(event.target).removeClass("rectification");
  } else {
    $("li").removeClass("rectification");
    $(event.target).addClass("rectification");
  }
});

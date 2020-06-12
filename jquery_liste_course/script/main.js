"use strict";

let input = $("input"); // Champs de saisie
input.val(""); // Vide le champs input au rechargement de la page

let ul = $("div ul"); // Liste
let ul_content = []; // Contenu de la liste (pour vérifier les doublons);

// Selection d'un item de la liste à modifier.
let rectification = ul.on("click", "li", (evt) => {
  if ($(event.target).hasClass("rectification")) {
    $(event.target).removeClass("rectification");
    return (rectification = false);
  } else {
    $("li").removeClass("rectification");
    $(event.target).addClass("rectification");
    return (rectification = true);
  }
});

input.on("keydown", (evt) => {
  // Si la touche appuyée est Enter et que input contient au moins 1 caractère
  if (evt.key == "Enter" && input.val().trim().length >= 1) {
    let valeur_saisie = input.val().trim();

    // Vérifie si l'item saisie n'est pas déjà présent dans la liste.
    if (
      $.inArray(valeur_saisie.toLowerCase(), ul_content) == -1 &&
      rectification === false
    ) {
      ajouterItem(valeur_saisie); // Ajoute l'item
    } else if (
      $.inArray(valeur_saisie.toLowerCase(), ul_content) == -1 &&
      rectification === true
    ) {
      modifierItem();
    }
    // else {
    //   console.log("doublon !");
    // }

    input.val(""); // Remise à 0 du champs de saisie
  }
});

/**
 * Ajoute un item à la liste.
 * @param {string} item
 */
function ajouterItem(item) {
  ul.append("<li>" + item + "</li>");
  ul_content.push(item.toLowerCase());
}

/**
 * Si un item est selectionné et que ce qui est saisi dans le champs n'est pas un doublon, change la valeure de L'item selectionné.
 *
 * @param {string} ancien_item
 * @param {string} nouvel_item
 */
function modifierItem(ancien_item, nouvel_item) {
  $("li").each((index, element) => {
    if (
      $(element).hasClass("rectification") &&
      $.inArray(valeur_saisie.toLowerCase(), ul_content) == -1
    ) {
      $(element).text(valeur_saisie);
    }
  });
}

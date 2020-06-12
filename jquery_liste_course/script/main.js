"use strict";

let input = $("input"); // Champs de saisie
input.val(""); // Vide le champs input au rechargement de la page

let ul = $("div ul"); // Liste
let ul_content = []; // Contenu de la liste (pour vérifier les doublons);

/**
 * Retire les tags HTML d'un string
 * @param {string} str
 */
function strip_html_tags(str) {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/<[^>]*>/g, "");
}

// Selection d'un item de la liste à modifier.
ul.on("click", "li", (evt) => {
  if ($(event.target).hasClass("rectification")) {
    $(event.target).removeClass("rectification");
    input.val("");
  } else {
    $("li").removeClass("rectification");
    $(event.target).addClass("rectification");
    input.val(event.target.textContent);
  }

  // Supression d'un item lorsqu'on ctrl + clique dessus
  if (evt.ctrlKey) {
    console.log("remove !");
    $(event.target).remove();
    input.val("");
  }
});

input.on("keydown", (evt) => {
  // Si la touche appuyée est Enter et que le champs de saisie contient au moins 1 caractère
  if (evt.key == "Enter" && input.val().trim().length >= 1) {
    let rectification = $(".rectification"); // Item slectionné pour modification

    let valeur_saisie = input.val().trim();
    valeur_saisie = strip_html_tags(valeur_saisie);
    valeur_saisie =
      valeur_saisie.substr(0, 1).toUpperCase() + valeur_saisie.substr(1); // Met la première lettre de la valeure saisie en majuscule

    if (
      // Vérifie si un item est selectionné pour modification et s'il n'est pas déjà présent dans la liste.
      rectification.length > 0 &&
      $.inArray(valeur_saisie.toLowerCase(), ul_content) == -1
    ) {
      // Modifie le contenu de l'item
      $(rectification[0]).text(valeur_saisie);
      $(rectification[0]).removeClass("rectification");
    } else if (
      // Sinon, vérifie tout de même que l'item n'est pas déjà présent avant de l'ajouter
      $.inArray(valeur_saisie.toLowerCase(), ul_content) == -1
    ) {
      ul.append("<li>" + valeur_saisie + "</li>");
      ul_content.push(valeur_saisie.toLowerCase());
    } else {
      console.log("doublon !"); // Sinon, indique que l'item saisie est un doublon.
    }

    input.val(""); // Remise à 0 du champs de saisie
  }
});

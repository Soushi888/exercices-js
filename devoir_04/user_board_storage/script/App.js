"use strict";


let no_tabs = $("#tabs").tabs( "option", "active" );

// $("#tabs").tabs("option", "active") // Indice de l'onglet (tab) activé (0, 1 ou 2)
let pos_boite_1 = $("#dialog1").parent().offset() // Objet position (left, top par rapport au document) de la première boite de dialogue  (son parent-wrapper en fait)
let pos_boite_2 = $("#dialog2").parent().offset() // Idem pour la seconde boite de dialogue
// let master = $("#master").slider("option", "value"); // Valeur du curseur (slider) horizontal
// let eq = $("#eq > span").each(function () {
//     $(this).slider("option", "value") // Valeur de chacun des curseurs verticaux, traitées en boucle jQuery
// });

localStorage.setItem("user_board_storage", JSON.stringify({
  tabs: {
    active: no_tabs
  },
  dialog: {
    pos1: pos_boite_1,
    pos2: pos_boite_2
  },
  // sliders: {
  //   master: master,
  //   eq: eq
  // }
}));

let etat = localStorage.getItem('user_board_storage')

console.log(JSON.parse(etat));
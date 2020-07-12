"use strict";
let no_tabs, pos_boite_1, pos_boite_2, master, eq;
/**
 * Enregistre l'état du tableau dans le localStorage
 */
function enregisterEtat() {
  no_tabs = $("#tabs").tabs("option", "active");

  pos_boite_1 = $("#dialog1").parent().offset();
  pos_boite_2 = $("#dialog2").parent().offset();

  master = $("#master").slider("option", "value");
  eq = $("#eq > span").each(function () {
    $(this).slider("option", "value");
  });

  localStorage.setItem(
    "user_board_storage",
    JSON.stringify({
      tabs: {
        active: no_tabs,
      },
      dialog: {
        pos1: pos_boite_1,
        pos2: pos_boite_2,
      },
      sliders: {
        master: master,
        eq: eq,
      },
    })
  );

  let etat = localStorage.getItem("user_board_storage");
  console.log(JSON.parse(etat));
}

/**
 * Lit l'état du tableau dans le localStorage et le restitue
 */
function lireEtat() {
  let etat = JSON.parse(localStorage.getItem("user_board_storage"));
  console.log(etat);
  $("#tabs").tabs("option", "active", etat.tabs.active);
  $("#dialog1").parent().offset(etat.dialog.pos1);
  $("#dialog2").parent().offset(etat.dialog.pos2);
  $("#master").slider("option", "value", etat.sliders.master);
  $("#eq > span").each((val, index) => {
    $("#eq > span").eq(index).slider("option", "value", etat.sliders.eq.index);
  });
}

// Enregitrement de l'état du tableau dans le localStorage lorsque l'utilisateur quitte la page
window.addEventListener("unload", enregisterEtat);

// Restitue l'état du tableau au chargement de la page
window.addEventListener("DOMContentLoaded", lireEtat);

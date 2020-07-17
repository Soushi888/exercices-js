"use strict";
let tab, pos_boite_1, pos_boite_2, master, eq;
/**
 * Enregistre l'état du tableau dans le localStorage
 */
function enregisterEtat() {
  tab = $("#tabs").tabs("option", "active");

  pos_boite_1 = $("#dialog1").parent().offset();
  pos_boite_2 = $("#dialog2").parent().offset();

  master = $("#master").slider("option", "value");
  eq = [];
  $("#eq > span").each(function () {
    eq.push($(this).slider("value"));
  });

  localStorage.setItem(
    "user_board_storage",
    JSON.stringify({
      tabs: {
        active: tab,
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
    eq = $("#eq > span")[val];
    console.log(eq);
    $(eq).slider("value", etat.sliders.eq[val]);
  });
}

// Enregitrement de l'état du tableau dans le localStorage lorsque l'utilisateur quitte la page
window.addEventListener("unload", enregisterEtat);

// Restitue l'état du tableau au chargement de la page
window.addEventListener("DOMContentLoaded", lireEtat);

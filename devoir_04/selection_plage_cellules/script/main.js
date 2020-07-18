"use strict";

/**
 * Ajuste la plage sélectionnée puis la retourne sous forme de tableau d'éléments
 * @param {int} x1
 * @param {int} y1
 * @param {int} x2
 * @param {int} y2
 * @returns {array}
 */
function selectionner(x1, y1, x2, y2) {
  let c;
  if (x1 > x2) {
    c = x1;
    x1 = x2;
    x2 = c;
  }
  if (y1 > y2) {
    c = y1;
    y1 = y2;
    y2 = c;
  }

  selection = [];
  for (let i = x1; i <= x2; ++i) {
    for (let j = y1; j <= y2; ++j) {
      td.each((index, element) => {
        if ($(element).data("coord") == `(${i},${j})`) selection.push(element);
      });
    }
  }

  return selection;
}

let tr = $("tr");
let td = $("td");
let end_point, start_point, selection, x1, y1, x2, y2;

/**
 * Pour chaque td du tableau,
 * on lui associe une coordonnée.
 */
tr.each((index, element) => {
  let no_ligne = index - 1;
  $(element)
    .find("td")
    .each((index, element) => {
      $(element).data("x", index);
      $(element).data("y", no_ligne);
      let x = $(element).data("x");
      let y = $(element).data("y");
      $(element).data("coord", `(${x},${y})`);
    });
});

/**
 * Quand on clique sur une case du tableau,
 * on enregistre sa coordonné
 */
td.on("mousedown", (evt) => {
  // Réinitialisation de la selection
  selection = [];
  x1 = null;
  y1 = null;
  td.each((index, element) => {
    $(element).removeClass("selected");
  });

  start_point = $(evt.target).data("coord");

  x1 = $(evt.target).data("x");
  y1 = $(evt.target).data("y");
});

/**
 * Quand on relache le clique de la souri,
 * on enregistre la coordonnée de la case où elle été
 */
td.on("mouseup", (evt) => {
  end_point = $(evt.target).data("coord");
  x2 = null;
  y2 = null;

  x2 = $(evt.target).data("x");
  y2 = $(evt.target).data("y");

  // On enregistre dans un tableau toutes les cases selectionnées
  selectionner(x1, y1, x2, y2);

  console.log(selection);

  // On ajoute une couleure de fond aux cases selectionnées
  for (let i = 0; i < selection.length; ++i) {
    $(selection[i]).addClass("selected");
  }

  console.log(`${start_point}, ${end_point}`);
});

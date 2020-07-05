"use strict";

let tr = $("tr");
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

let td = $("td");
/**
 * Quand on clique sur une case du tableau,
 * on enregistre sa coordonné
 */
td.on("mousedown", (evt) => {
  // Réinitialisation de la selection
  let selection = [];
  let x1 = null;
  let y1 = null;
  let x2 = null;
  let y2 = null;
  td.each((index, element) => {
    $(element).removeClass("selected");
  });

  let start_point = $(evt.target).data("coord");

  x1 = $(evt.target).data("x");
  y1 = $(evt.target).data("y");
  /**
   * Quand on relache le clique de la souri,
   * on enregistre la coordonnée de la case où elle été
   */
  td.on("mouseup", (evt) => {
    let end_point = $(evt.target).data("coord");

    x2 = $(evt.target).data("x");
    y2 = $(evt.target).data("y");

    // On enregistre dans un tableau toutes les cases selectionnées
    selection = [];
    for (let i = x1; i <= x2; ++i) {
      for (let j = y1; j <= y2; ++j) {
        td.each((index, element) => {
          if ($(element).data("coord") == `(${i},${j})`)
            selection.push(element);
        });
      }
    }

    // On ajoute une couleure de fond aux cases selectionnées
    for (let i = 0; i < selection.length; ++i) {
      $(selection[i]).addClass("selected");
    }

    console.log(`${start_point}, ${end_point}`);
  });
});

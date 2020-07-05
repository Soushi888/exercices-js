"use strict";

let tr = $("tr");

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
td.on("mousedown", (evt) => {
  let start_point = $(evt.target).data("coord");
  console.log(start_point);
});

td.on("mouseup", (evt) => {
  let end_point = $(evt.target).data("coord");
  console.log(end_point);

  let x = $(evt.target).data("x");
  let y = $(evt.target).data("y");

  let selection = [];
  for (let i = 0; i <= x; ++i) {
    for (let j = 0; j <= y; ++j) {
      selection.push(`(${i},${j})`);
    }
  }

  console.log(selection);
});

"use strict";

let input = $("input");
input.val(""); // Vide le champs input au rechargement de la page

let ul = $("div ul");
console.log(ul);

input.on("keydown", (evt) => {
  if (evt.key == "Enter" && input.val().trim().length >= 1) {
    ul.append("<li>" + input.val().trim() + "</li>");
    input.val("");
  }
});

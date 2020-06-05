"use strict"; // Strict mode

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");

  let plane = document.getElementsByClassName("plane");

  let piste = document.getElementById("runway");

  for (let i = 0; i < plane.length; i++) {
    plane[i].addEventListener("dragstart", (evt) => {
      evt.dataTransfer.setData("text/plain", "Vol Air Canada AC554");
    });
    console.log(plane[i]);
  }

  piste.addEventListener("dragover", (evt) => {
    evt.preventDefault();
  });

  piste.addEventListener("drop", (evt) => {
    evt.preventDefault();
    let data = evt.dataTransfer.getData("text/plain");
    console.log(data);
    piste.appendChild(plane[0]);
  });
});

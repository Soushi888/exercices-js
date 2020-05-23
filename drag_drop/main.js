"use strict";

let mobs = document.getElementsByClassName("mob");

console.log(mobs);

for (let i = 0; i < mobs.length; ++i) {
  console.log(mobs[i]);
  mobs[i].addEventListener("dragstart", (evt) => {
    let index = Array.from(mobs).indexOf(evt.target);
    evt.dataTransfer.setData("text/plain", index);
    console.log("Glissé bouton no : " + index);
  });
}

drop_area = document.getElementById("drop_area");

drop_area.addEventListener("dragover", (evt) => {
  evt.preventDefault();
  drop_area.classList.add("entered");
});

drop_area.addEventListener("drop", (evt) => {
  evt.preventDefault();
  let index = evt.dataTransfer.getData("text/plain");
  console.log(mobs[index]);
  drop_area.appendChild(mobs[index]);
});

let enter_count = 0;

drop_area.addEventListener("dragenter", () => {
  enter_count++;
  console.log(enter_count);
  if (enter_count === 1) drop_area.classList.add("entered");
});

drop_area.addEventListener("dragleave", () => {
  enter_count--;
  console.log(enter_count);
  if (enter_count === 0) drop_area.classList.remove("entered");
});


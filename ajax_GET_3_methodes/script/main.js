"use strict";

const URL_POST = "https://jsonplaceholder.typicode.com/posts/1"; // Data du post 1
const URL_USER = "https://jsonplaceholder.typicode.com/users/"; // Ajouter le userId à la fin pour avoir les infos d'un user

let xhr1 = new XMLHttpRequest();

xhr1.open("GET", URL_POST, true);

xhr1.addEventListener("load", (evt) => {
  if (xhr1.readyState === XMLHttpRequest.DONE) {
    if (xhr1.status === 200) {
      console.log("requete1, data reçue :", xhr1.responseText);
      let userId = JSON.parse(xhr1.responseText).userId;
      console.log(userId);
     
      let xhr2 = new XMLHttpRequest();
      xhr2.open("GET", URL_USER + userId, true);
      xhr2.addEventListener("load", (evt) => {
         if (xhr2.status === 200) {
            console.log("requete2, data reçue :", xhr2.responseText);
        }
      xhr2.send(null);
    });
    }
});

xhr1.send(null);

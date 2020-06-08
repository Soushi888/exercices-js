"use strict";

const URL_POST = "https://jsonplaceholder.typicode.com/posts/1"; // Data du post 1
const URL_USER = "https://jsonplaceholder.typicode.com/users/"; // Ajouter le userId à la fin pour avoir les infos d'un user

let xhr1 = new XMLHttpRequest();

xhr1.open("GET", URL_POST, true);

xhr1.addEventListener("load", (evt) => {
  if (xhr1.readyState === XMLHttpRequest.DONE) {
    if (xhr1.status === 200) {
      let userId = JSON.parse(xhr1.responseText).userId;
      console.log("User Id = " + userId);

      let xhr2 = new XMLHttpRequest();
      xhr2.open("GET", URL_USER + userId, true);

      xhr2.addEventListener("load", (evt) => {
        if (xhr2.status === 200) {
          let userName = JSON.parse(xhr2.responseText).name;
          console.log('User name = ' + userName);
        }
      });

      xhr2.send(null);
    }
  }
});

xhr1.send(null);

if (window.fetch) {
  fetch(URL_POST)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log('fetch : première requête, data reçue :', data);
    let userId = data.id;
    console.log(userId);
    return fetch(URL_USER + userId)
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log('fetch : deuxième requête, data reçue :', data);
    let userName = data.name;
    console.log(userName);
  })
}

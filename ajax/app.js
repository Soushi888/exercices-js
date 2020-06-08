"use strict";

let httpRequest = new XMLHttpRequest();


httpRequest.onreadystatechange = () => {
  console.group("Ajax");
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    // tout va bien, la réponse a été reçue
    console.log("Ajax Ok !");
  } else {
    // pas encore prête
    console.log(httpRequest.status);
  }
  console.groupEnd;
};

httpRequest.open("GET", "http://localhost/ajax/demo.php", true);

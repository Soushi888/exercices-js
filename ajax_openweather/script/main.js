/**
 * ajax_openweather
 * Fichier script/main.js
 */
"use strict";

// Pour convertir °K -> °C : °C = °K - 273.15
const ZERO_ABS = -273.15;

/**
 * Réaliser quelques conversion utiles
 */
const CONV = {
  /**
   * Convertir °K -> °C
   *  @param {int} k °K à convertire en °C
   */
  k_a_c: (k) => (k + ZERO_ABS).toFixed(1),

  /**
   * Fournir heure au format hh:mm à partir d'un timestamp
   */

  dt_a_hm: (dt) => {
    let date = new Date(dt * 1000);
    return (
      ("0" + date.getHours()).substr(-2) +
      "h" +
      (date.getMinutes() + "0").substr(0, 2)
    );
  },
};

/**
 * Latitude et longitude de la ville de montréal
 */
const MONTREAL = {
  lat: 45.50832,
  lon: -73.566431,
};

/**
 * Petit objet pour gérer les URLs de l'API
 */
const OW_API = {
  base_api_url: "http://api.openweathermap.org/data/2.5/",
  base_icon_url: "http://openweathermap.org/img/w/",
  weather: "weather?lat={lat}&lon={lon}",
  forecast: "forecast?lat={lat}&lon={lon}",
  key: "&APPID=d372021858e26c181fc642ca0f0dbd18",
};

/**
 * Promesse jQuery AJAX vers l'API de openweather pour récurépérer la météo actuelle d'une région à partire de sa latitude et sa longitude.
 * @param {int} lat Latitude
 * @param {int} lon Longitude
 */
async function getWeather(lat, lon) {
  let data = $.get(
    `${OW_API.base_api_url}weather?lat=${lat}&lon=${lon}${OW_API.key}`
  ).then((data) => data);

  return data;
}

/**
 * Promesse jQuery AJAX vers l'API de openweather pour récurépérer la météo sur 5 jours d'un lieu à partire de sa latitude et de sa longitude.
 * @param {int} lat Latitude
 * @param {int} lon Longitude
 */
async function getForecast(lat, lon) {
  let data = $.get(
    `${OW_API.base_api_url}forecast?lat=${lat}&lon=${lon}${OW_API.key}`
  ).then((data) => data);

  return data;
}

getWeather(MONTREAL.lat, MONTREAL.lon).then((data) => console.log(data));

getWeather(MONTREAL.lat, MONTREAL.lon).then((data) => {
  console.log(`Temp. en K° : ${data.main.temp}`);
  let tempCelsus = CONV.k_a_c(data.main.temp);
  console.log(`Temp. en C° : ${tempCelsus}`);
  $(".temperature .val").text(tempCelsus + " C°");

  console.log(`Description : ${data.weather[0].description}`);
  let description = data.weather[0].description;
  $(".description .val").text(description);

  console.log(`Icone : ${data.weather[0].icon}`);
  let icone = `${OW_API.base_icon_url}${data.weather[0].icon}.png`;
  $(".icone .val").attr("src", icone);
});

getForecast(MONTREAL.lat, MONTREAL.lon).then((data) => console.log(data));

getForecast(MONTREAL.lat, MONTREAL.lon).then((data) => {
  console.log(`Ville : ${data.city.name}`);
  $("#ville").html(data.city.name);

  console.group(`Coordonées de ${data.city.name}`);
  console.log(`latitude : ${data.city.coord.lat}°`);
  console.log(`longitude ${data.city.coord.lon}°`);
  console.groupEnd();

  $("#info_panel ul")
    .append(`<li>Ville : ${data.city.name}</li>`)
    .append(`<li>Latitude : ${data.city.coord.lat}</li>`)
    .append(`<li>Longitude : ${data.city.coord.lon}</li>`);

  console.log(data.list);

  console.log($(".modele"));

  for (let i in data.list) {
    let tr = $(".modele").clone();
    tr.removeClass("modele");
    tr.data("index", i);
    if (tr.data().index == i) {
      let date = new Date(data.list[i].dt_txt);
      let tdHeure = $("tbody").append(tr);
    }
    // let date = new Date(data.list[i].dt_txt);
    // console.log(date.getHours() + "h");
    // let tdHeure = $("tbody").append(tr);

    // console.log(tdHeure);

    // let tdHeure = tr.find(".heure").text(date.getHours());
    //   .after(`<td>${CONV.k_a_c(data.list[i].main.temp)} °C}</td>`);
  }

  console.groupCollapsed("Prévisions");
  for (let i in data.list) {
    console.log(data.list[i].dt);
  }
  console.groupEnd();

  console.groupCollapsed("Températures");
  for (let i in data.list) {
    console.log(CONV.k_a_c(data.list[i].main.temp) + " °C");
  }
  console.groupEnd();

  console.groupCollapsed("Descriptions");
  for (let i in data.list) {
    console.log(data.list[i].weather[0].description);
  }
  console.groupEnd();

  console.groupCollapsed("icones");
  for (let i in data.list) {
    console.log(data.list[i].weather[0].icon);
  }
  console.groupEnd();
});

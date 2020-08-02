"use strict";

/**
 * Returns the week number for this date.  dowOffset is the day of week the week
 * "starts" on for your locale - it can be from 0 to 6. If dowOffset is 1 (Monday),
 * the week returned is the ISO 8601 week number.
 * @param int dowOffset
 * @return int
 */
Date.prototype.getWeek = function (dowOffset) {
  /*getWeek() was developed by Nick Baicoianu at MeanFreePath: http://www.meanfreepath.com */

  dowOffset = typeof dowOffset == "int" ? dowOffset : 0; //default dowOffset to zero
  let newYear = new Date(this.getFullYear(), 0, 1);
  let day = newYear.getDay() - dowOffset; //the day of week the year begins on
  day = day >= 0 ? day : day + 7;
  let daynum =
    Math.floor(
      (this.getTime() -
        newYear.getTime() -
        (this.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) /
        86400000
    ) + 1;
  let weeknum;
  //if the year starts before the middle of a week
  if (day < 4) {
    weeknum = Math.floor((daynum + day - 1) / 7) + 1;
    if (weeknum > 52) {
      let nYear = new Date(this.getFullYear() + 1, 0, 1);
      let nday = nYear.getDay() - dowOffset;
      nday = nday >= 0 ? nday : nday + 7;
      /*if the next year starts before the middle of
                the week, it is week #1 of that year*/
      weeknum = nday < 4 ? 1 : 53;
    }
  } else {
    weeknum = Math.floor((daynum + day - 1) / 7);
  }
  return weeknum;
};

/**
 * Si le nombre donné en paramètre est inclusivement compris entre 1 et 9, ajoute un zéro devant
 * @param {int} number
 * @returns {int}
 */
function addZero(number) {
  switch (number) {
    case 1:
      return "01";
    case 2:
      return "02";
    case 3:
      return "03";
    case 4:
      return "04";
    case 5:
      return "05";
    case 6:
      return "06";
    case 7:
      return "07";
    case 8:
      return "08";
    case 9:
      return "09";
  }
}

let tab, pos_boite_1, pos_boite_2, master, eq, day, month, date;
/**
 * Enregistre l'état du tableau dans le localStorage
 */
function enregisterEtat() {
  tab = $("#tabs").tabs("option", "active");

  pos_boite_1 = $("#dialog1").parent().offset();
  pos_boite_2 = $("#dialog2").parent().offset();

  master = $("#master").slider("option", "value");
  eq = [];
  $("#eq > span").each(function () {
    eq.push($(this).slider("value"));
  });

  date = new Date($("#datepicker").val());

  localStorage.setItem(
    "user_board_storage",
    JSON.stringify({
      tabs: {
        active: tab,
      },
      dialog: {
        pos1: pos_boite_1,
        pos2: pos_boite_2,
      },
      sliders: {
        master: master,
        eq: eq,
      },
      date: date,
    })
  );
}

// Change le numéro de la semaine cqui est affiché à chaque fois que le input date change
$("#datepicker").on("change", (evt) => {
  $("#semaine").text("semaine : " + new Date(evt.target.value).getWeek());
});

/**
 * Lit l'état du tableau dans le localStorage et le restitue
 */
function lireEtat() {
  let etat = JSON.parse(localStorage.getItem("user_board_storage"));
  console.log(etat);

  $("#tabs").tabs("option", "active", etat.tabs.active);

  $("#dialog1").parent().offset(etat.dialog.pos1);
  $("#dialog2").parent().offset(etat.dialog.pos2);

  $("#master").slider("option", "value", etat.sliders.master);
  $("#eq > span").each((val, index) => {
    eq = $("#eq > span")[val];
    $(eq).slider("value", etat.sliders.eq[val]);
  });

  date = new Date(etat.date);
  month = addZero(date.getMonth() + 1);
  day = addZero(date.getDate() + 1);

  $("#datepicker").attr("value", `${date.getFullYear()}-${month}-${day}`);
  $("#semaine").text("semaine : " + new Date(etat.date).getWeek());
}

// Enregitrement de l'état du tableau dans le localStorage lorsque l'utilisateur quitte la page
window.addEventListener("unload", enregisterEtat);

// Restitue l'état du tableau au chargement de la page
window.addEventListener("DOMContentLoaded", lireEtat);

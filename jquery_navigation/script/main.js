"use strict";

 /**
 * Met un élément jQuery en relief
 * @param {Objet} item - Élément(s) jQuery à faire flasher
 * @param {string} color - Couleur de l'effet de halo
 */
function mettre_en_relief(item, color = "#ffffff") {
    item.css({
        "box-shadow": "10px 20px 25px " + color,
        "border" : "0px dashed " + color,
    });
    item.addClass("flashit");
    setTimeout(function () {
        item.removeClass("flashit");
        // item.css("box-shadow", "none");
    }, 2000);
}

let e1 = $(header);
console.log(e1);
mettre_en_relief(e1, "#ff6090");

let e2 = e1.find("nav").first();
console.log(e2);
mettre_en_relief(e2, "#86c3ff");

let e3 = e2.find("ul").find('li:first');
console.log(e3);
mettre_en_relief(e3, "#a7ff97");

let e4 = e3.next();
console.log(e4);
mettre_en_relief(e4, "#ffb97e");

let e5 = e4.nextAll('li').find('a');
console.log(e5);
mettre_en_relief(e5, "#9a50ff");

let e6 = $('#footer').find('h2:contains("Link Block B")');
console.log(e6);
mettre_en_relief(e6, "#ffe327");

let e7 = e6.parent().siblings()
console.log(e7);
mettre_en_relief(e7, "#2b36ff");

let e8 = e6.parents('.row3');
console.log(e8);
mettre_en_relief(e8, "#c4ac98");
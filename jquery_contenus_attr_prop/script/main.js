"use strict";

let les_p = $("p");
console.log(les_p.eq(0).text());
console.log(les_p.eq(0).html());

$("h2").html("<strong>jQuery</strong>");

let costauds = $(".costaud");
console.log(costauds);
costauds.eq(1).toggleClass();
costauds.eq(0).removeClass("costaud").addClass("jojo");

let menu_items = $("header nav li");
console.log(menu_items);
let act_link = menu_items.eq(1).children();
console.log(act_link);
console.log(act_link.hasClass("active"));
if (act_link.hasClass("active")) {
  act_link.css("text-transform", "uppercase");
}

console.log(act_link.prop("tagName"));
console.log(act_link.attr("href"));
act_link.attr("href", "#");

console.log(act_link.parent().prop("id"));
act_link.parent().prop("id", "mi2");
console.log(act_link.parent().prop("id"));

let input_range = $('input[type="range"]');
console.log(input_range);
input_range.attr("max", "99").val("55");

let input_jq = $('input[name="jquery"]');
console.log(input_jq.prop("checked"));
input_jq.prop("checked", "true");

let smile_imgs = $("#images");
console.log(smile_imgs);
console.log(smile_imgs.eq(0).width());
console.log(smile_imgs.eq(0).height());
console.log(smile_imgs.position().top);
console.log(smile_imgs.position().left);
console.log(smile_imgs.offset().top);
console.log(smile_imgs.offset().left);

smile_imgs.eq(0).width('250px');
smile_imgs.eq(0).css({top:-100, left:-130});
smile_imgs.eq(1).offset({top:0, left:100});

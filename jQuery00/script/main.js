'use strict';
let divs = $('#container').find('div');
console.log(divs);

divs.eq(0).hide();

divs.eq(1)
.hide('slow')
.show('fast');

divs.eq(2)
.fadeOut(1000)
.delay(2000)
.fadeIn(2000);

divs.eq(3)
.fadeTo(5000, 0.3, "swing", (elem) => {
   divs.get(3).classList.add('active');     
})
.fadeTo(4000, 0.6);

divs.eq(4)
.slideUp(3000)
.slideDown(3000)
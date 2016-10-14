// Navbar
jQuery('ul.nav li.dropdown').hover(function() {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn();
}, function() {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut();
});

// Banner

$(function() {
var ban = $('#banner');
var backgrounds = new Array(
'url(../bongazo/img/bg1.png)',
'url(../bongazo/img/bg2.png)',
'url(../bongazo/img/bg3.png)'
);
var current = 0;

function nextBackground() {
ban.css(
'background',
backgrounds[current = ++current % backgrounds.length]
);

setTimeout(nextBackground, 2000);
}
setTimeout(nextBackground, 2000);
ban.css('background', backgrounds[0]);
});
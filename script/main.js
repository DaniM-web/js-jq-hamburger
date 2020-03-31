// primo click, appare il menù;
// se cliccko che è già visibile, invece scompare.

var menuToShow = $('.hamburger-menu');
var close = $('.close');
var burger = $('.header-right > a');

// burger.click(
//   function() {
//     menuToShow.css("display", "block");
//
//   }
// );
//
// close.click(
//   function(){
//       menuToShow.css("display", "none");
//   }
// );

burger.on({
  click: function() {
    menuToShow.show(500);
    burger.hide(400);

  }
});


close.on({
  click: function(){
    menuToShow.hide(500);
    burger.show(400);
  }
});

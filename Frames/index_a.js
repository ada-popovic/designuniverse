$(document).ready(function() {
var movementStrength = 100;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$(document).mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 200;
          var newvalueY = height * pageY * -1 - 200;
          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");

          pageX = e.pageX - ($(window).width() / 5);
          pageY = e.pageY - ($(window).height() / 5);
          newvalueX = width * pageX * 2 - -1;
          newvalueY = height * pageY * 2 - -1;
          $('.imgoverlay').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});

$(".usernamebutton").click(function(){
  $(".index-universe1").fadeToggle();
});

// UNIVERSE 1

$(".u1-judgement").click(function(){
  $(".index-universe2").fadeToggle();
});

$(".u1-transport-u4").click(function(){
  $(".index-universe4").fadeToggle();
});

// UNIVERSE 2

$(".u2-transport-u3").click(function(){
  $(".index-universe3").fadeToggle();
});

$(".u2-n64").click(function(){
  $(".u2-putin").fadeToggle();
});

// UNIVERSE 2 - NO PRINT
$(document).ready(function(){
 $(".u2-n64").click(function(){
    $(this).removeClass("no-print").addClass('print');
 });
});

$(document).ready(function(){
 $(".u2-putin").click(function(){
    $(this).removeClass("no-print").addClass('print');
 });
});

$(document).ready(function(){
 $(".u2-castel").click(function(){
    $(this).removeClass("no-print").addClass('print');
 });
});

// UNIVERSE 3
$(".u3-transport-u4").click(function(){
  $(".index-universe4").fadeToggle();
});




// UNIVERSE 4

$(".u4-transport-u5").click(function(){
  $(".index-universe5").fadeToggle();
});

// UNIVERSE 5

$(".u5-transport-print").click(function(){
  $(".index-printbutton").fadeToggle();
});

function Name() {
  var x = document.getElementById("username").value;
  window.document.title = "contribution by " + x;

}

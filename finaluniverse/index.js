// UNIVERSE 1

$(".u1-transport-u2").click(function(){
  $(".index-universe2").fadeToggle();
});

$(".u1-transport-u4").click(function(){
  $(".index-universe4").fadeToggle();
});

// UNIVERSE 2

$(".u2-transport-u3").click(function(){
  $(".index-universe3").fadeToggle();
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


$(".u1-dog").click(function(){
  // $(this).css("background-color", "red");
  $(".u1-dog").removeClass("no-print");
});

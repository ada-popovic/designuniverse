$( function() {

  $( '.u3-diary' ).draggable( { });
  $( '.u3-star' ).draggable( { });
  $( '.u3-monkey' ).draggable( { });
  $( '.u3-double' ).draggable( { });
  $( '.u3-medieval' ).draggable( { });
  $( '.u3-lamp' ).draggable( { });
  $( '.u3-face' ).draggable( { });
  $( '.u3-old' ).draggable( { });
  $( '.u3-old2' ).draggable( { });
  $( '.u3-crowd' ).draggable( { });
  $( '.u3-cat' ).draggable( { });
});

$(".u3-old").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-old").removeClass("no-print");
  $("#u3-old-img").attr('src', 'U3/img/99.TN2.png');
});



$(".u3-face").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-face").removeClass("no-print");
});

$(".u3-cat").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-cat").removeClass("no-print");
});

$(".u3-old").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-old").removeClass("no-print");
});

$(".u3-old2").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-old2").removeClass("no-print");
});



$(".u3-star").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-star").removeClass("no-print");
});

$(".u3-crowd").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-crowd").removeClass("no-print");
});

$(".u3-diary").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-diary").removeClass("no-print");
  $("#u3-diary-img").attr('src', 'U3/img/32_DVD2.png');
});

$(".u3-stones").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-stones").removeClass("no-print");
});



$(".u3-text-data-1").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-text-data-1").removeClass("no-print");
});

$(".u3-text-data-2").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-text-data-2").removeClass("no-print");
});


$(".u3-diary").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-star").css("visibility","visible");
});


$(".u3-monkey").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-monkey").removeClass("no-print");
});

$(".u3-double").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-double").removeClass("no-print");
});

$(".u3-lamp").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-lamp").removeClass("no-print");
});

$(".u3-medieval").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-medieval").removeClass("no-print");
});


$(".u3-double").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-monkey").css("visibility","visible");
});


// $(".u3-diary").click(function(){
//   // $(this).css("background-color", "red");
//   $("#u3-diary-img").attr('src', 'U3/img/32_DVD2.png');
// });






function textAreaAdjust(o) {
  o.style.height = "1px";
  o.style.height = (25+o.scrollHeight)+"px";
}

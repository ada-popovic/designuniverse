$(".u3-face").click(function(){
  // $(this).css("background-color", "red");
  $(".u3-face").removeClass("no-print");
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

function textAreaAdjust(o) {
  o.style.height = "1px";
  o.style.height = (25+o.scrollHeight)+"px";
}

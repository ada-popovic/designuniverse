
$(".u5-text-data-1").click(function(){
  // $(this).css("background-color", "red");
  $(".u5-text-data-1").removeClass("no-print");
});

$(".u5-text-data-2").click(function(){
  // $(this).css("background-color", "red");
  $(".u5-text-data-2").removeClass("no-print");
});

function textAreaAdjust(o) {
  o.style.height = "1px";
  o.style.height = (25+o.scrollHeight)+"px";
}

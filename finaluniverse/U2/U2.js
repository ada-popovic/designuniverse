
$( function() {
  $( '.u2-n64' ).draggable( { });
  $( '.u2-drink' ).draggable( { });
  $( '.u2-dance' ).draggable( { });
  $( '.u2-landscape' ).draggable( { });
  $( '.u2-ski' ).draggable( { });

});

$(".u2-text-data-1").click(function(){
  // $(this).css("background-color", "red");
  $(".u2-text-data-1").removeClass("no-print");
});

$(".u2-text-data-2").click(function(){
  // $(this).css("background-color", "red");
  $(".u2-text-data-2").removeClass("no-print");
});

function textAreaAdjust(o) {
  o.style.height = "1px";
  o.style.height = (25+o.scrollHeight)+"px";
}

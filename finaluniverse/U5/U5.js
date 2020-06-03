$( function() {

  $( '.u5-tea' ).draggable( { });
    $( '.u5-guma' ).draggable( { });
      $( '.u5-omlet' ).draggable( { });
        $( '.u5-tost' ).draggable( { });
          $( '.u5-banan' ).draggable( { });
            $( '.u5-chrupki' ).draggable( { });
              $( '.u5-paint' ).draggable( { });
              $( '.u5-paprykarz' ).draggable( { });
});

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


$(".u5-paint").click(function(){
  // $(this).css("background-color", "red");
  $(".u5-paint").removeClass("no-print");
});

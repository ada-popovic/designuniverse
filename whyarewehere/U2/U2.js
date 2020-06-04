document.getElementById("u2-n64").addEventListener("click", rainfall);

function rainfall() {

$(document).ready(function(){

      for (var i = 0; i < 20; i++) {

          var div = $("<div>");
          div.addClass("u2-rainfall3");

          var img = "<img src ='U2/img/47_DVD.png' id='u2-rainfall3"+i+"'/>";
          div.append(img);

          var bodyWidth = document.body.clientWidth;
          var bodyHeight = document.body.clientHeight;
          var randPosX = Math.floor((Math.random()*bodyWidth*1.2));
          var randPosY = Math.floor((Math.random()*bodyHeight*1.5));

          div.css('left', randPosX);
          div.css('top', randPosY);

          $(".index-universe2").append(div);
      }

})

}

$( function() {
  $( '.u2-n64' ).draggable( { });
  $( '.u2-drink' ).draggable( { });
  $( '.u2-dance' ).draggable( { });
  $( '.u2-landscape' ).draggable( { });
  $( '.u2-ski' ).draggable( { });
  $( '.u2-putin' ).draggable( { });
  $( '.u2-castel' ).draggable( { });
  $( '.u2-text-data-1' ).draggable( { });
  $( '.u2-text-data-2' ).draggable( { });
  $( '.u2-yoga' ).draggable( { });
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

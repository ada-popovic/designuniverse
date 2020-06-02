document.getElementById("u4-banana").addEventListener("click", rainfall);

function rainfall() {

$(document).ready(function(){

      for (var i = 0; i < 20; i++) {

          var div = $("<div>");
          div.addClass("rainfall");

          var img = "<img src ='U4/img/41&46_APVR.png' id='rainfall"+i+"'/>";
          div.append(img);

          var bodyWidth = document.body.clientWidth;
          var bodyHeight = document.body.clientHeight;
          var randPosX = Math.floor((Math.random()*bodyWidth*1.2));
          var randPosY = Math.floor((Math.random()*bodyHeight*1.5));

          div.css('left', randPosX);
          div.css('top', randPosY);

          $("body").append(div);
      }

})

}

$( function() {
  $( '.u4-eye' ).draggable( { });
$( '.u4-eye-2' ).draggable( { });
$( '.u4-banana' ).draggable( { });
$( '.u4-jazz' ).draggable( { });
$( '.u4-font' ).draggable( { });
$( '.u4-bas' ).draggable( { });
$( '.u4-family' ).draggable( { });
});

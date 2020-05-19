document.getElementById("u1-dog").addEventListener("click", rainfall);

function rainfall() {

$(document).ready(function(){

      for (var i = 0; i < 20; i++) {

          var div = $("<div>");
          div.addClass("rainfall");

          var img = "<img src ='U1/img/8.VR.png' id='rainfall"+i+"'/>";
          div.append(img);

          var bodyWidth = document.body.clientWidth;
          var bodyHeight = document.body.clientHeight;
          var randPosX = Math.floor((Math.random()*bodyWidth*1.2));
          var randPosY = Math.floor((Math.random()*bodyHeight));

          div.css('left', randPosX);
          div.css('top', randPosY);

          $("body").append(div);
      }

})

}

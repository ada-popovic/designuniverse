
$(document).ready(function() {
  var $art = $("#art");
  var $blocks = $("#block");
  var $lis = $("#block li");
  var $control = $("#control1");
  var $inputs = $(".control input");
  var $output = $("output");

  $control.on("keyup", ".text-data", updateText)

  function updateText(){
    var val = $(this).val();
    if (val == "") {
      val = "YOUR TEXT HERE";
    }
    val = val.split(" ").join("&nbsp;&nbsp;");
    $lis.html(val);
  }
});


$( function() {

  $( '.ball' ).draggable( {
  });

  $( '.tryouts' ).draggable( {
  });

});


javascript:document.body.contentEditable='true'; document.designMode='on';


function setFontText(text) {
       document.getElementById("Courier_new").innerHTML = text;
       document.getElementById("Arial_Black").innerHTML = text;
}


document.getElementById("dog").addEventListener("click", myFunction);

function myFunction() {

$(document).ready(function(){

      for (var i = 0; i < 20; i++) {

          var div = $("<div>");
          div.addClass("rainfall");

          var img = "<img src ='images/8.VR.png' id='rainfall"+i+"'/>";
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

document.getElementById("plant").addEventListener("click", rainfall2);

function rainfall2() {

$(document).ready(function(){

      for (var i = 0; i < 50; i++) {

          var div = $("<div>");
          div.addClass("rainfall2");

          var img = "<img src ='images/mail-anime.gif' id='rainfall2"+i+"'/>";
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

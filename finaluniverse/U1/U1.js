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
          var randPosY = Math.floor((Math.random()*bodyHeight*1.5));

          div.css('left', randPosX);
          div.css('top', randPosY);

          $(".index-universe1").append(div);
      }

})

}

$( function() {

  $( '.u1-sim' ).draggable( { });

  $( '.u1-graph1' ).draggable({ });

  $( '.u1-graph2' ).draggable( { });

  $( '.u1-graph3' ).draggable( { });

  $( '.u1-portraits' ).draggable({ containment: "window" });
  $( '.u1-plant' ).draggable({ containment: "window" });

$( '.u1-man' ).draggable({ containment: "window" });

});

$(".u1-judgement").click(function(){
  // $(this).css("background-color", "red");
  $(".u1-judgement").css("width","170%");
});


$(".u1-dog").click(function(){
  // $(this).css("background-color", "red");
  $(".u1-dog").removeClass("no-print");
});


$(".u1-plant").click(function(){
  // $(this).css("background-color", "red");
  $(".u1-plant").removeClass("no-print");
});


$(".u1-judgement").click(function(){
  // $(this).css("background-color", "red");
  $(".u1-judgement").removeClass("no-print");
  $(".u1-judgement").css("mix-blend-mode","multiply");
});

$(".u1-sim").click(function(){
  // $(this).css("background-color", "red");
  $(".u1-sim").removeClass("no-print");
});

$(".u1-postcard").click(function(){
  // $(this).css("background-color", "red");
  $(".u1-postcard").removeClass("no-print");
});

$(".u1-green").click(function(){
  // $(this).css("background-color", "red");
  $(".u1-green").removeClass("no-print");
});

$(".u1-portraits").click(function(){
  // $(this).css("background-color", "red");
  $(".u1-portraits").removeClass("no-print");
});

$(".u1-graph1").click(function(){
  // $(this).css("background-color", "red");
  $(".u1-graph1").removeClass("no-print");
  $(".u1-graph1").css("mix-blend-mode","multiply");
});

$(".u1-graph2").click(function(){
  // $(this).css("background-color", "red");
  $(".u1-graph2").removeClass("no-print");
  $(".u1-graph2").css("mix-blend-mode","multiply");
});

$(".u1-graph3").click(function(){
  // $(this).css("background-color", "red");
  $(".u1-graph3").removeClass("no-print");
  $(".u1-graph3").css("mix-blend-mode","multiply");
});


$(".u1-text-data-1").click(function(){
  // $(this).css("background-color", "red");
  $(".u1-text-data-1").removeClass("no-print");
});

$(".u1-text-data-2").click(function(){
  // $(this).css("background-color", "red");
  $(".u1-text-data-2").removeClass("no-print");
});

function textAreaAdjust(o) {
  o.style.height = "1px";
  o.style.height = (25+o.scrollHeight)+"px";
}

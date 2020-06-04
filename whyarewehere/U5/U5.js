$( function () {

  $( '.u5-tea' ).draggable( { });
    $( '.u5-guma' ).draggable( { });
      $( '.u5-omlet' ).draggable( { });
        $( '.u5-tost' ).draggable( { });
          $( '.u5-banan' ).draggable( { });
            $( '.u5-chrupki' ).draggable( { });
              $( '.u5-paint' ).draggable( { });
              $( '.u5-paprykarz' ).draggable( { });
              $( '.u5-landscape1' ).draggable( { });

});


document.getElementById("u5-paprykarz").addEventListener("click", rainfall2);


function rainfall2() {



      for (var i = 0; i < 4; i++) {

          var div = $("<div>");
          div.addClass("rainfall2");

          var img = "<img src ='U5/img/71.AP.png' id='rainfall2"+i+"'/>";
          div.append(img);

          var bodyWidth = document.getElementById("u5-section").clientWidth;
          var bodyHeight = document.getElementById("u5-section").clientHeight;
          var randPosX = Math.floor((Math.random()*bodyWidth*1));
          var randPosY = Math.floor((Math.random()*bodyHeight*1));

          div.css('left', randPosX);
          div.css('top', randPosX);

          $(".index-universe5").append(div);
      }



}

document.getElementById("u5-tost").addEventListener("click", rainfall3);

function rainfall3() {



      for (var i = 0; i < 10; i++) {

          var div = $("<div>");
          div.addClass("rainfall3");

          var img = "<img src ='U5/img/88.AP.png' id='rainfall3"+i+"'/>";
          div.append(img);

          var bodyWidth = document.getElementById("u5-section").clientWidth;
          var bodyHeight = document.getElementById("u5-section").clientHeight;
          var randPosX = Math.floor((Math.random()*bodyWidth*1));
          var randPosY = Math.floor((Math.random()*bodyHeight*1));

          div.css('left', randPosX);
          div.css('top', randPosY);

          $(".index-universe5").append(div);
      }



}


document.getElementById("u5-paint").addEventListener("click", rainfall4);


function rainfall4() {

      for (var i = 0; i < 10; i++) {

          var div = $("<div>");
          div.addClass("rainfall4");

          var img = "<img src ='U5/img/44.AP.png' id='rainfall4"+i+"'/>";
          div.append(img);

          var bodyWidth = document.getElementById("u5-section").clientWidth;
          var bodyHeight = document.getElementById("u5-section").clientHeight;
          var randPosX = Math.floor((Math.random()*bodyWidth*1));
          var randPosY = Math.floor((Math.random()*bodyHeight*1));

          div.css('left', randPosX);
          div.css('top', randPosY);

          $(".index-universe5").append(div);
      }


}




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

$(".u5-paprykarz").click(function(){
  // $(this).css("background-color", "red");
  $(".u5-paprykarz").removeClass("no-print");
});

$(".u5-tea").click(function(){
  // $(this).css("background-color", "red");
  $(".u5-tea").removeClass("no-print");
});

$(".u5-guma").click(function(){
  // $(this).css("background-color", "red");
  $(".u5-guma").removeClass("no-print");
});

$(".u5-omlet").click(function(){
  // $(this).css("background-color", "red");
  $(".u5-omlet").removeClass("no-print");
});

$(".u5-tost").click(function(){
  // $(this).css("background-color", "red");
  $(".u5-tost").removeClass("no-print");
});

$(".u5-chrupki").click(function(){
  // $(this).css("background-color", "red");
  $(".u5-chrupki").removeClass("no-print");
});

$(".u5-banan").click(function(){
  // $(this).css("background-color", "red");
  $(".u5-banan").removeClass("no-print");
});


$(".u5-landscape1").click(function(){
  $(".u5-landscape1").removeClass("no-print");
  $(".u5-landscape1").css('filter','blur(20px)');
});

$(".u5-landscape2").click(function(){
  $(".u5-landscape2").removeClass("no-print");
  $(".u5-landscape2").css('filter','blur(1px)');
});

$(".u5-landscape3").click(function(){
  // $(this).css("background-color", "red");
  $(".u5-landscape3").css('filter','blur(30px)');
  $(".u5-landscape3").removeClass("no-print");
});

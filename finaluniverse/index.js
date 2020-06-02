$(".usernamebutton").click(function(){
  $(".index-universe1").fadeToggle();
});

// UNIVERSE 1

$(".u1-judgement").click(function(){
  $(".index-universe2").fadeToggle();
});

$(".u1-transport-u4").click(function(){
  $(".index-universe4").fadeToggle();
});

// UNIVERSE 2

$(".u2-landscape").click(function(){
  $(".index-universe3").fadeToggle();
});

$(".u2-n64").click(function(){
  $(".u2-putin").fadeToggle();
});

$(".u2-putin").click(function(){
  $(".u2-ski").fadeToggle();
});

$(".u2-putin").click(function(){
  $(".u2-landscape").fadeToggle();
});

$(".u2-castel").click(function(){
  $(".u2-drink").fadeToggle();
});

$(".u2-castel").click(function(){
  $(".u2-dance").fadeToggle();
});

$(".u2-dance").click(function(){
  $(".u2-landscape").fadeToggle();
});

// UNIVERSE 2 - NO PRINT
$(document).ready(function(){
 $(".u2-n64").click(function(){
    $(this).removeClass("no-print").addClass('print');
 });
});

$(document).ready(function(){
 $(".u2-putin").click(function(){
    $(this).removeClass("no-print").addClass('print');
 });
});

$(document).ready(function(){
 $(".u2-castel").click(function(){
    $(this).removeClass("no-print").addClass('print');
 });
});

$(document).ready(function(){
 $(".u2-drink").click(function(){
    $(this).removeClass("no-print").addClass('print');
 });
});

$(document).ready(function(){
 $(".u2-dance").click(function(){
    $(this).removeClass("no-print").addClass('print');
 });
});

$(document).ready(function(){
 $(".u2-landscape").click(function(){
    $(this).removeClass("no-print").addClass('print');
 });
});

// UNIVERSE 3
$(".u3-transport-u4").click(function(){
  $(".index-universe4").fadeToggle();
});




// UNIVERSE 4

$(".u4-jezus").click(function(){
  $(".index-universe5").fadeToggle();
});

// UNIVERSE 4 - NO PRINT
$(document).ready(function(){
 $(".text-data").click(function(){
    $(this).removeClass("no-print").addClass('print');
 });
});

$(document).ready(function(){
 $(".u4-eye").click(function(){
    $(this).removeClass("no-print").addClass('print');
 });
});

$(document).ready(function(){
 $(".u4-eye-2").click(function(){
    $(this).removeClass("no-print").addClass('print');
 });
});

$(document).ready(function(){
 $(".u4-firebar").click(function(){
    $(this).removeClass("no-print").addClass('print');
 });
});

$(document).ready(function(){
 $(".u4-banana").click(function(){
    $(this).removeClass("no-print").addClass('print');
 });
});


// UNIVERSE 5

$(".u5-transport-print").click(function(){
  $(".index-printbutton").fadeToggle();
});

function Name() {
  var x = document.getElementById("username").value;
  window.document.title = "contribution by " + x;

}

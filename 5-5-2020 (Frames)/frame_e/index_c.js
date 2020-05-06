
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


javascript:document.body.contentEditable='true'; document.designMode='on';


function setFontText(text) {
       document.getElementById("Courier_new").innerHTML = text;
       document.getElementById("Arial_Black").innerHTML = text;
}

$(document).ready(function(){
 $(".cube").click(function(){
    $(this).closest(".remove").removeClass("no-print").addClass('print');
 });
});

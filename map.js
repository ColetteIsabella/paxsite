
$(document).ready(function() {

  $(".section").change(function() {
    var selected = $(".section option:selected").attr("value");
    $("polygon, rect").attr("class", "");
    $("#" + selected).attr("class", "active");
  });


  $(".zones").change(function() {
    var selected = $(".zones option:selected").attr("value");
    $("polygon, rect").attr("class", "");
    $("#" + selected).attr("class", "active");
  });

  $(".booth").change(function(){
    var selected = $(".booth option:selected").attr("value");
    $("rect").attr("class", "");
    $("#" + selected).attr("class", "active");
  });

$(document).ready(function() { $("#e1").select2();
  $("#e3").select2({
    minimumInputLength: 2
  });
});



});





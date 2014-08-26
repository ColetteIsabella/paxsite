
$(document).ready(function() {
  $(".section").change(function() {
    var selected = $(".section option:selected").attr("value");
    $("polygon, rect").attr("class", "");
    $("#" + selected).attr("class", "active");
  });

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

  var countrycodes = "1"
  var delimiters = "-|\\.|—|–|&nbsp;"
  var phonedef = "\\+?(?:(?:(?:" + countrycodes + ")(?:\\s|" + delimiters + ")?)?\\(?[2-9]\\d{2}\\)?(?:\\s|" + delimiters + ")?[2-9]\\d{2}(?:" + delimiters + ")?[0-9a-z]{4})"
  var spechars = new RegExp("([- \(\)\.:]|\\s|" + delimiters + ")","gi") //Special characters to be removed from the link
  var phonereg = new RegExp("((^|[^0-9])(href=[\"']tel:)?((?:" + phonedef + ")[\"'][^>]*?>)?(" + phonedef + ")($|[^0-9]))","gi")


console.log("phone test");
$("#address").html(ReplacePhoneNumbers($("#address").html()))

  $("a[href^='tel:']").click(function(event){
    event.preventDefault();

    link = $(this).attr('href');
    tracklink = link.replace("tel:","")
    tracklink = tracklink.replace(spechars,"")
    if(tracklink.length == 10) {tracklink ="1" + tracklink}

    ga("send", "event", "contact", "phone", tracklink);

    setTimeout(function(){
      window.location = link;
    },300);

  });
}
});


 //
//    var
//});
//  for (i=1; i<=5; i++) {
//    document.write("<div onclick='showZone(" + i + ");'>Zone " + i + "</div>");




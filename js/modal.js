
$(document).ready(function() {
$(".button").click(function() {
    console.log("btn clicked");
    var buttonId = $(this).attr("id");
    $("#modal-container")
      .removeAttr("class")
      .addClass(buttonId);
    $("body").addClass("modal-active");
  });
  
  $("#modal-container").click(function() {
    $(this).addClass("out");
    $("body").removeClass("modal-active");
  });

});





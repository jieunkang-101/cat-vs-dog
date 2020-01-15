

$(document).ready(function() {

  $("button#dog").click(function() {
    $("ul#user").prepend("<li>Woof Woof!</li>");
    $("ul#webpage").prepend("<li>Meooooow~</li>");
  });
    
    $("button#cat").click(function() {
      $("ul#user").append("<li>Woof Woof!</li>");
      $("ul#webpage").append("<li>Meooooow~</li>");
  });

  $(".well").click(function() {
    $(".well").after("<img src=img/koala.jpeg>");
  });
 
  $("#koala").click(function() {
    $("#koala").remove();
  });
});
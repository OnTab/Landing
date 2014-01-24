$(document).ready(function(){
  $(".t-circle-outer").draggable({axis: "y", containment: "parent", snap: ".b-circle-outer", snapMode: "inner", revert: true, revertDuration: 500});

  $(".b-circle-outer" ).droppable({
    accept: ".t-circle-outer",
    hoverClass: "slide-done",
    drop: function( event, ui ) {
      $(".h-container").css({"visibility": "visible"});
      $(".unlock-wrapper").find("h1").text("Enjoy");
      $(".t-circle-outer").fadeOut(100);
      $(".unlock-wrapper").slideUp(800);
    }
  });

  $(".box1").on("click", function(){
    $(".m3").fadeOut();
    $(".m2").fadeOut();
    
    $(".m1").fadeIn();
  });

  $(".box2").on("click", function(){
    $(".m3").fadeOut();
    $(".m1").fadeOut();
    $(".m2").fadeIn();
  });

  $(".box3").on("click", function(){
    $(".m1").fadeOut();
    $(".m2").fadeOut();
    $(".m3").fadeIn();
  });
});
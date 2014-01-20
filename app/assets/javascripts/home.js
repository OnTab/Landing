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
});
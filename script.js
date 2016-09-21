var backgroundIsBlue = false
setInterval(function() {
  if (backgroundIsBlue) {
    $("#blue-blinker").css({background: "white"});
    backgroundIsBlue = false;
  } else {		
    $("#blue-blinker").css({background: "red"});	
    backgroundIsBlue = true;
  }	
}, 500)

classadoo.com/editor?recovery_mode=true

//$("#blue-blinker").css({border: "3px solid black"});
//$("#blue-blinker").css({border: "none"});
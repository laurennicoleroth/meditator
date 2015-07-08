$(document).ready(function() {
  var meditate; 
  var rotation = 0;

  Mousetrap.bind('space', function() {
  	rotation += 5;
  	rotateBox(rotation);
  })

  function rotateBox(rotation) {
  	$("#box").css({'-webkit-transform' : 'rotate('+ rotation +'deg)',
                 '-moz-transform' : 'rotate('+ rotation +'deg)',
                 '-ms-transform' : 'rotate('+ rotation +'deg)',
                 'transform' : 'rotate('+ rotation +'deg)'});
  }
});

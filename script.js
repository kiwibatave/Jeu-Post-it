$(document).ready(function(){
    for (var x= 0; x < 16; x++) {
      for (var y= 0; y < 16; y++) {
        $("<div>").addClass("unit").appendTo('#container');
      }
    }
});

  $(document).ready(function() {
    $(".pick").draggable();
      // var number = $(".pick").length;
      // var tt = 0;
  });

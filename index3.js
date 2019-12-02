jQuery(document).ready(function ($) {
    // $('#drawing path').attr('fill', 'red');
    $( "#drawing path" ).animate({
        'background-color': 'white'
    }, {
      step: function( now, fx ) {
          console.log(now);
          if (now == 'white') {
              $('#drawing path').attr('fill', 'whitesmoke');
              // $('#drawing path').attr('fill', 'whitesmoke');
          }
          // var data = fx.elem.id + " " + fx.prop + ": " + now;
          // $( "body" ).append( "<div>" + data + "</div>" );
      }
    });
});

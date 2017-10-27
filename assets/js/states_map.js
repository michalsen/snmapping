(function ($) {

  $(function(){

    $('#map').usmap({
      'stateStyles': {
        fill: "#ffffff",
        stroke: "ffffff",
        "stroke-width": 1,
        "stroke-linejoin": "round",
        scale: [1, 1]
      },
      'stateHoverStyles': {
        fill: "#96ce92",
        stroke: "#ffffff",
        scale: [1.1, 1.1]
      },

      'labelBackingStyles': {
        fill: "#96ce92",
        stroke: "#ffffff",
        "stroke-width": 1,
        "stroke-linejoin": "round",
        scale: [1, 1]
      },

      //'stateSpecificHoverStyles': {
      //  'HI' : {fill: '#ff6633'}
      // },

      'mouseoverState': {
        'HI' : function(event, data) {
          //return false;
        }
      },

    'click' : function(event, data) {
      var state = data.name;
      console.log(state);

        var sendData = jQuery.ajax({
                   type: 'POST',
                   url: '/admin/snmapping',
                   data: {state},
                     success: function(resultData) {
                         jQuery('.pane-snmapping').html("<div id='state-info'>"+resultData+"</div>");
                     }
        });


      //$('#state-info').load('admin/states_map?state='+data.name+' #state-details');
         //$('#state-info')
          //.text(data.name)
          //.stop()
          //.css('backgroundColor', 'white')
          //.animate({backgroundColor: 'white'}, 1000);
       }

    });

  });

}(jQuery));

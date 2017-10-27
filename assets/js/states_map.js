(function ($) {

  $(function(){

    $('#map').usmap({
      'stateStyles': {
        fill: "#ffffff",
        stroke: "ffffff",
        "stroke-width": 2,
        "stroke-linejoin": "round",
        scale: [1, 1]
      },
      'stateHoverStyles': {
        fill: "#96ce92",
        stroke: "#96ce92",
        scale: [1.1, 1.1]
      },

      'labelBackingStyles': {
        fill: "#96ce92",
        stroke: "#96ce92",
        "stroke-width": 2,
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
      if ( data.name == "Puerto Rico" ) {
        data.name = 'PR';
      }

      $('#state-info').load('admin/states_map?state='+data.name+' #state-details');
         //$('#state-info')
          //.text(data.name)
          //.stop()
          //.css('backgroundColor', 'white')
          //.animate({backgroundColor: 'white'}, 1000);
       }

    });

  });

}(jQuery));

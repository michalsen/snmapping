(function ($) {

  Drupal.behaviors.example = {
    attach: function (context, settings) {

      // Map Dropdown
      $(".attachment_1" ).change(function() {
        console.log('attachment_1 change');
          // var option = $( "select option:selected" ).val();
          var option = $(".attachment_1").val();
          sendData(option);
      }).trigger( "select" );

      // No Map Dropdown
      $(".attachment_2" ).change(function() {
        console.log('attachment_2 change');
          // var option = $( "select option:selected" ).val();
          var option = $(".attachment_2").val();
          sendData(option);
      }).trigger( "select" );

    }
  }

  // AJAX Send
  function sendData(option) {
    console.log(option);
    var path = option.split("::");
    var url_parts = path[1].replace(/\/\s*$/,'').split('/');
    var nid = url_parts[3];
    var sendData = jQuery.ajax({
               type: 'POST',
               url: '/admin/snmapping',
               data: {nid},
                 success: function(resultData) {
                     jQuery('.pane-snmapping').html("<div id='state-info'>"+resultData+"</div>");
                 }
    });
  }



}(jQuery));



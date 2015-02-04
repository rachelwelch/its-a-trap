// Prepare, plan, and perform

// Hide trap sign 
// When user clicks on image, reveal trap sign

$(document).ready(function() {
    $('.warning').hide();
    
    // capture click on image
    $('.image').on('click', function() {
      $('.warning').show('slow');
    })
                    
});
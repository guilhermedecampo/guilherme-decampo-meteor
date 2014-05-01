$(document).ready(function(){
// 'catTopPosition' is the amount of pixels #cat
// is from the top of the document
  var
    profileTopPosition = $('#profile').offset().top
  ;

// When #scroll is clicked
  $('.more').click(function(){

// Scroll down to 'catTopPosition'
    $('html, body').animate({scrollTop:profileTopPosition}, 'slow');
// Stop the link from acting like a normal anchor link
      return false;
    });
});
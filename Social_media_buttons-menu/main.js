$('#social-click').click(function(){
    $('.social-icon').toggle( 'slide' );
  });

  $('.navigation-toggle').on('click',function() {

    if($('.navigation-target').hasClass('clicked')){
      $('.navigation-target').removeClass('clicked');
      $('.dropdown-menu').slideUp();
    }
    else{
      $('.navigation-target').addClass('clicked');
      $('.dropdown-menu').slideDown();
    }
  });

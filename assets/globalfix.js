$( window ).scroll(function() {
  if ( $(window).scrollTop() > $(window).height()) {
    $( '#header' ).addClass( 'fixed' );
  } else {
    $( '#header' ).removeClass( 'fixed' );
  }
});

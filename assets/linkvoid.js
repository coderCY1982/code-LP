$(window).on('load resize',function(){
 if (window.matchMedia( "(max-width: 767px)" ).matches) {
   $('#global-nav a[href]').click(function() {
     $('#nav-toggle').trigger('click');
   });
 }
});

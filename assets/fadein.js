$(document).ready(function () {
  $('.animation').css('visibility','hidden');
});

$(window).scroll(function(){
 var windowHeight = $(window).height();
 var topWindow = $(window).scrollTop();
 $('.animation').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("fadeInDown");
  }
 });
});

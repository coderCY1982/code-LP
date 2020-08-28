var pagetop = $('#scroll-btn');

$(document).ready(function () {
  pagetop.hide();
});

$(window).scroll(function () {
   if ($(this).scrollTop() > 1000) {
     pagetop.fadeIn();
   } else {
     pagetop.fadeOut();
   }
});

$(document).ready(function () {
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

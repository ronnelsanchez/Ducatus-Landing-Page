
$(window).scroll(function () {
  if ($(window).scrollTop() > 1) {
    $('header').addClass('scroll');
  } else {
    $('header').removeClass('scroll');
  };
});

$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});

window.sr = ScrollReveal();
sr.reveal('.navbar .container', {
  duration: 2000,
  origin:'top'
});
sr.reveal('.banner .content .message', {
  duration: 2000,
  origin:'left',
  distance:'300px'
});
sr.reveal('.banner .content .image', {
  duration: 2000,
  origin:'top',
  distance:'300px'
});
sr.reveal('.download-message', {
  duration: 2000,
  delay: 1500,
  origin:'left'
});
sr.reveal('.download-link', {
  duration: 2000,
  delay: 2000,
  origin:'left'
});
sr.reveal('.card', {
  duration: 2000,
  viewFactor: 1
});
sr.reveal('.profile.lg', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 1
});
sr.reveal('.profile.sm', {
  duration: 2000,
  origin:'top',
  viewFactor: 1
});
sr.reveal('.quick-contact', {
  duration: 2000,
  origin:'left',
  distance:'100px'
});
sr.reveal('.address-contact', {
  duration: 2000,
  origin:'right',
  distance:'100px'
});

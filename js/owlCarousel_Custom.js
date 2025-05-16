jQuery(document).ready(function ($) {
  $("#benefitItemsId .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    smartSpeed: 450,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
      },
    },
  });

  $("#simpleItemsId .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    smartSpeed: 450,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });

  $("#testimonialItemsId .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 450,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
      },
    },
  });
});

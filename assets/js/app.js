(function ($) {
  "use strict";


  /*  Fixed Header*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
      $(".header-area").addClass("header-fixed");
    } else {
      $(".header-area").removeClass("header-fixed");
    }
  });
  /*  Slider */
  $('.single-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  /*  Logo Slider */
  $('.partner-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
  /*  Preloader */
  $(window).on('load', function () {
    var preLoder = $(".preloader");
    preLoder.fadeOut(1000);

  });
  /*  Banner Slider */
  $('#headline-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });
  /*  Scrolltop  */
  function scrolltop() {


    var wind = $(window);

    wind.on("scroll", function () {

      var scrollTop = wind.scrollTop();

      if (scrollTop >= 500) {

        $(".top-scollbar").addClass("show");

      } else {

        $(".top-scollbar").removeClass("show");
      }

    });

    $(".top-scollbar").on("click", function () {

      var bodyTop = $("html, body");

      bodyTop.animate({
        scrollTop: 0
      }, 500, "easeOutCubic");
    });

  }


  scrolltop();

  /*  AOS  */
  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',

  });


  var image = document.getElementsByClassName('themeix-scroll-effect-1');
  new simpleParallax(image, {
    overflow: true,
    orientation: 'left',
    delay: 0.6,
    scale: 1.5,
    transition: 'cubic-bezier(0,0,0,1)'
  });
  var image = document.getElementsByClassName('themeix-scroll-effect-2');
  new simpleParallax(image, {
    overflow: true,
    orientation: 'right',
    delay: 0.6,
    scale: 1.5,
    transition: 'cubic-bezier(0,0,0,1)'
  });


  $('.infinite-scroll').infiniteScroll({
    path: function path() {
      var pageNumber = this.loadCount + 2;
      return '/blog/pages/' + pageNumber + '/index.html';
    },
    append: '.post-item',
    button: '.loadmore',
    scrollThreshold: false

  });

  // search 
  var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<div class="search-results"><a class="gh-search-item" href="{url}"><h5 class="search-post-title">{title}</h5></a>'
  });

}(jQuery));
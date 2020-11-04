function maskTel() {
  $('.tel-mask').mask('+375(99)999-99-99');
}

$(document).ready(function () {

  maskTel();

  // burger-menu

  $(document).on('click', (e) => {

    const target = $(e.target);

    if (target.hasClass('b-header__menu') || target.hasClass('btn-close') || $('.n-nav').has(target).length) {
      $('.b-header__menu').removeClass('--active');
      $('body').css('overflowY', 'auto');
    }
  });

  $('.btn-menu').on('click', () => {
    $('.b-header__menu').addClass('--active');
    $('body').css('overflowY', 'hidden');
  });

  // Footer adaptive menu

  $('.b-contacts__title').on('click', function () {
    if ($(document).width() < 768) {

      $(this).next().slideToggle();

      $('.b-contacts__title').not($(this)).next().slideUp();
    }
  });

  // Button to top
  $(window).on('scroll', () => {

    if ($(window).scrollTop() > 100) {
      $('.b-top').fadeIn('slow');

    } else {
      $('.b-top').fadeOut('slow');
    }
  });

  $('.b-top').on('click', () => {

    $('html, body').animate({
      scrollTop: 0
    }, 700);
  });


  // slider

  $('.s-main').slick({
    prevArrow: $('.b-main__arrow-prev.btn-prev'),
    nextArrow: $('.b-main__arrow-next.btn-next'),
    autoplay: true,
    infinite: true,
    dots: false,
    speed: 600
  });

  $('.b-principles__slider').slick({
    prevArrow: $('.b-principles__slider-prev.btn-prev'),
    nextArrow: $('.b-principles__slider-next.btn-next'),
    autoplay: true,
    infinite: true,
    dots: false,
    speed: 600
  });

  $('.li-reviews').slick({
    prevArrow: $('.b-reviews__arrow-prev.btn-prev'),
    nextArrow: $('.b-reviews__arrow-next.btn-next'),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.li-partners').slick({
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
});



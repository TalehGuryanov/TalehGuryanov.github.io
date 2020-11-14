
$(document).ready(function () {


  $(document).on('click', (e) => {

    // Close menu
    const target = $(e.target);
    if ($(e.target).hasClass('n-nav') || $('.li-menu').has(target).length) {
      $('.n-nav').removeClass('--active');
      $('body').css('overflowY', 'auto');
    }

    // Checkbox remember
    if (target.hasClass('f-subscribe__checkbox')) {
      target.toggleClass('--checked');
    }
  });

  // Add to favorite
  $('.li-collection__fav').on('click', (e) => {

    $(e.target).toggleClass('--active');

    if ($(e.target).hasClass('--active')) {
      $('.b-toast').text('Товар добавлен в избранное');
      $('.b-toast').addClass('--show');

    } else {
      $('.b-toast').text('Товар удален из избранных');
      $('.b-toast').addClass('--show');
    }

    setTimeout(() => {
      $('.b-toast').removeClass('--show');
    }, 2000);
  });

  // burger-menu

  $('.btn-menu').on('click', () => {
    $('.n-nav').addClass('--active');
    $('body').css('overflowY', 'hidden');
  });

  // Button to top
  $(window).on('scroll', () => {

    if ($(window).scrollTop() > 400) {
      $('.b-top').fadeIn('medium');

    } else {
      $('.b-top').fadeOut('medium');
    }
  });

  $('.b-top__link').on('click', () => {
    $('html, body').animate({
      scrollTop: 0
    }, 700);
  });

  // sort

  function sort(productList, productItem, data, e) {

    if ($(e.target).hasClass('--select')) {
      productItem.sort(function (a, b) {
        return $(b).data(data) - $(a).data(data);
      });
    } else {
      productItem.sort(function (a, b) {
        return $(a).data(data) - $(b).data(data);
      });
    }
    productList.append(productItem);
  }

  $(document).on('click', (e) => {
    const productList = $('.li-collection');
    const productItem = $('.li-collection__item');

    if ($(e.target).hasClass('b-sort__item --price')) {
      $(e.target).toggleClass('--select');

      sort(productList, productItem, 'price', e);
    }

    if ($(e.target).hasClass('b-sort__item --age')) {
      $(e.target).toggleClass('--select');

      sort(productList, productItem, 'age', e);
    }
  });

  // Load more product

  $('.btn-more').on('click', (e) => {
    e.preventDefault();
    $('.holder').fadeIn();
    $.ajax({
      url: 'product-list.html',
      cache: false,
      success(response) {
        $('.li-collection').append($(response));
        $('.holder').fadeOut();
      }
    });
  });
});


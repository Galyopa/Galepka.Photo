$(function () {

  $('.nav__btn, .nav__link').on('click', function () {
    $('.nav__list').toggleClass('active');
    $(this).toggleClass('active');
  });

});
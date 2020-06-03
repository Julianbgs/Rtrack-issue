import './header.sass';

export default () => {
  $(document).on('click', '#header-trigger', function (event) {
    event.preventDefault();
    var menu = $('.header__menu-mobile');
    if ($(this).hasClass('js-trigger-active')) {
      $(this).removeClass('js-trigger-active');
      menu.slideUp('slow');
    } else {
      $(this).addClass('js-trigger-active');
      menu.slideDown('slow');
    }
    return false;
  });
}

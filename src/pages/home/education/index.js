import './index.sass';
import '../jquery.pin';

export default () => {
    //change sidebar links
    let $link = $('.education__sidebar-item');

    $link.on('click', function () {
      $link.removeClass('education__sidebar-item-active');
      $(this).addClass('education__sidebar-item-active');
    });
    // end script

    //anchor link
      document.querySelectorAll('.education__sidebar-item').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    //end script

    // sticky sidebar
    $('.education__sidebar').pin({
      containerSelector: ".education__wrapper",
      minWidth: 1270
    });
    //end script

};

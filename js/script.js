$(document).on('ready', function() {

  $('.carousel').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: '<i class="next-arrow fa fa-chevron-right fa-2x"></i>',
    prevArrow: '<i class="prev-arrow fa fa-chevron-left fa-2x"></i>'
  });

});

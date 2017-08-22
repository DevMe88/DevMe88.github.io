$('#menu-btn, #close-btn').on('click', function () {
  $("#menu").toggleClass("menu-not-visible menu-visible animated fadeIn");
});

$('.menu-item a').on('click', function () {
  $('.menu-item a').each(function () {
    $(this).removeClass('active');
  })
  $(this).addClass('active');
});

$('.char-sec, #go-back').on('click', function () {
  $('#char-banner').toggleClass('not-visible');
});

$('.story,#close-story-banner').on('click', function () {
  $('#story-banner').toggleClass('not-visible');
})

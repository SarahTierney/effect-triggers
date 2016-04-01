$('.btn-show-hide').on('click', function () {
  $('.box').toggleClass('box-show');
});

$('.btn-move').on('click', function () {
  $('.diamond').toggleClass('diamond-move');
});

$('.btn-collapse-expand').on('click', function () {
  $('.panel').toggleClass('panel-collapse');
});

$('.btn-bounce').on('click', function () {
  $('.circle').toggleClass('circle-bounce');
});

$('.btn-append').on('click', function () {
  $('.list').append('<li>New List Item</li>');
});

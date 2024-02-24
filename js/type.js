$(function () {
  let char_index = 1
  $(document).on('keypress', function (e) {
    var $target = $('#char-' + char_index);
    if (e.key === $target.text()) {
      $target.removeClass('default');
      $target.addClass('correct');
      char_index++;
    }
  });

});

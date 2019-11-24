const Main = (function() {
  function init() {
    $('#ask-review').on('click', function() {
      if (!isQuestionValid()) {
        const error = '<p>There is a problem with your question</p>';
        $('#error').html(error);
      }
      $(this).hide();
      $('#ask-post').show();
    });
  }
  function isQuestionValid() {
    const title = $('#title-input');
    const body = $('#body-input');

    if (title.val().length < 10) {
      return false;
    }
    if (body.val().length < 20) {
      return false;
    }
    return true;
  }
  return { init };
})();

$(document).ready(() => {
  Main.init();
});

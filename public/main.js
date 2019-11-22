const Main = (function() {
  function init() {
    console.log('SESSION STORAGE:', sessionStorage);
    $('#frm-ask-question').on('submit', function(event) {
      event.preventDefault();
      const questionData = {};
      $(this).each(function() {
        const input = $(this);
        questionData[$(input).name] = $(input).val();
      });
      setFormValues(questionData);
      location.href = '/question/ask';
    });
  }

  function setFormValues(formData) {
    Object.keys(formData).forEach(function(key) {
      sessionStorage.setItem(key, formData[key]);
    });
  }

  return { init };
})();

$(document).ready(() => {
  Main.init();
});

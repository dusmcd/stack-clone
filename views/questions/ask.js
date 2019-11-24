const html = require('html-template-tag');
const masterTemplate = require('../partials/_master');

const body = html`
  <div class="container">
    <h2>Ask a public question</h2>
    <form action="/question/ask" method="POST" id="frm-ask-question">
      <div class="form-group">
        <label>Title</label>
        <input type="text" name="title" id="title-input" />
      </div>
      <div class="form-group">
        <label>Body</label>
        <textarea name="content" id="body-input"></textarea>
      </div>
      <div class="form-group">
        <label>Tags</label>
        <input type="text" name="tags" />
      </div>

      <button type="button" id="ask-review" class="btn-blue">
        Review your question
      </button>
      <button
        type="submit"
        id="ask-post"
        style="display: none;"
        class="btn-blue"
      >
        Publish your question
      </button>
    </form>
    <div id="error"></div>
  </div>
`;

module.exports = masterTemplate(body);

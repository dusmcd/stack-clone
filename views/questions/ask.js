const html = require('html-template-tag');
const masterTemplate = require('../partials/_master');

const body = html`
  <h2>Ask a public question</h2>
  <form action="/question/ask" method="POST" id="frm-ask-question">
    <div id="title">
      <label>Title</label>
      <input type="text" name="title" />
    </div>
    <div id="body">
      <label>Body</label>
      <textarea name="body"></textarea>
    </div>
    <div id="tags">
      <label>Tags</label>
      <input type="text" name="tags" />
    </div>

    <button type="submit">Review your question</button>
  </form>
`;

module.exports = masterTemplate(body);

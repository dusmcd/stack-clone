const html = require('html-template-tag');
const masterTemplate = require('./partials/_master');

const body = html`
  <h1>500 Internal Server Error!</h1>
  <h2><a href="/">Back to home page</a></h2>
`;

module.exports = masterTemplate(body);

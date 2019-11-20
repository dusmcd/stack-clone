const html = require('html-template-tag');
const masterTemplate = require('./partials/_master');

const body = html`
  <h1>404 Error. We couldn't find what you're looking for</h1>
  <h2><a href="/">Back to Home Page</a></h2>
`;

module.exports = masterTemplate(body);

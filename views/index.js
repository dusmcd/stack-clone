const html = require('html-template-tag');
const masterTemplate = require('./partials/_master');

const body = user => {
  return html`
    <h1>Hello, ${user}! This is the landing page!</h1>
  `;
};

module.exports = user => {
  return masterTemplate(body(user));
};

const masterTemplate = require('./partials/_master');
const html = require('html-template-tag');

const body = html`
  <div class="container">
    <form action="/login" method="POST">
      <div class="form-group">
        <label>Email</label>
        <input type="text" name="email" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <button type="submit" class="btn-blue">Log in</button>
    </form>
  </div>
`;

module.exports = masterTemplate(body);

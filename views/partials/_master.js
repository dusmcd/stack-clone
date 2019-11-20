const html = require('html-template-tag');

function masterTemplate(body) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" type="text/css" href="/main.css" />
        <title>Document</title>
      </head>
      <body>
        $${body}
      </body>
    </html>
  `;
}

module.exports = masterTemplate;

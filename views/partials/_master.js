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
        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
          crossorigin="anonymous"
        ></script>
        <script src="/main.js"></script>
      </body>
    </html>
  `;
}

module.exports = masterTemplate;

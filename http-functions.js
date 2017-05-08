var getHTML = require('./get-html');

function printHTML(html) {
  console.log(html);
}

getHTML({
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'}, printHTML);
var https = require('https');

function getHTML(options, callback) {
  https.get(options, function(response) {
    var buff = '';
    response.on('data', function(chunk) {
      buff += chunk.toString();
    });
    // this function should not take in any parameter
    response.on('end', function() {
      callback(buff)
    });
  });
}

function printHTML(html) {
  console.log(html);
}

getHTML({
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'}, printHTML);
var https = require('https');

// This function use a buffering technique
// to append each chunk of data to a variable
// as it is received
//
// input: options - contains host, path
function getAndPrintHTML(options) {
  https.get(options, function(response) {
    var buff = '';
    response.on('data', function(chunk) {
      buff += chunk.toString();
    });
    response.on('end', function() {
      console.log(buff);
    });
  });
}

getAndPrintHTML({
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'});
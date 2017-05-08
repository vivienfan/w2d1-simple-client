var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

// This function use a buffering technique
// to append each chunk of data to a variable
// as it is received
function getAndPrintHTML() {
  https.get(requestOptions, function(response) {
    var buff = '';
    response.on('data', function(chunk) {
      buff += chunk.toString();
    });
    response.on('end', function() {
      console.log(buff);
    });
  });
}

getAndPrintHTML();
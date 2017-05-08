var https = require('https');

/* This function utilize the https library to GET a given URL. */
function getAndPrintHTMLChunks () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    response.on('data', function(chunk) {
      console.log(chunk.toString(), '\n');
    });
  });
}

getAndPrintHTMLChunks();
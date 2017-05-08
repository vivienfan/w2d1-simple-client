var https = require('https');

module.exports = function getHTML(options, callback) {
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
};
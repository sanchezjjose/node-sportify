var config = require('./config');
var querystring = require('querystring');

var GoogleMaps = {

  get : function(address) {
    var uriEncodedAddress = querystring.escape(address);

    return {
      host: config.GOOGLE_MAPS_API_HOST,
      port: config.GOOGLE_MAPS_API_PORT,
      path: '/maps/api/geocode/json?address=' + uriEncodedAddress + '&key=' + config.GOOGLE_MAPS_SERVER_API_KEY,
      method: 'GET',
      headers: { 
        'Accept': 'application/json',
        'Transfer-Encoding' :'chunked'
      }
    };
  }
};

module.exports = Object.create(GoogleMaps);
 
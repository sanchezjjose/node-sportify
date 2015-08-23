
var config = require('./config');

var sportify = {

  get : function(request) {

    return {
      host: config.SPORTIFY_SERVICE_HOST,
      port: config.SPORTIFY_SERVICE_PORT,
      path: request.originalUrl,
      method: 'GET',
      headers: { 
        'Accept': 'application/json',
        'Transfer-Encoding' :'chunked',
        'Cookie' : request.cookies.PLAY_SPORTIFY_SESSION
      }
    };
  },

  login : function() {

    return {
      host: config.SPORTIFY_SERVICE_HOST,
      port: config.SPORTIFY_SERVICE_PORT,
      path: '/login/submit',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
  },

  signup : function() {

    return {
      host: config.SPORTIFY_SERVICE_HOST,
      port: config.SPORTIFY_SERVICE_PORT,
      path: '/signup/submit',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
  },

  account : function(request) {

    return {
      host: config.SPORTIFY_SERVICE_HOST,
      port: config.SPORTIFY_SERVICE_PORT,
      path: '/account/submit?team_id=' + request.query.team_id,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Transfer-Encoding' :'chunked',
        'Cookie' : request.cookies.PLAY_SPORTIFY_SESSION
      }
    };
  }
};

module.exports = Object.create(sportify);

var config = require('./config');

var Sportify = {

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
  },

  rsvp : function(request, data) {
    
    return {
      host: config.SPORTIFY_SERVICE_HOST,
      port: config.SPORTIFY_SERVICE_PORT,
      path: request.originalUrl,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept' : 'application/json',
        'Transfer-Encoding' :'chunked',
        'Cookie' : request.cookies.PLAY_SPORTIFY_SESSION + 
                   "; rsvp=" + data.rsvp + 
                   "; team_id=" + data.team_id
      }
    };
  }
};

module.exports = Object.create(Sportify);
 
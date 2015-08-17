
var sportify = {

  get : function(request) {

    return {
      host: 'play.sportify.local',
      port: 9000,
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
      host: 'play.sportify.local',
      port: 9000,
      path: '/login/submit',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
  },

  signup : function() {

    return {
      host: 'play.sportify.local',
      port: 9000,
      path: '/signup/submit',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
  },

  account : function(request) {

    return {
      host: 'play.sportify.local',
      port: 9000,
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

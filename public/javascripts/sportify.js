
var sportify = {

  get : function(request) {

    return {
      host: 'localhost',
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
      host: 'localhost',
      port: 9000,
      path: '/login/submit',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
  }
};

module.exports = Object.create(sportify);
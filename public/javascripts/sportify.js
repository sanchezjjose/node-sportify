
var sportify = {

  roster : function(authCookie) {

    return {
      host: 'localhost',
      port: 9000,
      path: '/team/654321/roster', // TODO: team id needs to be configurable
      method: 'GET',
      headers: { 
        'Accept': 'application/json',
        'Transfer-Encoding' :'chunked',
        'Cookie' : authCookie
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
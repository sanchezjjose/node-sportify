var express = require('express');
var router = express.Router();
var http = require('http');
var querystring = require('querystring');

var sportifyClient = require('./sportify.js');
var helper = require('./helper');

router.post('/', helper.isAuthenticated, function(req, res) {
  var data = req.body;

  var postReq = http.request(sportifyClient.gameRsvp(req, data), function(response) {
    var body = '';

    response.on('data', function(chunk) {
      body += chunk.toString();
    });

    response.on('end', function() {
      console.log("Response Body: ");
      console.log(body);
      console.log("Response Headers: ");
      console.log(response.headers);

      // TODO: send back JSON if using AJAX
      res.redirect(response.headers.location);
    });

  }).on('error', function(e) {
    res.send(e.message);
  });

  postReq.write(querystring.stringify(data));
  postReq.end();
})

module.exports = router;

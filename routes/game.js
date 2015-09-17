var express = require('express');
var router = express.Router();
var http = require('http');
var querystring = require('querystring');

var sportifyClient = require('./sportify.js');
var helper = require('./helper');

router.post('/', helper.isAuthenticated, function(req, res) {
  var data = req.body;

  var postReq = http.request(sportifyClient.rsvp(req, data), function(response) {
    var body = '';

    response.on('data', function(chunk) {
      body += chunk.toString();
    });

    response.on('end', function() {

      try {
        var bodyJson = JSON.parse(body);
        res.status(response.statusCode);
        res.render('index', bodyJson);
        
      } catch(e) {
        res.status(404).send('Error occurred.');
      }
    });

  }).on('error', function(e) {
    res.send(e.message);
  });

  postReq.write(querystring.stringify(data));
  postReq.end();
})

module.exports = router;

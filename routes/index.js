var express = require('express');
var router = express.Router();
var http = require('http');
var querystring = require('querystring');

var sportifyClient = require('./sportify.js');
var helper = require('./helper');

router.get('/', helper.isAuthenticated, function(req, res) {

  http.get(sportifyClient.get(req), function(response) {
    var body = '';

    response.on('data', function(chunk) {
      body += chunk.toString();
    });

    response.on('end', function() {
      res.render('index', JSON.parse(body));
    });

  }).on('error', function(e) {
    res.send(e.message);
  });
})

module.exports = router;

var express = require('express');
var router = express.Router();
var http = require('http');
var querystring = require('querystring');

var sportifyClient = require('./sportify.js');
var helper = require('./helper');

router.get('/schedule', helper.isAuthenticated, function(req, res) {

  http.get(sportifyClient.get(req), function(response) {
    var body = '';

    response.on('data', function(chunk) {
      body += chunk.toString();
    });

    response.on('end', function() {

      try {
        var bodyJson = JSON.parse(body);
        req.session.teamId = bodyJson.active_team._id;
        res.render('schedule', bodyJson);
        
      } catch(e) {
        res.status(404).send('Error occurred.');
      }      
    });

  }).on('error', function(e) {
    res.send(e.message);
  });
})

module.exports = router;

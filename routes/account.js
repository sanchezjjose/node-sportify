var express = require('express');
var router = express.Router();
var http = require('http');
var querystring = require('querystring');

var sportifyClient = require('./sportify.js');
var helper = require('./helper');

router.get('/account', helper.isAuthenticated, function(req, res) {

  http.get(sportifyClient.get(req), function(response) {
    var body = '';

    response.on('data', function(chunk) {
      body += chunk.toString();
    });

    response.on('end', function() {

      try {
        var bodyJson = JSON.parse(body);
        req.session.teamId = bodyJson.active_team._id;
        res.render('account', bodyJson);
        
      } catch(e) {
        res.status(404).send('Error occurred.');
      }
    });

  }).on('error', function(e) {
    res.send(e.message);
  });
})

router.post('/account', helper.isAuthenticated, function(req, res) {
  var postData = querystring.stringify(req.body);

  var postReq = http.request(sportifyClient.account(req), function(response) {
    var body = '';

    response.on('data', function(chunk) {
      body += chunk.toString();
    });

    response.on('end', function() {
      res.redirect('/account?team_id=' + req.query.team_id);
    });

  }).on('error', function(e) {
    res.send(e.message);
  });

  postReq.write(postData);
  postReq.end();
})

module.exports = router;

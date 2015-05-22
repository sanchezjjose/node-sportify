var express = require('express');
var router = express.Router();
var http = require('http');
var querystring = require('querystring');

var Sportify = require('../public/javascripts/sportify.js');
var sportify = new Sportify();

var Helper = require('./helper');
var helper = new Helper();

router.get('/roster', helper.isAuthenticated, function(req, res) {
  var authCookie = req.cookies.PLAY_SPORTIFY_SESSION || '';

  http.get(sportify.roster(authCookie), function(response) {
    var body = '';

    response.on('data', function(chunk) {
      body += chunk.toString();
    });

    response.on('end', function() {
      res.redirect('/team/' + req.session.userContext.team_id + '/roster');
    });

  }).on('error', function(e) {
    res.send(e.message);
  });
})

router.get('/team/:id/roster', helper.isAuthenticated, function(req, res, next) {

  var authCookie = req.cookies.PLAY_SPORTIFY_SESSION || '';

  http.get(sportify.roster(authCookie), function(response) {
    var body = '';

    response.on('data', function(chunk) {
      body += chunk.toString();
    });

    response.on('end', function() {
      res.render('roster', JSON.parse(body));
    });

  }).on('error', function(e) {
    res.send(e.message);
  });
})

module.exports = router;

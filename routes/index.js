var express = require('express');
var router = express.Router();
var http = require('http');
var querystring = require('querystring');

var Sportify = require('../public/javascripts/sportify.js');
var sportify = new Sportify();

router.route('/')
  .get(function(req, res) {

    var authCookie = req.session.auth || '';

    http.get(sportify.roster(authCookie), function(response) {
      var body = '';

      response.on('data', function(chunk) {
        body += chunk.toString();
      });

      response.on('end', function() {
        
        if (authCookie) {
          res.render('index', JSON.parse(body));
        } else {
          res.redirect('/login');
        }
      });

    }).on('error', function(e) {
      res.send(e.message);
    });
  })

module.exports = router;

var express = require('express');
var router = express.Router();
var http = require('http');
var https = require('https');
var async = require('async');

var sportifyClient = require('./sportify.js');
var googleMapsClient = require('./google-maps.js');
var helper = require('./helper');

router.get('/', helper.isAuthenticated, function(req, res) {

  async.waterfall([
    requestHomePageData,
    requestLocationCoordinates

  ], renderPage)

  // TODO: move to util
  function request(options, callback) {
    http.get(options, function(response) {
      var body = '';

      response.on('data', function(chunk) {
        body += chunk.toString();
      });

      response.on('end', function() {

        try {
          callback(null, JSON.parse(body));

        } catch(e) {
          res.status(404).send('Error occurred.');
        }
      });
      
    }).on('error', function(e) {
      res.send(e.message);
    });
  }

  // TODO: move to util
  function append(obj1, obj2) {
    var result = {};

    for (var key in obj1) result[key] = obj1[key];
    for (var key in obj2) result[key] = obj2[key];

    return result;
  }

  function requestHomePageData(callback) {
    request(sportifyClient.get(req), callback);
  }

  function requestLocationCoordinates(sportifyResponse, callback) {

    https.get(googleMapsClient.get(sportifyResponse.next_game.address), function(response) {
      var body = '';

      response.on('data', function(chunk) {
        body += chunk.toString();
      });

      response.on('end', function() {

        try {
          callback(null, sportifyResponse, JSON.parse(body));

        } catch(e) {
          res.status(404).send('Error occurred.');
        }
      });

    }).on('error', function(e) {
      res.send(e.message);
    });
  }

  function renderPage(err, sportifyResponse, googleMapsResponse) {
    var response = append(sportifyResponse, googleMapsResponse.results[0].geometry.location);

    if (err) {
      res.status(404).send('Error occurred.');

    } else {
      try {
        req.session.teamId = response.active_team._id;
        res.render('index', response);

      } catch(e) {
        res.status(404).send('Error occurred.');
      }
    }
  }
})

module.exports = router;

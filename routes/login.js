var express = require('express');
var router = express.Router();
var http = require('http');
var querystring = require('querystring');

var sportifyClient = require('../public/javascripts/sportify.js');

router.get('/login', function(req, res) {
  res.render('login', { title: 'Login', layout: 'login_reg' });
})
  
router.post('/login' ,function(req, res) {
  var postData = querystring.stringify(req.body);

  var postReq = http.request(sportifyClient.login(), function(response) {
    var body = '';

    response.on('data', function(chunk) {
      body += chunk.toString();
    });

    response.on('end', function() {
	  	var setCookie = response.headers["set-cookie"];

	  	if (setCookie) {
        res.cookie('PLAY_SPORTIFY_SESSION', setCookie[0], { httpOnly: true });
	      res.redirect('/team/654321');
	      
	    } else {
	      res.render('login', { title: 'Login', layout: 'login_reg' }); // TODO: send error back to client
      }
    });

  }).on('error', function(e) {
    res.send(e.message);
  });

  postReq.write(postData);
  postReq.end();
})

module.exports = router;

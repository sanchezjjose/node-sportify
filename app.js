var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');  // for reading POSTed form data into `req.body`
var cookieParser = require('cookie-parser');

var home = require('./routes/index');
var login = require('./routes/login');
var signup = require('./routes/signup');
var roster = require('./routes/roster');
var schedule = require('./routes/schedule');
var account = require('./routes/account');
var rsvp = require('./routes/rsvp');
var sandbox = require('./routes/sandbox');

var app = module.exports.app = exports.app = express();
var exphbs = require('express-handlebars');

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({ name: 'NODE_SPORTIFY_SESSION', secret: 'houston43', saveUninitialized: true, resave: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

if (app.get('env') === 'development') {
  app.use('/node_modules', express.static(__dirname + '/node_modules'));
}

if (app.get('env') === 'development') {
  app.use(require('connect-livereload')());
}

app.locals.isDev = process.env.NODE_ENV == 'development';

// var helper = require('./routes/helper');
// app.use(helper.getUserContext);

app.get('/', function(req, res) {
  if (req.cookies.PLAY_SPORTIFY_SESSION && req.session.teamId) {
    res.redirect('/team/' + req.session.teamId);

  } else {
    res.redirect('/login');  
  } 
});

app.use('/', login);
app.use('/', signup);
app.use('/', account);
app.use('/', sandbox);
app.use('/team/:id', home);
app.use('/team/:id', roster);
app.use('/team/:id', schedule);
app.use('/rsvp/player/:id/game/:id', rsvp);

// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// ---- error handlers ----- \\


// prints stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

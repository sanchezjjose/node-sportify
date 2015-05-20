var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');  // for reading POSTed form data into `req.body`

var routes = require('./routes/index');
var login = require('./routes/login');

var app = module.exports.app = exports.app = express();
var exphbs = require('express-handlebars');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({ name: 'NODE_SPORTIFY_SESSION',
                  secret: 'houston43', 
                  saveUninitialized: true, 
                  resave: false, 
                  cookie: { maxAge: 1000 * 60 * 60 * 24 }
                  
                  // uses MemoryStore by default which is volatile,
                  // need to persist to a db store in order to keep it alive on restart
                  // store: new RedisStore
                }));

if (app.get('env') === 'development') {
  app.use(require('connect-livereload')());
}

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/login', login);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('server', function() {
  var server = gls('bin/www', {env: {NODE_ENV: 'development'}});
  server.start();
    
  gulp.watch(['public/javascripts/*.js',
  	          'public/images/*',
  	          'public/stylesheets/*.less',
              'routes/*.js',
              'views/*.hbs',
              'views/*/*.hbs',
  	          'app.js'],
  	          server.notify);

  gulp.watch('app.js', server.start);
  gulp.watch('routes/*.js', server.start);
});
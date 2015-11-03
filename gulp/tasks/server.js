var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('server', function() {
  var server = gls('bin/www', { env: { NODE_ENV: 'development' }});
  server.start();
  
  // restart browser when these files change
  gulp.watch(['app.js',
              'routes/*.js',
              'public/javascripts/*.js',
  	          'public/stylesheets/*.less',
              'views/*.hbs',
              'views/*/*.hbs'
              ],
              function (file) {
                server.notify.apply(server, [file]);
              });

  // bundle css on less changes
  gulp.watch("public/stylesheets/*.less", ['less']);

  // bundle js on javascript changes
  gulp.watch("public/javascripts/*.js", ['js']);

  // restart if server side files are changed
  gulp.watch('app.js', function() { server.start() });
  gulp.watch('routes/*.js', function() { server.start() });
});

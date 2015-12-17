var gulp = require('gulp');
var gls = require('gulp-live-server');
var livereload = require('gulp-livereload');

gulp.task('server', function() {
  
  // start livereload server first (port 35729 by default)
  livereload.listen();

  var opts = { env: { NODE_ENV: 'development' }};
  var enableLiveReloadServer = false;
  var server = gls('bin/www', opts, false);
  
  server.start();

  // gulp.watch(['app.js', 'routes/*.js' , 'public/stylesheets/*.less'], function (file) {
  //   server.notify.apply(server, [file]);
  // });
  
  // bundles and reloads browser via pipes
  gulp.watch("public/stylesheets/*.less", ['less']);
  gulp.watch("public/javascripts/*.js", ['js']);
  gulp.watch("views/**/*.hbs", ['html']);

  // restart if server side files are changed
  gulp.watch('app.js', function() { server.start() });
  gulp.watch('routes/*.js', function() { server.start() });
});

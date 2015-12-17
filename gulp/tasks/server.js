var gulp = require('gulp');
var gls = require('gulp-live-server');
var livereload = require('gulp-livereload');

// TODO: look into nodemon as a replacement -- https://www.npmjs.com/package/gulp-nodemon

gulp.task('server', function() {
  
  // start livereload server first (port 35729 by default)
  livereload.listen();

  var opts = { env: { NODE_ENV: 'development' }};
  var enableLiveReloadServer = false;
  var server = gls('bin/www', opts, enableLiveReloadServer);
  
  server.start();
  
  // triggers less bundle and reloads page via pipes
  gulp.watch("public/stylesheets/*.less", ['less']);
  gulp.watch("views/**/*.hbs", ['html']);

  // restart if server side files are changed
  gulp.watch('app.js', function() { server.start() });
  gulp.watch('routes/*.js', function() { server.start() });
});

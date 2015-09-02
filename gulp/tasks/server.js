var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('server', function() {
  var server = gls('bin/www', { env: { NODE_ENV: 'development' } });
  server.start();
    
  gulp.watch(['public/images/*',
              'public/javascripts/*.js',
  	          'public/stylesheets/*.less',
              'routes/*.js',
              'views/*.hbs',
              'views/*/*.hbs',
  	          'app.js'],
  	          server.notify);

  // run the js and less gulp tasks to rebuild bundles
  gulp.watch("public/stylesheets/*.less", ['less']);
  gulp.watch("public/javascripts/*.js", ['js']);

  // restart if server side files are changed
  gulp.watch('app.js', server.start);
  gulp.watch('routes/*.js', server.start);
});
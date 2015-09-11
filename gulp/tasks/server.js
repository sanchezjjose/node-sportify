var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('server', function() {
  var server = gls('bin/www', { env: { NODE_ENV: 'development' }});
  server.start();
  
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

  // run the js and less gulp tasks to rebuild bundles
  gulp.watch("public/stylesheets/*.less", ['less']);
  gulp.watch("public/javascripts/*.js", ['js']);

  // restart if server side files are changed
  gulp.watch('app.js', function() { server.start() });
  gulp.watch('routes/*.js', function() { server.start() });
});

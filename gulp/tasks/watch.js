var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
  
  // start livereload server first (port 35729 by default)
  livereload.listen();
  
  // triggers less bundle and reloads page via pipes
  gulp.watch("public/stylesheets/*.less", ['less']);
  gulp.watch("views/**/*.hbs", ['html']);
});

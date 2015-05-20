var gulp  = require('gulp');

gulp.task('watch', function() {
  gulp.watch("public/stylesheets/*.less", ['less']);
});
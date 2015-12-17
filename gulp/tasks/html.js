var gulp  = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('html', function() {
  return gulp.src('views/**/*.hbs').pipe(livereload());
});

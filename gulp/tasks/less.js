var gulp  = require('gulp');
var less  = require('gulp-less');

var BASE = 'public/stylesheets/style.less';
var DEST_DIR = 'public/build/';

gulp.task('less', function() {
  return gulp.src(BASE)
          .pipe(less())
          .pipe(gulp.dest(DEST_DIR));
});
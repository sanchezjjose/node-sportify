var gulp  = require('gulp');
var less  = require('gulp-less');
var rename = require('gulp-rename');

var BASE = 'public/stylesheets/main.less';
var BASE_MINIFIED = 'bundle.css';
var DEST_DIR = 'public/build/';

gulp.task('less', function() {
  return gulp.src(BASE)
          .pipe(less())
          .pipe(rename(BASE_MINIFIED))
          .pipe(gulp.dest(DEST_DIR));
});

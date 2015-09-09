var gulp  = require('gulp');
var less  = require('gulp-less');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var minifyCSS  = require('gulp-minify-css');

var BASE = 'public/stylesheets/main.less';
var BASE_MINIFIED = 'bundle.css';
var DEST_DIR = 'public/build/';

gulp.task('less', function() {
  return gulp.src(BASE)
          .pipe(plumber(function(err) {
              console.log(err);
              this.emit('end');
            }))
          .pipe(less())
          .pipe(minifyCSS({keepBreaks:true}))
          .pipe(plumber())
          .pipe(rename(BASE_MINIFIED))
          .pipe(plumber())
          .pipe(gulp.dest(DEST_DIR));
});

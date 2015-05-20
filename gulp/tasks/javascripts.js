var gulp  = require('gulp');
var jshint  = require('gulp-jshint');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var BASE = 'public/javascripts/sportify.js';
var BASE_MINIFIED = 'sportify.min.js';
var DEST_DIR = 'public/javascripts/';


gulp.task('uglify-js', function() {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });

  return gulp.src(BASE)
    .pipe(browserified)
    .pipe(uglify())
    .pipe(rename(BASE_MINIFIED))
    .pipe(gulp.dest(DEST_DIR));
});

gulp.task('js', ['uglify-js']);
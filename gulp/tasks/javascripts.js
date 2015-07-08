var gulp  = require('gulp');
var browserify = require('browserify');

var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var rename = require('gulp-rename');
var print = require('gulp-print');

var source = require('vinyl-source-stream');

var BASE = './public/javascripts/main.js';
var BASE_MINIFIED = 'bundle.js';
var DEST_DIR = './public/build/';

gulp.task('uglify-js', function() {
  var bundleStream = browserify(BASE).bundle();

  return bundleStream
    .pipe(source(BASE))
    .pipe(print())
    // .pipe(streamify(uglify())) // getting o is not defined when trying to use 'React'
    .pipe(rename(BASE_MINIFIED))
    .pipe(gulp.dest(DEST_DIR))
    .pipe(print());
});

gulp.task('js', ['uglify-js']);
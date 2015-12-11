var gulp  = require('gulp');
var browserify = require('browserify');

var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var rename = require('gulp-rename');
var print = require('gulp-print');

var source = require('vinyl-source-stream');

var files = [
  './public/javascripts/index.js',
  './public/javascripts/account.js'
];

gulp.task('uglify-js', function() {

  files.map(function(file) {

    return browserify(file).bundle()
      .pipe(source(file))
      .pipe(print())
      .pipe(streamify(uglify()))
      .pipe(rename({
        dirname: './js',
        extname: '.bundle.js'
      }))
      .pipe(gulp.dest('./public/build'))
      .pipe(print());
  });
});

gulp.task('js', ['uglify-js']);

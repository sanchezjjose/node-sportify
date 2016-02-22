var gulp  = require('gulp');
var less  = require('gulp-less');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var minifyCSS  = require('gulp-minify-css');
var livereload = require('gulp-livereload');

var SOURCE_DIR = './public/stylesheets/';
var OUTPUT_DIR = './public/build';
var FILE_NAMES = [
  'account.less',
  'footer.less',
  'home.less',
  'login.less',
  'main.less',
  'nav.less',
  'roster.less',
  'rsvp.less',
  'schedule.less',
  'signup.less'
];

gulp.task('less', function() {
  
  FILE_NAMES.map(function(fileName) {

    return gulp.src(SOURCE_DIR + fileName)
      .pipe(less())
      .pipe(minifyCSS({keepBreaks:true}))
      .pipe(rename({
        dirname: './css',
        extname: '.bundle.css'
      }))
      .pipe(gulp.dest(OUTPUT_DIR))
      .pipe(livereload());
  });
});

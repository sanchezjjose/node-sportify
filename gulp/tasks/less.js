var gulp  = require('gulp');
var less  = require('gulp-less');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var minifyCSS  = require('gulp-minify-css');

var files = [
  'public/stylesheets/account.less',
  'public/stylesheets/footer.less',
  'public/stylesheets/home.less',
  'public/stylesheets/login.less',
  'public/stylesheets/main.less',
  'public/stylesheets/nav.less',
  'public/stylesheets/roster.less',
  'public/stylesheets/rsvp.less',
  'public/stylesheets/schedule.less',
  'public/stylesheets/signup.less'
];

gulp.task('less', function() {
  
  files.map(function(file) {

    return gulp.src(file)
      .pipe(plumber(function(err) {
        console.log(err);
        this.emit('end');
      }))
      .pipe(less())
      .pipe(minifyCSS({keepBreaks:true}))
      .pipe(plumber())
      .pipe(rename({
        dirname: './css',
        extname: '.bundle.css'
      }))
      .pipe(plumber())
      .pipe(gulp.dest('./public/build'));
  });

});

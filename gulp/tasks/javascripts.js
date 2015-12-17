'use strict';

var gulp = require('gulp');  // Base gulp package
var babelify = require('babelify'); // Used to convert ES6 & JSX to ES5
var browserify = require('browserify'); // Providers "require" support, CommonJS
var notify = require('gulp-notify'); // Provides notification to both the console and Growel
var rename = require('gulp-rename'); // Rename sources
var sourcemaps = require('gulp-sourcemaps'); // Provide external sourcemap files
var livereload = require('gulp-livereload'); // Livereload support for the browser
var source = require('vinyl-source-stream'); // Vinyl stream support
var buffer = require('vinyl-buffer'); // Vinyl stream support
var watchify = require('watchify'); // Watchify for source changes
var merge = require('utils-merge'); // Object merge tool
var duration = require('gulp-duration'); // Time aspects of your gulp process
var mapError = require('./log-util');

var SOURCE_DIR = './public/javascripts/';
var OUTPUT_DIR = './public/build/';
var FILE_NAMES = [
  'index.js',
  'account.js'
];

function bundle(bundler, fileName) {
  var bundleTimer = duration('Javascript bundle time');

  bundler
    .bundle()
    .on('error', mapError) // Map error reporting
    .pipe(source(fileName)) // Set source name
    .pipe(buffer()) // Convert to gulp pipeline
    .pipe(rename({
      dirname: './js',
      extname: '.bundle.js'
    }))
    .pipe(sourcemaps.init({loadMaps: true})) // Extract the inline sourcemaps
    .pipe(sourcemaps.write('./map')) // Set folder for sourcemaps to output to
    .pipe(gulp.dest(OUTPUT_DIR))
    .pipe(bundleTimer) // Output time timing of the file creation
    .pipe(livereload()); // Reload the view in the browser
}

gulp.task('bundle', function() {
  var args = merge(watchify.args, { debug: true }); // Merge in default watchify args with browserify arguments

  FILE_NAMES.map(function(fileName) {
    var bundler = browserify(SOURCE_DIR + fileName, args) // Browserify
      .plugin(watchify, { ignoreWatch: ['**/node_modules/**'] }) // Watchify to watch source file changes
      .transform(babelify, { presets: ['es2015', 'react'] }); // Babel tranforms

    bundle(bundler, fileName); // Run the bundle the first time (required for Watchify to kick in)

    bundler.on('update', function() {
      bundle(bundler, fileName); // Re-run bundle on source updates
    });
  });
});

gulp.task('js', ['bundle']);

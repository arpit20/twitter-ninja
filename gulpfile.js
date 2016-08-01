// // Gulp Dependencies
// var gulp = require('gulp');


// // Build Dependencies
// var browserify = require('browserify');
// var babelify = require('babelify');



// Style Dependencies
var sass = require('gulp-sass');


// Development Dependencies
// var jshint = require('gulp-jshint');
// var transform = require('vinyl-transform');
// var source = require('vinyl-source-stream');

// gulp.task('build', function () {
//   return browserify({
//     entries: './client.js',
//     extensions: ['.js'],
//     debug: true
//   })
//   .transform("babelify", {presets: ["es2015", "react"]})
//   .bundle()
//   .pipe(source('bundle.js'))
//   .pipe(gulp.dest('./public/js'));
// });





 
const PATH = require('path');

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./tools/build', {recurse: false});

gulp.task('build-css', function() {
  return gulp.src('sass/main.scss')
    .pipe(sass({
     "indentedSyntax": true,
        "includePaths": [
          "./node_modules/bootstrap-sass/assets/stylesheets"
        ]  
    }).on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['build:watch:scss', 'build:watch:app', 'lint:watch:app', 'server']);
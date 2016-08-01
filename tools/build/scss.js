const PATH = require('path');

const gulp = require('gulp');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemap = require('gulp-sourcemaps');

const ROOT = '../../';

const SCSS_SRC_FOLDER = PATH.resolve(__dirname, ROOT, 'sass/');
const SCSS_SRC_FILES = PATH.resolve(__dirname, ROOT, SCSS_SRC_FOLDER, '**/*.scss');
const SCSS_SRC_FILE = PATH.resolve(__dirname, ROOT, SCSS_SRC_FOLDER, 'main.scss');
const SCSS_BUILD_FOLDER = PATH.resolve(__dirname, ROOT, '/public/css/');
const SCSS_BOOTSTRAP_FOLDER = PATH.resolve(__dirname, ROOT, '/node_modules/bootstrap-sass/assets/stylesheets/');

gulp.task('build:scss', function () {
	console.log(SCSS_SRC_FILE);
    return gulp.src(SCSS_SRC_FILE)
        .pipe(changed(SCSS_BUILD_FOLDER, {extension: '.scss'}))
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass({outputStyle: 'expanded',
        	"indentedSyntax": true,
        	"includePaths": [
         	SCSS_BOOTSTRAP_FOLDER
        ]}).on('error', sass.logError))
        .pipe(autoprefixer())        
        .pipe(sourcemap.write())
        .pipe(gulp.dest(SCSS_BUILD_FOLDER));
});

gulp.task('build:css', function() {
  return gulp.src('sass/main.scss')
    .pipe(sass({
     "indentedSyntax": true,
        "includePaths": [
          "./node_modules/bootstrap-sass/assets/stylesheets"
        ]  
    }).on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('build:watch:scss', ['build:css'], function() {
    gulp.watch(SCSS_SRC_FILES, ['build:css']);
});

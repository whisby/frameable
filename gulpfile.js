
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var stripCSSComments = require('gulp-strip-css-comments');
var cleanCSS = require("gulp-clean-css");
var rename = require('gulp-rename');
var util = require("gulp-util");

// gulp.task('sass:default', function(){
// gulp.src('./src/sass/themes/default.scss')
// .pipe(sourcemaps.init())
// .pipe(sass())
// .pipe(rename('test.css'))
// .pipe(sourcemaps.write())
// .pipe(gulp.dest('./src'));
// });


gulp.task('sass', function () {
  gulp.src('./src/sass/themes/**.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 


gulp.task('default', ['sass'], function() {
    gulp.watch('*.scss', ['sass']);
});
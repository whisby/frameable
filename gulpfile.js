
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var stripCSSComments = require('gulp-strip-css-comments');
var cleanCSS = require("gulp-clean-css");
var rename = require('gulp-rename');
var util = require("gulp-util");

gulp.task('sass:default', function(){
gulp.src('./src/sass/themes/**.scss')
.pipe(sourcemaps.init())
.pipe(sass())
.pipe(rename('styles.css'))
.pipe(sourcemaps.write())
.pipe(gulp.dest('./src'));
});
<<<<<<< HEAD

=======
>>>>>>> b0b1e08953fe49e3c8fca4124d977b97c9e5ef29

gulp.task('default', ['sass:default'], function() {
    gulp.watch('./src/sass/**/*.scss', ['sass:default']);
});
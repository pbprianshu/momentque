var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
gulp.task('default', function(){
  console.log("Gulp is running correctly");
})
gulp.task('minify-css', function(){
  return gulp.src('./stylesheets/styles.css')
  .pipe(minifycss())
  .pipe(gulp.dest('minify'))
})
gulp.task('uglify',function(){
   gulp.src('./javascripts/carousel-profile.js')
  .pipe(uglify())
  .pipe(gulp.dest('minify'))
})

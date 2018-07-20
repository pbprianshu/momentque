var gulp = require('gulp');
var minifycss = require('gulp-css');
var uglify = require('gulp-uglify');
var concat =  require('gulp-concat');
var minifyhtml = require('gulp-minify-html');
gulp.task('default', function(){
  console.log("Gulp is running correctly");
})
gulp.task('concat',function(){
   gulp.src(['./stylesheets/bootstrap.min.css',
             './stylesheets/slick.css',
              './stylesheets/slick-theme.css',
              './stylesheets/aos.css',
              './stylesheets/styles.css'
              ])
  .pipe(concat('app.css'))
  .pipe(gulp.dest('minify'))
})
gulp.task('minify',function(){
  gulp.src('./minify/app.css')
  .pipe(minifycss())
  .pipe(gulp.dest('stylesheets'))
})
gulp.task('uglify',function(){
   gulp.src(['./javascripts/jquery-3.3.1.min.js',
          './javascripts/bootstrap.min.js',
           './javascripts/slick.js',
            './javascripts/snap.svg-min.js',
            './javascripts/aos.js',
             './javascripts/carousel-profile.js'
              ])
             .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('javascripts'))
})
gulp.task('minifyhtml', function(){
  gulp.src('./momentque.html')
  .pipe(minifyhtml())
  .pipe(gulp.dest('momentque'))
})

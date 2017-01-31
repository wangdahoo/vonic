var gulp = require('gulp');
var clean = require('gulp-clean');
var replace = require('gulp-replace');

gulp.task('doc:clean', function () {
  return gulp.src('./docs').pipe(clean())
});

gulp.task('doc:index', ['doc:clean'], function () {
  return gulp.src('./index.html')
    .pipe(replace('/dist/build.js', 'build.js'))
    .pipe(gulp.dest('./docs'))
});

gulp.task('doc', ['doc:index'], function () {
  return gulp.src([
    'ionic/**'
  ])
    .pipe(gulp.dest('./docs/ionic'))
});

gulp.task('publish:clean', function () {
    return gulp.src('./dist').pipe(clean())
})

gulp.task('publish', ['publish:clean'], function () {
  return gulp.src([
    'ionic/**'
  ])
    .pipe(gulp.dest('./dist/ionic'))
});

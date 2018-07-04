const gulp       = require('gulp');
const babel      = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
// const concat     = require('gulp-concat');
const concat     = require('gulp-concat-sourcemap');

gulp.task('build-concat', () =>
  gulp.src('src/**/*.js')
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(concat('all.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('dist-concat')));

gulp.task('build', () =>
  gulp.src('src/**/*js')
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist')));

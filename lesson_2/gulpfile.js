var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');

gulp.task('connect', function() {
  connect.server({ root: 'dist', livereload: true });
});

watch('dist/*.html', function() {
  gulp.src('dist/*.html')
    .pipe(connect.reload());
});

// Дефолтная таска, которая выполняется по умолчанию
gulp.task('default', ['connect']);

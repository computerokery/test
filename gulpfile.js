var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var path = require('path');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');


gulp.task('jade', function() {
    gulp.src('src/templates/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('build/'))
	.pipe(livereload())
});

gulp.task('less', function() {
    gulp.src('src/less/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less')]
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css'))
	.pipe(livereload())
});

gulp.task('watch', function() {
    gulp.watch('src/less/**/*.less', ['less']);
    gulp.watch('src/templates/**/*.jade', ['jade']);
});

gulp.task('default', ['watch']);
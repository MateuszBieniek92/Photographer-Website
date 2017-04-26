var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var js = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('hint', function () {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});

gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sass({
            outputStyle: 'compressed',
            sourceComments: 'map'
        }))
        .pipe(gulp.dest('css'))
});
    ///
//    gulp.task('js', function () {
//    return gulp.src('js/*.js')
//        .pipe(sass({
//            outputStyle: 'compressed',
//            sourceComments: 'map'
//        }))
//        .pipe(gulp.dest('js2'))
//});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass']);
});
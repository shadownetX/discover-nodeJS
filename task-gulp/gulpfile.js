const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('Hello', function () {
    console.log('Hello Gulp');
});

gulp.task('styles', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('sass-watcher', function () {
    gulp.watch('sass/**/*.scss', ['styles']);
});

gulp.task('js', function () {
    gulp.src('./src/**/*.js')
        .pipe(concat('ipssi.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js'));
});

gulp.task('js-watcher', function () {
    gulp.watch('./src/**/*.js', ['js']);
});

gulp.task('dev', ['sass-watcher', 'js-watcher']);

gulp.task('default', ['styles', 'js']);
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('Hello', function () {
    console.log('Hello Gulp');
});

gulp.task('styles', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('sass-watcher',function(){
    gulp.watch('sass/**/*.scss',['styles']);
});
'use strict';
var gulp = require('gulp')
var jade = require('gulp-jade');
var sass = require('gulp-sass');

// html in source compile to public
gulp.task('copyHTML', function() {
    return gulp.src('./source/**/*.html')
        .pipe(gulp.dest('./public'))
});


gulp.task('jade', function() {

    gulp.src('./source/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./public/'))
});


sass.compiler = require('node-sass');

gulp.task('sass', function() {
    return gulp.src('./source/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
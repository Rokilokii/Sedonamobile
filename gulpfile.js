'use strict';
var gulp = require('gulp');
var connect = require('gulp-connect');
const sass = require('gulp-sass')(require('sass'));
sass.compiler = require('node-sass');
gulp.task('sass', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style/'));
});
gulp.task('connect', function() {
    connect.server();
});
gulp.task('default', ['connect', 'sass']);
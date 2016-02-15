var browserify = require('browserify');
var connect = require('gulp-connect');
var flatten = require('gulp-flatten');
var gulp = require('gulp');
var gutil = require('gulp-util');
var jade = require('gulp-jade');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');

gulp.task('index', function(){
    return gulp.src('./public/index.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
    });

gulp.task('html', ['index'], function(){
    return gulp.src(['./public/**/*.jade', '!./public/index.jade'])
        .pipe(jade({pretty:true}))
        .pipe(flatten())
        .pipe(gulp.dest('./dist/views'))
        .pipe(connect.reload());
    });


var bootstrap = require('bootstrap-styl');

gulp.task('css', function(){
    return gulp.src('./public/**/*.styl')
        .pipe(stylus({
            'use': bootstrap(),
            'include css': true
        }))
        .pipe(flatten())
        .pipe(gulp.dest('./dist/styles'));
    });

gulp.task('bundle-vendors',function(){
    return browserify('./public/core-dependencies.js',
        {debug:false,transform:['debowerify','uglifyify']})
        .bundle()
        .pipe(source('vendors.js'))
        .pipe(gulp.dest('./dist/scripts'))
        .pipe(connect.reload());
});

gulp.task('javascript', function(){
    var bundleStream = browserify('./public/app.js')
    .bundle()
     
    bundleStream
    .pipe(source('app.js'))
    .pipe(streamify(uglify()))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./dist/scripts'))
    });

gulp.task('serve', function(){
    connect.server({
        root: './dist',
        livereload: true,
        port: 8080
        })
    });

gulp.task('watch', function(){
    gulp.watch('./app/**/*.jade', ['html']);
    gulp.watch('./public/**/*.jade', ['html']);
    gulp.watch('./public/**/*.styl', ['css']);
    gulp.watch('./app/**/*.js', ['javascript']);
    gulp.watch('./public/**/*.js', ['javascript']);
    });

gulp.task('default',['html','css','bundle-vendors','javascript','serve','watch']);

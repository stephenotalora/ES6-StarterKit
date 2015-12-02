/**
 * Created by jono on 2015-11-06.
 */
// bring gulp
var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    tape = require('gulp-tape'),
    tapColorize = require('tap-colorize'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver');

// define some target paths
var path = {
    app: './',
    src: {
        js: 'src/**/*.js'
    },
    dist: {
        js: 'dist/'
    },
    build: {
        js: 'build/'
    }
};

// task for unit testing
gulp.task('test', function() {
   return gulp.src(path.dist.js + 'test/*.js')
       .pipe(tape({
          reporter: tapColorize()
       }));
});

// task for transpiling form ES6 into ES5
gulp.task('trans', function() {
    gulp.src(path.src.js)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dist.js));
});

// task to make a build
gulp.task('build', function(){
    var target = path.dist.js;
    return browserify([
        target + 'configs/apiUrls.js',
        target + 'app/service/read.js',
        target + 'app/controller/app.js',
        target + 'app/model/Content.js'
    ])
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(path.build.js));
});

// task to serve the page
gulp.task('serve', function(){
   gulp.src(path.app)
    .pipe(webserver({
        port: 8080,
        proxies: {source: '/', options: {headers:{'Origin':'*'}}},
        fallback: 'templates/index.html',
        open: true,
    }));
});

gulp.task('default', ['test', 'trans','build', 'serve']);

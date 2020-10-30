const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const source = 'app/assets/';

function server() {
    browserSync.init({
        server: "app/",
        host:"winlocal",
        port: 57001,
        logPrefix: "Sß.ŞEN"
    });
    watcher()
}

function reload() {
    browserSync.reload();
}


function styles() {
    return src(source + 'scss/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    //.pipe(minifyCSS())
    .pipe(autoprefixer())
    //.pipe(rename({suffix: '.min'}))
    .pipe(dest(source + 'css'))
}

const scripts = () => {
    return src([
        source + 'js/main.js',
        source + 'js/home.js',
        source + 'js/account.js'
    ])
    .pipe(plumber())
    .pipe(babel({
        presets: [
            ['@babel/env', {
                modules: false
            }]
        ]
    }))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest(source + 'js'))
}

function watcher(){
    watch([
        source + 'cdn/scss/*.scss', 
        source + 'cdn/css/*.css', 
        source + 'scss/*.scss'
    ], styles);
    watch([
        source + 'js/main.js',
        source + 'js/home.js',
        source + 'js/account.js'
    ], scripts);
    watch(['app/*.html'], reload);
}

exports.scripts = scripts;
exports.styles = styles;
exports.server = server;

exports.default = parallel( styles, scripts, server);
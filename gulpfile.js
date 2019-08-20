const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

function style(){
    return gulp.src('./src/Static/Styles/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError)) //compile into standard css
    .pipe(minifyCSS()) //Minify
    .pipe(rename({ suffix: '.min'})) //Prefix with .min
    .pipe(gulp.dest('./src/Static/Styles/css')); //Output to Output.destination
}

function watch(){
    gulp.watch('./src/Static/Styles/scss/**/*.scss', style)
}


exports.style = style;
exports.watch = watch;
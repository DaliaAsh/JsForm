const gulp = require('gulp'); 
const {src , series , parallel , dest , watch} = require('gulp'); 
const jsPath = 'src/Scripts/**/*.js';
const cssPath = 'src/Styles/**/*.css';
const terser = require('gulp-terser'); 
const concat = require('gulp-concat'); 
const sourcemaps = require('gulp-sourcemaps'); 
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
function copyHTML(){

    return src('src/*.html').pipe(gulp.dest('dist')); 
}

function jsTask(){
    return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/js'));

}

function cssTask() {
    return src(cssPath)
      .pipe(sourcemaps.init())
      .pipe(concat('style.css'))
      .pipe(postcss([autoprefixer(), cssnano()])) //not all plugins work with postcss only the ones mentioned in their documentation
      .pipe(sourcemaps.write('.'))
      .pipe(dest('dist/assets/css'));
  }

  
function watchTask() {
    watch([cssPath, jsPath], { interval: 1000 }, parallel(cssTask, jsTask));
  }
  

  exports.default = series(parallel(copyHTML,jsTask, cssTask),watchTask);
// ------------------------ Packages -------------------------//
// const gulp = require('gulp')
const { src, dest, task, watch, series, parallel } = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const del = require('del')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')

const browserSync = require('browser-sync').create()

var config = require('./lib/config')
var { selectedBrand, selectedJob } = config

const jsFILES = ['script.js']

// ------------------------ Gulp Tasks -----------------------//
function css (done) {
  src(selectedBrand + selectedJob + config.scss.src)
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    })).on('error', console.error.bind(console))
    .pipe(dest(selectedBrand + selectedJob + config.folder.destCss))
    .pipe(browserSync.stream())
  done()
}

function html (done) {
  src(selectedBrand + selectedJob + config.pug.src)
    .pipe(pug())
    .pipe(dest(selectedBrand + selectedJob + config.folder.dest))
    .pipe(browserSync.stream())
  done()
}

function js (done) {
  // src(selectedBrand + selectedJob + config.js.src)
  // .pipe(dest(selectedBrand + selectedJob + config.folder.destJs))
  jsFILES.map(function (entry) {
    return browserify({
      entries: [selectedBrand + selectedJob + config.folder.srcJs + entry]
    })
      .transform(babelify, { presets: ['@babel/preset-env'] })
      .bundle()
      .pipe(source(entry))
      .pipe(rename({ extname: '.min.js' }))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(dest(selectedBrand + selectedJob + config.folder.destJs))
  })
  done()
}

function cleanDist (done) {
  del(selectedBrand + selectedJob + config.folder.dest)
  done()
}

function browserSyncT () {
  browserSync.init({
    injectChanges: true,
    server: {
      baseDir: config.mwBaseDir + config.selectedJob + config.folder.dest
    },
    directory: true
  })
}

function browserReload (done) {
  browserSync.reload()
  done()
}

function browserStream (done) {
  browserSync.stream()
  done()
}

function watchFiles () {
  // browserSync.init({
  //   server: {
  //     baseDir: config.mwBaseDir + config.selectedJob + config.folder.dest + 'index.html'
  //   }
  // })
  watch(selectedBrand + selectedJob + config.scss.src, series(css, browserStream))
  watch(selectedBrand + selectedJob + config.pug.src, series(html, browserReload))
  watch(selectedBrand + selectedJob + config.js.src, series(js, browserReload))
}

function defaultTask (done) {
  // default stuff
  done()
}

task('css', css)
task('html', html)
task('js', js)
task('clean', cleanDist)
task('watchFiles', parallel(browserSyncT, watchFiles))
task('browserReload', browserReload)
task('browserStream', browserStream)
task('default', defaultTask)

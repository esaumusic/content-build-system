// const gulp = require('gulp')
// const sass = require('gulp-sass')
// const browserSync = require('browser-sync').create()
// var config = require('./config')
// var { selectedBrand, selectedJob } = config


// function compileSass (done) {
//   gulp.src(selectedBrand + selectedJob + config.scss.src)
//     .pipe(sass({errorLogToConsole: true})).on('error', console.error.bind(console))
//     .pipe(gulp.dest(selectedBrand + selectedJob + config.folder.destCss))
//     .pipe(browserSync.stream())
//     done()
// }

// // gulp.task('compileSass',compileSass)

// exports.compileSass = compileSass

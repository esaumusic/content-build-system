const pug = require('gulp-pug')
const browserSync = require('browser-sync').create()
var config = require('./config')
var { selectedBrand, selectedJob } = config

module.exports = function(gulp, plugins) {
  return function () {
    var stream =
    // -------------------------------------------- Start Task
    gulp.src(selectedBrand + selectedJob + config.pug.src)
      .pipe(pug())
      .on('error', function(err) {
        process.stderr.write(err.message + '\n');
        this.emit('end');
      })
      .pipe(gulp.dest(selectedBrand + selectedJob + config.folder.dest))
      .pipe(browserSync.stream())
    // ---------------------------------------------- End Task
    return stream
  }
}

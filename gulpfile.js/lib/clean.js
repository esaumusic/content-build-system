const del = require('del')
var config = require('./config')
var { selectedBrand, selectedJob } = config

module.exports = function(gulp, plugins) {
  return function (cb) {
    var stream =
    // -------------------------------------------- Start Task
    // del(config.clean.folders, cb);
    del(selectedBrand + selectedJob + config.folder.dest, cb);
    // ---------------------------------------------- End Task
    return stream
  }
}


module.exports = {
  mwBaseDir: './_mw',
  moBaseDir: './_mo',
  jaBaseDir: './_ja',
  folder: {
    src: '/src/',
    srcScss: '/src/scss/',
    srcJs: '/src/js/',
    dest: '/dist/',
    destCss: '/dist/css/',
    destJs: '/dist/js/'
  },
  scss: {
    src: '/src/scss/*.scss',
    dest: '/dist/css/*.css'
  },
  pug: {
    src: '/src/*.pug',
    dest: '/dist/*.html'
  },
  js: {
    src: '/src/js/*.js',
    dest: '/dist/*.js',
    file: '/src/js/script.js'
  },
  selectedBrand: './_mw',
  selectedJob: '/mw-test-job'
}

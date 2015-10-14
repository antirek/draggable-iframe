fs = require 'fs'
gulp = require 'gulp'
gutil = require 'gulp-util'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'
replace = require 'gulp-token-replace'


gulp.task 'default', ()->
  html = fs.readFileSync './html/main.html', 'utf8'
  css = fs.readFileSync './css/main.css', 'utf8'
  gulp.src ['bower_components/fetch/fetch.js', 'js/helper.js', 'js/main.js']
  .pipe replace
    global:
      html: html.replace /\n/g, ' '
      css: css.replace /\n/g, ' '
  .pipe concat 'dist/miniButton.js'
  .pipe gulp.dest './'

gulp.task 'watch', ()->
  gulp.watch ['js/*.js', 'css/*.css', 'html/*.html'], ['default']
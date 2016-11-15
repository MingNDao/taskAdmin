var gulp = require("gulp"),
    fs = require("fs"),
    browserify = require("browserify"),
    babelify = require("babelify"),
    vueify = require("vueify");

gulp.task('vue',() => {
    browserify('./html/vue/index.js')
      .transform(vueify)
      .transform(babelify)
      .bundle()
      .pipe(fs.createWriteStream('./html/dist/index.js'))
})
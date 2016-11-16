var gulp = require("gulp"),
    fs = require("fs"),
    browserify = require("browserify"),
    babelify = require("babelify"),
    sass = require("gulp-sass"),
    vueify = require("vueify");

gulp.task('vue',() => {
    browserify('./html/vue/index.js')
      .transform(vueify)
      .transform(babelify)
      .bundle()
      .pipe(fs.createWriteStream('./html/dist/index.js'))
})
gulp.task('scss',() => {
    gulp.src(['./html/dist/scss/!(_)*.scss'])
      .pipe(sass({outputStyle: 'expandes'}))
      .pipe(gulp.dest("./html/dist/css"))
})
gulp.task('default',() => {
    gulp.watch(['./html/vue/**/*.*'],['vue'])
    gulp.watch(['./html/dist/scss/*.scss'],["scss"])
})
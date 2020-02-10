const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");

function compileSass(cb) {
  gulp
    .src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      autoprefixer({ overrideBrowserlist: ["last 2 versions"], cascade: false })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./css"));
  cb();
}
function watcher(cb) {
  gulp.watch("./scss/**/*.scss", gulp.series(compileSass));
  cb();
}

exports.default = gulp.parallel(compileSass, watcher);

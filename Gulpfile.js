var gulp = require('gulp')
var gulpSass = require('gulp-sass')
var gulpShell = require('gulp-shell')
var gulpTypeScript = require('gulp-typescript')
var gulpSourcemaps = require('gulp-sourcemaps')

gulp.task('build:styles',
  () => gulp.src('source/styles/main.sass').pipe(
    gulpSourcemaps.init()
  ).pipe(
    gulpSass(
      {
        outputStyle: 'compressed'
      }
    ).on('error', gulpSass.logError)
  ).pipe(
    gulpSourcemaps.write('.')
  ).pipe(
    gulp.dest('static/styles/')
  )
)

gulp.task('build:scripts',
  () => gulp.src('source/scripts/*.ts').pipe(
    gulpSourcemaps.init()
  ).pipe(
    gulpTypeScript(
      {
        noImplicitAny: true,
        out: 'main.js'
      }
    )
  ).js.pipe(
    gulpSourcemaps.write()
  ).pipe(
    gulp.dest('static/scripts/')
  )
)

gulp.task('build:cookies',
  gulpShell.task('ckies --silent --flat --language en --output ./content/cookies --format markdown')
)

gulp.task('build:hugo',
  gulpShell.task('hugo --destination dist --quiet')
)

gulp.task('build',
  [
    'build:styles',
    'build:scripts',
    'build:cookies',
    'build:hugo'
  ]
)

gulp.task('default',
  [
    'build'
  ]
)

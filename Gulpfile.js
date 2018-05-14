var gulp = require('gulp')
var gulpSass = require('gulp-sass')
var gulpShell = require('gulp-shell')
var gulpSequence = require('gulp-sequence')
var gulpTypeScript = require('gulp-typescript')
var gulpSourcemaps = require('gulp-sourcemaps')


gulp.task('styles:build',
  () => gulp.src('source/styles/main.sass').pipe(
    gulpSourcemaps.init()
  ).pipe(
    gulpSass(
      { outputStyle: 'compressed' }
    ).on('error', gulpSass.logError)
  ).pipe(
    gulpSourcemaps.write('.')
  ).pipe(
    gulp.dest('static/styles/')
  )
)

gulp.task('styles:watch',
  () => gulp.watch(['source/styles/**/*.sass'], ['styles:build'])
)

gulp.task('scripts:build',
  gulpShell.task('webpack --silent')
)

gulp.task('scripts:watch',
  () => gulp.watch(['source/scripts/*.ts'], ['scripts:build'])
)

gulp.task('cookies:build',
  gulpShell.task('ckies --silent --flat --language en --output content/cookies --format markdown')
)

gulp.task('cookies:watch',
  () => gulp.watch(['cookies.yml'], ['cookies:build'])
)

gulp.task('hugo:build',
  gulpShell.task('hugo --destination dist --quiet')
)

gulp.task('hugo:serve',
  gulpShell.task('hugo serve')
)

gulp.task('library:copy',
  gulpShell.task('cp node_modules/@ckies/library/dist/ckies.min.js static')
)

gulp.task('clean',
  gulpShell.task('rm -rf dist; mkdir -p dist')
)

gulp.task('assets:build',
  gulpSequence(
    'clean',
    'styles:build',
    'scripts:build',
    'cookies:build',
    'library:copy'
  )
)

gulp.task('serve',
  [
    'hugo:serve',
    'styles:watch',
    'scripts:watch',
    'cookies:watch'
  ]
)

gulp.task('start', gulpSequence('assets:build', 'serve'))
gulp.task('build', gulpSequence('assets:build', 'hugo:build'))

gulp.task('default', ['build'])

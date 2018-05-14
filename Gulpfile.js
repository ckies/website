var gulp = require('gulp')
var gulpSass = require('gulp-sass')
var gulpShell = require('gulp-shell')
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
  gulpShell.task('ckies --silent --flat --language en --output content/cookies --format markdown; ls -ahl content/cookies')
)

gulp.task('cookies:watch',
  () => gulp.watch(['cookies.yml'], ['cookies:build'])
)

gulp.task('hugo:build',
  gulpShell.task('hugo --destination dist --quiet; ls -ahl dist/cookies; ls -ahl dist/cookies/policy;')
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

gulp.task('serve',
  [
    'styles:build',
    'scripts:build',
    'cookies:build',
    'library:copy',
    'hugo:serve',
    'styles:watch',
    'scripts:watch',
    'cookies:watch'
  ]
)

gulp.task('build',
  [
    'clean',
    'styles:build',
    'scripts:build',
    'cookies:build',
    'library:copy',
    'hugo:build'
  ]
)

gulp.task('default', ['build'])

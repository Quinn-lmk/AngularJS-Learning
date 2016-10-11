var gulp = require('gulp');
var browserSync = require('browser-sync'); 
var reload = browserSync.reload;

gulp.task('s', function() {
  browserSync.init({
      port: 9000,
      server: {
        baseDir: ['app'],
        routes: {
          '/bower_components': 'bower_components'
        }
      }
  });
  gulp.watch([
    'app/**/*'
  ]).on('change', reload);
});

gulp.task('default',['s']);

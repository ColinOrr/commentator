var gulp   = require('gulp'),
    shell  = require('gulp-shell'),
    react  = require('gulp-react'),
    concat = require('gulp-concat'),
    http   = require('http'),
    server = require('./server');

var httpServer;

// Builds the client side JavaScript and CSS
gulp.task('build', function() {
  return gulp.src(['client/scripts/**/!(commentator)*.jsx', 'client/scripts/**/commentator.jsx'])
    .pipe(react())
    .pipe(concat('commentator.js'))
    .pipe(gulp.dest('client'));
});

// Starts the web server, or restarts it if it's already running
gulp.task('start', function() {
  if (httpServer) httpServer.close();
  httpServer = http.createServer(server.callback());
  httpServer.listen(3000);
  console.log('Listening on localhost:3000');
});

// Runs all of the tests
gulp.task('test', shell.task([
  'npm test'
]));

// Runs the current test (annotated as @current)
gulp.task('current', shell.task([
  'node_modules/cucumber/bin/cucumber.js --tags=@current'
]));

// Seeds the data folder with sample data
gulp.task('seed', shell.task([
  'node_modules/cucumber/bin/cucumber.js --tags=@seed'
]));

// Starts the web server and watches for changes
gulp.task('default', ['build', 'start'], function() {
  gulp.watch('client/**/*.jsx', ['build']);
  gulp.watch('server/**/*.js', ['start']);
});

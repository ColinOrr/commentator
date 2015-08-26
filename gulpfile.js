var gulp   = require('gulp'),
    shell  = require('gulp-shell'),
    http   = require('http'),
    server = require('./server');

var httpServer;

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
gulp.task('default', ['start'], function() {
  gulp.watch('server/**/*.js', ['start']);
});

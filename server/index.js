var koa  = require('koa'),
    path = require('path'),
    fs   = require('./fs'),
    fm   = require('front-matter');

var app = koa();

app.use(function *(){
  var folder = path.join('data', this.request.url);
  var files  = yield fs.readdir(folder);

  var comments = [];
  for(var i = 0; i < files.length; i++) {
    var file = path.join(folder, files[i]);
    var text = yield fs.readFile(file, 'UTF-8');

    var comment = fm(text);
    comments.push(comment);
  }

  this.body = comments;
});

module.exports = app;

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
    var file     = path.join(folder, files[i]);
    var markdown = yield fs.readFile(file, 'UTF-8');

    var comment = parse(file, markdown);
    comments.push(comment);
  }

  this.body = comments;
});

function parse(file, markdown) {
  var comment = fm(markdown);

  var pattern = /(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) (.+)\.md/
  var parts   = pattern.exec(file);
  comment.attributes.posted = parts[1];
  comment.attributes.email  = parts[2];

  return comment;
}

module.exports = app;

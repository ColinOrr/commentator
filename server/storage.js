var path = require('path'),
    fs   = require('./utilities/fs'),
    fm   = require('front-matter');

module.exports.get = function *get(next) {
  var folder = path.join('data', this.request.url);
  var exists = fs.exists(folder + '/');
  if (!exists) return yield next;

  var files  = yield fs.readdir(folder);
  var comments = [];
  for (var i = 0; i < files.length; i++) {
    var file     = path.join(folder, files[i]);
    var markdown = yield fs.readFile(file, 'UTF-8');

    var comment = parse(file, markdown);
    if (comment) comments.push(comment);
  }

  this.body = comments;
};

//
// Helpers

function parse(file, markdown) {
  var comment = fm(markdown);

  var pattern = /(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) (.+)\.md/
  var parts   = pattern.exec(file);
  if (!parts) return null;

  comment.attributes.posted = parts[1];
  comment.attributes.email  = parts[2];

  return comment;
}

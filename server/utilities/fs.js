var fs = require('fs'),
    q  = require('q');

module.exports.readdir  = q.denodeify(fs.readdir);
module.exports.readFile = q.denodeify(fs.readFile);
module.exports.exists   = fs.existsSync;

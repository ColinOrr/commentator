var fs     = require('fs'),
    path   = require('path'),
    rimraf = require('rimraf'),
    mkdirp = require('mkdirp');

module.exports = function(){

  //
  //  Given Steps

  this.Given(/^the following file in "([^"]*)":$/, function (file, content, callback) {
    mkdirp(path.dirname(file), function (error) {
      if(error) throw error;
      fs.writeFile(file, content, callback);
    });
  });

  this.Given(/^the following files:$/, function (table, callback) {
    var files = table.hashes();
    var processed = 0;
    files.forEach(function (file) {
      mkdirp(path.dirname(file.Path), function (error) {
        if(error) throw error;
        fs.writeFile(file.Path, file.Content, function (error) {
          if(error) throw error;
          if(++processed == files.length) callback();
        });
      });
    });
  });

  //
  //  Hooks

  this.Before(function(callback){
    rimraf('data', callback);
  });

};

var fs     = require('fs'),
    path   = require('path'),
    rimraf = require('rimraf'),
    mkdirp = require('mkdirp');

module.exports = function(){

  //
  //  Given Steps

  this.Given(/^the following file in "([^"]*)":$/, function (file, content, callback) {
    mkdirp(path.dirname(file), function(error){
      if(error) throw error;
      fs.writeFile(file, content, callback);
    });
  });

  //
  //  Hooks

  this.Before(function(callback){
    rimraf('data', callback);
  });

};

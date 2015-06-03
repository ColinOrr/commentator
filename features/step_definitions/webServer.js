var http   = require('http'),
    server = require('../../server');

module.exports = function(){

  var httpServer = null;

  //
  //  Hooks

  this.Before(function(callback){
    httpServer = http.createServer(server.callback());
    httpServer.listen(3000);
    callback();
  });

  this.After(function(callback){
    httpServer.close();
    callback();
  });

};

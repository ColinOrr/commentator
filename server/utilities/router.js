var fs = require('./fs');

module.exports = function (type, target) {
  return function *route(next) {
    var method = this.method.toLowerCase();

    // Route to target.get, target.post, target.put etc...
    if (target.hasOwnProperty(method) && this.accepts(type)) {
      return yield target[method].call(this, next);
    }

    return yield next;
  };
};

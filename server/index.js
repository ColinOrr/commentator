var koa     = require('koa'),
    storage = require('./storage');

var app = koa();
app.use(storage);

module.exports = app;

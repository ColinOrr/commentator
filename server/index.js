var koa     = require('koa'),
    serve   = require('koa-static'),
    storage = require('./storage');

var app = koa();
app.use(serve('client', { index: 'commentator.js' }));
app.use(storage);

module.exports = app;

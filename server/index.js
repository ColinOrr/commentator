var koa     = require('koa'),
    serve   = require('koa-static'),
    route   = require('./utilities/router'),
    storage = require('./storage');

var app = koa();

// Static files
app.use(serve('client', { index: 'commentator.js' }));

// Web service
app.use(route('application/json', storage));

module.exports = app;

'use strict'

const Koa = require('koa');
const views = require('koa-views');
const statics = require('koa-static')
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const koabody = require('koa-body');
const logger = require('koa-logger');

const loggers = require('./middleware/loggers');
const router = require('./routes/index');
const db = require('./config/dbConfig');

const app = new Koa();

app.use(convert.compose(
  koabody({
    multipart: true
  }),
  bodyparser,
  json(),
  logger()
));
// middlewares
app.use(convert(statics(__dirname + '/public')));
// 本地log
// app.use(convert(loggers()));

// use template
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}));

// use route
app.use(router.routes(), router.allowedMethods());

// mongodb connect
// db.connect();

app.on('error', function (err, ctx) {
  log.error('server error', err, ctx);
});

module.exports = app;
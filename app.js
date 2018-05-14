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
const statsd = require('./middleware/statsd');

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
app.use(loggers());
// use template
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}));

app.use(statsd());
// use route
app.use(router.routes(), router.allowedMethods());

app.on('error', function (err, ctx) {
  console.error('server handler error');
});

module.exports = app;
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
// const statsd = require('./middleware/statsd');

const app = new Koa();

app.use(convert.compose(
  koabody({
    "formLimit": "5mb",
    "jsonLimit": "5mb",
    "textLimit": "5mb",
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

// app.use(statsd());
// use route
app.use(router.routes(), router.allowedMethods());

app.on('error', function (err, ctx) {
  console.log(err, ctx);
  console.error('server handler error');
});

let apiUtil = require('./utils/apiUtil');
let server = process.env.NODE_ENV == 'dev' ? '测试版' : '正式版';
let date = new Date();
let content = `Service: poly_3device \nTime   : ${date.toLocaleString()}\n已在${server}服务器上运行`;

if (process.env.NODE_ENV == 'dev' || process.env.NODE_ENV == 'pro') {
  apiUtil.NotifyDingDing(content).then();
}

module.exports = app;
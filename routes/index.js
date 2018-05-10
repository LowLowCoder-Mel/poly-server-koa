'use strict'

const router = require('koa-router')();

const users = require('./users');
const files = require('./files');
const collect = require('./collect');
const wx = require('./wx');

router.get('/', async (ctx, next) => {
    ctx.state = {
      title: 'PolyHome Of KOA2'
    };
  
    await ctx.render('index', {});
  });
router.use('/users', users.routes(), users.allowedMethods());
router.use('/files', files.routes(), files.allowedMethods());
router.use('/collect', collect.routes(), collect.allowedMethods());
router.use('/wx', wx.routes(), files.allowedMethods());

module.exports = router;

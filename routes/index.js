'use strict'

const router = require('koa-router')();

const api_v1_router = require('./api/v1/index');

router.get('/', async (ctx, next) => {
  ctx.state = {
    title: 'PolyHome Of KOA2'
  };

  await ctx.render('index', {});
});
router.use('/api/v1/', api_v1_router.routes(), api_v1_router.allowedMethods());

module.exports = router;
'use strict'

const router = require('koa-router')();

const api_v1_router = require('./api/v1/index');

router.get('/', async (ctx, next) => {
  ctx.state = {
    title: 'PolyHome Of KOA2'
  };

  await ctx.render('index', {});
});

router.get('/signin', async (ctx, next) => {
  ctx.state = {
    title: '登陆界面'
  };

  await ctx.render('signin', {});
});

router.post('/signin', async (ctx, next) => {
  console.log(ctx.request.body)
  ctx.response.redirect('/');
  // await ctx.render('signin', {});
});

router.use('/api/v1/', api_v1_router.routes(), api_v1_router.allowedMethods());

module.exports = router;
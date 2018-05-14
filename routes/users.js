'use strict'

const router = require('koa-router')();
import {sendCaptcha, getUserList, register, removeUser} from '../controller/user';

/**
 * 发送验证码
 */
router.get('send_captcha', async (ctx, next) => {
  ctx.body = await sendCaptcha(ctx, next);
});

/**
 * 注册用户
 */
router.post('register', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 用户登陆
 */
router.post('login', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 密码找回
 */
router.post('password/reset', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 修改用户信息
 */
router.post('profile', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 修改密码
 */
router.post('update_password', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 创建家庭
 */
router.post('family', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 修改家庭信息
 */
router.post('family_update', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 删除家庭
 */
router.post('family_delete', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 查询家庭信息
 */
router.post('family_query', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 绑定家庭成员
 */
router.post('family_user_update', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 删除家庭成员关系
 */
router.post('family_user_update', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 删除家庭成员关系
 */
router.post('family_user_delete', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 查询家庭所有成员关系
 */
router.post('family_user_queryusers', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 查询该用户所在所有家庭
 */
router.post('family_user_queryusers', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 主机绑定接口（本地）
 */
router.post('binding', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 主机解绑接口（本地）
 */
router.post('unbinding', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 图片上传Base64
 */
router.post('upload/image/base64', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 修改用户头像
 */
router.post('update_cover', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 修改用户头像
 */
router.post('discovery/list', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 安防记录获取
 */
router.post('security_infos', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await register(reqBody);
});

/**
 * 获取用户
 */
router.get('getUser', async (ctx, next) => {
  ctx.body = await getUserList(ctx, next);
});

/**
 * 删除用户
 */
router.del('removeUser', async (ctx, next) => {
  console.log(ctx.request.body);
  let reqBody = ctx.request.body;
  ctx.body = await removeUser(reqBody);
});

module.exports = router;

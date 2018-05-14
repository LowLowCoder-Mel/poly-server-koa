'use strict'

const router = require('koa-router')();
const devicesCtrl = require('../../../controller/devices');

/**
 * 注册遥看设备
 */
router.post('active', async (ctx, next) => {
    await devicesCtrl.activeYKDevice(ctx.request.body);
});

/**
 * 登陆遥看设备
 */
router.post('login', async (ctx, next) => {
    await devicesCtrl.login(ctx, next);
});

/**
 * 删除遥看设备
 */
router.delete('delyaokan', async (ctx, next) => {
    await devicesCtrl.login(ctx, next);
});

/**
 * 添加遥看码库
 */
router.delete('delyaokan', async (ctx, next) => {
    await devicesCtrl.login(ctx, next);
});

/**
 * 查询遥看码库
 */
router.delete('delyaokan', async (ctx, next) => {
    await devicesCtrl.login(ctx, next);
});

/**
 * 删除遥看码库
 */
router.delete('delyaokan', async (ctx, next) => {
    await devicesCtrl.login(ctx, next);
});



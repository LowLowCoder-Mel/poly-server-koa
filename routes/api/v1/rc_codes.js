'use strict'

const router = require('koa-router')();
const remoteCodeCtrl = require(__dirname, + '/controller/devices');

/**
 * 增加红外码库
 */
router.post('remotecodes', (reqBody) => {
    try {
        // let list = await user.find();
        return resdata('0000', 'success', {
            'result': true
        });
    } catch (err) {
        return errdata(err);
    }
});

/**
 * 更新红外码库
 */
router.put('remotecodes', (reqBody) => {
    try {
        // let list = await user.find();
        return resdata('0000', 'success', {
            'result': true
        });
    } catch (err) {
        return errdata(err);
    }
});

/**
 * 查询红外码库
 */
router.get('remotecodes', (reqBody) => {
    try {
        // let list = await user.find();
        return resdata('0000', 'success', {
            'result': true
        });
    } catch (err) {
        return errdata(err);
    }
});

/**
 * 查询红外码库
 */
router.get('remotecodes', (reqBody) => {
    try {
        // let list = await user.find();
        return resdata('0000', 'success', {
            'result': true
        });
    } catch (err) {
        return errdata(err);
    }
});
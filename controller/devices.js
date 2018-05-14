'use strict'

import {
    user
} from '../models/device';
import {
    resdata,
    errdata
} from '../utils/serve';

const logUtil = require('../utils/logUtil');

/**
 * 激活遥看设备
 */
exports.activeYKDevice = async (reqBody) => {
    let dataArr = {
        mobile: reqBody.mobile,
        sms_captcha: reqBody.sms_captcha,
        password: reqBody.password
    }
    try {
        // let list = await user.find({userid: reqBody.userid});
        let list = []
        let respon = {};
        if (list && list.length > 0) {
            respon = resdata('0000', 'the user is exicet', {});
        } else {
            // let newUser = await user.create(dataArr);
            let newUser = dataArr;
            console.log(newUser);
            respon = resdata('0000', 'success', newUser);
        }
        return respon;
    } catch (err) {
        console.log(err)
        throw new Error(err);
        return errdata(err);
    }
}

/**
 * 登陆遥看设备
 */
exports.login = async (ctx, nest) => {
    try {
        // let list = await user.find();
        return resdata('0000', 'success', {
            'result': true
        });
    } catch (err) {
        return errdata(err);
    }
}

/**
 * 删除遥看设备
 */
exports.delYKDevice = async (ctx, next) => {
    try {
        let list = await user.find();
        return resdata('0000', 'success', list);
    } catch (err) {
        return errdata(err);
    }
}

/**
 * 查询遥看设备
 */
exports.getYKDeviceList = async (reqBody) => {
    let dataArr = {
        id: reqBody.id,
    }
    try {
        let list = await user.find({
            username: reqBody.uname
        });
        let respon = {}
        if (list && list.length > 0) {
            let list = await user.delete(dataArr);
            respon = resdata('0000', 'success', list);
        } else {
            respon = resdata('0000', 'the id is not exicet', list);
        }
        return respon;
    } catch (err) {
        throw new Error(err);
        return errdata(err);
    }
}

/**
 * 增加遥看设备指定码库
 */
exports.addRemoteCodes = async (reqBody) => {
    let dataArr = {
        id: reqBody.id,
    }
    try {
        let list = await user.find({
            username: reqBody.uname
        });
        let respon = {}
        if (list && list.length > 0) {
            let list = await user.delete(dataArr);
            respon = resdata('0000', 'success', list);
        } else {
            respon = resdata('0000', 'the id is not exicet', list);
        }
        return respon;
    } catch (err) {
        throw new Error(err);
        return errdata(err);
    }
}

/**
 * 查询遥看设备码库
 */
exports.getRemoteCodes = async (reqBody) => {
    let dataArr = {
        id: reqBody.id,
    }
    try {
        let list = await user.find({
            username: reqBody.uname
        });
        let respon = {}
        if (list && list.length > 0) {
            let list = await user.delete(dataArr);
            respon = resdata('0000', 'success', list);
        } else {
            respon = resdata('0000', 'the id is not exicet', list);
        }
        return respon;
    } catch (err) {
        throw new Error(err);
        return errdata(err);
    }
}
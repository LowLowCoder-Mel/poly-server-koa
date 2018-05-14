'use strict'

import {
    user
} from '../models/user'
import {
    resdata,
    errdata
} from '../utils/serve'

const logUtil = require('../utils/logUtil');

exports.sendCaptcha = async (ctx, nest) => {
    try {
        // let list = await user.find();
        return resdata('0000', 'success', {
            'result': true
        });
    } catch (err) {
        return errdata(err);
    }
}

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

exports.active = async (reqBody) => {
    let dataArr = {
        mobile: reqBody.mobile,
        sms_captcha: reqBody.sms_captcha,
        password: reqBody.password
    }
    console.log(dataArr);
    try {
        // let list = await user.find({userid: reqBody.userid});
        let list = []
        let respon = {};
        if (list && list.length > 0) {
            respon = resdata('0000', 'the user is exicet', {});
        } else {
            // let newUser = await user.create(dataArr);
            let newUser = dataArr;
            respon = resdata('0000', 'success', newUser);
        }
        return respon;
    } catch (err) {
        console.log(err)
        throw new Error(err);
        return errdata(err);
    }
}

exports.removeUser = async (reqBody) => {
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
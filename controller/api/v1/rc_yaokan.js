'use strict'

const activeCtrl = require('../../../models/rc_active');
const codesCtrl = require('../../../models/rc_codes');
const logUtil = require('../../../utils/logUtil');
const apiUtil = require('../../../utils/apiUtil');
import {
    resdata,
    errdata
} from '../../../utils/serve';

/**
 * 激活遥看设备
 */
exports.active = async (reqBody) => {
    let req = JSON.parse(reqBody);
    let dataArr = {
        username: req.username,
        password: req.password,
        mac: req.sn
    }
    try {
        // 通过mac找到用户
        // 旧的用户需要清除掉旧的用户下的设备
        let has_user = await activeCtrl.getUserByMac(req.sn);
        if (has_user) {
            has_user.macs.pop(req.sn);
            await activeCtrl.updateUserDevice(has_user);
        }
        let respon = {};
        let user = await activeCtrl.getUserByUserName(req.username);
        if (user) {
            // {f: "5CCF7F34A37D", username: "15712908185", password: "12345678", accounttype: 1}
            let req = {
                f: dataArr.mac,
                username: dataArr.username,
                password: dataArr.password,
                accounttype: 1
            }
            let result = await apiUtil.reActiveDevice(req);
            respon = resdata(result.code, result.message, {"result": "success"});
            let new_user = {      
                username: dataArr.username,
                password: dataArr.password,
                macs: []
            }
            new_user.macs.push(dataArr.mac);
            user.macs.forEach(mac => {
                new_user.macs.push(mac);
            });
            let json = await activeCtrl.updateUserDevice(new_user);
        } else {
            let req = {
                f: dataArr.mac,
                username: dataArr.username,
                password: dataArr.password,
                accounttype: 1
            }
            let result = await apiUtil.activeDevice(req);
            respon = resdata(result.code, result.message, {"result": "success"});
            let new_user = {      
                username: dataArr.username,
                password: dataArr.password,
                macs: []
            }
            new_user.macs.push(dataArr.mac);
            await activeCtrl.updateUserDevice(new_user);
        }
        return respon;
    } catch (err) {
        console.log(err);
        throw new Error(err);
        return errdata(err);
    }
}

/**
 * 给指定家庭增加红外码库
 */
exports.add_rc_code = async (reqBody) => {
    let req = JSON.parse(reqBody);
    try {
        let respon = {};
        let user = await codesCtrl.getCodesByFamilyId(req.family_id);
        if (user) {
            let new_codes = {
                "family_id": user.family_id,
                "user_id": user.user_id,
                "sn": req.sn,
                "devices": []
            }
            let keycode = JSON.parse(req.keycode);
            let device = {
                "devicetypes": req.devicetypes,
                "brand": req.brand,
                "keycode": {
                    "id": keycode.id,
                    "list": keycode.list
                }
            }
            user.devices.forEach(old_device => {
                if (device.brand == old_device.brand) {
                    return;
                }
                new_codes.devices.push(old_device);
            });
            new_codes.devices.push(device);
            let json = await codesCtrl.add_codes(new_codes);
            respon = resdata(0, "Add RC codes Success", {"result": "success"});
        } else {
            let new_codes = {
                "family_id": req.family_id,
                "user_id": req.user_id,
                "sn": req.sn,
                "devices": []
            }
            let keycode = JSON.parse(req.keycode);
            let device = {
                "devicetypes": req.devicetypes,
                "brand": req.brand,
                "keycode": {
                    "id": keycode.id,
                    "list": keycode.list
                }
            }
            new_codes.devices.push(device);
            let json = await codesCtrl.add_codes(new_codes);
            respon = resdata(0, "Add RC codes Success", {"result": "success"});
        }
        return respon;
    } catch (err) {
        console.log(err);
        throw new Error(err);
        return errdata(err);
    }
}
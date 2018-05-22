'use strict'

const activeCtrl = require('../../../models/rc_active');
const codesCtrl = require('../../../models/rc_codes');
const logUtil = require('../../../utils/logUtil');
const apiUtil = require('../../../utils/apiUtil');
import {
   resdata, errdata
} from '../../../utils/serve';

/**
 * 激活遥看设备
 */
exports.active = async (data) => {
    let req = JSON.parse(data);
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
            let req_yaokan = {
                f: dataArr.mac,
                username: dataArr.username,
                password: dataArr.password,
                accounttype: 1
            }
            let result = await apiUtil.reActiveDevice(req_yaokan);
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
            let req_yaokan = {
                f: dataArr.mac,
                username: dataArr.username,
                password: dataArr.password,
                accounttype: 1
            }
            let result = await apiUtil.activeDevice(req_yaokan);
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
 * 给指定家庭增加小苹果
 */
exports.add_rc_code = async (data) => {
    let req = JSON.parse(data);
    try {
        let respon = {};
        let user = await codesCtrl.getCodesByFamilyId(req.family_id);
        if (user) {
            let new_device = {
                "family_id": user.family_id,
                "user_id": user.user_id,
                "devices": []
            }
            let device = {
                "sn": req.sn,
                "remotes": []
            }
            let keycode = JSON.parse(req.keycode);
            let codes = {
                "myname": req.myname,
                "devicetypes": req.devicetypes,
                "brand": req.brand,
                "rmodel": req.rmodel,
                "keycode": {
                    "id": keycode.id,
                    "list": keycode.list
                }
            }
            // sn是否存在
            user.devices.forEach(old_device => {
                if (req.sn == old_device.sn) {
                    old_device.remotes.forEach(remote => {
                        if (remote.rmodel == req.rmodel) {
                            return;
                        }
                        device.remotes.push(remote);
                    })
                }
                user.devices.push(old_device);
            });
            device.remotes.push(codes);
            new_device.devices.push(device);
            let json = await codesCtrl.updateCodes(new_device);
            respon = resdata(0, "Add RC codes Success", {"result": "success"});
        } else {
            let new_device = {
                "family_id": req.family_id,
                "user_id": req.user_id,
                "devices": []
            }
            let device = {
                "sn": req.sn,
                "remotes": []
            }
            let keycode = JSON.parse(req.keycode);
            let codes = {
                "myname": req.myname,
                "devicetypes": req.devicetypes,
                "brand": req.brand,
                "rmodel": req.rmodel,
                "keycode": {
                    "id": keycode.id,
                    "list": keycode.list
                }
            }
            device.remotes.push(codes);
            new_device.devices.push(device);
            let json = await codesCtrl.updateCodes(new_device);
            respon = resdata(0, "Add RC codes Success", {"result": "success"});
        }
        return respon;
    } catch (err) {
        console.log(err);
        throw new Error(err);
        return errdata(err);
    }
}

/**
 * 删除指定家庭的小苹果
 */
exports.del_device = async (data) => {
    let req = JSON.parse(data);
    try {
        let respon = {};
        let user = await codesCtrl.getCodesByFamilyId(req.family_id);
        if (user) {
            let device = {
                "family_id": user.family_id,
                "user_id": user.user_id,
                "devices": []
            }
            user.devices.forEach(old_device => {
                if (req.sn == old_device.sn) {
                    return
                }
                device.devices.push(old_device);
            });
            let json = await codesCtrl.updateCodes(device);
            respon = resdata(0, "Delete device Success", {"result": "success"});
        } else {
            respon = resdata(0, "Delete device Success", {"result": "success"});
        }
        return respon;
    } catch (err) {
        console.log(err);
        throw new Error(err);
        return errdata(err);
    }
}

/**
 * 删除指定家庭红外码库
 */
exports.del_rc_code = async (data) => {
    let req = JSON.parse(data);
    try {
        let respon = {};
        let user = await codesCtrl.getCodesByFamilyId(req.family_id);
        if (user) {
            let codes = {
                "family_id": user.family_id,
                "user_id": user.user_id,
                "devices": []
            }
            user.devices.forEach(old_device => {
                if (req.sn == old_device.sn) {
                    old_device.remotes.forEach(remote => {
                        if (remote.keycode.id == req.kid) {
                            old_device.remotes.pop(remote);
                        }
                    })
                    codes.devices.push(old_device);
                } else {
                    codes.devices.push(old_device);
                }
            });
            let json = await codesCtrl.updateCodes(codes);
            respon = resdata(0, "Delete RC codes Success", {"result": "success"});
        } else {
            respon = resdata(0, "Delete RC codes Success", {"result": "error"});
        }
        return respon;
    } catch (err) {
        console.log(err);
        throw new Error(err);
        return errdata(err);
    }
}
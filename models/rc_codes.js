'use strict';

const db = require('./base.js');

/*
 * 插入数据到active_user集合中
 */
exports.add_codes = (codes) => {
    return new Promise(function (resolve, reject) {
        db.getDB().collection('rc_codes', function (err, collection) {
            if (err) {
                return reject(err);
            }
            collection.update({"family_id": codes.family_id}, {
                $set: codes
            }, {
                upsert: true
            }, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(codes);
            });
        });
    })
};

/*
 * 更新用户下小苹果设备数组
 */
exports.updateUserDevice = (user) => {
    return new Promise(function (resolve, reject) {
        db.getDB().collection('rc_codes', function (err, collection) {
            if (err) {
                return reject(err);
            }
            collection.update({"username": user.username}, {
                "username": user.username,
                "password": user.password,
                "macs": user.macs
            }, {
                upsert: true
            }, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(user);
            });
        });
    })
};

/*
 * 通过family_id查询码库值
 */
exports.getCodesByFamilyId = (family_id) => {
    return new Promise(function (resolve, reject) {
        db.getDB().collection('rc_codes', function (err, collection) {
            if (err) {
                reject(err);
            }
            collection.findOne({
                "family_id": family_id
            }, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    });
};


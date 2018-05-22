'use strict'

const db = require('./base.js');

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

/*
 * 给指定的家庭增加红外码库
 */
exports.updateCodes = (codes) => {
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


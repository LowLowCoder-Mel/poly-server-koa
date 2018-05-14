'use strict';

const db = require('./base.js');

/*
 * 插入数据到active_user集合中
 */
exports.activeUser = (user) => {
    return new Promise(function (resolve, reject) {
        db.getDB().collection('active_users', function (err, collection) {
            if (err) {
                return reject(err);
            }
            collection.update(user, {
                $set: user
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
 * 更新用户下小苹果设备数组
 */
exports.updateUserDevice = (user) => {
    return new Promise(function (resolve, reject) {
        db.getDB().collection('active_users', function (err, collection) {
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
 * 获取激活的小苹果
 */
exports.getUser = (data) => {
    return new Promise(function (resolve, reject) {
        db.getDB().collection('active_users', function (err, collection) {
            if (err) {
                reject(err);
            }
            collection.findOne({
                "username": data.username,
                "mac": data.mac
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
 * 通过Mac查询是否有用户
 */
exports.getUserByMac = (mac) => {
    return new Promise(function (resolve, reject) {
        db.getDB().collection('active_users', function (err, collection) {
            if (err) {
                reject(err);
            }
            collection.findOne({
                "macs": mac
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
 * 通过用户名查找用户
 */
exports.getUserByUserName = (username) => {
    return new Promise(function (resolve, reject) {
        db.getDB().collection('active_users', function (err, collection) {
            if (err) {
                reject(err);
            }
            collection.findOne({
                "username": username
            }, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    });
};


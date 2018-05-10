'use strict'

let path = require('path');

module.exports = {
    env: 'test', //环境名称
    port: 2019, //服务端口号
    root: path.resolve(__dirname, '..')
}
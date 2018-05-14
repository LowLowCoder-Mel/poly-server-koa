'use strict'

const logUtil = require('../utils/logUtil');

export default () => {
    return async (ctx, next) => {
        // start response time
        try {
            //开始进入到下一个中间件
            await next();
            // console.log('response:');
            // ms = new Date() - start;
            // //记录响应日志
            // logUtil.logResponse(ctx, ms);
        } catch (error) {
            const start = new Date();
            // interval
            let ms;
            console.log('error:');
            console.log(error)
            ms = new Date() - start;
            //记录异常日志
            logUtil.logError(ctx, error, ms);
        }
    }
}
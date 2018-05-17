'use strict'

const StatsD = require('node-statsd');
const apiUtil = require('../utils/apiUtil');

const statsdClient = new StatsD({
    host: "123.57.139.200",
    port: 9125
});

export default () => {
    return async (ctx, next) => {
        console.log(ctx.url);
        const routerName = ctx.url;
        const start = Date.now();
        await next();
        const spent = Date.now() - start;
        if (routerName) {
            // statsdClient.increment(`api.${routerName}`);
            // statsdClient.timing('api', spent);
            // statsdClient.increment('api_couter');
            // statsdClient.gauge('api_gauge', 123.45);
            // statsdClient.set('api_set', 'foobar');
            // statsdClient.set('api_set', 'foobar1');
        }
    };
};
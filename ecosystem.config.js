module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // 第三方设备处理服务
    {
      name      : 'poly_3device',
      script    : './bin/run'
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'live',
      host : '123.57.139.200',
      ref  : 'origin/master',
      repo : 'git@github.com:zhang6321615/poly-server-koa.git',
      path : '/home/live/poly_3device',
      'post-deploy' : 'git pull origin master && npm install --registry=https://registry.npm.taobao.org && pm2 startOrRestart ecosystem.config.js',
      env  : {
        NODE_ENV: 'pro'
      }
    },
    dev : {
      user : 'live',
      host : '60.205.151.71',
      ref  : 'origin/master',
      repo : 'git@github.com:zhang6321615/poly-server-koa.git',
      path : '/home/live/poly_3device',
      'post-deploy' : 'git pull origin master && npm install --registry=https://registry.npm.taobao.org && pm2 startOrRestart ecosystem.config.js',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};

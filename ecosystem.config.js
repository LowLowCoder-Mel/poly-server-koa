module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'poly_koa2'
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:zhang6321615/poly-server-koa.git',
      path : '/home/live/poly_koa',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      env  : {
        NODE_ENV: 'pro'
      }
    },
    dev : {
      user : 'live',
      host : '60.205.151.71',
      ref  : 'origin/master',
      repo : 'git@github.com:zhang6321615/poly-server-koa.git',
      path : '/home/live/poly_koa',
      'post-deploy' : 'git pull origin master && npm install --registry=https://registry.npm.taobao.org && pm2 startOrRestart ecosystem.config.js && npm run start',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};

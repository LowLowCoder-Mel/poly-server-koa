module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'API'
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
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      env  : {
        NODE_ENV: 'pro'
      }
    },
    dev : {
      user : 'live',
      host : '60.205.151.71',
      ref  : 'origin/master',
      repo : 'git@git.ourjujia.com:zhangxuesong/duer-node.git',
      path : '/home/live/poly_dueros',
      'post-deploy' : 'git pull origin master && npm install --registry=https://registry.npm.taobao.org && pm2 startOrRestart ecosystem.config.js && npm run start',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};

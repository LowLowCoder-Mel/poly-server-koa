### 项目构建
---

```
├── LICENSE
├── README.md
├── app.js
├── bin
│   ├── run
│   └── www
├── config
│   ├── dbConfig.js
│   ├── dev
│   ├── logConfig.js
│   ├── pro
│   └── serverConfig.js
├── controller
│   ├── api
│   │   └── v1
│   ├── collect.js
│   ├── devices.js
│   ├── files.js
│   ├── remotecodes.js
│   ├── user.js
│   └── wx.js
├── ecosystem.config.js
├── logs
│   ├── error
│   └── response
├── middleware
│   ├── loggers.js
│   ├── pipe.js
│   └── statsd.js
├── models
│   ├── base.js
│   ├── collect.js
│   ├── device.js
│   ├── files.js
│   ├── rc_active.js
│   ├── rc_codes.js
│   ├── token.js
│   └── user.js
├── package.json
├── public
│   └── stylesheets
│       └── style.css
├── routes
│   ├── api
│   │   └── v1
│   ├── collect.js
│   ├── files.js
│   ├── index.js
│   ├── users.js
│   └── wx.js
├── sevices
├── utils
│   ├── apiUtil.js
│   ├── logUtil.js
│   ├── mkdir.js
│   └── serve.js
└── views
    ├── error.ejs
    └── index.ejs

tree 目录生成命令

tree -L 3 -I "node_modules"
```

* tree -d 只显示文件夹； 
* tree -L n 显示项目的层级。n表示层级数。比如想要显示项目三层结构，可以用tree -l 3； 
* tree -I pattern 用于过滤不想要显示的文件或者文件夹。比如你想要过滤项目中的node_modules文件夹，可以使用tree -I "node_modules"； 
* tree > tree.md 将项目结构输出到tree.md这个文件。


### 首先是写法
---

之前用express的时候，用的是es5的语法规范
koa2用采用了es6，7的新特性，尽情的使用let吧
nodemon babelrc的福音，自动转码，不用配置.babelrc， 也不需要再装一些列bable转码了。







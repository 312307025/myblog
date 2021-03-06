'use strict';
var path = require('path');
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var config = require('config-lite');
var routes = require('./routes');
var pkg = require('./package');

var app = express();

// 设置模版目录
app.set('views', path.join(__dirname, 'views'));//__dirname是当前文件绝对地址的意思
// 设置模版引擎ejs
app.set('view engine', 'ejs');

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));
// session中间件
app.use(session({
    name: config.session.key,// 设置cookie中保存session id的字段名称
    secret: config.session.secret,// 通过设置secret来计算hash值并且放到cookie防止幕改
    resave: true,// 强制更新session
    saveUninitialized: false,//设置为false，强制创建一个session，即使用户没有登录
    cookie: {
        maxAge: config.session.maxAge// 过期时间，过期后cookie中的session删除
    },
    store: new MongoStore({// 将session存到mongodb中
        url: config.mongodb //mongodb地址
    })
}));

app.use(require('express-formidable')({
    uploadDir: path.join(__dirname, 'public/img'), //上传文件目录
    keepExtensions: true //保留后缀
}));

// flash中间件，用来显示通知
app.use(flash());

// 设置模版全局常量
app.locals.blog = {
    title: pkg.name,
    description: pkg.description
};

// 添加模版必须的三个变量
app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    // TODO 这里有些不懂
    res.locals.success = req.flash('success').toString();
    res.locals.error = req.flash('error').toString();
    next();
});

// 路由
routes(app);

// 监听端口，启动程序
app.listen(config.port, function() {
    console.log(`${pkg.name} 监听端口 ${config.port}`);
});
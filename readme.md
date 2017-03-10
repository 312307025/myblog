这个项目里面主要用到的包
-----
        express: web 框架
        express-session: session 中间件
        connect-mongo: 将 session 存储于 mongodb，结合 express-session 使用
        connect-flash: 页面通知提示的中间件，基于 session 实现
        ejs: 模板
        express-formidable: 接收表单及文件的上传中间件
        config-lite: 读取配置文件
        marked: markdown 解析
        moment: 时间格式化
        mongolass: mongodb 驱动
        objectid-to-timestamp: 根据 ObjectId 生成时间戳
        sha1: sha1 加密，用于密码加密
        winston: 日志
        express-winston: 基于 winston 的用于 express 的日志中间件
        mysql:数据库

教程连接
------
        https://github.com/nswbmw/N-blog

数据库mongoDB运行方法
-------
        mongod --dbpath=D:\webtool\MongoDB\db
数据库mongoDB常用的命令
-------
        show dbs //显示全部数据库
        show collections //显示选中数据库里面全部的集合
        use xxx //选中某个数据库 xxx是数据库名称


项目运行方法
------
        supervisor --harmony index

一般编码的时候记得在开头用上
------
        'use strict'; //用来表示开启严格模式
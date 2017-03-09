var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// GET /signout 登出
router.use('/', checkLogin, function(req, res, next) {

});

module.exports = router;
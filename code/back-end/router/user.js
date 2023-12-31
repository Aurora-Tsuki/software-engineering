// ---------------------------------------------------- 项目资源引入 ---------------------------------------------------- //
// 导入express模块
const express = require('express');
// 导入用户路由处理函数模块
const userHandler = require('../router_handler/user');



// ------------------------------------------------------ 变量定义 ------------------------------------------------------ //
// 创建路由对象
const router = express.Router();



// ------------------------------------------------------ 函数调用 ------------------------------------------------------ //
// 注册新用户
router.post('/register', userHandler.registerUser);



// 将路由对象共享出去
module.exports = router;
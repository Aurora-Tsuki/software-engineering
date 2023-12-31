// ---------------------------------------------------- 项目资源引入 ---------------------------------------------------- //
// 导入express模块
const express = require('express');
// 导入 cors 中间件
const cors = require('cors');
// 导入用户路由模块
const userRouter = require('./router/user');



// ------------------------------------------------------ 变量定义 ------------------------------------------------------ //
// 创建服务器实例
const app = express();


// ----------------------------------------------------- 中间件使用 ----------------------------------------------------- //
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use('/api', userRouter);



// ------------------------------------------------------ 函数调用 ------------------------------------------------------ //
// 调用app.listen方法，指定端口号并启动web服务器
app.listen(3007, function() {
    console.log('api server running at http://127.0.0.1:3007');
})
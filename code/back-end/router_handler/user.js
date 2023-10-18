/**
 * 在这里定义和用户相关的路由处理函数，供/router/user.js使用
 */
// ----------------------------------------------------- 资源引入 ----------------------------------------------------- //
const bcrypt = require('bcryptjs');
const db = require('../db/index');



// ----------------------------------------------------- 处理函数 ----------------------------------------------------- //
// 注册新用户的处理函数
module.exports.registerUser = (req, res) => {
    // 获取post请求提交到服务器的用户信息
    // post请求用body；get请求用query或者params
    const userinfo = req.body;

    // 定义SQL语句，查询用户名是否被占用
    const sql = 'select * from user_info where phone=?';
    db.query(sql, userinfo.phone, (err, results) => {
        // SQL语句执行失败
        if (err) {
            return res.send({status: 0, message: err.message});
        }
        // 执行语句成功后，判断用户名是否被占用
        if (results.length > 0) {
            // 如果搜寻结果大于0，说明有这个银行卡号
            return res.send({status: 0, message: new Errow('该用户已经被注册')});
        }

        // 若SQL语句执行成功，并且这个身份证号没有被注册
        // 调用bcrypt.hashSync对密码、身份证号、手机号进行加密
        userinfo.password = bcrypt.hashSync(userinfo.password, 10);
        userinfo.idCard = bcrypt.hashSync(userinfo.idCard, 10);
        // 将用户信息插入数据库中
        const sqlStr = 'insert into user_info set ?';
        db.query(sqlStr, {
            name: userinfo.userName,
            password: userinfo.password,
            idCard: userinfo.idCard,
            phone: userinfo.phone,
            sex: userinfo.sex
        }, (err, results) => {
            if (err) return res.send({status: 0, message: err});
            // 判断影响行数是否为1
            if (results.affectedRows !== 1) return res.send({status: 0, message: '注册用户失败，请稍后再试！'});
            // 注册成功
            res.send({status: 1, message: '注册成功!'});
        })
    })
}
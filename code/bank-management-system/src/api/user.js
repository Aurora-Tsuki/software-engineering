import myaxios from "@/utils/myaxios";
import handledatas from "@/utils/handleData";

// 项目用户相关的请求地址
const API = {
    LOGIN_URL: '/api/login',
    USERINFO_URL: '/user/info',
    LOGOUT_URL: '/api/logout',
    REGISTER_URL: '/api/register',
}

// 登录接口
export const reqLogin = (data) => myaxios.post(API.LOGIN_URL, data);
// 获取用户信息
export const reqUserInfo = () => myaxios.get(API.USERINFO_URL);
// 退出登录
export const reqLogout = () => myaxios.post(API.LOGOUT_URL);

// 用户注册
export const reqRegister = (data) => {
    return myaxios({
        url: API.REGISTER_URL,
        method: 'POST',
        data: handledatas(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
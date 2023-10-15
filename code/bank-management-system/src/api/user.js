import myaxios from "@/utils/myaxios";

// 项目用户相关的请求地址
const API = {
    LOGIN_URL: '',
    USERINFO_URL: '',
    LOGOUT_URL: ''
}

// 登录接口
export const reqLogin = (data) => myaxios.post(API.LOGIN_URL, data);
// 获取用户信息
export const reqUserInfo = () => myaxios.get(API.USERINFO_URL);
// 退出登录
export const reqLogout = () => myaxios.post(API.LOGOUT_URL);
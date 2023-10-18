// 定义用户相关的小仓库
import { reqRegister } from "@/api/user";

import { defineStore } from "pinia";

const useUserStore = defineStore('User', {
    // ------------------------------------------- 数据定义 ------------------------------------------- //
    state: () => {
        return {
            token: '',  // 用户唯一标识token
        }
    },

    // ------------------------------------------- 函数定义 ------------------------------------------- //
    actions: {
        // 注册按钮的回调函数中的注册功能的请求函数
        async userRegister(formData) {
            // 发送登录请求
            
            const response = await reqRegister(formData);
            // 注册成功
            if (response.status === 1) {
                return 'ok';
            } else {
                // 注册失败
                return Promise.reject(new Error(response.message))
            }
            
        }
    },

    // ------------------------------------------- getters定义 ---------------------------------------- //
    getters: {}
})

export default useUserStore;
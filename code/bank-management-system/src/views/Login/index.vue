<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form" :model="loginForm" label-width="70px">
                    <h1>Hello</h1>
                    <h2>欢迎来到银行卡管理系统</h2>

                    <el-form-item label="手机号" prop="userPhone" required>
                        <el-input :prefix-icon="User" v-model="loginForm.userPhone"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password" required>
                        <el-input type="password" :prefix-icon="Lock" 
                        v-model="loginForm.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="default" class="login_btn">登录</el-button>
                    </el-form-item>
                    <el-form-item>
                        <div class="change_form">
                            <el-link type="info" @click="skip">注册</el-link>
                            <el-link type="info">忘记密码？点击找回</el-link>
                        </div>
                    </el-form-item>

                </el-form>
            </el-col>
        </el-row>
    </div>
</template>


<script setup lang="js">
import { User,Lock } from '@element-plus/icons-vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';


// ----------------------------------------------- 数据定义 ----------------------------------------------- //
// 收集表单数据
let loginForm = reactive({
    userPhone: '',
    password: ''
});
const $router = useRouter();

// ----------------------------------------------- 函数定义 ----------------------------------------------- //
const skip = () => {
    $router.replace('/register');
}
</script>


<style lang="scss" scoped>
    .login_container {
        width: 100%;
        height: 100vh;
        background-color: pink;
    }

    .login_form {
        position: relative;
        width: 80%;
        top: 30vh;
        background-color: yellow;
        padding: 40px;

        h1 {
            color: white;
            font-size: 40px;
        }
        h2 {
            font-size: 20px;
            color: white;
            margin: 20px 0px;
        }

        .login_btn {
            width: 100%;
        }

        .change_form {
            display: flex;
            justify-content: space-between;
            flex: 1;
        }
    }
    
</style>
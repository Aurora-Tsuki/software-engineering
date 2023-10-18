<template>
    <div class="register_container">
        <el-row>
            <el-form :model="registerForm" class="register_form" label-width="80px" status-icon :rules="rules" ref="form">
                <h1>注册</h1>

                <el-form-item label="真实姓名" prop="userName">
                    <el-input v-model="registerForm.userName" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="registerForm.password" show-password></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-radio-group v-model="registerForm.sex">
                        <el-radio label="男" disabled/>
                        <el-radio label="女" disabled/>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="身份证号" prop="idCard">
                    <el-input v-model="registerForm.idCard"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" prop="phone">
                    <el-input v-model="registerForm.phone"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="space_between">
                        <el-button type="primary" size="default" class="btn" @click="register">注册</el-button>
                        <el-button type="info" size="default" class="btn" @click="resetInfo">重置</el-button>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-link type="info" @click="skip">已有密码？点击登录</el-link>
                </el-form-item>

            </el-form>
        </el-row>
    </div>
</template>


<script lang="js" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';
// 引入验证身份证号的库
import idcard from 'idcard';
// 引入验证电话号码的库
import isChinesePhoneNumber from 'is-chinese-phone-number';
import useUserStore from '@/store/modules/user.js';

// ----------------------------------------------- 数据定义 ----------------------------------------------- //
// 定义表单数据
let registerForm = reactive({
    userName: "",
    idCard: "",
    phone: "",
    password: "",
    sex: ""
});
const form = ref();
// 获取路由器
const $router = useRouter();
const userStore = useUserStore();


// ----------------------------------------------- 函数定义 ----------------------------------------------- //
// 密码自定义校验规则
const validatePassword = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码'));
    } else if(value.length < 6 || value.length > 20) {
        callback(new Error('密码长度为6-20位'));
    } else {
        callback();
    }
}
// 身份证号自定义校验规则
const validateIdCard = (rule, value, callback) => {
    const info = idcard.info(value);
    if (info.valid) {
        // 判断男女
        if (info.gender === 'F') registerForm.sex = '女';
        else registerForm.sex = '男'
        callback();
    } else {
        callback(new Error('请输入正确的身份证号'));
    }
}
// 电话号自定义校验规则
const validatePhone = (rule, value, callback) => {
    // 利用isChinesePhoneNumber来验证电话号码
    if(isChinesePhoneNumber(value)) {
        callback();
    } else {
        callback(new Error('请输入正确的电话号码'));
    }
}

// 表单校验规则
const rules = reactive({
    userName: [
        { required: true, message: '请输入姓名', trigger: 'blur' },
        
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { validator: validatePassword, trigger: 'blur' }
    ],
    sex: [
        { required: true, message: '请选择性别', trigger: 'change' }
    ],
    idCard: [
        { required: true, message: '请填写身份证号', trigger: 'blur'},
        { validator: validateIdCard, trigger: 'blur' }
    ],
    phone: [
        { required: true, message: '请填写电话号码', trigger: 'blur'},
        { validator: validatePhone, trigger: 'blur' }
    ]
});

// ------------------- 点击事件 ------------------- //
// 注册按钮点击事件
const register = async () => {
    await form.value.validate();

    await userStore.userRegister(registerForm).then(() => {
        // 注册成功，切换到登录页面
        $router.replace('/login');
    }).catch((error) => {
        // 注册失败
        ElNotification({
            type: 'error',
            message: error.message
        })
    })
}

// 重置按钮点击事件
const resetInfo = () => {
    registerForm.userName = '';
    registerForm.password = '';
    registerForm.sex = '';
    registerForm.idCard = '';
    registerForm.phone = '';
}

// 返回登录页的点击事件
const skip = () => {
    $router.replace('/login');
}
</script>


<style lang="scss" scoped>
    .register_container {
        width: 100%;
        height: 100vh;
        background-color: pink;
    }

    .register_form {
        position: relative;
        width: 70%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
        background-color: yellow;
        padding: 40px;

        h1 {
            color: white;
            font-size: 50px;
            margin-bottom: 15px;
            text-align: center;
        }
        .space_between {
            display: flex;
            justify-content: space-between;
            flex: 1;
            .btn {
                width:40%;
                font-size: 25px;
            }
        }
        
    }
</style>
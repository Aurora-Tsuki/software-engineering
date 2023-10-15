<template>
    <div class="register_container">
        <el-row>
            <el-form :model="registerForm" class="register_form" label-width="70px" status-icon>
                <h1>注册</h1>

                <el-form-item label="真实姓名">
                    <el-input v-model="registerForm.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="registerForm.password"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="registerForm.sex">
                        <el-radio label="male"/>
                        <el-radio label="female"/>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="身份证号">
                    <el-input v-model="registerForm.idCard"></el-input>
                </el-form-item>
                <el-form-item label="联系方式">
                    <el-input v-model="registerForm.phone"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="default" class="register_btn">注册</el-button>
                    <el-button type="info" size="default" class="reset_btn">重置</el-button>
                </el-form-item>

            </el-form>
        </el-row>
    </div>
</template>


<script lang="js" setup>
import { reactive } from 'vue';

let registerForm = reactive({
    userName: "",
    idCard: "",
    phone: "",
    password: "",
    sex: ""
});

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
        background-color: red;
        padding: 40px;

        h1 {
            color: white;
            font-size: 50px;
            margin-bottom: 15px;
            text-align: center;
        }
        .register_btn {
            width:40%;
            margin-right: 18%;
            font-size: 25px;
        }
        .reset_btn {
            width: 40%;
            font-size: 25px;
        }
        
    }
</style>
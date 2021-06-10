<template>
  <div id="login">
    <div class="login__container">
      <div class="login__warp">
        <h2 class="login-title">电视社区管理后台</h2>
        <el-form
          class="formRef"
          ref="formRef"
          :model="loginForm"
          :rules="rules"
          label-width="80px"
        >
          <el-form-item label="账号：" prop="userName">
            <el-input
              v-model="loginForm.userName"
              @keyup.enter="handleSubmit"
              placeholder="请输入账号"
            />
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input
              v-model="loginForm.password"
              @keyup.enter="handleSubmit"
              show-password
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-button
            class="submit-btn"
            :loading="loading"
            @click="handleSubmit"
          >
            登 录
          </el-button>
          <div class="operate-btns">
            <span class="forget" @click="changePassword">忘记密码</span>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script  lang='ts'>
import { defineComponent, reactive } from "vue";
import { login } from "@/utils/login";
import { rule } from "@/utils/rules";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { userType } from "@/config/login";
export default defineComponent({
  name: "Login",
  setup() {
    const { loginForm, formRef, loading, changePassword } = login();
    const router = useRouter();
    const rules = rule;
    const userTypes = reactive<any>(userType);
    const handleSubmit = () => {
      formRef.value.validate((valid: boolean) => {
        if (valid) {
          const { userName, password } = loginForm;
          if (userTypes[userName] && userTypes[userName].password === password) {
             sessionStorage.setItem("user", JSON.stringify(userTypes[userName]));
            router.push({
              name: "HomePage"
            });
          } else {
            ElMessage.error("账号密码错误");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    return {
      rules,
      loginForm,
      formRef,
      loading,
      handleSubmit,
      changePassword
    };
  }
});
</script>

<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100vh;
  background: url("../../assets/images/login/background.svg") no-repeat 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-title {
    margin: 50px 0;
  }
  .formRef {
    padding: 0 40px;
  }
  .login__container {
    width: 500px;
    height: 400px;
    background: #ffffff;
    box-sizing: border-box;
    box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    .login__warp {
      text-align: center;
      .el-form-item__label {
        line-height: 0;
        font-size: 12px;
        font-weight: 400;
        color: #999999;
        padding-bottom: 16px;
        &::before {
          display: none;
        }
      }
      .el-input__inner {
        height: 56px;
        border: 1px solid #e6e6e6;
        border-radius: 10px;
      }
      .operate-btns {
        margin-top: 28px;
        display: flex;
        justify-content: flex-end;
        .forget {
          color: #29b395;
          cursor: pointer;
          font-size: 14px;
          line-height: 20px;
          margin: 0 18px 0 0;
        }
      }
      .submit-btn {
        margin-top: 30px;
        margin-left: 80px;
        width: 340px;
        color: #41afa0;
        background-color: #fff;
      }
      .submit-btn:hover {
        background: #41afa1 !important;
        color: #fff !important;
      }
    }
  }
}
// 忘记密码按钮
.forget {
  color: #606266;
  cursor: pointer;
  display: inline-block;
  font-size: 14px !important;
  line-height: 19px;
  margin: 0 0 0 15px;
}
</style>

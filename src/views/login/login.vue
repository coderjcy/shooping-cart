<template>
  <div class="login">
    <div class="bg-img"></div>
    <div class="panel">
      <el-form ref="formRef" :model="userInfo" status-icon :rules="rules">
        <el-form-item label="账号" prop="name" style="padding-right: 18px">
          <el-input v-model="userInfo.name" />
        </el-form-item>
        <el-form-item label="密码" prop="psd" style="padding-right: 18px">
          <el-input v-model="userInfo.psd" />
        </el-form-item>

        <el-form-item>
          <el-button
            style="width: 100%; margin-top: 20px"
            size="large"
            type="primary"
            @click="handleLoginClick(formRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";

const userInfo = reactive({ name: "", psd: "" });
const formRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  name: [{ required: true, message: "请输入账号！！！", trigger: "blur" }],
  psd: [{ required: true, message: "请输入密码！！！", trigger: "blur" }],
});
const router = useRouter();
const handleLoginClick = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      router.push("home");
    } else {
      alert("登录失败");
      return false;
    }
  });
};
</script>

<style scoped lang="less">
.login {
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #a8e8f0;
  position: relative;
  padding-bottom: 30px;
  .bg-img {
    position: relative;
    z-index: 1;
    margin: 0 auto;
    width: 80vw;
    height: (505/600) * 80vw;
    background: url(@/assets/imgs/login-bg.png) no-repeat;
    background-size: contain;
  }

  .panel {
    width: 70vw;
    margin: 0 auto;
    margin-top: 13.3333vw;
  }
}
</style>

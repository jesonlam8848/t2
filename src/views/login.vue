<template>
  <div>
    <h1>This is an login page</h1>
    <h1>git stash尝试4</h1>
    <input type="text" v-model="phone" />
    <button @click="getSms()">获取验证码</button>

    <div>您的验证码:{{ this.smsCode }}</div>

    <input type="text" v-model="mySmsCode" />
    <button @click="login()">登录</button>
  </div>
</template>

<script>
import { getSmsCode } from "../api/login";
import { loginApi } from "../api/login";
export default {
  data() {
    return {
      phone: "15013795539",
      smsCode: "",//  后端返回
      mySmsCode: "",//  前端自己填的
    };
  },
  methods: {
    async getSms() {
      let params = {
        phone: this.phone,
      };
      const { data } = await getSmsCode(params);
      console.log("getSms", data);
      this.smsCode = data.smsCode;
    },
    async login() {
      let params = {
        phone: this.phone,
        smsCode: this.mySmsCode,
      };
      const { data } = await loginApi(params);
      console.log("login", data);
      this.$store.commit('setToken', data.result.token)
      this.$store.commit('setPhone', this.phone)
      if (data.msg != "验证码错误") {
        this.$router.push({ name: "cart" });
      } else {
        alert("验证码错误");
      }
    },
  },
};
</script>

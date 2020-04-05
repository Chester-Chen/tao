<template>
  <div class="register">
    <top-bar :navbarTitle="navbarTitle" :isShow="isShow"></top-bar>

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="user"
        label="新用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码由数字和字母组成,长度6-9位"
        :rules="[{pattern, required: true, message: '密码格式错误' }]"
      />

      <van-field
        v-model="comfirmPassword"
        type="password"
        name="comfirm_password"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{validator, required: true, message: '两次密码不一致' }]"
      />

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="onSubmit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script type="text/javascript">
import TopBar from "@/components/TopBar";
import { Toast } from "vant";

export default {
  data() {
    return {
      username: "",
      password: "",
      comfirmPassword: "",
      isShow: true,
      navbarTitle: "注册",
      pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,9}$/
    };
  },
  methods: {
    onSubmit(values) {
      this.$axios
        .post("register", {
          values
        })
        .then(response => {
          console.log(response.data);
          if (response.data.status == 200) {
            sessionStorage.setItem("userName", this.username);
            Toast(response.data.msg);
            this.$router.push("home");
          } else if (response.data.status == 403) {
            Toast(response.data.msg);
          }
        });
      console.log("submit", values);
    },
    validator(val) {
      return val == this.password ? true : false;
    }
  },
  components: {
    TopBar
  }
};
</script>

<style lang="scss" scoped>
</style>

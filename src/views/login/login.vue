<template>
  <div class="login">
    <top-bar :navbarTitle="navbarTitle"></top-bar>

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="user"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
      <div style="margin: 16px;">
        <van-button round block type="info" to="/register">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script type="text/javascript">
import TopBar from "@/components/TopBar";
import { getCookie, setCookie, clearCookie } from "@/utils/tokenUtils";
import { Toast } from "vant";

export default {
  data() {
    return {
      username: "",
      password: "",
      navbarTitle: "登录"
    };
  },
  methods: {
    onSubmit(values) {
      this.$axios
        .post("login", {
          values
        })
        .then(response => {
          console.log(response.data);

          if (response.data.status == 200) {
            sessionStorage.setItem("userName", this.username);
            document.cookie =
              encodeURIComponent("token") +
              "=" +
              encodeURIComponent(response.data.token);
            Toast(response.data.msg);
            this.$router.push("/home");
          } else if (response.data.status == 404) {
            Toast(response.data.msg);
          } else if (response.data.status == 403) {
            Toast(response.data.msg);
          }
        })
        .catch(reason => {
          console.log('when login occured error: ',resason);
        });
    }
  },
  components: {
    TopBar
  }
};
</script>

<style lang="scss" scoped>
</style>

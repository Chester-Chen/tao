<template>
  <div class="login">
    <top-bar :navbarTitle="navbarTitle" :isShow="isShow"></top-bar>

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
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script type="text/javascript">
import TopBar from "@/components/TopBar";
import { Toast } from 'vant';

export default {
  data() {
    return {
      username: "",
      password: "",
      isShow: true,
      navbarTitle: "登录"
    };
  },
  methods: {
    onSubmit(values) {
    //   console.log("submit", values);
      this.$axios
        .post("login", {
          values
        })
        .then(response => {
            console.log(response.data);

            if(response.data.status == 200) {
                Toast(response.data.msg);
            } else if(response.data.status == 404) {
                Toast(response.data.msg);
            } else if(response.data.status == 403) {
                Toast(response.data.msg);
            }
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

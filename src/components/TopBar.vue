<template>
  <div>
    <van-nav-bar :title="navbarTitle" fixed :left-arrow="isShow" @click-left="onClickLeft"/>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Toast } from "vant";

Vue.use(NavBar);

export default {
  data() {
    return {};
  },
  props: ["navbarTitle", "leftText", "isShow"],
  methods: {
    onClickLeft: function () {
      this.$router.go(-1);
      Toast("success!");
    }
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background-color: rgba(255, 184, 0, 0.8);
  .van-nav-bar__title {
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    font-family: KaiTi;
    // font-family: STXingkai;
  }
  .van-nav-bar__arrow {
    color: #fff;
  }
}

.van-hairline--bottom::after {
  // 解决TopBar下方的白线
  border-bottom-width: 0px;
}
</style>
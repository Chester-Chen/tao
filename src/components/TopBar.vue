<template>
  <div>
    <van-nav-bar :title="navbarTitle" />
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);

export default {
  data() {
    return {};
  },
  props: ["navbarTitle"]
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background-color: rgba(255, 184, 0, 0.8);
//   margin-bottom: 1px;
}

.van-hairline--bottom::after {  // 解决TopBar下方的白线
  border-bottom-width: 0px;
}
</style>
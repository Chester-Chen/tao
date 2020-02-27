<template>
  <div class>
    <top-bar :navbarTitle="navbarTitle"></top-bar>

    <!-- 底部导航 -->
    <footer-tar-bar :active="active"></footer-tar-bar>
  </div>
</template>

<script type="text/javascript">
import FooterTarBar from "@/components/FooterTarBar";

import TopBar from "@/components/TopBar";
export default {
  data() {
    return {
      navbarTitle: "订单",
      active: 1
    };
  },
  components: {
    TopBar,
    FooterTarBar
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>

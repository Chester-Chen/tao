<template>
  <div class>
    <top-bar :navbarTitle="navbarTitle"></top-bar>
    <!-- 底部导航 -->
    <footer-tar-bar :active="active"></footer-tar-bar>
  </div>
</template>

<script type="text/javascript">
import TopBar from "@/components/TopBar";
import FooterTarBar from "@/components/FooterTarBar";

export default {
  data() {
    return {
      navbarTitle: "我的Tao",
      active: 3
    };
  },
  components: { TopBar, FooterTarBar },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class>
    <top-bar :navbarTitle="navbarTitle"></top-bar>
  </div>
</template>

<script type="text/javascript">
import TopBar from "../components/TopBar";

export default {
  data() {
    return {
      navbarTitle: "我的Tao"
    };
  },
  components: { TopBar },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>

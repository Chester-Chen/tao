<template>
  <div>
    <top-bar :navbarTitle="navbarTitle"  :isShow="isShow"></top-bar>
  </div>
</template>

<script type="text/javascript">
import TopBar from "@/components/TopBar";

export default {
  data() {
    return {
      navbarTitle: "电影",
      isShow: true
    };
  },
  components: { TopBar },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>

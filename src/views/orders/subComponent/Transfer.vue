<template>
  <div class="transfer">
    <top-bar :navbarTitle="navbarTitle" :isShow="isShow"></top-bar>
    <div>快递id：{{transferId}}</div>
  </div>
</template>

<script type="text/javascript">
import TopBar from "@/components/TopBar";

export default {
  data() {
    return {
      isShow: true,
      navbarTitle: "物流",
      transferId: null
    };
  },
  components: { TopBar },
  created() {
            // 根据id查询物流
      // this.$axios.get("/querymsg").then(response => {
      //   console.log(response.data);
      // });
          let id  = this.$route.query.transferId;
          this.transferId = id;
          alert(id);
    
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>

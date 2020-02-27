<template>
  <div class="footer-tabbar">
    <van-tabbar v-model="tabbarStatu" router>
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/orders">订单</van-tabbar-item>
      <van-tabbar-item icon="cart-o" info="99+" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/mine">我的淘</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return { 
      tabbarStatu: this.active
    };
  },
  props:['active'],
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>

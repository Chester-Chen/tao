<template>
  <div id="app">
    <van-tabbar v-model="active" router>
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/orders">订单</van-tabbar-item>
      <van-tabbar-item icon="cart-o" info="99+" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/mine">我的淘</van-tabbar-item>
    </van-tabbar>
      <router-view />
    <!-- <keep-alive>
      <router-view v-if="$route.meta.KeepAlive" />
    </keep-alive>

    <router-view v-if="!$route.meta.KeepAlive" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {}
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 46px;
  padding-bottom: 50px;
  .van-info {
    right: -5px;
  }
}
</style>

<template>
  <div id="cart">
    <!-- topbar -->
    <top-bar :navbarTitle="navbarTitle"></top-bar>

    <!-- 购物车列表 -->
      <cart-list></cart-list>
    <!-- 提交订单栏 -->
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { SubmitBar } from "vant";
import TopBar from "../../components/TopBar";
import CartList from "../cart/childComponents/CartList";

Vue.use(SubmitBar);

export default {
  data() {
    return {
      navbarTitle: "购物车",
      goods: [],
      checked: ""
    };
  },
  components: { TopBar, CartList },
  methods: {
    onSubmit: function name(params) {},
    test: function(item) {}
  }
};
</script>

<style lang="scss" scoped>
#cart {
  .van-submit-bar {
    margin-bottom: 50px;
  }
}
</style>

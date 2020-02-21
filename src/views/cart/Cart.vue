<template>
  <div id="cart">
    <!-- topbar -->
    <top-bar :navbarTitle="navbarTitle"></top-bar>

    <!-- 购物车列表 -->
    <cart-list></cart-list>

    <!-- 结算 -->
    <van-submit-bar :price="totalPrice" button-text="提交订单" :decimal-length="2" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { SubmitBar } from "vant";
import TopBar from "../../components/TopBar";
import CartList from "../cart/childComponents/CartList";
import { mapGetters } from "vuex";

Vue.use(SubmitBar);

export default {
  data() {
    return {
      navbarTitle: "购物车",
      checked: "",
      

    };
  },
  components: { TopBar, CartList },
  methods: {
    onSubmit: function name(params) {},
    test: function(item) {},

  },
  computed: {
    ...mapGetters(['totalPrice']),

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

<template>
  <div id="cart">
    <!-- topbar -->
    <top-bar :navbarTitle="navbarTitle"></top-bar>

    <!-- 购物车列表 -->
    <cart-list @isCancelAllSelected="isCancelAllSelected"></cart-list>

    <!-- 结算 -->
    <van-submit-bar
      :price="totalPrice"
      button-text="提交订单"
      :decimal-length="2"
      @submit="commitOrders(orderLists)"
    >
      <van-checkbox v-model="check" @click="selectAll">全选</van-checkbox>
    </van-submit-bar>

    <!-- 底部导航 -->
    <footer-tar-bar :active="active"></footer-tar-bar>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import TopBar from "@/components/TopBar";
import FooterTarBar from "@/components/FooterTarBar";
import CartList from "../cart/childComponents/CartList";
import { SubmitBar, Toast } from "vant";
import { mapGetters, mapMutations } from "vuex";

Vue.use(SubmitBar);

export default {
  data() {
    return {
      navbarTitle: "购物车",
      check: this.$store.state.allChecked,
      goodLists: [],
      active: 2,
      allOrderLists: []
    };
  },
  components: { TopBar, CartList, FooterTarBar },
  created() {},
  methods: {
    ...mapMutations(['commitOrders']),
  
    // 选中全部及取消全部
    selectAll() {
      this.goodLists = this.getGoodLists;
      // console.log("goodsIsAllSelected: " + toString(this.goodsIsAllSelected));
      // console.log(this.goodsIsAllSelected.allSelected);
      let selectedStatus = this.goodsIsAllSelected;
      if (selectedStatus.allSelected == true && this.check == true) {
        this.goodLists.forEach(item => {
          // 全不选
          item.selected = false;
        });
      } else if (
        selectedStatus.allSelected == false &&
        selectedStatus.someSelected == false &&
        selectedStatus.allNotSelected == true
      ) {
        this.goodLists.forEach(item => {
          // 全选
          item.selected = true;
        });
      } else if (
        selectedStatus.allSelected == false &&
        selectedStatus.someSelected == true &&
        selectedStatus.allNotSelected == false
      ) {
        this.goodLists.forEach(item => {
          // 全选
          item.selected = true;
        });
      }
      this.check = !this.check;
    },

    //  单选问题
    /**
     * selectedStatus  取消后的状态
     *
     * 存在一个bug，当全部未选中的情况下，单个单个的选中，当点满时，不会联动全选按钮
     *    ||
     *    ||
     *    vv
     *    当取消单个选中状态时，不会触发getters。单个选中时，会触发getters。
     *    而且当选中单个时，其全部商品的选中状态为上一个选中的旧状态。
     *
     * 已解决：cartlist.vue中单选触发事件，将双向绑定的选中状态，每次点击取反，并修改商品的选中字段，应为
     *        已为计算属性，所以为联动其值
     */
    isCancelAllSelected(selectedStatus) {
      console.log("cart:" + selectedStatus);
      if (selectedStatus == false) {
        // 如果有一个为false，则取消全选状态
        this.check = selectedStatus;
      } else if (
        selectedStatus == true &&
        this.goodsIsAllSelected.allSelected == true
      ) {
        // 如果传入的为true且商品全为true，则选中全选状态
        console.log("选中状态:" + this.goodsIsAllSelected.allSelected);

        this.check = selectedStatus;
      }
    }
  },
  watch: {},
  created() {
    this.allOrderLists = this.getGoodLists;
  },
  computed: {
    ...mapGetters(["totalPrice", "goodsIsAllSelected", "getGoodLists"]),
    orderLists() {
      let orders = this.allOrderLists.filter(item => {
        return item.selected == true;
      });
      console.log('提交的orders: '+ JSON.stringify(orders));
      return orders;
    }
  }
};
</script>

<style lang="scss" scoped>
#cart {
  padding: 0 8px;
  .van-submit-bar {
    margin-bottom: 50px;
  }
}
</style>

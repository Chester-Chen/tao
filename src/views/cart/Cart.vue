<template>
  <div id="cart">
    <!-- topbar -->
    <top-bar :navbarTitle="navbarTitle"></top-bar>

    <!-- 购物车列表 -->
    <cart-list @isCancelAllSelected="isCancelAllSelected"></cart-list>

    <!-- 结算 -->
    <van-submit-bar :price="totalPrice" button-text="提交订单" :decimal-length="2" @submit="onSubmit">
      <van-checkbox v-model="check" @click="selectAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { SubmitBar, Toast } from "vant";
import TopBar from "../../components/TopBar";
import CartList from "../cart/childComponents/CartList";
import { mapGetters, mapState } from "vuex";

Vue.use(SubmitBar);

export default {
  data() {
    return {
      navbarTitle: "购物车",
      check: this.$store.state.allChecked,
      goodLists: []
    };
  },
  components: { TopBar, CartList },
  created() {},
  methods: {
    onSubmit(params) {},
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
     */
    isCancelAllSelected(selectedStatus) {
      console.log("cart:" + selectedStatus);
      if (selectedStatus == false) {
        // 如果有一个为false，则取消全选状态
        this.check = selectedStatus;
      } else if (selectedStatus == true && this.goodsIsAllSelected == true) {
        // 如果传入的为true且商品全为true，则选中全选状态
        this.check = selectedStatus;
      }
    }
  },
  watch: {},
  computed: {
    ...mapGetters(["totalPrice", "goodsIsAllSelected", "getGoodLists"])
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

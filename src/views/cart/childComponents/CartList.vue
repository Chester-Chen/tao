<template>
  <div class="cart-list">
    <!-- <van-button type="mini" color="lightpink" v-model="getGoodLists">刷新购物车</van-button> -->
    <!-- 购物车列表 -->
    <div v-for="(item, index) in cartList" :key="index" class="goods-item">
      <van-checkbox v-model="item.selected"></van-checkbox>
      <van-card :price="item.price" :desc="item.desc" :title="item.name" :thumb="item.thumb">
        <div slot="tags">
          <van-tag plain type="danger">热门</van-tag>
          <van-tag plain type="danger">劲爆</van-tag>
        </div>

        <div slot="bottom">
          <div class="van-card__num">{{item.num*item.price}}</div>
          <van-button type="danger"  size="small" @click="">delete</van-button>
        </div>

        <div slot="footer">
          <!-- max min 可以设置范围 -->
          <!-- change	当绑定值变化时触发的事件
          value: 当前组件的值, detail: 额外信息，包含 name 的字段-->
          <!-- <stepper @onPlus="onPlus(item)" min="3" @onMinus="onMinus(item)" ></stepper> -->
          <van-stepper v-model="item.num" min="1"/>
        </div>
      </van-card>
    </div>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { mapGetters } from "vuex";
import { Card, Stepper } from "vant";

// import Stepper from "./Stepper";

Vue.use(Card).use(Stepper);
export default {
  data() {
    return {
      cartList: [], // 用getGoodLists代替，暂时空置
      value: true,
    };
  },
  components: { 
    // Stepper 
  },
  created() {
    // this.cartList = this.$store.getters.getGoodLists;
    // 映射
    this.cartList = this.getGoodLists;

  },
  computed: {
    // 辅助函数
    ...mapGetters(["getGoodLists"])
  },
  methods: {
    onPlus(item) {
      console.log( item.title + ':' + item.purchasecount);
      this.$store.commit("addPurchaseCount", item);
      // alert('aaa'+value);
    },
    onMinus(item) {
      console.log( item.title + ':' + item.purchasecount);
      this.$store.commit("minusPurchaseCount", item);
      // alert('aaa'+value);
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-list {
  margin-bottom: 50px;
  .goods-item {
    display: block;
    margin-top: 8px;
  }
  .van-card__content {
    margin-left: 25px;
    text-align: left;
    .van-card__desc {
      margin: 5px 0;
    }
    .van-card__bottom {
      .van-card__price {
        margin: 5px 0;
        color: #f60;
      }
      .van-card__num::before {
        content: "总价:";
      }
    }
  }
}
</style>

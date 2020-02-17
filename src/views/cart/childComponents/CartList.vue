<template>
  <div class="cart-list">
    <!-- <van-button type="mini" color="lightpink" v-model="getGoodLists">刷新购物车</van-button> -->
    <!-- 购物车列表 -->
    <div v-for="(item, index) in getGoodLists" :key="index" class="goods-item">
      <van-card :price="item.price" :desc="item.desc" :title="item.title" :thumb="item.thumb">
        <div slot="tags">
          <van-tag plain type="danger">热门</van-tag>
          <van-tag plain type="danger">劲爆</van-tag>
        </div>

        <!-- 做不到数量联动，暂时空置 -->

        <div slot="bottom">
          <div class="van-card__num">{{item.purchasecount}}</div>
        </div>

        <div slot="footer">
          <!-- max min 可以设置范围 -->
          <!-- change	当绑定值变化时触发的事件
          value: 当前组件的值, detail: 额外信息，包含 name 的字段-->
          <stepper @onPlus="onPlus(item)" @onMinus="onMinus(item)"></stepper>
        </div>
      </van-card>
    </div>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { mapGetters } from "vuex";
import { Card } from "vant";

import Stepper from "./Stepper";

Vue.use(Card);
export default {
  data() {
    return {
      goods: [], // 用getGoodLists代替，暂时空置
      value: ""
    };
  },
  components: { Stepper },
  computed: {
    /*  getGoodLists()在计算属性中可当作一个值来用。当数据发生变化时，重新计算该值并缓存
    否则只用缓存中的值。*/

    // 方法访问

    /*     getGoodLists() {
      return this.$store.getters.getGoodLists;
    } */

    // 辅助函数
    ...mapGetters(["getGoodLists"])
  },
  methods: {
    onPlus(item) {
      console.log(item.purchasecount);
      this.$store.commit("addPurchaseCount", item);
      // alert('aaa'+value);
    },
    onMinus(item) {
      console.log(item.purchasecount);
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
        content: "x";
      }
    }
  }
}
</style>

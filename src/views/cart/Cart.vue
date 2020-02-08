<template>
  <div id="cart">
    <top-bar :navbarTitle="navbarTitle"></top-bar>
    <!-- 购物车列表 -->
    <a href="#" v-for="(item, index) in goods" :key="index" class="goods-item">
      <van-card :price="item.price" :desc="item.desc" :title="item.title" :thumb="item.thumb">
        <div slot="tags">
          <van-tag plain type="danger">热门</van-tag>
          <van-tag plain type="danger">劲爆</van-tag>
        </div>
        <div slot="bottom">
          <div class="van-card__num">{{value}}</div>
        </div>
        <div slot="footer">
          <!-- max min 可以设置范围 -->
          <!-- change	当绑定值变化时触发的事件
          value: 当前组件的值, detail: 额外信息，包含 name 的字段-->
          <stepper v-model="value"></stepper>
        </div>
      </van-card>
    </a>
    <van-button type="primary" @click="getGoodLists">刷新购物车</van-button>
    <!-- 提交订单栏 -->
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { Card, SubmitBar } from "vant";
import TopBar from "../../components/TopBar";
import Stepper from "./childComponents/Stepper";

Vue.use(Card).use(SubmitBar);

export default {
  data() {
    return {
      navbarTitle: "购物车",
      value: "",
      goods: [],
      checked: ''
    };
  },
  components: { TopBar, Stepper },
  methods: {
    getGoodLists: function() {
      var storage = window.localStorage;
      this.goods = JSON.parse(storage.goods);
      console.log(typeof storage.goods);
    },
    onSubmit: function name(params) {
      
    },
    test: function (item) {
    }
  }
};
</script>

<style lang="scss" scoped>
#cart {
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
        content: "已售";
      }
    }
  }
  .van-submit-bar {
    margin-bottom: 50px;
  }
}
</style>

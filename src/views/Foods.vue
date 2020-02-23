<template>
  <div id="foods">
    <top-bar :navbarTitle="navbarTitle" :isShow="isShow"></top-bar>
    <!-- 单件商品的详情跳转页面未写 -->
    <a href="javascript:void(0);" v-for="(item, index) in goods" :key="index" class="goods-item">
      <van-card :price="item.price" :desc="item.desc" :title="item.name" :thumb="item.thumb">
        <div slot="tags">
          <van-tag plain type="danger">热门</van-tag>
          <van-tag plain type="danger">劲爆</van-tag>
        </div>
        <!-- 自建插槽，处理原生属性的'x'符号 -->
        <div slot="bottom">
          <div class="van-card__num">{{item.sold}}</div>
        </div>
        <div slot="footer">
          <van-button size="mini">购买</van-button>
          <van-button size="mini" @click="addGoods(item)">加入购物车</van-button>
        </div>
      </van-card>
    </a>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { Card } from "vant";
import { mapMutations } from "vuex";
import TopBar from "../components/TopBar";

Vue.use(Card);

export default {
  data() {
    return {
      navbarTitle: "美食",
      isShow: true,
      goods: []
    };
  },
  components: { TopBar },
  created() {

    this.$axios.get('/showgoods').then((response) => {
      // console.log(typeof(response));
      // console.log(response.data);
      this.goods = response.data;
      console.log(this.goods[0].thumb)
    })
  },
  methods: {
    ...mapMutations(['addGoods']),
  }
};
</script>

<style lang="scss" scoped>
#foods {
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
}
</style>

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
      goods: [
        {
          id: 1001,
          thumb: require("../assets/foods/food01.jpeg"),
          num: 1,
          price: 6,
          desc: "[Y-78]WOW双堡套餐兑换券1份",
          name: "肯德基",
          selected: true,
          sold: 80
        },
        {
          id: 1002,
          thumb: require("../assets/foods/food02.jpeg"),
          num: 1,
          price: 90,
          desc: "[江华]李氏煲仔饭5选1",
          name: "李氏农家",
          selected: true,
          sold: 797
        },
        {
          id: 1003,
          thumb: require("../assets/foods/food03.jpeg"),
          num: 1,
          price: 34,
          desc: "[7店通用]【可自提】板烧鸡腿堡麦辣鸡翅薯条组合，建议1-2人使用",
          name: "麦当劳",
          selected: true,
          sold: 1467
        },
        {
          id: 1004,
          thumb: require("../assets/foods/food04.jpeg"),
          num: 1,
          price: 10,
          desc: "[白石]店家推荐，建议2人使用",
          name: "不二老坛子酸菜鱼",
          selected: true,
          sold: 34567
        },
        {
          id: 1005,
          thumb: require("../assets/foods/food05.jpeg"),
          num: 1,
          price: 80,
          desc: "[仁寿广场]招牌螺蛳粉1份，提供免费WiFi",
          name: "柳柳香柳州螺蛳粉",
          selected: true,
          sold: 2345
        },
        {
          id: 1006,
          thumb: require("../assets/foods/food06.jpg"),
          num: 1,
          price: 389,
          desc: "[蓬江]100元代金券1张，可叠加",
          name: "法兰度航空主题餐厅",
          selected: true,
          sold: 467
        },
        {
          id: 1007,
          thumb: require("../assets/foods/food07.jpeg"),
          num: 1,
          price: 450,
          desc: "[仁寿广场]奶茶烧仙草1份，提供免费WiFi",
          name: "林小雪甜品",
          selected: true,
          sold: 405
        }
    
      ]
    };
  },
  components: { TopBar },
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

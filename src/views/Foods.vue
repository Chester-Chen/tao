<template>
  <div id="foods">
    <top-bar :navbarTitle="navbarTitle" :isShow="isShow"></top-bar>
    <!-- 单件商品的详情跳转页面未写 -->
    <a href="#" v-for="(item, index) in goods" :key="index" class="goods-item">
      <van-card :price="item.price" :desc="item.desc" :title="item.title" :thumb="item.thumb">
        <div slot="tags">
          <van-tag plain type="danger">热门</van-tag>
          <van-tag plain type="danger">劲爆</van-tag>
        </div>
        <!-- 自建插槽，处理原生属性的'x'符号 -->
        <div slot="bottom">
          <div class="van-card__num">{{item.num}}</div>
        </div>
        <div slot="footer">
          <van-button size="mini">购买</van-button>
          <van-button size="mini" @click="addToCart(item)">加入购物车</van-button>
        </div>
      </van-card>
    </a>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { Card } from "vant";
import TopBar from "../components/TopBar";

Vue.use(Card);

export default {
  data() {
    return {
      navbarTitle: "美食",
      isShow: true,
      goods: [
        {
          thumb: require("../assets/foods/food01.jpeg"),
          num: "99",
          price: "6.00",
          desc: "[Y-78]WOW双堡套餐兑换券1份",
          title: "肯德基"
        },
        {
          thumb: require("../assets/foods/food02.jpeg"),
          num: "10",
          price: "90.0",
          desc: "[江华]李氏煲仔饭5选1",
          title: "李氏农家"
        },
        {
          thumb: require("../assets/foods/food03.png"),
          num: "300",
          price: "34.50",
          desc: "[江华]杭州小笼包，建议单人使用",
          title: "五谷粗粮包"
        },
        {
          thumb: require("../assets/foods/food04.jpeg"),
          num: "345",
          price: "783.0",
          desc: "[万达广场]日式料理自助餐",
          title: "友垣日本料理·自助餐"
        },
        {
          thumb: require("../assets/foods/food04.jpeg"),
          num: "98",
          price: "783.0",
          desc: "[万达广场]日式料理自助餐",
          title: "友垣日本料理·自助餐"
        },
        {
          thumb: require("../assets/foods/food04.jpeg"),
          num: "546",
          price: "783.0",
          desc: "[万达广场]日式料理自助餐",
          title: "友垣日本料理·自助餐"
        }
      ]
    };
  },
  components: { TopBar },
  methods: {
    addToCart: function(item) {
      // item存放当前商品信息
      // var storage = window.localStorage;
      // var totalGoods = [];
     
      //   var oldGoods = JSON.parse(storage.goods);

      //   // console.log("oldgoods:" + storage.goods);
  
      //   storage.removeItem("goods");
      //   totalGoods.push(oldGoods);
      //   totalGoods.push(item);

      //   // totalGoods = oldGoods.concat(item);
      //   storage.setItem("goods", JSON.stringify(totalGoods));

        //
      var good , data= [];
      this.goods.forEach(element => {

        let thumb = element.thumb;
        let num = element.num;
        let price = element.price;
        let desc = element.desc;
        let title = element.title;

        good.thumb = thumb;
        good.num = num;
        good.price = price;
        good.desc = desc;
        good.title = title;

        data.push(good);
        storage.goods = JSON.stringify(data);
        // console.log(typeof(data))

      });

      console.log(item);
    }
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

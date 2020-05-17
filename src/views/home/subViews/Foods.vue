<template>
  <div id="foods">
    <top-bar :navbarTitle="navbarTitle" :isShow="isShow"></top-bar>
    <!-- 单件商品的详情跳转页面未写 -->
    <div href="javascript:void(0);" v-for="(item, index) in goods" :key="index" class="goods-item">
      <router-link to="/goodsdetail">
        <van-card :price="item.price" :desc="item.desc" :title="item.name" :thumb="item.thumb">
          <div slot="tags">
            <van-tag plain type="danger">热门</van-tag>
            <van-tag plain type="danger">劲爆</van-tag>
          </div>
          <!-- 自建插槽，处理原生属性的'x'符号 -->
          <div slot="bottom">
            <div class="van-card__num">{{item.sold}}</div>
          </div>
        </van-card>
      </router-link>
      <div class="cart-footer">
        <van-button size="mini" @click="skuShow = !skuShow">购买</van-button>
        <van-button size="mini" @click="addGoods(item)">加入购物车</van-button>
      </div>
    </div>
    <!-- sku -->
    <van-sku
      v-model="skuShow"
      :sku="sku"
      :goods="skuGoods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
    />
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { Card, Sku } from "vant";
import { mapMutations } from "vuex";
import TopBar from "@/components/TopBar";

Vue.use(Card).use(Sku);

export default {
  data() {
    return {
      navbarTitle: "美食",
      skuShow: false,
      isShow: true,
      goods: [
        {
          id: 1001,
          thumb: require("@/assets/foods/food01.jpeg"),
          num: 1,
          price: 6,
          desc: "[Y-78]WOW双堡套餐兑换券1份",
          name: "肯德基",
          selected: true,
          sold: 80
        },
        {
          id: 1002,
          thumb: require("@/assets/foods/food02.jpeg"),
          num: 1,
          price: 90,
          desc: "[江华]李氏煲仔饭5选1",
          name: "李氏农家",
          selected: true,
          sold: 797
        },
        {
          id: 1003,
          thumb: require("@/assets/foods/food03.jpeg"),
          num: 1,
          price: 34,
          desc: "[7店通用]【可自提】板烧鸡腿堡麦辣鸡翅薯条组合，建议1-2人使用",
          name: "麦当劳",
          selected: true,
          sold: 1467
        },
        {
          id: 1004,
          thumb: require("@/assets/foods/food04.jpeg"),
          num: 1,
          price: 10,
          desc: "[白石]店家推荐，建议2人使用",
          name: "不二老坛子酸菜鱼",
          selected: true,
          sold: 34567
        },
        {
          id: 1005,
          thumb: require("@/assets/foods/food05.jpeg"),
          num: 1,
          price: 80,
          desc: "[仁寿广场]招牌螺蛳粉1份，提供免费WiFi",
          name: "柳柳香柳州螺蛳粉",
          selected: true,
          sold: 2345
        },
        {
          id: 1006,
          thumb: require("@/assets/foods/food06.jpg"),
          num: 1,
          price: 389,
          desc: "[蓬江]100元代金券1张，可叠加",
          name: "法兰度航空主题餐厅",
          selected: true,
          sold: 467
        },
        {
          id: 1007,
          thumb: require("@/assets/foods/food07.jpeg"),
          num: 1,
          price: 450,
          desc: "[仁寿广场]奶茶烧仙草1份，提供免费WiFi",
          name: "林小雪甜品",
          selected: true,
          sold: 405
        }
      ],
    
      quota: 9,
      quotaUsed: 5,
      goodsId: 56789,
      sku: {
        // 数据结构见文档
      },
      messageConfig: {
        // 数据结构见文档
      },
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/2.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://img.yzcdn.cn/2.jpg" // 用于预览显示的规格类目图片
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl: "https://img.yzcdn.cn/2.jpg",
                previewImgUrl: "https://img.yzcdn.cn/2.jpg"
              },
              {
                id: "1215",
                name: "黑色",
                imgUrl: "https://img.yzcdn.cn/2.jpg",
                previewImgUrl: "https://img.yzcdn.cn/2.jpg"
              }
            ],
            k_s: "s2" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "30349", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      skuGoods: {
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/2.jpg"
      }
    };
  },
  components: { TopBar, Sku },
  created() {
    /* 
    this.$axios.get('/showgoods').then((response) => {
      // console.log(typeof(response));
      // console.log(response.data);
      this.goods = response.data;
      console.log(this.goods[0].thumb)
    }) */
  },
  methods: {
    ...mapMutations(["addGoods"])
  }
};
</script>

<style lang="scss" scoped>
#foods {
  .goods-item {
    padding: 5px;
    .cart-footer {
      text-align: right;
      background-color: #fafafa;
      .van-button {
        margin-right: 8px;
      }
    }
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

<template>
  <div class="orders">
    <top-bar :navbarTitle="navbarTitle"></top-bar>
    <!-- 清空本地订单 -->
    <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="deleteAllOrders">清除所有订单</van-button>
    <div
      href="javascript:void(0);"
      v-for="(item, index) in orderLists"
      :key="index"
      class="goods-item"
    >
      <router-link to="/goodsdetail">
        <van-card :price="item.price" :desc="item.desc" :title="item.name" :thumb="item.thumb">
          <!-- 自建插槽，处理原生属性的'x'符号 -->
          <div slot="bottom">
            <div class="van-card__num">{{item.num}}</div>
            <div class="total-price">{{item.num*item.price}}</div>
          </div>
        </van-card>
      </router-link>

      <div class="cart-footer">
        <van-button size="small">延迟收货</van-button>
        <van-button size="small" @click="getTransferId(item)" :to="{path: '/transfer', query: {transferId: item.id}}">物流信息</van-button>
        <van-button size="small" class="accepted">确认收货</van-button>
      </div>
    </div>

    <!-- 底部导航 -->
    <footer-tar-bar :active="active"></footer-tar-bar>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import FooterTarBar from "@/components/FooterTarBar";
import TopBar from "@/components/TopBar";
import { mapGetters } from "vuex";
import { Card } from "vant";

Vue.use(Card);

export default {
  data() {
    return {
      navbarTitle: "订单",
      active: 1,
      orderLists: [],
      transferId: null
    };
  },
  components: {
    TopBar,
    FooterTarBar
  },
  created() {
    this.orderLists = this.getOrderLists;
    console.log(this.orderLists);
  },
  methods: {
    getTransferId(order) {
      // 获取商品id
      this.transferId = order.id;
      console.log("物流商品的id: " + this.transferId);
    },
    deleteAllOrders() {
      this.orderLists = [];
      this.$store.commit('clearAllOrders');
    }
  },
  computed: {
    ...mapGetters(["getOrderLists"])
  }
};
</script>

<style lang="scss" scoped>
.orders {
  .goods-item {
    padding: 5px;
    .cart-footer {
      text-align: right;
      background-color: #fafafa;
      .accepted {
        color: #f60;
      }
      .van-button {
        // font-size: 1rem;
        margin-right: 8px;
        margin-bottom: 10px;
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

      .total-price {
        color: #333;
        font-size: 1rem;
        font-weight: 300;
      }
      .total-price::before {
        content: "合计: ￥";
      }
      .van-card__num::before {
        content: "x";
      }
    }
  }
}
</style>

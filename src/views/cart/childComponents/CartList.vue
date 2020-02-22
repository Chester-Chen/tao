<template>
  <div class="cart-list">
    <!-- <van-button type="mini" color="lightpink" v-model="getGoodLists">刷新购物车</van-button> -->
    <!-- 购物车列表 -->
    <div v-for="(item, index) in cartList" :key="index" class="goods-item">
      <van-checkbox v-model="item.selected" @click="selectedHandler(item.selected)"></van-checkbox>
      <van-card :price="item.price" :desc="item.desc" :title="item.name" :thumb="item.thumb">
        <div slot="tags">
          <van-tag plain type="danger">热门</van-tag>
          <van-tag plain type="danger">劲爆</van-tag>
        </div>

        <div slot="bottom">
          <div class="van-card__num">{{item.num*item.price}}</div>
        </div>

        <div slot="footer">
          <!-- max min 可以设置范围 -->
          <!-- change	当绑定值变化时触发的事件
          value: 当前组件的值, detail: 额外信息，包含 name 的字段-->
          <!-- <stepper @onPlus="onPlus(item)" min="3" @onMinus="onMinus(item)" ></stepper> -->
          <van-button type="danger" size="small" @click="deleteGoodsById(item.id)">delete</van-button>
          <van-stepper v-model="item.num" min="1" />
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
      value: true
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
    deleteGoodsById(id) {
      console.log("删除商品id: " + id);
      // console.log('所有商品: ' + JSON.stringify(this.cartList));
      const index = this.cartList.findIndex(value => value.id === id);
      console.log("delete index: " + index);
      this.cartList.splice(index, 1);
    },
    selectedHandler(selectedStatus) {
      console.log('cartlist:'+ !selectedStatus);
      this.$emit('isCancelAllSelected', (!selectedStatus) );  // 取反，传出取消后的状态
    }

    // onPlus(item) {
    //   console.log(item.title + ":" + item.purchasecount);
    //   this.$store.commit("addPurchaseCount", item);
    //   // alert('aaa'+value);
    // },
    // onMinus(item) {
    //   console.log(item.title + ":" + item.purchasecount);
    //   this.$store.commit("minusPurchaseCount", item);
    //   // alert('aaa'+value);
    // }
  }
};
</script>

<style lang="scss" scoped>
.cart-list {
  // display: flex;
  margin-bottom: 50px;
  // justify-content: center;
  .goods-item {
    display: flex;
    margin-top: 8px;
    width: 100%;
    position: relative;
    // justify-items: center;
    .van-checkbox {
      // display: inline-block;
      float: left;
      width: 20px;
      // margin-right: 5px;
      align-items: center;
    }
    .van-card {
      display: inline-block;
      position: relative;
      width: 90%;
      padding-right: 2px;
      right: -10px;
      .van-card__footer {
        .van-button {
          float: left;
        }
        .van-stepper {
          display: inline-block;
        }
      }
    }
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

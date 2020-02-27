<template>
  <div id="goods-detail">
    <top-bar :navbarTitle="navbarTitle" :isShow="isShow"></top-bar>

    <!-- 轮播图 -->
    <van-swipe :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in goodsDetail.swipeImages.url" :key="index">
        <img :src="item" width="100%" />
      </van-swipe-item>
    </van-swipe>

    <!-- 商品详情介绍 -->
    <div class="goods-detail">
      <div class="top">
        <div class="price">
          <span class="present-price">3543-5677</span>
          <van-tag type="primary" color="#ff5000" class="txt">惊喜价</van-tag>
          <van-tag type="primary" color="#ff5000" class="txt">优惠促销</van-tag>
        </div>
        <div class="origin-price">
          价格
          <span>3543</span>
        </div>
      </div>
      <div class="middle">玫瑰花仿真客厅摆件茶几电视柜家居装饰花束绢花餐桌摆设花艺用品</div>
      <div class="footer">
        <div class="deliver">快递: 免运费</div>
        <div class="sale">月销量: 57889</div>
        <div class="address">深圳</div>
      </div>
    </div>

    <!-- 分割线 -->
    <div class="divider" style="height: 5px;background: #f5f5f5;"></div>

    <!-- 优惠选择 -->
    <div class="size-selected">
      <div class="item">
        <div class="left">优惠</div>
        <div class="center">满900减10元券</div>
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 规格选择 -->
    <div class="size-selected">
      <div class="item">
        <div class="left">规格</div>
        <div class="center">请选择颜色分类</div>
        <van-icon name="arrow" />
      </div>
    </div>

    <!-- 参数选择 -->
    <div class="size-selected">
      <div class="item">
        <div class="left">参数</div>
        <div class="center">品牌材质...</div>
        <van-icon name="arrow" />
      </div>
    </div>

    <!-- 分割线 -->
    <div class="divider" style="height: 5px;background: #f5f5f5;"></div>
    <!-- footer -->

    <!-- 参数选择 -->
    <div class="size-selected comment">
      <div class="item">
        <div class="left">Tao评价</div>
        <!-- <div class="center">品牌材质...</div>
        <van-icon name="arrow" />-->
      </div>
    </div>

    <!-- comment -->
    <div class="comment">
      <div class="avator">
        <van-image round width="1.2rem" height="1.2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="name">疯狂的小弟弟</div>
      </div>
      <div class="content">很中国很复古，一眼相中，手感细腻，特别是背面的细节做的非常精致很中国很复古，一眼相中，手感细腻，特别是背面的细节做的非常精致</div>
      <div class="icon">
        <a href="javascript: void(0);">
          <van-icon name="good-job-o" />
        </a>
        <a href="javascript: void(0);">
          <van-icon name="comment-o" />
        </a>
      </div>
    </div>

    <!-- 底部导航 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import TopBar from "@/components/TopBar";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
export default {
  data() {
    return {
      navbarTitle: "商品详情",
      isShow: true,
      goodsDetail: {
        // 根据传入的商品id进行接口数据对比，筛选相应数据渲染
        id: 1001,
        swipeImages: {
          url: [
            "//img.alicdn.com/imgextra/i1/36102699/TB2vFKGigLD8KJjSszeXXaGRpXa_!!36102699.jpg_640x640q80_.webp",
            "//img.alicdn.com/imgextra/i4/36102699/TB2VRCiih6I8KJjSszfXXaZVXXa_!!36102699.jpg_640x640q80_.webp"
          ]
        },
        goodsPrice: {
          price: "235",
          originPrice: "667",
          desc: "北欧表情/N.U.新都市系列实木床/墨尔本布艺软包双人床多款TZ",
          sold: 688,
          address: "北京",
          freeDeliver: true
        }
      }
    };
  },
  created() {
    // console.log(this.goodsDetail.swipeImages);
  },
  components: { TopBar },
  methods: {
    onClickIcon() {},
    onClickButton() {}
  }
};
</script>

<style lang="scss" scoped>
#goods-detail {
  width: 100%;
  margin-bottom: 50px;
  .goods-detail {
    .top {
      .price {
        display: flex;
        color: #ff5000;
        .present-price {
          // font-weight: bold;
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }
        .van-tag {
          margin-right: 0.5rem;
          font-size: 0.5em;
          height: 1rem;
        }
        .present-price::before {
          content: "\FFE5";
          font-size: 1rem;
          font-weight: 500;
        }
      }
      .origin-price {
        display: flex;
        color: #888;
        font-size: 0.7rem;
      }
      .origin-price > span {
        text-decoration-line: line-through;
      }
      .origin-price > span::before {
        content: "\FFE5";
        display: inline-block;
        font-size: 0.15rem;
        margin-left: -0.035rem;
      }
      padding: 7px 10px 7px 10px;
    }

    .middle {
      font-size: 0.9rem;
      font-weight: 400;
      padding: 0 10px;
      text-align: left;
      margin: 8px 0;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      font-size: 0.7rem;
      padding: 0 10px 10px;
      color: #888;
    }
  }

  .size-selected,
  .comment {
    margin: 10px;
    .avator {
      display: flex;
    }
    .item {
      display: flex;
      font-size: 14px;
      color: rgb(51, 51, 51);
      width: 100%;
      height: 2.7rem;
      line-height: 2.7rem;

      .left {
        margin-right: 1rem;
        // margin-left: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 5%;
        max-width: 9%;
        color: #999999;
      }
      .center {
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
      }
      .van-icon {
        line-height: 2.7rem;
        color: #999999;
      }
    }
  }
  .comment {
    .item {
      .left {
        text-align: left;
        min-width: 20%;
      }
    }
  }
  .comment {
    margin-bottom: 15px;
    .avator {
      margin-bottom: 4px;
      .van-image {
        margin-right: 10px;
      }
      .name {
        font-size: 0.3rem;
        color: #999999;
      }
    }
    .content {
      font-size: 0.8rem;
      text-align: left;
    }
    .icon {
   
      .van-icon {
        font-size: 1.2rem;
        margin-right: 15px;
        color: #999;
      }
      text-align: right;
    }
  }
}
</style>

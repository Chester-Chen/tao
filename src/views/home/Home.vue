<template>
  <div class="home">
    <!-- topbar -->
    <top-bar :navbarTitle="navbarTitle"></top-bar>
    <!-- 搜索框 -->
    <van-search
      v-model="value"
      shape="round"
      background="rgba(255, 184, 0, 0.8)"
      placeholder="请输入搜索关键词"
    />

    <!-- 轮播图 -->
    <van-swipe :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" width="100%" />
      </van-swipe-item>
    </van-swipe>

    <!-- 宫格 -->
    <van-grid>
      <van-grid-item
        v-for="(item, index) in gridImages"
        :key="index"
        :icon="item.url"
        :text="item.text"
        :to="item.to"
      />

    </van-grid>

    <!-- 通知消息 -->
    <van-notice-bar :text="noticeText" left-icon="volume-o" />

    <!-- ad -->
    <img
      class="ad"
      src="//gw.alicdn.com/tfs/TB1jG0De1bviK0jSZFNXXaApXXa-750-386.png_790x10000.jpg_.webp"
      alt="ad-placeholder"
      srcset
    />

    <!-- 推荐 -->
    <div class="recommend-container">
      <div class="item-list">
        <div class="item">
          <!-- title -->
          <div class="item-title">限时抢购</div>
          <div class="item-content">
            <!-- lef -->
            <div class="item-left">
              <img
                src="@/assets/logo.png"
                @click="tip"
              />
              <van-tag mark type="warning" size="small">好货必买</van-tag>
            </div>
            <!-- right -->
            <div class="item-right">
              <img
                src="//gw.alicdn.com/tps/i3/2200757237600/O1CN01dyAlSd260qfCm0Ip0_!!2-item_pic.png_170x10000.jpg_.webp"
                alt
              />
              <van-tag mark type="warning" size="small">好货必买</van-tag>
            </div>
          </div>
        </div>

        <div class="item">
          <!-- title -->
          <div class="item-title">限时抢购</div>
          <div class="item-content">
            <!-- lef -->
            <div class="item-left">
              <img
                src="//gw.alicdn.com/tps/bao/upload/TB1ZD26aL5G3KVjSZPxXXbI3XXa.png_170x10000.jpg_.webp"
                alt
              />
              <van-tag mark type="warning" size="small">好货必买</van-tag>
            </div>
            <!-- right -->
            <div class="item-right">
              <img
                src="//gw.alicdn.com/bao/upload/TB1bh_bj4z1gK0jSZSgXXavwpXa.png_170x10000.jpg_.webp"
                alt
              />
              <van-tag mark type="warning" size="small">好货必买</van-tag>
            </div>
          </div>
        </div>
        
        <div class="item">
          <!-- title -->
          <div class="item-title">限时抢购</div>
          <div class="item-content">
            <!-- lef -->
            <div class="item-left">
              <img
                src="//gw.alicdn.com/tps/bao/upload/TB1ZD26aL5G3KVjSZPxXXbI3XXa.png_170x10000.jpg_.webp"
                alt
              />
              <van-tag mark type="warning" size="small">好货必买</van-tag>
            </div>
            <!-- right -->
            <div class="item-right">
              <img
                src="//gw.alicdn.com/bao/upload/TB1bh_bj4z1gK0jSZSgXXavwpXa.png_170x10000.jpg_.webp"
                alt
              />
              <van-tag mark type="warning" size="small">好货必买</van-tag>
            </div>
          </div>
        </div>

        <div class="item">
          <!-- title -->
          <div class="item-title">限时抢购</div>
          <div class="item-content">
            <!-- lef -->
            <div class="item-left">
              <img
                src="//gw.alicdn.com/tps/bao/upload/TB1ZD26aL5G3KVjSZPxXXbI3XXa.png_170x10000.jpg_.webp"
                alt
              />
              <van-tag mark type="warning" size="small">好货必买</van-tag>
            </div>
            <!-- right -->
            <div class="item-right">
              <img
                src="//gw.alicdn.com/bao/upload/TB1bh_bj4z1gK0jSZSgXXavwpXa.png_170x10000.jpg_.webp"
                alt
              />
              <van-tag mark type="warning" size="small">好货必买</van-tag>
            </div>
          </div>
        </div>


      </div>

    </div>

    <!-- 猜你喜欢 -->
    <van-divider>猜你喜欢</van-divider>

    <!-- 无限加载 -->
    <infinite-loading></infinite-loading>

    <!-- 底部导航 -->
    <footer-tar-bar :active="active"></footer-tar-bar>

  </div>
</template>

<script>
import Vue from "vue";
import FooterTarBar from "@/components/FooterTarBar";
import InfiniteLoading from "@/components/InfiniteLoading";
import TopBar from "@/components/TopBar";
import {
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Image,
  NoticeBar,
  Search,
  Lazyload,
  Toast
} from "vant";

Vue.use(Swipe)
  .use(SwipeItem)
  .use(Grid)
  .use(GridItem)
  .use(Image)
  .use(NoticeBar)
  .use(Search)
  .use(Lazyload)
  .use(Image);

export default {
  name: "home",
  data() {
    return {
      noticeText: "买口罩啦！100元70只，火爆促销！机不可失失不再来！！！！！",
      value: "",
      navbarTitle: "淘兴趣",
      active: 0,
      images: [
        "//gw.alicdn.com/imgextra/i3/939554/O1CN01Hohccc2KRmavUmXmd_!!939554-0-lubanu.jpg_790x10000Q75.jpg_.webp",
        "//gw.alicdn.com/imgextra/i3/939554/O1CN01Hohccc2KRmavUmXmd_!!939554-0-lubanu.jpg_790x10000Q75.jpg_.webp",
        "//gw.alicdn.com/imgextra/i3/939554/O1CN01Hohccc2KRmavUmXmd_!!939554-0-lubanu.jpg_790x10000Q75.jpg_.webp"
      ],
      gridImages: [
        {
          url:
            "//gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp",
          text: "美食",
          to: "/home/foods"
        },
        {
          url:
            "//gw.alicdn.com/tfs/TB1wSoFa5qAXuNjy1XdXXaYcVXa-196-196.png?avatar=1_110x10000.jpg_.webp",
          text: "电影",
          to: "/home/movie"
        },
        {
          url:
            "//gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp",
          text: "旅游",
          to: "/home/travel"
        },
        {
          url:
            "//gw.alicdn.com/tfs/TB12CFXSFXXXXcpapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp",
          text: "休闲",
          to: "/home/leisure"
        }
      ]
    };
  },
  methods: {
    onSearch: function() {},
    onCancel: function() {},
    tip: function () {
      Toast("test ifo");
    }
  },
  components: {
    TopBar,
    InfiniteLoading,
    FooterTarBar
  }
};
</script>

<style lang="scss" scoped>
.home {
  .vanrow-container {
    border-radius: 50%;
  }
  margin-bottom: 50px;
  .ad {
    width: 100%;
    height: 10rem;
  }
  .van-notice-bar {
    height: 30px;
  }
  .recommend-container {
    display: flex;
    padding: 0.5em;
    .item {
      box-sizing: border-box;
      display: inline-block;
      width: 45%;
      justify-content: space-around;
      background-color: #f7f7f7;
      margin: 0.5em;
      padding: 5px;
      border-radius: 10%;
      img {
        width: 50%;
        height: 50%;
        margin: 0.5em;
      }
      .item-title {
        text-indent: 1em;
        text-align: left;
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
    .item-content .item-left {
      display: inline-block;
      width: 50%;
      flex-grow: 1;
    }
    .item-content .item-right {
      display: inline-block;
      width: 50%;
      flex-grow: 1;
    }
  }

.van-divider {
  margin: 0;
}

}
</style>
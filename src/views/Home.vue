<template>
  <div class="home">
    <!-- topbar -->
    <TopBar :navbarTitle="navbarTitle"></TopBar>

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
    <van-row type="flex" justify="space-around">

      <van-col class="card-block" :span="12">
        <van-row class="card-row">
          <van-col :span="12">限时</van-col>
          <van-col :span="12">特惠</van-col>
          <van-col :span="12">
            <a href="#">
              <img
                src="//gw.alicdn.com/tps/i4/2091054905/O1CN014Vz5AB1m6XGHYyQaz_!!2-item_pic.png_170x10000.jpg_.webp"
                alt="adPic"
              />
            </a>
          </van-col>
          <van-col :span="12">
            <a href="#">
              <img
                src="//gw.alicdn.com/tps/i4/2091054905/O1CN014Vz5AB1m6XGHYyQaz_!!2-item_pic.png_170x10000.jpg_.webp"
                alt="adPic"
              />
            </a>
          </van-col>
        </van-row>
      </van-col>

      <van-col class="card-block" :span="12">
        <van-row class="card-row">
          <van-col :span="12">限时</van-col>
          <van-col :span="12">特惠</van-col>
          <van-col :span="12">
            <a href="#">
              <img
                src="//gw.alicdn.com/tps/i4/2091054905/O1CN014Vz5AB1m6XGHYyQaz_!!2-item_pic.png_170x10000.jpg_.webp"
                alt="adPic"
              />
            </a>
          </van-col>
          <van-col :span="12">
            <a href="#">
              <img
                src="//gw.alicdn.com/tps/i4/2091054905/O1CN014Vz5AB1m6XGHYyQaz_!!2-item_pic.png_170x10000.jpg_.webp"
                alt="adPic"
              />
            </a>
          </van-col>
        </van-row>
      </van-col>
      
    </van-row>
    <van-row type="flex" justify="space-around">

      <van-col class="card-block" :span="12">
        <van-row class="card-row">
          <van-col :span="12">限时</van-col>
          <van-col :span="12">特惠</van-col>
          <van-col :span="12">
            <a href="#">
              <img
                src="//gw.alicdn.com/tps/i4/2091054905/O1CN014Vz5AB1m6XGHYyQaz_!!2-item_pic.png_170x10000.jpg_.webp"
                alt="adPic"
              />
            </a>
          </van-col>
          <van-col :span="12">
            <a href="#">
              <img
                src="//gw.alicdn.com/tps/i4/2091054905/O1CN014Vz5AB1m6XGHYyQaz_!!2-item_pic.png_170x10000.jpg_.webp"
                alt="adPic"
              />
            </a>
          </van-col>
        </van-row>
      </van-col>

      <van-col class="card-block" :span="12">
        <van-row class="card-row">
          <van-col :span="12">限时</van-col>
          <van-col :span="12">特惠</van-col>
          <van-col :span="12">
            <a href="#">
              <img
                src="//gw.alicdn.com/tps/i4/2091054905/O1CN014Vz5AB1m6XGHYyQaz_!!2-item_pic.png_170x10000.jpg_.webp"
                alt="adPic"
              />
            </a>
          </van-col>
          <van-col :span="12">
            <a href="#">
              <img
                src="//gw.alicdn.com/tps/i4/2091054905/O1CN014Vz5AB1m6XGHYyQaz_!!2-item_pic.png_170x10000.jpg_.webp"
                alt="adPic"
              />
            </a>
          </van-col>
        </van-row>
      </van-col>
      
    </van-row>

    <!-- 猜你喜欢 -->
    <van-divider>猜你喜欢</van-divider>

    <!-- 无限加载 -->
    <infinite-loading></infinite-loading>
  </div>
</template>

<script>
import Vue from "vue";
import InfiniteLoading from "../components/InfiniteLoading";
import TopBar from "../components/TopBar";
import {
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Image,
  NoticeBar,
  Search,
  Lazyload
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
      images: [
        "//gw.alicdn.com/imgextra/i3/939554/O1CN01Hohccc2KRmavUmXmd_!!939554-0-lubanu.jpg_790x10000Q75.jpg_.webp",
        "//gw.alicdn.com/imgextra/i3/939554/O1CN01Hohccc2KRmavUmXmd_!!939554-0-lubanu.jpg_790x10000Q75.jpg_.webp",
        "//gw.alicdn.com/imgextra/i3/939554/O1CN01Hohccc2KRmavUmXmd_!!939554-0-lubanu.jpg_790x10000Q75.jpg_.webp"
      ],
      gridImages: [
        {
          url:
            "//gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp",
          text: "美食"
        },
        {
          url:
            "//gw.alicdn.com/tfs/TB1wSoFa5qAXuNjy1XdXXaYcVXa-196-196.png?avatar=1_110x10000.jpg_.webp",
          text: "电影"
        },
        {
          url:
            "//gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp",
          text: "旅游"
        },
        {
          url:
            "//gw.alicdn.com/tfs/TB12CFXSFXXXXcpapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp",
          text: "休闲"
        }
      ]
    };
  },
  methods: {
    onSearch: function() {},
    onCancel: function() {}
  },
  components: {
    TopBar,
    InfiniteLoading
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin-bottom: 50px;
  .ad {
    width: 100%;
    height: 10rem;
  }
  .van-notice-bar {
    height: 30px;
  }
  .card-block {
    margin: 5px 10px;
    background-color: #f7f7f7;
  }
  .van-col {
    overflow: hidden;
    img {
      width: 50%;
      height: 50%;
    }
  }
}
</style>
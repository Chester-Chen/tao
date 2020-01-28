<template>
  <div class="home">
    <!-- topbar -->
    <van-nav-bar title="淘兴趣" />
    <!-- 搜索框 -->
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 九宫格 -->
    <van-grid>
      <van-grid-item icon="https://img.yzcdn.cn/vant/apple-1.jpg" text="文字" />
      <van-grid-item icon="https://img.yzcdn.cn/vant/apple-1.jpg" text="文字" />
      <van-grid-item icon="https://img.yzcdn.cn/vant/apple-1.jpg" text="文字" />
      <van-grid-item icon="https://img.yzcdn.cn/vant/apple-1.jpg" text="文字" />
      <van-grid-item icon="https://img.yzcdn.cn/vant/apple-1.jpg" text="文字" />
      <van-grid-item icon="https://img.yzcdn.cn/vant/apple-1.jpg" text="文字" />
      <van-grid-item icon="https://img.yzcdn.cn/vant/apple-1.jpg" text="文字" />
      <van-grid-item icon="https://img.yzcdn.cn/vant/apple-1.jpg" text="文字" />
    </van-grid>
    <!-- 通知消息 -->
    <van-notice-bar :text="noticeText" left-icon="volume-o" />
  </div>
</template>

<script>
import Vue from "vue";
import {
  NavBar,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Image,
  NoticeBar,
  Search 
} from "vant";

Vue.use(NavBar)
  .use(Swipe)
  .use(SwipeItem)
  .use(Grid)
  .use(GridItem)
  .use(Image)
  .use(NoticeBar)
  .use(Search);

export default {
  name: "home",
  data() {
    return {
      noticeText: "买口罩啦！100元70只，火爆促销！机不可失失不再来！！！！！",
      value: ''
    };
  },
  methods: {
    onSearch: function() {
      
    },
    onCancel: function () {
      
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.van-notice-bar {
  height: 30px;
}
</style>
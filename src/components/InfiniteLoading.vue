<template>
  <div class="loading">
    <div class="recommend-container">
      <div class="item-lists">
        <div class="item" v-for="(item, index) in lists" :key="index">
          <!-- title -->
          <div class="item-title">{{item[0].name}}</div>
          <div class="item-content">
            <!-- lef -->
            <div class="item-left">
              <img :src="item[0].src" alt />
              <van-tag mark type="warning" size="small">price:{{item[0].price}}</van-tag>
            </div>
            <!-- right -->
            <!-- <div class="item-title">{{item[1].name}}</div> -->
            <div class="item-right">
              <img :src="item[1].src" alt />
              <van-tag mark type="warning" size="small">price:{{item[1].price}}</van-tag>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- infinite-loading 要放在列表的底部，滚动的盒子里面 -->
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";

export default {
  data() {
    return {
      lists: []
    };
  },
  methods: {
    infiniteHandler($state) {
      let data = [
        {
          name: "衣服",
          price: 210,
          src:
            "https://s1.ax1x.com/2020/05/15/YrW2Nj.jpg"
        },
        {
          name: "鞋子",
          price: 404,
          src:
            "https://s1.ax1x.com/2020/05/15/YrWgEQ.jpg"
        }
      ];
      // 获取商品信息
      setTimeout(() => {
        const temp = [];
        for (let i = this.lists.length + 1; i <= this.lists.length + 10; i++) {
          // temp.push(i);
          temp.push(data);
          // console.log(temp);
        }
        // 合并数组
        this.lists = this.lists.concat(temp);
        $state.loaded();
      }, 1000);

      // console.log(this.lists);
    }
  },
  components: {
    InfiniteLoading
  }
};
</script>

<style scoped lang="scss">
.loading {
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
  // 无限滚动
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
}
</style>

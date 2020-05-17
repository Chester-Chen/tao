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
    <div class="size-selected" @click="skuShow = !skuShow">
      <div class="item">
        <div class="left">优惠</div>
        <div class="center">满900减10元券</div>
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 规格选择 -->
    <div class="size-selected" @click="skuShow = !skuShow">
      <div class="item">
        <div class="left">规格</div>
        <div class="center">请选择颜色分类</div>
        <van-icon name="arrow" />
      </div>
    </div>

    <!-- 参数选择 -->
    <div class="size-selected" @click="skuShow = !skuShow">
      <div class="item">
        <div class="left">参数</div>
        <div class="center">品牌材质...</div>
        <van-icon name="arrow" />
      </div>
    </div>

    <!-- 分割线 -->
    <div class="divider" style="height: 5px;background: #f5f5f5;"></div>

    <!-- 参数选择 -->
    <div class="size-selected comment">
      <div class="item">
        <div class="left">Tao评价</div>
        <!-- <div class="center">品牌材质...</div>
        <van-icon name="arrow" />-->
      </div>
    </div>

    <!-- comment -->
    <div class="comment-list" v-for="(item, index) in comment_lists" :key="index">
      <div class="comment">
        <div class="avator">
          <van-image round width="1.2rem" height="1.2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <div class="wrapper">
            <div class="name">{{item.name}}</div>
            <van-rate size="18" v-model="rateValue" />
          </div>
        </div>
        <div class="content">{{item.content}}</div>
        <div class="icon">
          <a href="javascript: void(0);">
            <van-icon name="good-job-o" />
          </a>
          <a href="javascript: void(0);">
            <van-icon name="comment-o" />
          </a>
        </div>
      </div>
    </div>

    <!-- 参数选择 -->
    <div class="divider" style="height: 5px;background: #f5f5f5;"></div>

    <!-- 用户评价输入 -->
    <div class="user_input">
      <van-field
        v-model="message"
        rows="2"
        autosize
        label="评论"
        type="textarea"
        maxlength="100"
        placeholder="请输入留言"
        show-word-limit
        label-width="50"
      />
      <van-button type="danger" size="mini" @click="commentPost">提交</van-button>
    </div>

    <!-- 参数选择 -->
    <div class="divider" style="height: 5px;background: #f5f5f5;"></div>
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
import TopBar from "@/components/TopBar";
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Swipe,
  SwipeItem,
  Rate,
  Sku
} from "vant";

Vue.use(GoodsAction)
  .use(GoodsActionButton)
  .use(GoodsActionIcon)
  .use(Rate)
  .use(Sku);

export default {
  data() {
    return {
      navbarTitle: "商品详情",
      isShow: true,
      rateValue: 3,
      message: "",
      comment_lists: [
        {
          name: "CrazyBro",
          content:
            "很中国很复古，一眼相中，手感细腻，特别是背面的细节做的非常精致很中国很复古，一眼相中，手感细腻，特别是背面的细节做的非常精致"
        },
        {
          name: "小王",
          content:
            "很中国很复古，一眼相中，手感细腻，特别是背面的细节做的非常精致很中国很复古，一眼相中，手感细腻，特别是背面的细节做的非常精致"
        },
        {
          name: "小李",
          content:
            "很中国很复古，一眼相中，手感细腻，特别是背面的细节做的非常精致很中国很复古，一眼相中，手感细腻，特别是背面的细节做的非常精致"
        },
        {
          name: "老马",
          content:
            "很中国很复古，一眼相中，手感细腻，特别是背面的细节做的非常精致很中国很复古，一眼相中，手感细腻，特别是背面的细节做的非常精致"
        }
      ],
      goodsDetail: {
        // 根据传入的商品id进行接口数据对比，筛选相应数据渲染
        id: 1001,
        swipeImages: {
          url: [
            "https://s1.ax1x.com/2020/05/15/YrfWZD.png",
            "https://s1.ax1x.com/2020/05/15/Yrf2qO.png"
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
      },
      // sku
      skuShow: false,
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
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
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
  created() {
    // console.log(this.goodsDetail.swipeImages);
  },
  components: { TopBar },
  methods: {
    onClickIcon() {},
    onClickButton() {},
    commentPost() {
      let object = new Object();
      let name = sessionStorage.getItem('userName');  // 获取当前用户名
      object.name = name;
      object.content = this.message;
      this.comment_lists.unshift(object);
      this.message = '';
    }
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
      .wrapper {
        display: flex;
        flex-direction: column;
        .name {
          font-size: 0.3rem;
          color: #999999;
          text-align: left;
          padding-left: 3px;
        }
      }
      margin-bottom: 4px;
      .van-image {
        margin-right: 10px;
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
  .user_input {
    overflow: auto;
    .van-button--mini {
      float: right;
      margin-right: 1rem;
    }
  }
}
</style>

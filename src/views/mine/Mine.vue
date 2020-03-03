<template>
  <div class="mine">
    <top-bar :navbarTitle="navbarTitle"></top-bar>

    <!-- 个人信息 -->
    <router-link to="/personal" tag="div">
      <div class="personal-ifo">
        <div class="avator">
          <van-image round width="3rem" height="3rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="ifo">
          <div class="name">CrazyBro丶</div>
        </div>
        <div class="arrow">
          <van-icon name="arrow" />
        </div>
      </div>
    </router-link>

    <div class="top">
      <router-link to="/personal" tag="div">
        <div class="personal-ifo">
          <div class="ifo">我的收货地址</div>
          <div class="arrow">
            <van-icon name="arrow" />
          </div>
        </div>
      </router-link>

      <router-link to="/personal" tag="div">
        <div class="personal-ifo">
          <div class="ifo">账户与安全</div>
          <div class="arrow">
            <van-icon name="arrow" />
          </div>
        </div>
      </router-link>
    </div>

    <router-link to="/personal" tag="div">
      <div class="personal-ifo">
        <div class="ifo">地区设置</div>
        <div class="arrow">
          <van-icon name="arrow" />
        </div>
      </div>
    </router-link>

    <router-link to="/personal" tag="div">
      <div class="personal-ifo">
        <div class="ifo">关于Tao兴趣</div>
        <div class="arrow">
          <van-icon name="arrow" />
        </div>
      </div>
    </router-link>

    <router-link to="/personal" tag="div">
      <div class="personal-ifo">
        <div class="ifo">切换账户</div>
        <div class="arrow">
          <van-icon name="arrow" />
        </div>
      </div>
    </router-link>

    <router-link to="/personal" tag="div">
      <div class="personal-ifo">
        <div class="ifo">退出登录</div>
        <div class="arrow">
          <van-icon name="arrow" />
        </div>
      </div>
    </router-link>

    <!-- 底部导航 -->
    <footer-tar-bar :active="active"></footer-tar-bar>
  </div>
</template>

<script type="text/javascript">
import TopBar from "@/components/TopBar";
import FooterTarBar from "@/components/FooterTarBar";

export default {
  data() {
    return {
      navbarTitle: "我的Tao",
      active: 3
    };
  },
  components: { TopBar, FooterTarBar },
  methods: {}
};
</script>

<style lang="scss" scoped>
.mine {
  background-color: #efeff4;
  a {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none;
  }
  .top {
    .personal-ifo {
      margin-bottom: 0px;
    }
    .personal-ifo:after {
      content: "";
      background-color: #c8c7cc;
      position: absolute;
      right: 0;
      bottom: 0;
      left: 10px;
      height: 1px;
    }
  }
  .personal-ifo {
    position: relative;
    display: flex;
    text-align: left;
    padding: 10px;
    background-color: #fff;
    margin-bottom: 0.5rem;
    .avator {
      display: inline-block;
    }
    .ifo {
      display: inline-block;
      .name {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
    .arrow {
      display: flex;
      align-items: center;
      position: absolute;
      right: 10px;
      top: 0;
      height: 100%;
      .van-icon {
        color: #999;
        float: right;
      }
    }
  }
}
</style>

<template>
  <div id="app">
    <router-view />
    <!-- <keep-alive>
      <router-view v-if="$route.meta.KeepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.KeepAlive" />-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {},
  components: {
    
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 46px;
  // padding-bottom: 50px;
  .van-info {
    right: -5px;
  }
}
</style>

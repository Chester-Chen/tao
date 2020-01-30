<template>
  <div>
    <p v-for="(item , $index) in list" :key="$index">
      Line:
      <span v-text="item"></span>
    </p>
    <!--infinite-loading这个组件要放在列表的底部，滚动的盒子里面！-->
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';

export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        const temp = [];
        for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
          temp.push(i);
        }
        this.list = this.list.concat(temp);
        $state.loaded();
      }, 1000);
    },
  },
  components: {
    InfiniteLoading,
  },
};
</script>

<style scoped lang="scss">
</style>

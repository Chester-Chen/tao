import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 三方组件按需导入
import {
  Tabbar,
  TabbarItem
} from 'vant';

// 组件注册
Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
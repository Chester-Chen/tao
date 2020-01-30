import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 三方组件全局注册
import {
  Tabbar,
  TabbarItem,
  Divider,
  Col,
  Row
} from 'vant';

// 组件注册
Vue.use(Tabbar)
  .use(TabbarItem).
use(Divider).use(Col).use(Row);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
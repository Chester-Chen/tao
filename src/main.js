import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store';

// vuex
import Vuex from 'vuex'
Vue.use(Vuex);

// 按需全局引入
import {
  Tabbar,
  TabbarItem,
  Divider,
  Col,
  Row,
  Tag,
  Icon,
  Toast,
  Button,
  Image,
  Checkbox,
  CheckboxGroup
} from 'vant';

// 全局组件注册
Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Divider)
  .use(Col)
  .use(Row)
  .use(Tag)
  .use(Icon)
  .use(Toast)
  .use(Button)
  .use(Image)
  .use(Checkbox).use(CheckboxGroup);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
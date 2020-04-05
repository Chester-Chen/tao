import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './vuex/store';
import axios from 'axios';
import './permit/permit'
import {getCookie} from '@/utils/tokenUtils';


// 配置全局URL
// axios.defaults.baseURL = "https://crazybro.top:9980";
axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.headers.common['Authorization'] = getCookie('token');

// 写入原型
Vue.prototype.$axios = axios;


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
  CheckboxGroup,
  Form,
  Field
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
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Form)
  .use(Field);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
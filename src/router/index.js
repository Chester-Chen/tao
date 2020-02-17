import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Orders from '../views/Orders';
import Cart from '../views/cart/Cart';
import Mine from '../views/Mine';
import Foods from '../views/Foods';
import Movie from '../views/Movie';
import Travel from '../views/Travel';
import Leisure from '../views/Leisure';


// 测试组件
import test from '../test/test';


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home},
  { path: '/home/foods', component: Foods} ,
  { path: '/home/movie', component: Movie },
  { path: '/home/travel', component: Travel },
  { path: '/home/leisure', component: Leisure },
  { path: '/orders', name: 'orders', component: Orders },
  { path: '/cart', name: 'cart', component: Cart},
  // { path: '/cart', name: 'cart', component: Cart, meta: { KeepAlive: true }},
  { path: '/mine', name: 'mine', component: Mine }
]

const router = new VueRouter({
  /* history模式上线，服务端必须有对应模式
    根据 vuecli 官方文档dist 目录需要启动一个 HTTP 服务器来访问 (除非你已经将 publicPath 配置为了一个相对的值)，
    所以以 file:// 协议直接打开 dist/index.html 是不会工作的。
    在本地预览生产环境构建最简单的方式就是使用一个 Node.js 静态文件服务器，例如 serve */
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
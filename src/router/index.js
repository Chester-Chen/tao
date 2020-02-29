import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home'
import Orders from '@/views/orders/Orders';
import Cart from '@/views/cart/Cart';
import Mine from '@/views/mine/Mine';

// homeSubViews 
import Foods from '@/views/home/subViews/Foods';
import Movie from '@/views/home/subViews/Movie';
import Travel from '@/views/home/subViews/Travel';
import Leisure from '@/views/home/subViews/Leisure';
import GoodsDetail from '@/views/goodsDetail/GoodsDetail';

// order
import Transfer from '@/views/orders/subComponent/Transfer';

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
  // { path: '/cart', name: 'cart', component: Cart},
  { path: '/cart', component: Cart, meta: { KeepAlive: true }},
  { path: '/mine',  component: Mine },
  { path: '/goodsdetail', component: GoodsDetail },
  { path: '/transfer/', component: Transfer },
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
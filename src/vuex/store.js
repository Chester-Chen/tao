import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { clearCookie } from '@/utils/tokenUtils';

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        // cartList: [],
        newtestotalPrice: 0,
        goodsList: JSON.parse(localStorage.getItem('cartList') || '[]'),
        allChecked: undefined,
        orderLists: JSON.parse(localStorage.getItem('orderLists') || '[]')
        // orderLists: []
    },
    getters: {
        getOrderLists(state) {
            return state.orderLists;
        },
        getGoodLists(state) {
            return state.goodsList;
        },
        totalPrice(state) {
            let price = 0;
            //  也可用es6的every
            state.goodsList.forEach(value => {
                if (value.selected == true) {
                    price += value.num * value.price;
                }
            });
            console.log('总价：' + price);
            // 因为vant的submitbar，小数点会前进两位，所以*100
            return price * 100;
        },
        /**商品选中状态
         * allSelected          全部商品为选中状态返回true      否则返回相反值
         * allNotSelected       全部商品不为选中状态返回false   否则返回相反值
         * someSelected         部分商品为选中状态返回true      否则返回相反值
         * 
         */
        goodsIsAllSelected(state) {
            let obj = new Object();

            // 全选
            let allSelected = state.goodsList.every(item => {
                return (item.selected == true);
            });
            // 全不选
            let allNotSelected = state.goodsList.every(item => {
                return (item.selected == false);
            })
            // 部分选中
            let someSelected = (allSelected == false && allNotSelected == false) ? true : false;

            obj.allSelected = allSelected;
            obj.someSelected = someSelected;
            obj.allNotSelected = allNotSelected;

            console.log(`store 商品选中状态: ${JSON.stringify(obj)}`);

            state.allChecked = allSelected;
            return obj;
        }
    },
    mutations: {
        // 清除所有订单
        clearAllOrders (state) {
            state.orderLists = [];
        },
        addGoods(state, goods) {
            // oldGoods，就是第一次添加进去的那个对象
            const oldGoods = state.goodsList.find(item => item.id === goods.id)

            if (oldGoods) { //找到了，之前存在过
                oldGoods.num += goods.num
            } else { // 没找到，直接新增
                state.goodsList.push(goods)
            }

            console.log(state.goodsList);
        },

        /**
         * 提交订单
         * 相同商品提交未能合并（未解决）
         */
        commitOrders(state, orders) {
            let orderLists = [];
            let repeatIndex = undefined;

            if (state.orderLists.length === 0) { // 如果订单是空的，直接将新订单推入
                orderLists = orders;
            } else { // 如果订单不为空
                orderLists = state.orderLists; // 拿到原先的订单
                // 循环比对重复订单
                orders.filter((orderItem, orderIndex) => {

                    repeatIndex = orderLists.indexOf(orderItem); // 拿到旧订单重复的索引
                    if (repeatIndex != -1) {
                        orderLists[repeatIndex].num += orders[orderIndex].num;
                    } else {
                        orderLists.push(orderItem);
                    }
                   
                })

            }

            console.log('orderLists', orderLists)
            state.orderLists = orderLists;

            axios.post('commitorders',{orders}).then(res => {
                console.log('orders:', orders);
                console.log(res.data.msg);
            })

        }

        // 添加商品到购物车
        /*         addGoods(state, good) {
                    let Index; // 存重复时的索引
                    if (state.cartList[0] == undefined) { // cartList若为空，则直接推入
                        state.cartList.push(good);
                    } else { // 否则循环数组，查重
                        if ( // 重复时取index
                            state.cartList.some((value, index) => {
                                if (value.title == good.title) {
                                    Index = index;
                                    return true;
                                }
                            })
                        ) {

                            state.cartList[Index].purchasecount++;
                        } else {
                            state.cartList.push(good);
                        }
                    }


                }, */

        // 购物车商品数量增加
        /*        addPurchaseCount(state, item) {
                   state.cartList.forEach(function (value, index) {
                       if (value.title == item.title) {
                           state.cartList[index].purchasecount++;
                       }
                   })

               },

               // 购物车商品数量减少
               minusPurchaseCount(state, item) {
                   state.cartList.forEach(function (value, index) {
                       if (value.title == item.title) {
                           state.cartList[index].purchasecount -= 1;
                       }
                   })

               } */


    }
})

window.onbeforeunload = function () {
    // 刷新页面或关闭页面时，存到本地
    window.localStorage.setItem('cartList', JSON.stringify(store.getters.getGoodLists));
    window.localStorage.setItem('orderLists', JSON.stringify(store.getters.getOrderLists));
    // clearCookie('token');
}

export default store;
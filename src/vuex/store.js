import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        cartList: []

    },
    getters: {
        getGoodLists(state) {
            return state.cartList;
        }
    },
    mutations: {
        // 查重复商品 返回值：存在重复(1)，无重复(0)
        // findRepeat(state, good) {
        //     state.cartList.forEach((value, index) => {
        //         if (value.title == good.title) {
        //             return {
        //                 status: 1,
        //                 index: index
        //             };
        //         }
        //         return {
        //             status: 0
        //         };
        //     })
        // },
        // 添加商品到购物车
        addGoods(state, good) {
            console.log('store.js: ' + state.cartList[0]);

            state.cartList.forEach((value, index) => {
                console.log('1: ' + good.title);

                if (value.title == good.title) {
                    state.cartList[index].purchasecount++;
                    alert('add good 3');
                    return;
                }
            })
            // state.cartList.push(good);

            console.log('2: ' + good.title);
            

        },

        // 购物车商品数量增加
        addPurchaseCount(state, item) {
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

        }



    }
})
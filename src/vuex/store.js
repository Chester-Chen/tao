import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store =  new Vuex.Store({
    state: {
        cartList: [],
        newtestotalPrice: 0,
        goodsList: JSON.parse(localStorage.getItem('cartList') || '[]'),
    },
    getters: {
        getGoodLists(state) {
            return state.goodsList;
        },
        totalPrice(state) {
            let price = 0;
            state.goodsList.forEach( value => {
                price += value.num * value.price;
            });
            console.log('总价：' + price);
            return price * 100;
        }

    },
    mutations: {
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


        // 添加商品到购物车
        // addGoods(state, good) {
        //     let Index; // 存重复时的索引
        //     if (state.cartList[0] == undefined) { // cartList若为空，则直接推入
        //         state.cartList.push(good);
        //     } else { // 否则循环数组，查重
        //         if ( // 重复时取index
        //             state.cartList.some((value, index) => {
        //                 if (value.title == good.title) {
        //                     Index = index;
        //                     return true;
        //                 }
        //             })
        //         ) {

        //             state.cartList[Index].purchasecount++;
        //         } else {
        //             state.cartList.push(good);
        //         }
        //     }


        // },

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

window.onbeforeunload = function () {
    // 刷新页面或关闭页面时，存到本地
    window.localStorage.setItem('cartList', JSON.stringify(store.getters.getGoodLists))
}

export default store;
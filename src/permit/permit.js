import router from '@/router/index';
import { getCookie } from '@/utils/tokenUtils';

// 白名单
const whiteRoute = ['/login', '/register'];


router.beforeEach((to, from, next) => {
    if(getCookie('token')) {
        console.log('token: ', getCookie('token'));
        next();
    } else {
        if(whiteRoute.indexOf(to.path) !== -1) {  // 存在该白名单
            // console.log('-1',whiteRoute.indexOf('/login'));
            next();
        } else {
            console.log('2');
            next('/login');
        }
    
    }

})
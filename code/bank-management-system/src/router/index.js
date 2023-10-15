// 创建整个应用的路由器
import { createRouter, createWebHashHistory } from 'vue-router';
import { constRoutes } from './routes.js';

// 创建路由器
const router = createRouter({
    history: createWebHashHistory(),
    routes: constRoutes,

    // 滚动行为
    scrollBehavior (to, from, savedPosition) {
        return {
            left: 0,
            top: 0
        }
    }
});

export default router;
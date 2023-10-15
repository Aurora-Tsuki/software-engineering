// 创建路由
export const constRoutes = [
    {
        // 登录路由
        path: '/login',
        component: () => import('@/views/Login/index.vue'),
        name: 'login',
        meta: {
            title: '登录',  // 路由标题
        }
    },
    {
        // 注册路由
        path: '/register',
        component: () => import('@/views/Register/index.vue'),
        name: 'register',
        meta: {
            title: '注册'
        }
    },
    {
        // 主页路由
        path: '/',
        component: () => import('@/views/Home/index.vue'),
        name: 'home',
        meta: {
            title: '主页'
        }
    }
]
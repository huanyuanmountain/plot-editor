import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home/info'
    },
    {
        path: '/home',
        component: () => import('../views/Home.vue'),
        children: [
            {
                path: 'info',
                name: 'baseInfoEdit',
                component: () => import('../components/BaseInfoEdit.vue')
            },
            {
                path: 'dialog',
                name: 'dialogEdit',
                component: () => import('../components/DialogEdit.vue')
            },
            {
                path: 'person',
                name: 'personEdit',
                component: () => import('../components/PersonEdit.vue')

            },
            {
                path: '/*',
                name: 'page404',
                component: () => import('../views/404.vue')
            }
        ]
    },
    // {
    //     path: '/*',
    //     component: () => import('../views/404.vue')
    // }
]

const router = new VueRouter({
    // mode: 'history',
    routes
})

export default router
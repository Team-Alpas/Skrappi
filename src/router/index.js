import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from '../views/Navbar.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Navbar,
        children: [
            {
                path: '',
                component: () => import('@/components/Home.vue'),
                meta: { title: 'Home'},
            },
            {
                path: 'Home',
                component: () => import('@/components/Home.vue'),
                meta: { title: 'Home'},
            },
            {
                path: 'Request',
                component: () => import('@/components/Request.vue'),
                meta: { title: 'Request'},
            },
            {
                path: 'Donate',
                component: () => import('@/components/Donate.vue'),
                meta: { title: 'Donate'},
            },
            {
                path: 'FAQ',
                component: () => import('@/components/FAQ.vue'),
                meta: { title: 'FAQ'},
            },
            {
                path: 'About',
                component: () => import('@/components/About.vue'),
                meta: { title: 'About'},
            },
            {
                path:'signup',
                component: () => import('@/components/signup.vue'),
                meta: {title:'signup'},
            },
            {
                path:'Login',
                component: () => import('@/components/Login.vue'),
                meta: {title:'Login'},
            },
        ]
    }
]

const router = new VueRouter({
    routes
})
  
  export default router
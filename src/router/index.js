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
                path: 'Exchange',
                component: () => import('@/components/Exchange.vue'),
                meta: { title: 'Exchange'},
            },
            {
                path: 'BuynSell',
                component: () => import('@/components/BuynSell.vue'),
                meta: { title: 'BuynSell'},
            },
            {
                path: 'Auction',
                component: () => import('@/components/Auction.vue'),
                meta: { title: 'Auction'},
            },
        ]
    }
]

const router = new VueRouter({
    routes
})
  
  export default router
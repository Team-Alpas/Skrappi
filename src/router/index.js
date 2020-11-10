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
                path: 'Schedule',
                component: () => import('@/components/Schedule.vue'),
                meta: { title: 'Schedule'},
            },
            {
                path: 'Standings',
                component: () => import('@/components/Standings.vue'),
                meta: { title: 'Standings'},
            },
            {
                path: 'About',
                component: () => import('@/components/About.vue'),
                meta: { title: 'About'},
            },
            {
                path: 'Contact',
                component: () => import('@/components/Contact.vue'),
                meta: { title: 'Contact'},
            },
        ]
    }
]

const router = new VueRouter({
    routes
})
  
  export default router
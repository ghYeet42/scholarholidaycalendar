import { createRouter, createWebHistory } from "vue-router"
import home from './views/home.vue'
import day from './views/day.vue'

let routes = [
    {
        path: '/',
        component: home
    },

    {
        path: '/Day',
        component: day
    },
]

let router = createRouter ({
    history: createWebHistory(),
        routes
})

export default router
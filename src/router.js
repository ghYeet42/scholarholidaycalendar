import { createRouter, createWebHistory } from "vue-router"
import home from './views/home.vue'
import day from './views/day.vue'
import week from './views/week.vue'

let routes = [
    {
        path: '/',
        component: home
    },

    {
        path: '/Day',
        component: day
    },

    {
        path: '/Week',
        component: week
    },
]

let router = createRouter ({
    history: createWebHistory(),
        routes
})

export default router
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name:'home',
        component: () => import('../views/HomeView.vue')
    }
]


export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
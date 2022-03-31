import { createRouter, createWebHistory } from 'vue-router'
import signup from '/src/components/signup.vue'
const routes = [
    {
        path: '/signup',
        name: 'signup',
        component: signup,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
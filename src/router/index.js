import { createRouter, createWebHistory } from 'vue-router'


import CoursePage from '../components/CoursePage.vue'
import Index from '/src/components/Index.vue'
import signup from '/src/components/signup.vue'
import login from '/src/components/login.vue'
import Exercice from '/src/components/Exercice.vue'
import ListCourses from '/src/components/ListCourses.vue'
import Resume from '/src/components/Resume.vue'
import TableMatiere from '/src/components/TableMatiere.vue'

const routes = [
    {
        path: '/signup',
        name: 'signup',
        component: signup,
    },
    {
        path: '/',
        name: 'Index',
        component: Index,
    },
    {
        path: '/CoursePage',
        name: 'CoursePage',
        component: CoursePage,
    },
    {
        path: '/Exercice',
        name: 'Exercice',
        component: Exercice,
    },
    {
        path: '/ListCourses',
        name: 'ListCourses',
        component: ListCourses,
    },
    {
        path: '/login',
        name: 'login',
        component: login,
    },
    {
        path: '/Resume',
        name: 'Resume',
        component: Resume,
    },
    {
        path: '/TableMatiere',
        name: 'TableMatiere',
        component: TableMatiere,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
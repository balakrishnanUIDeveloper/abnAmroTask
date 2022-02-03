import { createRouter, createWebHistory } from "vue-router";
import ShowDetail from '../view/ShowDetail';
import Home from '../view/Home'
const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/show/:id', name: 'show', component: ShowDetail },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
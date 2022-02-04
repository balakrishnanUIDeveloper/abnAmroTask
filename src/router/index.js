import { createRouter, createWebHistory } from "vue-router";
import ShowDetail from '../view/ShowDetail';
import Home from '../view/Home'
import NotFound from '../view/NotFound'
import SearchResult from '../view/SearchResult';
import * as CONST from './route.constants.js';
const routes = [
    { path: CONST.ROUTER.HOME.PATH, name: CONST.ROUTER.HOME.NAME, component: Home },
    { path: CONST.ROUTER.SHOW_DETAIL.PATH, name: CONST.ROUTER.SHOW_DETAIL.NAME, component: ShowDetail },
    { path: CONST.ROUTER.SEARCH_RESULT.PATH, name: CONST.ROUTER.SEARCH_RESULT.NAME, component: SearchResult },
    { path: CONST.ROUTER.NOT_FOUND.PATH, name: CONST.ROUTER.NOT_FOUND.NAME, component: NotFound },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
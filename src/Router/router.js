import {createRouter, createWebHistory} from "vue-router";
import mainPage from "@/Pages/MainPage.vue";
import collaborating from "@/Pages/Collaborating.vue";
import hospitals from "@/Pages/Hospitals.vue";
import info from "@/Pages/info.vue";


const routes = [
    {
        path: '/',
        component: mainPage
    },
    {
        path: '/collaborating',
        component: collaborating
    },
    {
        path: '/hospitals',
        component: hospitals
    },
    {
        path: '/info',
        component: info
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;

import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import Auth from "./components/Auth";
import Main from "@/components/Main";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Auth,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("jwtToken") !== null) next({name: "app"})
            else next("auth");
        }
    },
    {
        path: '/auth',
        name: 'auth',
        component: Auth
    },
    {
        path: '/main',
        name: 'main',
        component: Main
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

Vue.createApp(App).use(router).use(VueAxios, axios).mount('#app')
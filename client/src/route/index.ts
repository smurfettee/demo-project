import {createWebHistory, createRouter} from 'vue-router';
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Landing from "../views/Landing.vue";
import Guides from "../views/Guides.vue";

const routes = [
    {path: '/', component: Landing, meta: {needAuth: false}},
    {path: '/auth/login', component: Login, meta: {needAuth: false}},
    {path: '/auth/register', component: Register, meta: {needAuth: false}},
    {path: '/forgot-password', component: Register, meta: {needAuth: false}},
    {path: '/guides', component: Guides, meta: {needAuth: true}}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
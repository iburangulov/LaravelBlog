import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import index from '../templates/views/index';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'index',
            path: '/',
            component: index,
        },
        {
            name: 'blog',
            path: '/blog',
            component: () => import('../templates/views/blog'),
        }
    ],
});

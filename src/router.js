import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
// import BookList from './pages/BookList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        // {
        //     path: '/books',
        //     name: 'books',
        //     component: BookList
        // },
    ]
});

export { router };
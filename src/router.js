import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import BookList from './pages/BookList.vue';
import SingleBook from './pages/SingleBook.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/books',
            name: 'books',
            component: BookList
        },
        {
            path: '/books/:id',
            name: 'book',
            component: SingleBook
        },
    ]
});

export { router };
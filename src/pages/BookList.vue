<script>
import axios from 'axios';
import { store } from '../store';
import BookComponent from '../components/BookComponent.vue'

export default {
    name: 'BookList',

    components: {
        BookComponent
    },

    data() {
        return {
            store,
            apiAddress: '127.0.0.1:8000'
        }
    },

    methods: {
        getBooks() {
            axios.get(this.apiAddress + '/api/books/', {
            params: {
            }
        })
        .then((response) => {
            console.log(response.data.results.data);
            store.books = response.data.results.data;
        })
        .catch(function (error) {
            console.warn(error);
        });
        }
    },

    created() {
        this.getBooks();
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 class="text-focus-in py-4 text-center">
                Book List
            </h1>
            <BookComponent v-for="book in store.books" :book="book" class="col-5" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'BookList',

    components: {

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
</template>

<style lang="scss" scoped>
    
</style>
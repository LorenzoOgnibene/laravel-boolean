<script>
import axios from 'axios';
import { store } from '../store';

import BookComponent from '../components/BookComponent.vue';

export default {
    name: 'SingleBook',

    components: {
        BookComponent
    },

    data() {
        return {
            store,
            apiAddress: 'http://127.0.0.1:8000'
        }
    },

    methods: {
        getBook() {
            axios.get(this.apiAddress + `/api/books/${this.$route.params.id}`, {
            params: {
            }
        })
        .then((response) => {
            console.log(response.data.results);
            store.book = response.data.results;
        })
        .catch(function (error) {
            console.warn(error);
        });
        }
    },

    created() {
        this.getBooK();
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <BookComponent :book="book" class="col-12" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
<script>
    import { store } from '../store.js';

    export default {

        name: 'BookComponent',
    
        props: {
            'book': {
                type: Object,
                required: true,
            },

            'isShow': {
                type: Boolean,
                required: false,
                default: false,
        },

        data () {
        return {
            store,
        }
        }
    }
}
</script>

<template>
        <div class="card text-center mb-3 single-card p-3">

            <div class="card-header text-start">
                #BookID: {{ book.id }}
            </div>
            <h2 class="card-title fw-bold pt-2 tracking-in-contract">
                Title: {{ book.title }}
            </h2>

            <div class="card-body m-3">
                <img :src="book.cover_image" class="img-thumbnail" alt="book-img">

                <p class="card-text pt-4 mb-3 fw-bold">
                    Description: {{ book.title }}
                </p>
                <p class="fw-bold mb-3">
                    Author: {{ book.author }}
                </p>
                <p class="fw-bold mb-3">
                    Genre: {{ book.genre }}
                </p>
                <span class="fw-bold me-3">
                    Publishing House: {{ book.publishing_house }}
                </span>
                ||
                <span class="fw-bold">
                    Language: {{ book.language }}
                </span> 
            </div>

            <div class="card-footer border text-muted mb-2">
                ISBN: {{ book.ISBN }} - Publication Year: {{ book.publication_year }}
            </div>

            <div class="pt-2">
                <router-link class="btn btn-dark"  v-if="!isShow" :to="{name: 'book'}"> 
                    Show more
                </router-link>
            </div>
        </div>   
</template>

<style lang="scss" scoped>
.card {
    border-radius: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

        img {
            border-radius: 30px;
        }
}
.card-footer {
    background-color: #8cb9f8;
    color: white!important;
    font-weight: bold;
}

a {
    border: 1px solid black;
}

//aggiungo un'animazione per il titolo//
.tracking-in-contract {
	animation: tracking-in-contract 1s ease-in both;
}

 @keyframes tracking-in-contract {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}

</style>
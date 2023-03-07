<script>
export default {
    name: 'AppHeader',
    components: {

    },

    data() {
        return {

        }
    },

    methods: {

    },

    created() {

    },
}
</script>

<template>
    <header class="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between pe-4">
            <div class="container-fluid">
                <img class="img-fluid" src="../assets/img/library-logo.png" alt="LOGO">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-link">
                        <router-link :class="this.$route.name === 'home' ? 'active' : ''" :to="{ name: home }">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-link">
                        <router-link :class="this.$route.name === 'books' ? 'active' : ''" :to="{ name: books }">
                            Books
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">

header {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

        img {
            width: 200px;
        }

        ul li a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        padding-left: 1rem;
        border-left: 2px solid black;
        }      
        .active {
            color: #3e87ee;
        }
}

</style>
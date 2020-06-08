<template>
    <div id="App">
        <header class="border border-info p-4 mb-4">
            <h2>A header with a language switcher</h2>
            <nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link>
            <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
        </header>
        <nav class="border border-danger p-4 mb-4">
            <h2>A menu with navigation</h2>
            <nuxt-link :to="localePath('index')">Home</nuxt-link>
            <nuxt-link :to="localePath('about')">About</nuxt-link>
        </nav>
        <div class="container py-4">
            <nuxt/>
        </div>
        <the-footer/>
    </div>
</template>

<script>
    import TheFooter from "~/components/TheFooter.vue";

    export default {
        components: {
            TheFooter
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
    @import url('https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i&display=swap');
    @font-face {
        font-family: Novecento;
        src: url("../assets/fonts/NovecentoSansWideDemiBold.otf") format("opentype");
    }

    #App {
        font-family: "PT Sans", sans-serif;
        color: #9A9898
    }

    .small-caps, section h1, section h2, section h3, section h4 {
        font-variant: all-small-caps;
    }

    .pointer {
        cursor: pointer;
    }

    .logo {
        font-family: "Pacifico", sans-serif;
    }

    footer p {
        font-size: 0.9em;
    }

    #BlogMarkdown img {
        width: 100%;
    }

    .display-1 {
        font-size: 3em;
    }

    .display-2 {
        font-size: 2.5em;
    }

    .display-3 {
        font-size: 2em;
    }
    .display-4 {
        font-size: 1.5em;
    }

    nav a:hover {
        text-decoration: none;
    }

    .t-white {
        color: #FFFFFF
    }

    .b-white {
        background-color: #FFFFFF
    }

    .t-light {
        color: #DFDCDC
    }

    .b-light {
        background-color: #DFDCDC
    }

    .t-gray {
        color: #9A9898
    }

    .b-gray {
        background-color: #9A9898
    }

    .t-dark {
        color: #333333
    }

    .b-dark {
        background-color: #333333
    }

    .t-green {
        color: #87b672;
    }

    .b-green {
        background-color: #87b672;
    }

    a:not(.btn), a:not(.btn):visited {
        color: #87b672;
    }

    a:hover {
        color: #87b672;
    }

</style>

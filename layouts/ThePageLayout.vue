<template>
    <div id="App">
        <the-normal-header v-if="pageCode !== 'home'"
                           @toggleNav="isMenuOpen = !isMenuOpen"
                           :page-code="pageCode"/>
        <the-home-header v-if="pageCode === 'home'"
                         @toggleNav="isMenuOpen = !isMenuOpen"/>
        <the-floating-menu v-if="isMenuOpen"
                           @toggleNav="isMenuOpen = !isMenuOpen"/>
        <main class="container py-4">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <slot/>
                </div>
            </div>
        </main>
        <the-footer/>
    </div>
</template>

<script>
    import TheFloatingMenu from "~/components/TheFloatingMenu.vue";
    import TheFooter from "~/components/TheFooter.vue";
    import TheHomeHeader from "~/layouts/TheHomeHeader.vue";
    import TheNormalHeader from "~/layouts/TheNormalHeader.vue";

    export default {
        name: "ThePageLayout",
        data() {
            return {
                isMenuOpen: false
            }
        },
        props: ["pageCode"],
        components: {TheFloatingMenu, TheHomeHeader, TheNormalHeader, TheFooter}
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

    .small-caps, main h1, main h2, main h3, main h4 {
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

<template>
    <the-page-layout page-code="home">
            <h1>This is the Home page</h1>
            <the-footnote/>
    </the-page-layout>
</template>

<script>
    import Badge from "~/components/Badge.vue";
    import TheCarousel from "~/components/TheCarousel.vue";
    import TheFootnote from "~/components/TheFootnote.vue";
    import ThePageLayout from "~/layouts/ThePageLayout.vue";

    export default {
        head() {
            return {title: ""}
        },
        components: {
            ThePageLayout,
            Badge,
            TheFootnote,
            TheCarousel
        }
    }
</script>

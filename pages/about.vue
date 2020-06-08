<template>
    <the-page-layout page-code="about">
        <h1>This is the About page</h1>
        <the-footnote/>
    </the-page-layout>
</template>

<script>
    import TheFootnote from "~/components/TheFootnote.vue";
    import ThePageLayout from "~/layouts/ThePageLayout.vue";

    export default {
        name: "About",
        components: {ThePageLayout, TheFootnote},
        head() {
            return {title: this.$t('My about page')}
        }
    }
</script>

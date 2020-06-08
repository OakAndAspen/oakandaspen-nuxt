<template>
    <div>
        <main>
            <h1>This is the About page</h1>
            <h2>This is a translated message:</h2>
            <p>{{ $t('carousel[0].subtitle') }}</p>
            <the-footnote/>
        </main>
    </div>
</template>

<script>
    import TheFootnote from "~/components/TheFootnote.vue";
    export default {
        components: {TheFootnote},
        head() {
            return {title: this.$t('carousel[0].subtitle')}
        }
    }
</script>

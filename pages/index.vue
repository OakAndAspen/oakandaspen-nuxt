<template>
    <div>
        <main>
            <h1>This is the Home page</h1>
            <h2>This is a translated message:</h2>
            <p>{{ $t('carousel[0].subtitle') }}</p>

            <p>This is a FontAwesome icon:</p>
            <fa :icon="['far', 'music']"/>
            <fa :icon="['fab', 'facebook-f']"/>

            <p>This is the carousel:</p>
            <the-carousel/>
        </main>
    </div>
</template>

<script>
    import TheCarousel from "~/components/TheCarousel.vue";

    export default {
        head() {
            return {title: ""}
        },
        components: {
            TheCarousel
        }
    }
</script>

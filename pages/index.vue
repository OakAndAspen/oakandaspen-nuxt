<template>
    <div>
        <main>
            <h1>This is the Home page</h1>
            <h2>This is a translated message:</h2>
            <p>{{ $t('carousel[0].subtitle') }}</p>

            <p>This is a FontAwesome icon:</p>
            <fa :icon="['far', 'music']"/>
            <fa :icon="['fab', 'facebook-f']"/>

            <p>
                This is a nice little badge: <badge>with some content</badge>
            </p>

            <the-carousel/>
            <the-footnote/>
        </main>
    </div>
</template>

<script>
    import Badge from "~/components/Badge.vue";
    import TheCarousel from "~/components/TheCarousel.vue";
    import TheFootnote from "~/components/TheFootnote.vue";

    export default {
        head() {
            return {title: ""}
        },
        components: {
            Badge,
            TheFootnote,
            TheCarousel
        }
    }
</script>

<template>
    <header id="TheHomeHeader"
            class="py-4" :style="backgroundImage">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <the-title-bar theme="light" @toggleNav="$emit('toggleNav')"/>
                    <hr class="border-light"/>
                    <the-inline-menu theme="light"/>
                    <the-carousel @change="changeBackground"/>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import TheCarousel from "~/components/TheCarousel.vue";
    import TheInlineMenu from "~/components/TheInlineMenu.vue";
    import TheTitleBar from "~/components/TheTitleBar.vue";

    export default {
        name: "TheHomeHeader",
        components: {TheInlineMenu, TheTitleBar, TheCarousel},
        data() {
            return {
                background: this.$t("carousel.slides[0].image")
            }
        },
        methods: {
            changeBackground(url) {
                this.background = url;
            }
        },
        computed: {
            backgroundImage() {
                return 'backgroundImage: url("' + this.background + '")';
            }
        }
    }
</script>

<style>
    #TheHomeHeader {
        background-size: cover;
        background-position: top center;
    }
</style>

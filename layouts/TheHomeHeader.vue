<template>
    <header id="TheHomeHeader" class="py-4" :style="{
                backgroundImage: 'url(images/carousel/background1.jpg)'
            }">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <the-title-bar theme="light" @onToggleMenu="toggleMenu"/>
                    <hr class="border-light"/>
                    <the-menu theme="light" :is-open="isOpen"/>
                    <the-carousel/>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import TheCarousel from "~/components/TheCarousel.vue";
    import TheMenu from "~/components/TheMenu.vue";
    import TheTitleBar from "~/components/TheTitleBar.vue";

    export default {
        name: "TheHomeHeader",
        components: {TheTitleBar, TheMenu, TheCarousel},
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            toggleMenu() {
                this.isOpen = !this.isOpen;
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

<template>
    <header id="TheNormalHeader"
            class="py-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <the-title-bar theme="dark" @onToggleNav="toggleNav"/>
                    <hr class="border-secondary"/>
                    <the-menu theme="dark" :is-open="navOpen"/>
                </div>
            </div>
        </div>
        <div class="PageTitle mt-2" :style="backgroundImage">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto py-4">
                        <h1 class="t-white font-weight-bold m-0 small-caps">
                            {{$t(pageCode+".pageTitle")}}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import TheMenu from "~/components/TheMenu.vue";
    import TheTitleBar from "~/components/TheTitleBar.vue";

    export default {
        name: "TheNormalHeader",
        props: ["pageCode"],
        components: {TheMenu, TheTitleBar},
        data() {
            return {
                navOpen: false,
                backgroundImage: "backgroundImage: url('images/carousel/background1.jpg')"
            }
        },
        methods: {
            toggleNav: () => {
                this.navOpen = !this.navOpen
            }
        }
    }
</script>

<style>
    #TheNormalHeader .PageTitle {
        background-size: cover;
        background-position: center center;
    }
</style>

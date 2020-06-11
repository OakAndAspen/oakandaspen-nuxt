<template>
    <header id="TheNormalHeader"
            class="py-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <the-title-bar theme="dark" @toggleNav="$emit('toggleNav')"/>
                    <hr class="border-secondary"/>
                    <the-inline-menu theme="dark"/>
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
    import {imgDir} from "~/config/app.js";
    import TheFloatingMenu from "~/components/TheFloatingMenu.vue";
    import TheInlineMenu from "~/components/TheInlineMenu.vue";
    import TheTitleBar from "~/components/TheTitleBar.vue";

    export default {
        name: "TheNormalHeader",
        props: ["pageCode"],
        components: {TheFloatingMenu, TheInlineMenu, TheTitleBar},
        data() {
            return {
                backgroundImage: "backgroundImage: url(" + imgDir + "/carousel/background1.jpg)"
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

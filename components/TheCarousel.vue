<template>
    <div id="TheCarousel"
         class="d-flex justify-content-between align-items-center text-center my-4 py-4">
        <fa :icon="['far', 'angle-left']"
            @click="previous"
            class="arrow display-1 pointer"/>
        <div class="t-white">
            <h1 class="small-caps font-weight-bold">
                {{$t("carousel.slides["+index+"].title")}}
            </h1>
            <h4>{{$t("carousel.slides["+index+"].subtitle")}}</h4>
            <nuxt-link v-if="$t('carousel.slides['+index+'].button.title') !== ''"
                       class="btn b-green t-white mt-4"
                       :to="localePath($t('carousel.slides['+index+'].button.url'))">
                {{$t("carousel.slides["+index+"].button.title")}}
            </nuxt-link>
        </div>
        <fa :icon="['far', 'angle-right']"
            @click="next"
            class="arrow display-1 pointer"/>
    </div>
</template>

<script>
    export default {
        name: "TheCarousel",
        data() {
            return {
                index: 0,
                length: 3
            }
        },
        methods: {
            next() {
                console.log("next method");
                let index = this.index;
                index = (index === this.length - 1) ? 0 : index + 1;
                this.index = index;
                this.$emit("change", this.$t("carousel.slides[" + index + "].image"));
            },
            previous() {
                console.log("next method");
                let index = this.index;
                index = (index === 0) ? this.length - 1 : index - 1;
                this.index = index;
                this.$emit("change", this.$t("carousel.slides[" + index + "].image"));
            }
        }
    }
</script>

<style scoped>
    #TheCarousel {
        font-family: 'Novecento', sans-serif;
    }

    #TheCarousel .arrow {
        color: rgba(255, 255, 255, 0.7)
    }
</style>

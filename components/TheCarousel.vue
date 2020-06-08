<template>
    <div id="TheCarousel"
         class="d-flex justify-content-between align-items-center text-center my-4 py-4"
         :style="backgroundImage">
    <fa :icon='["far", "angle-left"]'
        class="arrow display-1 pointer" @click="previous"/>
    <div class="t-white">
        <h1 class="small-caps font-weight-bold">
            {{$t("carousel["+index+"].title")}}
        </h1>
        <h4>{{$t("carousel["+index+"].subtitle")}}</h4>
        <nuxt-link v-if="$t('carousel['+index+'].button')"
                   class="btn b-green t-white mt-4"
                   :to="localePath($t('carousel['+index+'].url'))">
            {{$t("carousel["+index+"].button.title")}}
        </nuxt-link>
    </div>
    <fa :icon="['far', 'angle-right']" class="arrow display-1 pointer" @click="next"/>
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
            },
            previous() {
                console.log("next method");
                let index = this.index;
                index = (index === 0) ? this.length - 1 : index - 1;
                this.index = index;
            }
        },
        computed: {
            backgroundImage() {
                let url = this.$t("carousel[" + this.index + "].image");
                return 'backgroundImage: url("' + url + '")';
            }
        }
    }
</script>

<style scoped>
    #TheCarousel {
        font-family: 'Novecento', sans-serif;
        background-size: cover;
        background-position: top center;
    }

    #TheCarousel .arrow {
        color: rgba(255, 255, 255, 0.7)
    }
</style>

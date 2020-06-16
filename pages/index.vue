<template>
    <the-page-layout page-code="home">
        <div class="text-center my-4 py-4">
            <h3 class="my-4 text-dark font-weight-bold">
                {{$t('home.welcome')}}
            </h3>
            <p class="py-4">{{$t('home.firstParagraph')}}</p>
        </div>

        <hr class="border-secondary"/>

        <div class="row text-center my-4 py-4">
            <div v-for="s of $t('home.services')" :key="s.title"
                 class="col-md-4">
                <fa :icon='["far", s.icon]' class="display-2"/>
                <h4 class="my-4">
                    {{s.title}}
                </h4>
                <p>
                    {{s.description}}
                </p>
            </div>
        </div>

        <hr class="border-secondary"/>

        <div class="text-center my-4 py-4">
            <h3 class="my-4 font-weight-bold">
                {{$t('home.latestWork.title')}}
            </h3>
            <div class="row text-center">
                <div v-for="p of $t('portfolio.projects').slice(0,3)" :key="p.name"
                     class="col-md-4">
                    <h4 class="my-4 font-weight-bold">
                        {{p.name}}
                    </h4>
                    <img :src="p.image"
                         :alt="p.name"
                         class="img-fluid mb-4 border b-gray border"/>
                </div>
            </div>
        </div>

        <hr class="border-secondary"/>
        <the-footnote/>
    </the-page-layout>
</template>

<script>
    import TheFootnote from "~/components/TheFootnote.vue";
    import ThePageLayout from "~/layouts/ThePageLayout.vue";
    import {getMetadata} from "~/utils/utils.js";

    export default {
        name: "Home",
        components: {
            ThePageLayout,
            TheFootnote,
        },
        head() {
            return getMetadata(this.$t("home.meta"));
        }
    }
</script>

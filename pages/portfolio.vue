<template>
    <the-page-layout page-code="portfolio">
        <div class="text-center">
            <h3 class="my-4 text-dark font-weight-bold">
                {{$t('portfolio.subtitle')}}
            </h3>
            <p class="py-4">{{$t('portfolio.text')}}</p>
        </div>

        <div class="row text-center mb-4">
            <div v-for="p of $t('portfolio.projects')" :key="p.name"
                class="col-md-6 mx-auto my-4">
                <h4 class="my-4 font-weight-bold">
                    {{p.name}}
                </h4>
                <img :src="p.image"
                     :alt="p.name"
                     class="img-fluid mb-4 border b-gray border"/>
                <p>
                    <badge v-for="t of p.tags" :key="t">
                        {{t}}
                    </badge>
                </p>
                <p>{{p.description}}</p>
            </div>
        </div>

        <hr class="border-secondary"/>
        <the-footnote/>
    </the-page-layout>
</template>

<script>
    import Badge from "~/components/Badge.vue";
    import TheFootnote from "~/components/TheFootnote.vue";
    import ThePageLayout from "~/layouts/ThePageLayout.vue";

    export default {
        name: "Portfolio",
        components: {TheFootnote, Badge, ThePageLayout}
    }
</script>

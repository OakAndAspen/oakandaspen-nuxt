<template>
    <the-page-layout page-code="services">
        <div class="row text-center my-4 py-4">
            <div v-for="s of $t('services.list')" :key="s.title"
                 class="col-md-4">
                <fa :icon='["far", s.icon]'
                    class="display-2"/>
                <h4 class="my-4">
                    {{s.title}}
                </h4>
                <p>
                    {{s.description}}
                </p>
            </div>
        </div>
        <hr class="border-secondary"/>
        <div class="row text-center">
            <div class="col-md-6">
                <h3 class="my-4 text-dark font-weight-bold">
                    {{$t('services.title1')}}
                </h3>
                <p class="py-4">
                    <badge v-for="t of $t('services.tools')" :key="t">
                        {{t}}
                    </badge>
                </p>
            </div>
            <div class="col-md-6">
                <h3 class="my-4 text-dark font-weight-bold">
                    {{$t('services.title2')}}
                </h3>
                <p class="py-4">{{$t('services.text')}}</p>
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
    import {getMetadata} from "~/utils/utils.js";

    export default {
        name: "Services",
        components: {TheFootnote, Badge, ThePageLayout},
        head() {
            return getMetadata(this.$t("services.meta"));
        }
    }
</script>

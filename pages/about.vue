<template>
    <the-page-layout page-code="about">
        <div class="text-center py-2">
            <h3 class="my-4 text-dark font-weight-bold">
                {{$t('about.education.subtitle')}}
            </h3>
            <p class="py-4">
                {{$t('about.education.text')}}
            </p>
        </div>

        <div class="row text-center py-2">
            <div v-for="s of $t('about.education.schools')" :key="s.name"
                class="col-md-4">
                <h4 class="my-4">
                    {{s.name}}
                </h4>
                <p class="my-4 font-weight-bold">
                    {{s.school}}
                </p>
                <p>
                    {{s.description}}
                </p>
            </div>
        </div>

        <hr class="border-secondary"/>

        <div class="text-center py-2">
            <h3 class="my-4 text-dark font-weight-bold">
                {{$t('about.interests.subtitle')}}
            </h3>
            <p class="py-4">{{$t('about.interests.text')}}</p>
        </div>

        <div class="row text-center py-2">
            <div v-for="h of $t('about.interests.hobbies')" :key="h.name"
                 class="col-md-6 my-4">
                <fa :icon='["far", h.icon]'
                    class="display-2"/>
                <h4 class="my-4">
                    {{h.name}}
                </h4>
                <p>
                    {{h.description}}
                </p>
            </div>
        </div>

        <hr class="border-secondary"/>

        <the-footnote/>
    </the-page-layout>
</template>

<script>
    import TheFootnote from "~/components/TheFootnote.vue";
    import ThePageLayout from "~/layouts/ThePageLayout.vue";

    export default {
        name: "About",
        components: {TheFootnote, ThePageLayout}
    }
</script>

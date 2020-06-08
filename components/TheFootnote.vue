<template>
    <div class="text-center my-4 py-4">
        <h3 class="my-4 text-dark font-weight-bold">
            {{$t('footnote.title')}}
        </h3>
        <p class="py-2">
            {{$t('footnote.text')}}
        </p>
        <nuxt-link :to="localePath('contact')"
                    class="btn b-green t-white font-weight-bold mx-auto small-caps">
            {{$t('footnote.button')}}
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        name: "TheFootnote"
    }
</script>

<template>
    <nav id="TheInlineMenu"
         class="px-0 my-4 d-none d-md-block">
        <ul class="m-0 p-0">
            <li v-for="e of this.$t('nav')" :key="e.url"
                class="d-inline-block mr-3">
                <nuxt-link :class="linkColor"
                           :to="localePath(e.url)">
                    {{e.label}}
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "TheInlineMenu",
        props: ['theme'],
        computed: {
            linkColor() {
                return this.theme === "light" ? "text-light" : "text-secondary";
            }
        }
    }
</script>

<style>
    #TheInlineMenu {
        font-variant: all-small-caps;
    }

    #TheInlineMenu li {
        list-style-type: none;
    }

    #TheInlineMenu li a {
        font-weight: bold;
        font-size: 1.4em;
    }
</style>

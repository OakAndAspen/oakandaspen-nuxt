<template>
    <nav id="TheFloatingMenu"
         class="d-md-none w-100 h-100 py-4 px-4 text-white text-center">
        <div class="d-flex align-items-center">
            <fa :icon="['far', 'bars']"
                @click="$emit('toggleNav')"
                class="display-3 mr-4 pointer"/>
            <logo/>
        </div>
        <ul class="Navigation p-0 mx-0 my-4">
            <li v-for="e of entries" :key="e.url"
                class="my-2">
                <nuxt-link :to="localePath(e.url)"
                           class="text-white">
                    {{$t('nav.'+e.code)}}
                </nuxt-link>
            </li>
        </ul>
        <hr class="border-light px-4 mx-4"/>
        <div>
            <language-switcher theme="light"/>
        </div>
        <div class="mt-4">
            <social-links theme="light"/>
        </div>
    </nav>
</template>

<script>
    import LanguageSwitcher from "~/components/LanguageSwitcher.vue";
    import Logo from "~/components/Logo.vue";
    import SocialLinks from "~/components/SocialLinks.vue";

    export default {
        name: "TheFloatingMenu",
        components: {Logo, LanguageSwitcher, SocialLinks},
        data() {
            return {
                entries: [
                    {code: "home", url: "index"},
                    {code: "portfolio", url: "portfolio"},
                    {code: "services", url: "services"},
                    {code: "blog", url: "blog"},
                    {code: "about", url: "about"},
                    {code: "contact", url: "contact"}
                ]
            }
        }
    }
</script>

<style>
    #TheFloatingMenu {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        background: rgb(111, 119, 108);
    }

    #TheFloatingMenu .Navigation li {
        list-style-type: none;
        font-variant: all-small-caps;
    }

    #TheFloatingMenu .Navigation li a {
        font-weight: bold;
        font-size: 1.4em;
    }
</style>

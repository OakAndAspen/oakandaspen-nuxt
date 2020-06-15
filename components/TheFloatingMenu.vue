<template>
    <nav id="TheFloatingMenu"
         class="d-md-none w-100 h-100 py-4 text-white text-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <div class="d-flex align-items-center">
                        <logo class="display-1 mb-2"/>
                        <fa :icon="['far', 'bars']"
                            @click="$emit('toggleNav')"
                            class="display-3 ml-auto pointer"/>
                    </div>
                    <ul class="Navigation p-0 mx-0 my-4">
                        <li v-for="e of this.$t('nav.entries')" :key="e.url"
                            class="my-2">
                            <nuxt-link :to="localePath(e.url)"
                                       class="text-white">
                                {{e.label}}
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
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import LanguageSwitcher from "~/components/LanguageSwitcher.vue";
    import Logo from "~/components/Logo.vue";
    import SocialLinks from "~/components/SocialLinks.vue";

    export default {
        name: "TheFloatingMenu",
        components: {Logo, LanguageSwitcher, SocialLinks}
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

    #TheFloatingMenu .Navigation li a:hover {
        text-decoration: none;
    }
</style>

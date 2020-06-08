<template>
    <nav id="TheMenu"
         :class="'px-0 my-4' + navClass">
        <ul class="m-0 p-0">
            <li v-for="e of entries"
                :style="{listStyleType: 'none'}"
                class="d-inline-block mr-3">
                <nuxt-link :class="linkColor"
                           :to="localePath(e.url)"
                           :style="{fontWeight: 'bold', fontSize: '1.4em'}">
                    {{$t('nav.'+e.code)}}
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "TheMenu",
        props: ['theme', 'isOpen'],
        data() {
            return {
                entries: [
                    {code: "home", url: "index"},
                    {code: "portfolio", url: "portfolio"},
                    {code: "services", url: "services"},
                    {code: "blog", url: "blog"},
                    {code: "about", url: "about"},
                    {code: "contact", url: "contact"}
                ],
                linkColor: "text-" + (this.theme === "light" ? "light" : "secondary"),
                navClass: this.isOpen ? "" : " d-none d-md-block"
            }
        }
    }
</script>

<style>
    #TheMenu {
        font-variant: all-small-caps;
    }
</style>

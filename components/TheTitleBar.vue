<template>
    <div id="TheTitleBar"
         :class="'d-flex align-items-center text-' + textColor">
        <logo/>
        <fa :icon="['far', 'bars']"
            @click="$emit('toggleNav')"
            class="display-3 ml-auto d-md-none pointer"/>
        <span class="ml-auto d-none d-md-block">
            <language-switcher :theme="theme"/>
        </span>
        <span class="ml-4 d-none d-md-block">
            <social-links :theme="theme"/>
        </span>

    </div>
</template>

<script>
    import LanguageSwitcher from "~/components/LanguageSwitcher.vue";
    import Logo from "~/components/Logo.vue";
    import SocialLinks from "~/components/SocialLinks.vue";
    import {facebookLink, gitHubLink, linkedInLink} from "~/config/app.js";

    export default {
        name: "TheTitleBar",
        components: {Logo, LanguageSwitcher, SocialLinks},
        props: ["theme", "onToggleNav"],
        data() {
            return {
                links: [
                    {icon: "facebook-f", title: "Facebook", url: facebookLink},
                    {icon: "linkedin-in", title: "LinkedIn", url: linkedInLink},
                    {icon: "github-alt", title: "GitHub", url: gitHubLink}
                ],
                textColor: this.theme === "light" ? "light" : "secondary",
                linkColor: this.theme === "light" ? "dark" : "light",
                linkBackground: this.theme === "light" ? "light" : "secondary"
            }
        }
    }
</script>

<style>
    #TheTitleBar .Link {
        font-size: 1.4em;
        border-radius: 50%;
    }
</style>

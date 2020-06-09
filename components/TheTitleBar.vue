<template>
    <div id="TheTitleBar"
         :class="'d-flex align-items-center text-' + textColor">
        <fa :icon="['far', 'bars']"
            :onClick="onToggleNav"
            class="display-3 mr-4 d-md-none pointer"/>
        <span class="Logo display-1 mb-2">
            Oak&Aspen
        </span>
        <span class="ml-auto d-none d-md-block">
                <nuxt-link v-for="l of languages" :key="l"
                           :to="switchLocalePath(l)"
                           :class='"Link mr-3 small-caps text-" + textColor'>
                    {{l.toUpperCase()}}
                </nuxt-link>
        </span>
        <span class="d-none d-md-block">
            <a v-for="l of links" :key="l.title"
               :href="l.url"
               :title="l.title"
               :class="'Link ml-2 py-1 px-2 bg-' + linkBackground">
                <fa :icon='["fab", l.icon]'
                    :class="'text-' + linkColor"/>
            </a>
        </span>
    </div>
</template>

<script>
    import {facebookLink, gitHubLink, languages, linkedInLink} from "~/app.config.js";

    export default {
        name: "TheTitleBar",
        props: ["theme", "onToggleNav"],
        data() {
            return {
                languages,
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
    #TheTitleBar .Logo {
        font-family: "Pacifico", sans-serif;
    }

    #TheTitleBar .Link {
        font-size: 1.4em;
        border-radius: 50%;
    }
</style>

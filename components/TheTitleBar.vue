<template>
    <div :class="'d-flex align-items-center text-' + textColor">
        <fa :icon="['far', 'bars']" class="display-3 mr-4 d-md-none pointer"
            :onClick="onToggleNav"/>
        <span :style="logoStyle" class="display-1 mb-2">Oak&Aspen</span>
        <span class="ml-auto d-none d-md-block">
                <nuxt-link v-for="l of languages" :to="switchLocalePath(l)" :style="linkStyle"
                   class='"mr-3 small-caps text-" + textColor'>
                    {{l.toUpperCase()}}
                </nuxt-link>
        </span>
        <span class="d-none d-md-block">
            <nuxt-link v-for="l of links"
                :to="localePath(l.url)" :title="l.title" :style="linkStyle"
               class="'ml-2 py-1 px-2 bg-' + linkBackground">
                <fa :icon='["fab", l.icon]' :class="'text-' + linkColor"/>
            </nuxt-link>
        </span>
    </div>
</template>

<script>
    import {facebookLink, gitHubLink, languages, linkedInLink} from "../app.config.js";

    export default {
        name: "TheTitleBar",
        props: ["theme" ,"onToggleNav"],
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
                linkBackground: this.theme === "light" ? "light" : "secondary",
                logoStyle: {
                    fontFamily: "Pacifico"
                },
                linkStyle: {
                    fontSize: "1.4em",
                    borderRadius: "50%"
                }
            }
        }
    }

</script>

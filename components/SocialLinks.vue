<template>
    <ul class="SocialLinks list-inline m-0 p-0">
        <li v-for="l of links" :key="l.title"
            class="list-inline-item">
            <a :href="l.url"
               :title="l.title"
               :class="linkBackground">
                <fa :icon='["fab", l.icon]'
                    :class="linkColor"/>
            </a>
        </li>
    </ul>
</template>

<script>
    import {facebookLink, gitHubLink, linkedInLink} from "../app.config.js";

    export default {
        name: "SocialLinks",
        props: ["theme"],
        data() {
            return {
                links: [
                    {icon: "facebook-f", title: "Facebook", url: facebookLink},
                    {icon: "linkedin-in", title: "LinkedIn", url: linkedInLink},
                    {icon: "github-alt", title: "GitHub", url: gitHubLink}
                ],
                linkColor: this.theme === "light" ? "text-secondary" : "text-light",
                linkBackground: this.theme === "light" ? "bg-light" : "bg-secondary"
            }
        }
    }
</script>

<style>
    .SocialLinks a {
        font-size: 1.2em;
        height: 30px;
        width: 30px;
        display: inline-block;
        text-align: center;
        border-radius: 50%;
    }
</style>

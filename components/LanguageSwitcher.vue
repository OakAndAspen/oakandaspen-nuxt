<template>
    <ul class="LanguageSwitcher list-inline m-0 p-0">
        <li v-for="l of languages" :key="l.code"
            class="list-inline-item">
            <a :href="switchLocalePath(l.code)"
               :title="l.title"
               :class="linkColor">
                {{l.label}}
            </a>
        </li>
    </ul>
</template>

<script>

    export default {
        name: "LanguageSwitcher",
        props: ["theme"],
        data() {
            return {
                languages: [
                    {code: "fr", label: "FR", title: "Français"},
                    {code: "en", label: "EN", title: "English"}
                ],
                linkColor: this.theme === "light" ? "text-light" : "text-secondary"
            }
        }
    }
</script>

<style>
    .LanguageSwitcher a {
        font-size: 1.4em;
        border-radius: 50%;
    }
</style>

<template>
    <div class="container py-4">
        <header class="border border-info p-4 mb-4">
            <h2>A header with a language switcher</h2>
            <nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link>
            <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
        </header>
        <nav class="border border-danger p-4 mb-4">
            <h2>A menu with navigation</h2>
            <nuxt-link :to="localePath('index')">Home</nuxt-link>
            <nuxt-link :to="localePath('about')">About</nuxt-link>
        </nav>
        <nuxt/>
    </div>
</template>

<style>
    html {
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
</style>

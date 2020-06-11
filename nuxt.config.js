import i18n from "./config/nuxt-i18n.js";
import fontawesome from "./config/nuxt-fontawesome.js";

export default {
    mode: 'universal',
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    loading: {color: '#fff'},
    css: [],
    plugins: [],
    buildModules: [],
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/dotenv',
        ['nuxt-i18n', i18n],
        ['nuxt-fontawesome', fontawesome]
    ],
    axios: {},
    build: {
        extend(config, ctx) {

        }
    }
}

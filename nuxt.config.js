import fontawesome from "./config/nuxt-fontawesome.js";
import i18n from "./config/nuxt-i18n.js";

export default {
    mode: 'universal',
    head: {
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
            {name: "robots", content: "index,follow"},
            {name: "revisit-after", content: "3 days"}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png'}
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
        ['nuxt-fontawesome', fontawesome],
        '@nuxtjs/markdownit'
    ],
    axios: {},
    build: {
        extend(config, ctx) {

        }
    }
}

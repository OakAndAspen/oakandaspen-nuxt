import en from "./locales/en.js"
import fr from "./locales/fr.js"

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
        [
            'nuxt-i18n',
            {
                locales: ['en', 'fr'],
                defaultLocale: 'fr',
                vueI18n: {
                    fallbackLocale: 'fr',
                    messages: {
                        en: en,
                        fr: fr
                    }
                }
            }
        ]
    ],
    axios: {},
    build: {
        extend(config, ctx) {

        }
    }
}

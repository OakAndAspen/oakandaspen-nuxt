import en from "../locales/en";
import fr from "../locales/fr";

export default {
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

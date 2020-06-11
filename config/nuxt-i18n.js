import en from "../locales/en.js";
import fr from "../locales/fr.js";

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

import {email} from "../../../config/app.js";

export default {
    meta: {
        title: "Contact",
        description: "Désirez-vous me contacter pour discuter d'un projet? Vous êtes au bon endroit.",
        keywords: "Contact, email, message"
    },
    pageTitle: "Contact",
    form: {
        title: "Formulaire de contact",
        name: "Votre nom",
        email: "Votre adresse email",
        message: "Votre message",
        button: "Envoyer"
    },
    title1: "Mon lieu de travail",
    title2: "Informations de contact",
    text: "N'hésitez pas à m'envoyer un email à tout moment. Je ferai de mon mieux pour répondre rapidement.",
    messages: {
        missing: "Merci de remplir tous les champs.",
        emailIncorrect: "L'adresse email renseignée n'est pas valide.",
        sending: "Envoi en cours...",
        success: "Merci pour votre message! Je vous répondrai au plus vite.",
        error: "Une erreur inconnue est survenue. Merci d'adresser votre demande à " + email + ". Toutes nos excuses pour ce contretemps."
    }
}

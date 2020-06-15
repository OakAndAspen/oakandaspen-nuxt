import {email} from "../../../config/app.js";

export default {
    pageTitle: "Contact",
    meta: {
        description: "Do you wish to contact me about a project? You're in the right place.",
        keywords: "Contact, email, message"
    },
    form: {
        title: "Contact form",
        name: "Your name",
        email: "Your email address",
        message: "Your message",
        button: "Send"
    },
    title1: "My workplace",
    title2: "Contact information",
    text: "Feel free to email at any time. I will do my best to answer quickly.",
    messages: {
        missing: "Please complete all fields.",
        emailIncorrect: "The given email address is invalid.",
        sending: "Sending...",
        success: "Thank you for your message! I shall answer as soon as possible.",
        error: "An unknown error has occured. Please send your request to " + email + ". Apologies for the inconvenience."
    }
}

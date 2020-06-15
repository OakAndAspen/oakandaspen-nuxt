import {imgDir} from "../../../config/app.js";

export default {
    slides: [
        {
            title: "Irina Despot",
            subtitle: "Développeur web indépendante",
            image: imgDir + "/carousel/background1.jpg",
            button: {
                title: "Mon histoire",
                url: "about"
            }
        },
        {
            title: "Développement web",
            subtitle: "Parcourez mes projets",
            image: imgDir + "/carousel/background2.jpg",
            button: {
                title: "Portfolio",
                url: "portfolio"
            }
        },
        {
            title: "Pup'herd",
            subtitle: "Mon projet de startup",
            image: imgDir + "/carousel/background3.jpg",
            button: {
                title: "",
                url: ""
            }
        }
    ]
}

import {imgDir} from "../../../config/app.js";

export default {
    slides: [
        {
            title: "Irina Despot",
            subtitle: "Freelance web developer",
            image: imgDir + "/carousel/background1.jpg",
            button: {
                title: "My story",
                url: "about"
            }
        },
        {
            title: "Web development",
            subtitle: "Browse my projects",
            image: imgDir + "/carousel/background2.jpg",
            button: {
                title: "Portfolio",
                url: "portfolio"
            }
        },
        {
            title: "Pup'herd",
            subtitle: "My startup project",
            image: imgDir + "/carousel/background3.jpg",
            button: {
                title: "",
                url: ""
            }
        }
    ]
}

import {imgDir} from "../../../config/app.js";

export default {
    pageTitle: "Portfolio",
    meta: {
        description: "Here's a showcase of my latest projects, ranging from apps and websites to marketing campagns.",
        keywords: "Portfolio, showcase, projects, developement, communication, achievements"
    },
    subtitle: "Browse my projects",
    text: "From web development to marketing campaigns, from personal projects to team projects, I have accumulated a large range of skills.",
    projects: [
        {
            name: "Viviskes",
            tags: ["Symfony", "React", "MySQL"],
            description: "Website and intranet of a celtic reenactment association",
            image: imgDir + "/portfolio/viviskes.png"
        },
        {
            name: "MtGManager",
            tags: ["Symfony", "React", "MySQL"],
            description: "Collectible cards management app for my personal use",
            image: imgDir + "/portfolio/mtgmanager.png"
        },
        {
            name: "Paw'some",
            tags: ["Symfony", "React", "MySQL"],
            description: "First prototype for my startup project, since renamed Pup'herd",
            image: imgDir + "/portfolio/pawsome.png"
        },
        {
            name: "Biodi-vers-City",
            tags: ["React", "Illustrator", "Team project"],
            description: "Marketing campaign for BirdLife. Team project during my studies",
            image: imgDir + "/portfolio/biodi.png"
        },
        {
            name: "Generation Connect",
            tags: ["Backbone", "Team project"],
            description: "Prototype of a web platform to put young people at the service of the elderly. Team project during my studies",
            image: imgDir + "/portfolio/generation-connect.png"
        }
    ]
}

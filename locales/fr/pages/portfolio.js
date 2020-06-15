import {imgDir} from "../../../config/app.js";

export default {
    pageTitle: "Portfolio",
    meta: {
        description: "Voici mes derniers projets en date, allant du développement d'applications aux campagnes de communication.",
        keywords: "Portfolio, projets, développement, communication, réalisations"
    },
    subtitle: "Parcourez mes projets",
    text: "Du développement web aux campagnes de marketing, des projets personnels aux projets en équipe, j'ai déjà accumulé un certain panel de compétences. ",
    projects: [
        {
            name: "Viviskes",
            tags: ["Symfony", "React", "MySQL"],
            description: "Site web et intranet d'une association de reconstitution historique celte",
            image: imgDir + "/portfolio/viviskes.png"
        },
        {
            name: "MtGManager",
            tags: ["Symfony", "React", "MySQL"],
            description: "Application de gestion de cartes à collectionner pour mon usage personnel",
            image: imgDir + "/portfolio/mtgmanager.png"
        },
        {
            name: "Paw'some",
            tags: ["Symfony", "React", "MySQL"],
            description: "Premier prototype pour mon projet de startup, depuis renommé Pup'herd",
            image: imgDir + "/portfolio/pawsome.png"
        },
        {
            name: "Biodi-vers-City",
            tags: ["React", "Illustrator", "Team project"],
            description: "Campagne de communication pour BirdLife. Projet en équipe effectué dans le cadre de mes études",
            image: imgDir + "/portfolio/biodi.png"
        },
        {
            name: "Generation Connect",
            tags: ["Backbone", "Team project"],
            description: "Prototype d'une plateforme pour GenerationConnect. Projet en équipe effectué dans le cadre de mes études",
            image: imgDir + "/portfolio/generation-connect.png"
        }
    ]
}

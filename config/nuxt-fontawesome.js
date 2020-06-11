export default {
    component: 'fa',
    imports: [
        {
            set: '@fortawesome/pro-regular-svg-icons',
            icons: ['faAngleLeft', 'faAngleRight', 'faBars', 'faBrowser', 'faBullhorn', 'faCode', 'faDice',
                'faImage', 'faMusic', 'faPaw', 'faTools']
        },
        {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faFacebookF', 'faLinkedinIn', 'faGithubAlt']
        }
    ]
}

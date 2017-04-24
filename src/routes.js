var utilities = require("@/utilities");

const views = [
    {
        path: '/',
        name: 'Home',
        component: require('./views/Home.vue')
    },
]

export default utilities.generateRoutes(views)

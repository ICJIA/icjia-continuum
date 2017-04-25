import { generateRoutes, componentToRouterPath } from './utilities'
const views = [
    {
        path: '/',
        component: require('./views/Home.vue')
    },

]


export default generateRoutes(views)

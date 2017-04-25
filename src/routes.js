import { generateRoutes, componentToRouterPath } from './utilities'
const views = [
    {
        path: '/',
        component: require('./views/Home.vue')
    },
    // {
    //   path: componentToRouterPath('./views/Overview.vue'),
    //   component: require('./views/Overview.vue')
    // },

]


export default generateRoutes(views)

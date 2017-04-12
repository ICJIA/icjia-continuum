const utilities =  require('@/utilities')

const views = [
    {
        path: '/',
        component: require('./views/Home.vue')
    }
]


export default utilities.generateRoutes(views)

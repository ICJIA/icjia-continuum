import jquery from 'jquery'
import tether from 'tether'
import bootstrap from 'bootstrap'
import lodash from 'lodash';

import './scss/style.scss';

import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import routes from './routes.js'
Vue.use(VueRouter)

import Meta from 'vue-meta'
Vue.use(Meta)

Vue.config.productionTip = true

////////////////////////////////////////////////////////////////////////////////////
// Init router
////////////////////////////////////////////////////////////////////////////////////
const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    linkActiveClass: 'active',
    base: __dirname,
    routes: routes
})


////////////////////////////////////////////////////////////////////////////////////
// Custom Google Analytics injection. Modified from vue-ga
////////////////////////////////////////////////////////////////////////////////////
window['NODE_ENV'] = process.env.NODE_ENV
import googleAnalytics from './googleAnalytics.js'
if (NODE_ENV === 'production') {
  googleAnalytics ('UA-10798495-21','ICJIA Continuum | ', router)
}


////////////////////////////////////////////////////////////////////////////////////
// Instantiate Vue instance
////////////////////////////////////////////////////////////////////////////////////
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

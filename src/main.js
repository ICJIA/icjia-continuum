import jquery from 'jquery'
import tether from 'tether'
import bootstrap from 'bootstrap'
import lodash from 'lodash';


import './scss/style.scss';

import Vue from 'vue'
import App from './App'
// import router from './router'

import VueRouter from 'vue-router'
import routes from './routes.js'
Vue.use(VueRouter)

import Meta from 'vue-meta'
Vue.use(Meta)

import googleAnalytics from './googleAnalytics.js'

Vue.config.productionTip = true

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    linkActiveClass: 'active',
    base: __dirname,
    routes: routes
})

googleAnalytics ('UA-10798495-21','ICJIA Continuum | ', router)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

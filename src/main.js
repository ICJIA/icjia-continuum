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

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    linkActiveClass: 'active',
    base: __dirname,
    routes: routes
})

import googleAnalytics from './googleAnalytics.js'
googleAnalytics ('UA-10798495-21','ICJIA Continuum | ', router)


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

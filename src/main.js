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

import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo)

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    linkActiveClass: 'active',
    base: __dirname,
    routes: routes
})

// ////////////////////// Custom Google Analytics injection. Modified from vue-ga
// function appendScript() {
//   const script = document.createElement('script')
//   script.async = true
//   script.src = 'https://www.google-analytics.com/analytics.js'
//   document.body.appendChild(script)
// }
//
// if (!window.ga) {
//    appendScript()
//    window.ga = window.ga || function () {
//      (ga.q = ga.q || []).push(arguments)
//    }
//    ga.l = Number(new Date())
//    ga('create', 'UA-10798495-20', 'auto')
//  }
//
//  let gaTitle = '(not set)'
//  let gaTitlePrefix = 'ICJIA GATA | '
//
//  router.afterEach(from  => {
//    let pageTitle = _.filter(router.options.routes, function(o) { return o.path === from.fullPath });
//    if (pageTitle.length > 0) {
//      gaTitle = pageTitle[0].title
//    }
//   //console.log('ga title: ', title)
//   ga('set', 'page', from.fullPath)
//   ga('set', 'title', gaTitlePrefix + gaTitle);
//   ga('send', 'pageview')
//   })
// //////////////////////// END custom Google Analytics injection



Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

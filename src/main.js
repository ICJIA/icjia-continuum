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


////////////////////////////////////////////////////////////////////////////////////
// Custom Google Analytics injection. Modified from vue-ga
////////////////////////////////////////////////////////////////////////////////////

 let gaTitle = '(not set)'
 let gaTitlePrefix = 'ICJIA Continuum | '
 let gaPath = ''
 let gaID = 'UA-10798495-21'

function appendScript() {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.google-analytics.com/analytics.js'
  document.body.appendChild(script)
}

function stripTrailingSlash(str, min) {
    if(str.substr(-1) === '/' && str.length > min) {
        return str.substr(0, str.length - 1);
    } else {
        return str
    }
}

if (!window.ga) {
   appendScript()
   window.ga = window.ga || function () {
     (ga.q = ga.q || []).push(arguments)
   }
   ga.l = Number(new Date())
   ga('create', gaID, 'auto')
 }


 router.afterEach(from  => {

   let x = router.options.routes

   for (var o = 0; o < x.length; o++){
     //console.log(stripTrailingSlash(from.fullPath, 2))
     if (x[o].path === stripTrailingSlash(from.fullPath, 1)) {
       gaTitle = x[o].title
       gaPath = x[o].path
       //console.log(gaTitle)
     }
   }
  ga('set', 'page', gaPath)
  ga('set', 'title', gaTitlePrefix + gaTitle);
  ga('send', 'pageview')
  })



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

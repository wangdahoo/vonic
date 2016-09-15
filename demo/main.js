import Vue from 'vue'
import VueRouter from 'vue-router'
import Routers from './router'

Vue.transition('view', {enterClass: 'view-enter', leaveClass: 'view-leave'})

Vue.use(VueRouter)

Vue.config.debug = true

let App = Vue.extend()

let router = new VueRouter({
  history: true
})

router.map(Routers)

router.beforeEach((t) => {
  window.scrollTo(0, 0)

  try {
    console.log('router.app.$el', router.app.$el.className)
  } catch (e) {
    console.info(e);
  }

  t.next()
})

router.afterEach((t) => {
  console.log((t.from.path || '') + ' => ' + t.to.path)

})

router.redirect({
  '*': "/home"
})

window.$router = router

router.start(App, '#app')

// import FastClick from 'fastclick'
// FastClick.attach(document.body)

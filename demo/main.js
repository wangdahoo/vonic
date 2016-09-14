import Vue from 'vue'
import VueRouter from 'vue-router'
import Routers from './router'
// Vue.transition('fade', { enterClass: 'fadeIn', leaveClass: 'fadeOut'})
// Vue.transition('slide', { enterClass: 'slideInRight', leaveClass: 'slideOutLeft'})
// Vue.transition('slide-reverse', { enterClass: 'slideInLeft', leaveClass: 'slideOutRight'})

Vue.use(VueRouter)

Vue.config.debug = true

let App = Vue.extend(require('./app.vue'))

let router = new VueRouter({
  history: true,
  // transitionOnLoad: true
})

router.map(Routers)

router.beforeEach((t) => {
  window.scrollTo(0, 0)

  if (t.to.path == localStorage.getItem('vonic:last_path')) {
    console.log('back!');
    try {
      let page = document.querySelector('.page')
      console.log(page);
      Vue.transition('slide', { enterClass: 'slideInLeft', leaveClass: 'slideOutRight'})
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      let page = document.querySelector('.page')
      console.log(page);
      Vue.transition('slide', { enterClass: 'slideInRight', leaveClass: 'slideOutLeft'})
    } catch (e) {
      console.log(e);
    }
  }

  t.next()
})

router.afterEach((t) => {
  console.log((t.from.path || '') + ' => ' + t.to.path)
  localStorage.setItem('vonic:last_path', t.from.path)
})

router.redirect({
  '*': "/home"
})

router.start(App, 'app')

window.$router = router

// import FastClick from 'fastclick'
// FastClick.attach(document.body)

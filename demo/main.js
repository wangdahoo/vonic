import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Demos
import Home from './components/Home'
import Radio from './components/Radio'
import Checkbox from './components/Checkbox'
import Toggle from './components/Toggle'
import Tabs from './components/Tabs'
import ButtonBar from './components/ButtonBar'
import Cells from './components/Cells'
import Scroll from './components/Scroll'

const routers = {

  '/home': {
    component: Home
  },

  '/widgets/radio': {
    component: Radio
  },

  '/widgets/checkbox': {
    component: Checkbox
  },

  '/widgets/toggle': {
    component: Toggle
  },

  '/widgets/tabs': {
    component: Tabs
  },

  '/widgets/buttonbar': {
    component: ButtonBar
  },

  '/widgets/cells': {
    component: Cells
  },

  '/effects/scroll': {
    component: Scroll
  },

};


Vue.transition('view', {enterClass: 'view-enter', leaveClass: 'view-leave'})

Vue.config.debug = true

let App = Vue.extend()

let router = new VueRouter({
  history: true
})

router.map(routers)

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

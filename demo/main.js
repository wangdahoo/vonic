import Vue from 'vue'
import { Vonic } from 'vonic'

// Demos
import Home from './components/Home'
import Radio from './components/Radio'
import Checkbox from './components/Checkbox'
import Toggle from './components/Toggle'
import Tabs from './components/Tabs'
import ButtonBar from './components/ButtonBar'
import Modal from './components/Modal'
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

  '/widgets/modal': {
    component: Modal
  },

  '/widgets/cells': {
    component: Cells
  },

  '/effects/scroll': {
    component: Scroll
  },

};

Vue.use(Vonic, {
  el: '#app',
  routers: routers,
  defaultRouterUrl: '/home'
})

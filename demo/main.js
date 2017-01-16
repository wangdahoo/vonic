import Vue from 'vue'
import Vonic from 'vonic'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './components/Index.vue'
import Home from './components/Home.vue'
import Button from './components/Button.vue'
import MdButton from './components/MdButton.vue'
import Radio from './components/Radio.vue'

import Dialog from './components/Dialog.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/home', component: Home },
  { path: '/basic/button', component: Button },
  { path: '/basic/mdButton', component: MdButton },
  { path: '/basic/radio', component: Radio },

  { path: '/basic/dialog', component: Dialog },
]

Vue.use(Vonic.app, {
  routes: routes
})

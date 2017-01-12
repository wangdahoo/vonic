import Vue from 'vue'
import Vonic from 'vonic'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './components/Index.vue'
import Home from './components/Home.vue'
import Button from './components/Button.vue'
import MdButton from './components/MdButton.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/home', component: Home },
  { path: '/basic/button', component: Button },
  { path: '/basic/mdButton', component: MdButton },
]

Vue.use(Vonic.app, {
  routes: routes
})

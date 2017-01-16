import Vue from 'vue'
import Vonic from 'vonic'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './components/Index'
import Home from './components/Home'
import Button from './components/Button'
import MdButton from './components/MdButton'
import Input from './components/Input'
import InputDefault from './components/InputDefault'
import InputFloatingLabel from './components/InputFloatingLabel'
import Search from './components/Search'
import Radio from './components/Radio'

import Dialog from './components/Dialog'

const routes = [
  { path: '/', component: Index },
  { path: '/home', component: Home },
  { path: '/basic/button', component: Button },
  { path: '/basic/mdButton', component: MdButton },
  { path: '/basic/input', component: Input },
  { path: '/basic/inputDefault', component: InputDefault },
  { path: '/basic/inputFloatingLabel', component: InputFloatingLabel },
  { path: '/basic/search', component: Search },
  { path: '/basic/radio', component: Radio },

  { path: '/basic/dialog', component: Dialog },
]

Vue.use(Vonic.app, {
  routes: routes
})

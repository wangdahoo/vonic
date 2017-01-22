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
import Checkbox from './components/Checkbox'

import Dialog from './components/Dialog'

// Layout
import List from './components/List'
import Cells from './components/Cells'
import Tabs from './components/Tabs'
import ButtonBar from './components/ButtonBar'
import Scalable from './components/Scalable'

// Advanced
import Swiper from './components/Swiper'
import SwiperDefault from './components/SwiperDefault'
import SwiperVertical from './components/SwiperVertical'

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
  { path: '/basic/checkbox', component: Checkbox },

  { path: '/basic/dialog', component: Dialog },

  // Layout
  { path: '/layout/list', component: List },
  { path: '/layout/cells', component: Cells },
  { path: '/layout/tabs', component: Tabs },
  { path: '/layout/buttonbar', component: ButtonBar },
  { path: '/layout/scalable', component: Scalable },

  // Advanced
  { path: '/advanced/swiper', component: Swiper },
  { path: '/advanced/swiper/default', component: SwiperDefault },
  { path: '/advanced/swiper/vertical', component: SwiperVertical },


]

Vue.use(Vonic.app, {
  routes: routes
})

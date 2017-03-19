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
import Toggle from './components/Toggle'
import RangeSlider from './components/RangeSlider'
import Badge from './components/Badge'
import Dialog from './components/Dialog'

// Layout
import Header from './components/Header'
import List from './components/List'
import Cells from './components/Cells'
import Tabs from './components/Tabs'
import ButtonBar from './components/ButtonBar'
import Scalable from './components/Scalable'

// Advanced
import Swiper from './components/Swiper'
import SwiperDefault from './components/SwiperDefault'
import SwiperVertical from './components/SwiperVertical'
import VSwipe from './components/VSwipe'
import Scroll from './components/Scroll'
import VueScroller from './components/VueScroller'
import Cascade from './components/Cascade'
import Accordion from './components/Accordion'
import Datepicker from './components/DatePicker'
import Popup from './components/Popup'
import ActionSheet from './components/ActionSheet'
import Tabbar from './components/Tabbar'
import TabbarHome from './components/tabbar/Home'
import TabbarDiscount from './components/tabbar/Discount'
import TabbarCart from './components/tabbar/Cart'
import TabbarUser from './components/tabbar/User'
import PageFromTabbar from './components/tabbar/PageFromTabbar'
import TabbarWithoutRoutes from './components/TabbarWithoutRoutes'
import Modal from './components/Modal'

import Test from './components/Test'

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
  { path: '/basic/toggle', component: Toggle },
  { path: '/basic/range', component: RangeSlider },
  { path: '/basic/badge', component: Badge },
  { path: '/basic/dialog', component: Dialog },

  // Layout
  { path: '/layout/header', component: Header },
  { path: '/layout/list', component: List },
  { path: '/layout/cells', component: Cells },
  { path: '/layout/tabs', component: Tabs },
  { path: '/layout/buttonbar', component: ButtonBar },
  { path: '/layout/scalable', component: Scalable },

  // Advanced
  { path: '/advanced/swiper', component: Swiper },
  { path: '/advanced/swiper/default', component: SwiperDefault },
  { path: '/advanced/swiper/vertical', component: SwiperVertical },
  { path: '/advanced/vswipe', component: VSwipe },
  { path: '/advanced/scroll', component: Scroll },
  { path: '/advanced/scroller', component: VueScroller },
  { path: '/advanced/cascade', component: Cascade },
  { path: '/advanced/accordion', component: Accordion },
  { path: '/advanced/popup', component: Popup },
  { path: '/advanced/actionSheet', component: ActionSheet },
  {
    path: '/advanced/tabbar',
    component: Tabbar,
    children: [
      { path: 'home', component: TabbarHome },
      { path: 'discount', component: TabbarDiscount },
      { path: 'cart', component: TabbarCart },
      { path: 'user', component: TabbarUser }
    ]
  },
  { path: '/pageFromTabbar',component: PageFromTabbar },
  { path: '/advanced/tabbarWithoutRoutes', component: TabbarWithoutRoutes },
  { path: '/advanced/modal', component: Modal },
  { path: '/advanced/datepicker', component: Datepicker },

  // test
  { path: '/test', component: Test }
]

/**
 * !! Head up
 * Using sessionStorage, Vonic.app.pageContentScrollTop, Vonic.app.nextDirection
 * to handle history view transition and preview page position
 *
 */

import sess from './sess'

const beforeEach = (toRoute, fromRoute, next) => {
  const to = toRoute.path
  const from = fromRoute.path
  const scrollTop = Vonic.app.pageContentScrollTop()

  let h = sess.get(to)
  if (h && h.history) {
    Vonic.app.nextDirection('back')
    h.history = false
    sess.set(to, h)
  } else {
    sess.set(from || '/', {
      history: true,
      scrollTop: scrollTop
    })
    Vonic.app.nextDirection('forward')
  }

  const tabbarRoutes = [
    '/advanced/tabbar/home',
    '/advanced/tabbar/discount',
    '/advanced/tabbar/cart',
    '/advanced/tabbar/user'
  ]

  if (from && tabbarRoutes.indexOf(from) > -1) {
    sess.set(from, {
      history: false,
      scrollTop: scrollTop
    })
  }

  // 某些页面定制 page transition direction
  if (
    (from == '/' && to == '/home') ||
    (from == '/home' && to == '/advanced/tabbar/home') ||
    (from == '/advanced/tabbar/user' && to == '/pageFromTabbar')
  ) {
    Vonic.app.nextDirection('forward')
  }

  if (
    (to == '/' && from == '/home') ||
    (to == '/home' && from == '/advanced/tabbar/home') ||
    (to == '/advanced/tabbar/user' && from == '/pageFromTabbar')
  ) {
    Vonic.app.nextDirection('back')
  }

  next()
}

const afterEach = (toRoute, fromRoute) => {
  const to = toRoute.path
  const from = fromRoute.path
  // [Custom Business] Never use history scrollTop when '/' => '/home'
  if (from == '/' && to == '/home') return

  const h = sess.get(to)
  if (h && h.scrollTop) {
    Vue.nextTick(() => {
      Vonic.app.pageContentScrollTop(h.scrollTop)
    })
  }
}

// Register beforeEach and afterEach Hooks
Vonic.app.setConfig('beforeEach', beforeEach)
Vonic.app.setConfig('afterEach', afterEach)

// Vonic.app.setConfig('pushMethod', 'replace')
// Vonic.app.setConfig('pageTransition', 'ios')

Vue.use(Vonic.app, {
  routes: routes
})

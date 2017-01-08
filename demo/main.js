import Vue from 'vue'
import Vonic  from 'vonic'

// Demos
import Index from './components/Index'
import Home from './components/Home'
import Button from './components/Button'
import MdButton from './components/MdButton'
import Input from './components/Input'
import InputDefault from './components/InputDefault'
import InputFloatingLabel from './components/InputFloatingLabel'
import Counter from './components/Counter'
import Search from './components/Search'
import Radio from './components/Radio'
import Checkbox from './components/Checkbox'
import Toggle from './components/Toggle'
import Cascade from './components/Cascade'

import List from './components/List'
import Cells from './components/Cells'
import Tabs from './components/Tabs'
import ButtonBar from './components/ButtonBar'
import Scalable from './components/Scalable'

import Swiper from './components/Swiper'
import SwiperDefault from './components/SwiperDefault'
import SwiperVertical from './components/SwiperVertical'
import Scroll from './components/Scroll'
import VueScroller from './components/VueScroller'

import Popover from './components/Popover'
import Popup from './components/Popup'
import Modal from './components/Modal'
import ActionSheet from './components/ActionSheet'

import TabBar from './components/TabBar'
import TabBarHome from './components/tabbar/Home'
import TabBarDiscount from './components/tabbar/Discount'
import TabBarCart from './components/tabbar/Cart'
import TabBarUser from './components/tabbar/User'
import PageFromTabbar from './components/tabbar/PageFromTabbar'
import TabbarWithoutRoutes from './components/TabbarWithoutRoutes'

const routes = {
  '/': {
    component: Index
  },

  '/home': {
    component: Home
  },

  // Basic
  '/basic/button': {
    component: Button
  },
  '/basic/mdButton': {
    component: MdButton
  },
  '/basic/input': {
    component: Input
  },
  '/basic/inputDefault': {
    component: InputDefault
  },
  '/basic/inputFloatingLabel': {
    component: InputFloatingLabel
  },
  '/basic/search': {
    component: Search
  },
  '/basic/radio': {
    component: Radio
  },
  '/basic/checkbox': {
    component: Checkbox
  },
  '/basic/toggle': {
    component: Toggle
  },
  '/basic/popover': {
    component: Popover
  },
  '/basic/counter': {
    component: Counter
  },

  // Layout
  '/layout/list': {
    component: List
  },
  '/layout/cells': {
    component: Cells
  },
  '/layout/tabs': {
    component: Tabs
  },
  '/layout/buttonbar': {
    component: ButtonBar
  },
  '/layout/scalable': {
    component: Scalable
  },

  // Advanced
  '/advanced/swiper': {
    component: Swiper
  },
  '/advanced/swiperDefault': {
    component: SwiperDefault
  },
  '/advanced/swiperVertical': {
    component: SwiperVertical
  },
  '/advanced/scroll': {
    component: Scroll
  },
  '/advanced/scroller': {
    component: VueScroller
  },
  '/advanced/cascade': {
    component: Cascade
  },
  '/advanced/actionsheet': {
    component: ActionSheet
  },
  '/advanced/popup': {
    component: Popup
  },
  '/advanced/modal': {
    component: Modal
  },
  '/advanced/tabbar': {
    component: TabBar,
    subRoutes: {
      '/home': {
        component: TabBarHome
      },
      '/discount': {
        component: TabBarDiscount
      },
      '/cart': {
        component: TabBarCart
      },
      '/user': {
        component: TabBarUser
      }
    }
  },
  '/pageFromTabbar': {
    component: PageFromTabbar
  },
  '/advanced/tabbarWithoutRoutes': {
    component: TabbarWithoutRoutes
  }
}

/**
 * !! Head up
 * Using sessionStorage, Vonic.app.pageContentScrollTop, Vonic.app.nextDirection
 * to handle history view transition and preview page position
 *
 */

import sess from './sess'

const beforeEach = (t) => {
  const to = t.to.path
  const from = t.from.path
  const scrollTop = Vonic.app.pageContentScrollTop()

  const h = sess.get(to)
  if (h && h.history || (from && from.indexOf(to) === 0)) {
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
  t.next()
}

const afterEach = (t) => {
  const to = t.to.path
  const from = t.from.path
  // [Custom Business] Never use history scrollTop when '/' => '/home'
  if (from == '/' && to == '/home') return

  const h = sess.get(t.to.path)
  if (h && h.scrollTop) {
    Vue.nextTick(() => {
      Vonic.app.pageContentScrollTop(h.scrollTop)
    })
  }
}

// Register beforeEach and afterEach Hooks
Vonic.app.setConfig('beforeEach', beforeEach)
Vonic.app.setConfig('afterEach', afterEach)

Vue.use(Vonic.app, {
  routes: routes,
  defaultRouteUrl: '/',
  defaultNavTheme: 'light'
})

import FastClick from 'fastclick'
FastClick.attach(document.body)

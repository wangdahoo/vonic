import Vue from 'vue'
import Vonic  from 'vonic'

// Demos
import Index from './components/Index'
import RippleButton from './components/RippleButton'
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

const routers = {
  '/': {
    component: Index
  },

  // Form Related
  '/widgets/rippleButton': {
    component: RippleButton
  },
  '/widgets/input': {
    component: Input
  },
  '/widgets/inputDefault': {
    component: InputDefault
  },
  '/widgets/inputFloatingLabel': {
    component: InputFloatingLabel
  },
  '/widgets/counter': {
    component: Counter
  },
  '/widgets/search': {
    component: Search
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
  '/widgets/cascade': {
    component: Cascade
  },

  // Layout
  '/widgets/list': {
    component: List
  },
  '/widgets/cells': {
    component: Cells
  },
  '/widgets/tabs': {
    component: Tabs
  },
  '/widgets/buttonbar': {
    component: ButtonBar
  },
  '/effects/scalable': {
    component: Scalable
  },

  // Swiper & Scroll
  '/widgets/swiper': {
    component: Swiper
  },
  '/widgets/swiperDefault': {
    component: SwiperDefault
  },
  '/widgets/swiperVertical': {
    component: SwiperVertical
  },
  '/effects/scroll': {
    component: Scroll
  },

  // Popover/Popup/Modal
  '/widgets/popover': {
    component: Popover
  },
  '/widgets/popup': {
    component: Popup
  },
  '/widgets/modal': {
    component: Modal
  },
  '/widgets/actionsheet': {
    component: ActionSheet
  },

  // TabBar
  '/widgets/tabbar': {
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
  }

};


Vue.use(Vonic.app, {
  routers: routers,
  defaultRouterUrl: '/',
  defaultNavTheme: 'light'
})

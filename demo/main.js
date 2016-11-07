import Vue from 'vue'
import Vonic  from 'vonic'

// Demos
import Index from './components/Index'
import Input from './components/Input'
import InputDefault from './components/InputDefault'
import InputFloatingLabel from './components/InputFloatingLabel'
import Search from './components/Search'
import Radio from './components/Radio'
import Checkbox from './components/Checkbox'
import Toggle from './components/Toggle'
import Tabs from './components/Tabs'
import ButtonBar from './components/ButtonBar'
import Popup from './components/Popup'
import Popover from './components/Popover'
import Modal from './components/Modal'
import Cells from './components/Cells'
import Swiper from './components/Swiper'
import SwiperDefault from './components/SwiperDefault'
import Scroll from './components/Scroll'
import VumScroll from './components/VumScroll'
import Scalable from './components/Scalable'

const routers = {
  '/': {
    component: Index
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

  '/widgets/tabs': {
    component: Tabs
  },

  '/widgets/buttonbar': {
    component: ButtonBar
  },

  '/widgets/popup': {
    component: Popup
  },

  '/widgets/popover': {
    component: Popover
  },

  '/widgets/modal': {
    component: Modal
  },

  '/widgets/cells': {
    component: Cells
  },

  '/widgets/swiper': {
    component: Swiper
  },

  '/widgets/swiperDefault': {
    component: SwiperDefault
  },

  '/effects/scroll': {
    component: Scroll
  },

  '/effects/vum-scroll': {
    component: VumScroll
  },

  '/effects/scalable': {
    component: Scalable
  }

};

Vue.use(Vonic.app, {
  routers: routers,
  defaultRouterUrl: '/'
})

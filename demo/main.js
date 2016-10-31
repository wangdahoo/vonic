import Vue from 'vue'
import Vonic  from 'vonic'

// Demos
import Home from './components/Home'
import Input from './components/Input'
import DefaultInput from './components/DefaultInput'
import FloatingLabel from './components/FloatingLabel'
import Search from './components/Search'
import Radio from './components/Radio'
import Checkbox from './components/Checkbox'
import Toggle from './components/Toggle'
import Tabs from './components/Tabs'
import ButtonBar from './components/ButtonBar'
import Popup from './components/Popup'
import Modal from './components/Modal'
import Cells from './components/Cells'
import Scroll from './components/Scroll'
import VumScroll from './components/VumScroll'

const routers = {
  '/home': {
    component: Home
  },

  '/widgets/input': {
    component: Input,
    navbar: {
      title: '文本框'
    }
  },

  '/widgets/defaultInput': {
    component: DefaultInput
  },

  '/widgets/floatingLabel': {
    component: FloatingLabel
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

  '/widgets/modal': {
    component: Modal
  },

  '/widgets/cells': {
    component: Cells
  },

  '/effects/scroll': {
    component: Scroll
  },

  '/effects/vum-scroll': {
    component: VumScroll
  },

};

Vue.use(Vonic.app, {
  routers: routers,
  defaultRouterUrl: '/'
})

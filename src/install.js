// vonic scss
import './scss/vonic.scss'

// promise & object assign
import Promise from 'es6-promise'
Promise.polyfill()
import assign from 'object-assign'

// VueScroller & VSwipe
import VueScroller from 'vue-scroller'
import VSwipe from 'vswipe'

// Basic Components
import MdButton from './components/md-button'
import VonInput from './components/input/Input.vue'
import Search from './components/input/Search.vue'
import VonRadio from './components/radio'
import VonCheckbox from './components/checkbox'
import VonToggle from './components/toggle'
import VonRange from './components/range'
import VonHeader from './components/header'
import VonBadge from './components/badge'

// Layout
import HairlineList from './components/list/HairlineList'
import HairlineItem from './components/list/HairlineItem'
import Cells from './components/cells'
import Tabs from './components/tabs'
import ButtonBar from './components/buttonbar'
import Scalable from './components/scalable'

// Advanced
import {Swiper, SwiperItem} from './components/swiper'
import Scroll from './components/scroll'
import Cascade from './components/cascade'
import { Accordion, AccordionItem } from './components/accordion'
import Datepicker from './components/datepicker'

// Modal
import Modal from './services/modal/Modal.vue'

// Services
import $backdrop from './services/backdrop'
import { $loading, $toast } from './services/loading'
import $dialog from './services/popup/dialog.js'
import $popup from './services/popup/index.js'
import $cascadePanel from './services/cascadepanel/index.js'
import $actionSheet from './services/actionsheet/index.js'
import $tabbar from './services/tabbar/index.js'
import $sidebar from './services/sidebar/index.js'
import $modal from './services/modal/index.js'
import Storage from 'storage-js-iso'

import FastClick from 'fastclick'

const is_ios = () => {
 return /iPad|iPhone|iPod/.test(navigator.userAgent)
}

export default function install (Vue, options) {
  Vue.use(VueScroller)
  Vue.use(VSwipe)

  // Basic Components
  Vue.component('md-button', MdButton)
  Vue.component('von-input', VonInput)
  Vue.component('search', Search)
  Vue.component('von-radio', VonRadio)
  Vue.component('von-checkbox', VonCheckbox)
  Vue.component('von-toggle', VonToggle)
  Vue.component('von-range', VonRange)
  Vue.component('von-header', VonHeader)
  Vue.component('badge', VonBadge)

  // Layout Components
  Vue.component('list', HairlineList)
  Vue.component('item', HairlineItem)
  Vue.component('hl-list', HairlineList)
  Vue.component('hl-item', HairlineItem)
  Vue.component('cells', Cells)
  Vue.component('tabs', Tabs)
  Vue.component('button-bar', ButtonBar)
  Vue.component('scalable', Scalable)

  // Advanced ComponentsVue.component('swiper', Swiper)
  Vue.component('swiper-item', SwiperItem)
  Vue.component('scroll', Scroll)
  Vue.component('cascade', Cascade)
  Vue.component('accordion', Accordion)
  Vue.component('accordion-item', AccordionItem)
  Vue.component('datepicker', Datepicker)

  // Modal
  Vue.component('modal', Modal)

  // Services
  Vue.prototype.$backdrop = window.$backdrop = $backdrop
  Vue.prototype.$loading = window.$loading = $loading
  Vue.prototype.$toast = window.$toast = $toast
  Vue.prototype.$dialog = window.$dialog = $dialog
  Vue.prototype.$popup = window.$popup = $popup
  Vue.prototype.$cascadePanel = window.$cascadePanel = $cascadePanel
  Vue.prototype.$actionSheet = window.$actionSheet = $actionSheet
  Vue.prototype.$tabbar = window.$tabbar = $tabbar
  Vue.prototype.$sidebar = window.$sidebar = $sidebar
  Vue.prototype.$modal = window.$modal = $modal
  Vue.prototype.$storage = window.$storage = Storage

  // 一些兼容性代码
  /* for iOS 10, users can now pinch-to-zoom even when a website sets user-scalable=no in the viewport. */
  document.documentElement.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
      e.preventDefault()
    }
  }, false)

  /* iOS Safari - Disable double click to zoom */
  if (is_ios()) {
    let lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', (e) => {
      let now = (new Date()).getTime()
      if (now - lastTouchEnd < 300) {
        e.preventDefault()
      }
      lastTouchEnd = now
    }, false)
  }

  FastClick.attach(document.body)
}

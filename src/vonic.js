import './scss/vonic.scss'

import Vue from 'vue'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

import VSwipe from 'vswipe'
Vue.use(VSwipe)

// Basic
import MdButton from './components/md-button'
import VonInput from './components/input/Input.vue'
import Search from './components/input/Search.vue'
import VonRadio from './components/radio'
import VonCheckbox from './components/checkbox'
import VonToggle from './components/toggle'
import VonRange from './components/range'
import VonHeader from './components/header'
import VonBadge from './components/badge'

Vue.component('md-button', MdButton)
Vue.component('von-input', VonInput)
Vue.component('search', Search)
Vue.component('von-radio', VonRadio)
Vue.component('von-checkbox', VonCheckbox)
Vue.component('von-toggle', VonToggle)
Vue.component('von-range', VonRange)
Vue.component('von-header', VonHeader)
Vue.component('badge', VonBadge)

// Layout
import HairlineList from './components/list/HairlineList'
import HairlineItem from './components/list/HairlineItem'
import Cells from './components/cells'
import Tabs from './components/tabs'
import ButtonBar from './components/buttonbar'
import Scalable from './components/scalable'

Vue.component('list', HairlineList)
Vue.component('item', HairlineItem)
Vue.component('hl-list', HairlineList)
Vue.component('hl-item', HairlineItem)
Vue.component('cells', Cells)
Vue.component('tabs', Tabs)
Vue.component('button-bar', ButtonBar)
Vue.component('scalable', Scalable)

// Advanced
import {Swiper, SwiperItem} from './components/swiper'
import Scroll from './components/scroll'
import Cascade from './components/cascade'
import { Accordion, AccordionItem } from './components/accordion'
import Datepicker from './components/datepicker'
Vue.component('swiper', Swiper)
Vue.component('swiper-item', SwiperItem)
Vue.component('scroll', Scroll)
Vue.component('cascade', Cascade)
Vue.component('accordion', Accordion)
Vue.component('accordion-item', AccordionItem)
Vue.component('datepicker', Datepicker)

// Modal
import Modal from './services/modal/Modal.vue'
Vue.component('modal', Modal)

import Plugin from './plugin'

export default {
  // Basic
  MdButton,
  VonInput,
  Search,
  VonRadio,
  VonCheckbox,
  VonHeader,
  VonBadge,

  // Layout
  List: HairlineList,
  Item: HairlineItem,
  HairlineList,
  HairlineItem,
  Cells,
  Tabs,
  ButtonBar,
  Scalable,

  // Advanced
  Swiper,
  SwiperItem,
  Scroll,
  Cascade,

  Accordion,
  AccordionItem,

  Modal,

  app: Plugin
}

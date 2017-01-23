import axios from 'axios'
import Vue from 'vue'

// Basic
import MdButton from './components/md-button'
import VonInput from './components/input/Input.vue'
import Search from './components/input/Search.vue'
import VonRadio from './components/radio'
import VonCheckbox from './components/checkbox'

Vue.component('md-button', MdButton)
Vue.component('von-input', VonInput)
Vue.component('search', Search)
Vue.component('von-radio', VonRadio)
Vue.component('von-checkbox', VonCheckbox)

// Layout
import {List, Item, HairlineItem} from './components/list'
import Cells from './components/cells'
import Tabs from './components/tabs'
import ButtonBar from './components/buttonbar'
import Scalable from './components/scalable'

Vue.component('list', List)
Vue.component('item', Item)
Vue.component('hl-item', HairlineItem)
Vue.component('cells', Cells)
Vue.component('tabs', Tabs)
Vue.component('button-bar', ButtonBar)
Vue.component('scalable', Scalable)

// Advanced
import {Swiper, SwiperItem} from './components/swiper'
import Cascade from './components/cascade'
Vue.component('swiper', Swiper)
Vue.component('swiper-item', SwiperItem)
Vue.component('cascade', Cascade)

import Plugin from './plugin'

module.exports = {
  // Basic
  MdButton,
  VonInput,
  Search,
  VonRadio,
  VonCheckbox,

  // Layout
  List,
  Item,
  HairlineItem,
  Cells,
  Tabs,
  ButtonBar,
  Scalable,

  // Advanced
  Swiper,
  SwiperItem,
  Cascade,

  app: Plugin
}

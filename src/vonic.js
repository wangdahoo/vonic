import axios from 'axios'
import Vue from 'vue'

// Basic
import MdButton from './components/md-button'
import {Input, Search} from './components/input'
import VonRadio from './components/radio'
import VonCheckbox from './components/checkbox'
import VonToggle from './components/toggle'
import Popover from './components/popover'
import Counter from './components/counter'

Vue.component('md-button', MdButton)
Vue.component('von-input', Input)
Vue.component('search', Search)
Vue.component('von-radio', VonRadio)
Vue.component('von-checkbox', VonCheckbox)
Vue.component('von-toggle', VonToggle)
Vue.component('popover', Popover)
Vue.component('counter', Counter)

// Layout
import {List, Item, HairlineItem} from './components/list'
import {Cells} from './components/cells'
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
import Scroll from './components/scroll'
import VueScroller from 'vue-scroller'
import Cascade from './components/cascade'

Vue.component('swiper', Swiper)
Vue.component('swiper-item', SwiperItem)
Vue.component('scroll', Scroll)
Vue.component('scroller', VueScroller) /* https://github.com/wangdahoo/vue-scroller 谨慎使用，将来可能会移除该组件 */
Vue.component('cascade', Cascade)

import Plugin from './plugin'

module.exports = {
  // Basic
  MdButton,
  VonInput: Input,
  Search,
  VonRadio,
  VonCheckbox,
  VonToggle,
  Popover,
  Counter,

  // Layout
  List, Item, HairlineItem,
  Cells,
  Tabs,
  ButtonBar,
  Scalable,

  // Advanced
  Swiper, SwiperItem,
  Scroll,
  VueScroller,
  Cascade,

  app: Plugin
}

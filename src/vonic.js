import 'axios'

import MdButton from './components/md-button'
import {Input, Search} from './components/input'
import Counter from './components/counter'
import VonRadio from './components/radio'
import VonCheckbox from './components/checkbox'
import VonToggle from './components/toggle'
import Cascade from './components/cascade'

// Layout
import {List, Item, HairlineItem} from './components/list'
import {Cells} from './components/cells'
import Tabs from './components/tabs'
import ButtonBar from './components/buttonbar'
import Scalable from './components/scalable'

// Swiper & Scroll
import {Swiper, SwiperItem} from './components/swiper'
import Scroll from './components/scroll'
import VueScroller from 'vue-scroller'

import Popover from './components/popover'

import Plugin from './plugin'

module.exports = {
  MdButton,
  'VonInput': Input,
  Counter,
  Search,
  VonRadio,
  VonCheckbox,
  VonToggle,
  Cascade,

  List,
  Item,
  HairlineItem,
  Cells,
  Tabs,
  ButtonBar,
  Scalable,

  Swiper,
  SwiperItem,

  Scroll,
  /* https://github.com/wangdahoo/vue-scroller 谨慎使用，将来可能会移除该组件 */
  VueScroller,

  Popover,

  app: Plugin
}

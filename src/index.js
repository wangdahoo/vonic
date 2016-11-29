import 'whatwg-fetch'

import MdButton from './components/md-button'
import {Input, Search} from './components/input'
import Counter from './components/counter'
import VonRadio from './components/radio'
import VonCheckbox from './components/checkbox'
import VonToggle from './components/toggle'
import Cascade from './components/cascade'

// Layout
import {List, Item} from './components/list'
import {Cells} from './components/cells'
import Tabs from './components/tabs'
import ButtonBar from './components/buttonbar'
import Scalable from './components/scalable'

// Swiper & Scroll
import {Swiper, SwiperItem} from './components/swiper'
import Scroller from 'vue-scroller'
import VumScroll from './components/vum-scroll'

import Popover from './components/popover'
import TabBar from './components/tabbar'

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
  Cells,
  Tabs,
  ButtonBar,
  Scalable,

  Swiper,
  SwiperItem,

  'Scroll': Scroller,
  VumScroll,

  Popover,
  TabBar,

  app: Plugin
}

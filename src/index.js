import 'whatwg-fetch'
import Scroller from 'vue-scroller'
import VumScroll from './components/vum-scroll'
import VonRadio from './components/radio'
import VonCheckbox from './components/checkbox'
import VonToggle from './components/toggle'
import Tabs from './components/tabs'
import {Cells} from './components/cells'
import {Swiper, SwiperItem} from './components/swiper'
import ButtonBar from './components/buttonbar'
import {Input, Search} from './components/input'
import {Loading} from './components/loading'

import {CustomPopup} from './components/popup'

import Popover from './components/popover'

import Scalable from './components/scalable'
import {List, Item} from './components/list'

import Plugin from './plugin'

import Sidebar from './services/sidebar'
window.$sidebar = Sidebar

const Vonic = {
  'Scroll': Scroller,
  VumScroll,
  VonRadio,
  VonCheckbox,
  VonToggle,
  Tabs,
  Cells,
  Swiper,
  SwiperItem,
  ButtonBar,
  'VonInput': Input,
  Search,
  Loading,
  Popover,
  'Popup': CustomPopup,

  Scalable,
  'VonList': List,
  'VonItem': Item,

  app: Plugin
}

export default Vonic

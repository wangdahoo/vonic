import Page from './components/page'
import {Scroller} from 'vue-scroller'
import VumScroll from './components/vum-scroll'
import VonHeader from './components/header'
import VonRadio from './components/radio'
import VonCheckbox from './components/checkbox'
import VonToggle from './components/toggle'
import Tabs from './components/tabs'
import {Cells} from './components/cells'
import ButtonBar from './components/buttonbar'

import {Input, Search} from './components/input'

import {Loading} from './components/loading'

import Vonic from './vonic'

const Scroll = Scroller
const VonInput = Input

module.exports = {
  Page,
  Scroll,
  VumScroll,
  VonHeader,
  VonRadio,
  VonCheckbox,
  VonToggle,
  Tabs,
  Cells,
  ButtonBar,

  VonInput,
  Search,

  Loading,

  Vonic
}

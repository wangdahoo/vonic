import axios from 'axios'
import Vue from 'vue'

// Basic
import MdButton from './components/md-button'
import VonRadio from './components/radio'

Vue.component('md-button', MdButton)
Vue.component('von-radio', VonRadio)

import Plugin from './plugin'

module.exports = {
  // Basic
  MdButton,
  VonRadio,

  app: Plugin
}

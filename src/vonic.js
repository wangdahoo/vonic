import axios from 'axios'
import Vue from 'vue'

// Basic
import MdButton from './components/md-button'

Vue.component('md-button', MdButton)

import Plugin from './plugin'

module.exports = {
  // Basic
  MdButton,

  app: Plugin
}

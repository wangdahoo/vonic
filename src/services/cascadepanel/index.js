import Vue from 'vue'
import {createElement, timeout} from '../utils'
import CascadePanel from '../../components/cascade/CascadePanel.vue'

class CascadePanelService {
  constructor() {
    this._vm = undefined
  }

  show(title, options) {
    createElement('von-cascade-panel')
    this._vm = new Vue(CascadePanel).$mount('[von-cascade-panel]')
    return timeout(50).then(() => {
      return this._vm.show(title, options)
    })
  }

  hide() {
    this._vm.hide()
  }
}

window.$cascadePanel = new CascadePanelService()

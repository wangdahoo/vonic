import Vue from 'vue'
import Backdrop from './Backdrop'
import {createElement} from '../utils'

class VonicBackdrop {
  constructor() {
    this._vm = undefined
  }

  show() {
    if (!document.querySelector('[von-backdrop]')) {
      createElement('von-backdrop')
    }

    this._vm = new Vue(Backdrop)
    this._vm.$mount('[von-backdrop]')

    setTimeout(() => {
      this._vm.show()
    })

    return new Promise((resolve) => {
      setTimeout(() => {
        this._vm.show()
        resolve()
      })
    })
  }

  hide() {
    if (this._vm) {
      this._vm.hide().then(() => {
        this._vm.$destroy()
      })
    }
  }

  getState() {
    return this._vm ? this._vm.getState() : 0
  }
}

window.$backdrop = new VonicBackdrop()

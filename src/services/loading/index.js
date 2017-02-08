import Vue from 'vue'
import Loading from './Loading'

import {createElement, timeout} from '../utils'

class VonicLoading {
  constructor() {
    this._vm = undefined
  }

  show(tips) {
    createElement('von-loading')
    this._vm = new Vue(Loading)
    this._vm.$mount('[von-loading]')
    setTimeout(() => {
      this._vm.show(tips)
    })

    return timeout(300)
  }

  toast(tips, millsecs) {
    createElement('von-loading')
    this._vm = new Vue(Loading)
    this._vm.$mount('[von-loading]')
    setTimeout(() => {
      this._vm.toast(tips, millsecs)
    })

    return timeout(millsecs + 300)
  }

  hide(millsecs) {
    if (!this._vm) return timeout(0)

    return new Promise((resolve) => {
      setTimeout(() => {
        this._vm.hide()
        resolve(timeout(300))
      }, (typeof millsecs == 'number' ? millsecs : 0))
    })
  }

  update(text) {
    this._vm.setText(text)
  }
}

let loading = new VonicLoading()

window.$loading = {
  show: loading.show,
  hide: loading.hide,
  update: loading.update
}

window.$toast = {
  show: loading.toast,
  hide: loading.hide,
  update: loading.update
}

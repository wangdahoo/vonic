import Vue from 'vue'
import Loading from './Loading'

import {createElement} from '../utils'

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
  }

  toast(tips, millsecs) {
    createElement('von-loading')
    this._vm = new Vue(Loading)
    this._vm.$mount('[von-loading]')
    setTimeout(() => {
      this._vm.toast(tips, millsecs)
    })
  }

  hide() {
    this._vm.hide()
  }
}

let loading = new VonicLoading()

window.$loading = {
  show: loading.show,
  hide: loading.hide
}

window.$toast = {
  show: loading.toast,
  hide: loading.hide
}

import Vue from 'vue'
import utils from '../utils'
import { Loading } from '../../loading'

class VonicLoading {
  _vm = undefined

  show(tips) {
    utils.createElement('von-loading')
    this._vm = new Vue(Loading)
    setTimeout(() => {
      this._vm.show(tips)
    })
  }

  toast(tips, millsecs) {
    utils.createElement('von-loading')
    this._vm = new Vue(Loading)
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

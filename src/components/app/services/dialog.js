import Vue from 'vue'
import utils from '../utils'
import { Alert, AlertIOS, Confirm, ConfirmIOS } from '../../popup'

class Dialog {
  _popups = []

  show(type, options) {
    let rnd = Math.random().toString(36).substring(3, 8)
    utils.createElement(`von-${type}-${rnd}`)
    let vm = new Vue(
      type == 'alert' ? (options.theme == 'ios' ? AlertIOS : Alert) : 
        (options.theme == 'ios' ? ConfirmIOS : Confirm)
    ).$mount(`[von-${type}-${rnd}]`)
    this._popups.push(vm)
    return vm.show(options)
  }

  alert(options) {
    return this.show('alert', options)
  }

  confirm(options) {
    return this.show('confirm', options)
  }
}

window.$dialog = new Dialog()

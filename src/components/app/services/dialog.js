import Vue from 'vue'
import utils from '../utils'
import { Alert, AlertIOS, Confirm, ConfirmIOS } from '../../popup'

class Dialog {
  show(type, options) {
    let rnd = Math.random().toString(36).substring(3, 8)
    utils.createElement(`von-${type}-${rnd}`)
    let el = `[von-${type}-${rnd}]`
    document.querySelector(el).setAttribute('von-dialog', '')
    let vm = new Vue(
      type == 'alert' ? (options.theme == 'ios' ? AlertIOS : Alert) : 
        (options.theme == 'ios' ? ConfirmIOS : Confirm)
    ).$mount(el)
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

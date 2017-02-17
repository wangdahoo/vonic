import Vue from 'vue'
import {createElement} from '../utils'

import Alert from './Alert'
import AlertIOS from './AlertIOS'
import Confirm from './Confirm'
import ConfirmIOS from './ConfirmIOS'

class Dialog {
  show(type, options) {
    let rnd = Math.random().toString(36).substring(3, 6)
    let marker = `von-${type}-${rnd}`
    createElement(marker)
    let selector = `[${marker}]`

    let vm = new Vue(
      type == 'alert' ? (options.theme == 'ios' ? AlertIOS : Alert) :
        (options.theme == 'ios' ? ConfirmIOS : Confirm)
    ).$mount(selector)

    vm.$el.setAttribute('von-dialog', '')
    // vm.$el.setAttribute(marker, '')

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

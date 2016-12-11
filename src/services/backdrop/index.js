import Vue from 'vue'
import Backdrop from './Backdrop'

class VonicBackdrop {
  _vm = undefined

  show() {
    this._vm = new Vue(Backdrop)
    setTimeout(() => {
      this._vm.show()
    })

    return new Promise((resolve) => {
      setTimeout(resolve, 300) // backdrop transition duration: 200
    })
  }

  hide() {
    this._vm.hide()
  }

  getState() {
    return this._vm ? this._vm.getState() : 0
  }
}

window.$backdrop = new VonicBackdrop()

import Vue from 'vue'
import ActionSheet from './ActionSheet'

class VonicActionSheet {
  _vm = undefined

  show(option) {
    this._vm = new Vue(ActionSheet)
    setTimeout(() => {
      this._vm.show(option)
    })
  }

  hide(buttonIndex) {
    this._vm.hide(buttonIndex)
  }

  getState() {
    return this._vm ? this._vm.getState() : 0
  }
}

window.$actionSheet = new VonicActionSheet()

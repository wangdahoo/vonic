import Vue from 'vue'
import ActionSheet from './components/ActionSheet'
import ActionSheetWeixin from './components/ActionSheetWeixin'

class VonicActionSheet {
  _vm = undefined
  _component = ActionSheet

  show(option) {
    // this._component = option.theme == 'weixin' ? ActionSheetWeixin : ActionSheet
    this._vm = new Vue(this._component)
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

export default new VonicActionSheet()

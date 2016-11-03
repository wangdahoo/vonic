import 'whatwg-fetch'
import Vue from 'vue'
import Sidebar from './components/sidebar'

class VonicSidebar {
  fromTemplateUrl(url) {
    // todo:
  }

  fromTemplate(template, delegateId) {
    this._init(template, delegateId)
  }

  _vm = undefined

  _init(template, refId) {
    if (this._vm) {
      this._vm.$destroy()
      this._vm = undefined
    }

    let wrapper = document.querySelector('[von-sidebars]')
    if (!wrapper) {
      wrapper = document.createElement('div')
      wrapper.setAttribute('von-sidebars', '')
      document.querySelector('[von-app]').appendChild(wrapper)
    }

    wrapper.innerHTML = '<sidebar v-ref:' + refId + '>' + template + '</sidebar>'

    this._vm = new Vue({
      components: {
        Sidebar
      },
      el: '[von-sidebars]'
    })
  }

  delegate(id) {
    return this._vm.$refs[id]
  }
}

export default new VonicSidebar()

import axios from 'axios'
import Vue from 'vue'
import Sidebar from './Sidebar'

class VonicSidebar {
  fromTemplateUrl(url, options) {
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then((response) => {
          return response.data
        })
        .then((template) => {
          resolve(this.fromTemplate(template, options))
        })
    })
  }

  fromTemplate(template, options) {
    return this._init(template, options)
  }

  _vm = undefined

  _init(template, options) {
    let refId = (options && options.refId) ? options.refId : Math.random().toString(32).substr(0, 6)
    let position = (options && options.position) ? options.position : 'left'

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

    wrapper.innerHTML = '<sidebar position="' + position + '" v-ref:' + refId + '>' + template + '</sidebar>'

    this._vm = new Vue({
      components: {
        Sidebar
      },
      el: '[von-sidebars]'
    })

    return this._vm.$refs[refId]
  }

  delegate(id) {
    return this._vm.$refs[id]
  }

  destroy() {
    if (this._vm) {
      this._vm.$destroy()
      this._vm = undefined
    }

    let wrapper = document.querySelector('[von-sidebars]')
    wrapper.innerHTML = ''
  }
}

window.$sidebar = new VonicSidebar()

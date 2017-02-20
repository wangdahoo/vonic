import axios from 'axios'
import Vue from 'vue'
import Popup from './Popup'

const extend = (target, source) => {
  for (let key in source) {
    target[key] = source[key]
  }

  return target
}

class VonicPopup {
  constructor() {
    this._vm = undefined
  }

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

  _init(template, options) {
    let refId = (options && options.refId) ? options.refId : Math.random().toString(36).substr(3, 6)
    let effect = (options && options.effect) ? options.effect : 'scale'
    let title = (options && options.title) ? options.title : ''
    let buttons = (options && options.buttons) ? options.buttons : []
    let cssClass = (options && options.cssClass) ? options.cssClass : ''
    let showClose = !!(options && options.showClose) ? 'true' : 'false'

    let components = (options && options.components) ? options.components : {}

    if (this._vm) {
      this._vm.$destroy()
      this._vm = undefined
    }

    let wrapper = document.querySelector('[von-popups]')
    if (!wrapper) {
      wrapper = document.createElement('div')
      wrapper.setAttribute('von-popups', '')
      document.querySelector('[von-app]').appendChild(wrapper)
    }

    wrapper.innerHTML = '<popup show-close="' + showClose + '" css-class="' + cssClass
      + '" effect="' + effect + '" title="' + title + '" ref="' + refId + '">' + template + '</popup>'

    this._vm = new Vue({
      components: extend({ Popup }, components),
      el: '[von-popups]'
    })

    let popup = this._vm.$refs[refId]
    popup.setButtons(buttons)

    return popup
  }

  delegate(id) {
    return this._vm.$refs[id]
  }

  destroy() {
    if (this._vm) {
      this._vm.$destroy()
      this._vm = undefined
    }

    let wrapper = document.querySelector('[von-popups]')
    wrapper.innerHTML = ''
  }
}

window.$popup = new VonicPopup()

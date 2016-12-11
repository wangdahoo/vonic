import axios from 'axios'
import Vue from 'vue'
import Popup from './components/Popup'

const extend = (target, source) => {
  for (let key in source) {
    target[key] = source[key]
  }

  return target
}

class VonicPopup {
  fromTemplate(template, options) {
    return this._init(template, options)
  }

  fromTemplateUrl(url, options) {

  }

  _vm = undefined

  _init(template, options) {
    let refId = (options && options.refId) ? options.refId : Math.random().toString(32).substr(0, 6)
    let effect = (options && options.effect) ? options.effect : 'scale'
    let title = (options && options.title) ? options.title : ''
    let buttons = (options && options.buttons) ? options.buttons : []
    let cssClass = (options && options.cssClass) ? options.cssClass : ''

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

    wrapper.innerHTML = '<popup css-class="' + cssClass + '" effect="' + effect + '" title="' + title + '" v-ref:' + refId + '>' + template + '</popup>'

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

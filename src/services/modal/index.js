import Vue from 'vue'
import ClickBlock from './ClickBlock'
import Modal from './Modal.vue'
import channel from './channel'

const createElement = (marker, root, tag) => {
  let target = document.querySelector(root) || document.body

  if (target.querySelectorAll(marker).length == 0) {
    let el = document.createElement(tag || 'div')
    el.setAttribute(marker, '')
    target.appendChild(el)
  }
}

class ModalManager {
  constructor() {
    this.modals = {}
  }

  fromComponent(com, options) {
    // click block
    if (!document.querySelector('[von-modal-click-block]')) {
      createElement('von-modal-click-block')
      let ClickBlockComponent = Vue.extend(ClickBlock)
      new ClickBlockComponent().$mount('[von-modal-click-block]')
    }

    // init modal instance
    let title = options && options.title
    let theme = options && options.theme
    let destroyOnHide = options && options.destroyOnHide
    let onHide = options && options.onHide
    let modalId = 'modal_' + Math.random().toString(36).substr(3, 6)
    createElement(modalId)
    let ModalComponent = Vue.extend(Modal)
    let modal = new ModalComponent({
      propsData: {
        title: title || '',
        theme: theme || '',
        destroyOnHide: !!destroyOnHide,
        onHide: onHide
      }
    })
    modal.$mount(`[${modalId}]`)

    let ContentComponent = Vue.extend(com)
    let content = new ContentComponent()
    content.$mount(modal.$el.querySelector('[von-modal-content]'))

    modal.id = modalId
    modal.content = content
    this.modals[modalId] = modal

    return new Promise((resolve) => {
      resolve(modal)
    })
  }

  destroy(modal) {
    if (modal) {
      modal.content && modal.content.$destroy()
      modal.$destroy()
    }

    // remove click block
    if (document.querySelectorAll('[von-modal]').length == 0) {
      channel.$emit('RemoveClickBlock')
    }
  }
}

window.$modal = new ModalManager()

<template>
  <div>
    <div class="click-block" :class="{'click-block-hide': !inAnimation}"></div>
    <div class="modal-backdrop"
        :class="{'active': active, 'hide': !active}">
      <div class="modal-backdrop-bg" style="position: fixed"></div>
      <div class="modal-wrapper" von-modal-wrapper>
        <!-- modal template here -->
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  const show_modal_animate_dur = 400
  const hide_modal_animate_dur = 250

  const getModalTemplate = (modalId) => {
    return '<div class="modal slide-in-up" id="' + modalId + '"></div>'
  }

  let blueprints = {}
  let showed = undefined

  const ModalMixin = {
    methods: {
      show() {
        this.$el.classList.add('active')
        setTimeout(() => {
          this.$el.classList.add('ng-enter', 'ng-enter-active')
        }, 50)
        document.querySelector('body').classList.add('modal-open')
      },

      hide() {
        this.$el.classList.remove('ng-enter-active', 'ng-enter', 'active')
        this.$el.classList.add('ng-leave', 'ng-leave-active')
        setTimeout(() => {
          this.$el.className = 'modal slide-in-up'
        }, hide_modal_animate_dur)
        document.querySelector('body').classList.remove('modal-open')
      }
    }
  }

  export default {
    data() {
      return {
        active: false,
        inAnimation: false
      }
    },

    methods: {
      fromComponent(id, component) {
        if (!(typeof id == 'string' && typeof component == 'object')) {
          throw '[Vonic] Illegal parameters.'
        }

        if (blueprints[id]) {
          throw `[Vonic] modal id "${id}" exists.`
        }

        blueprints[id] = component
      },

      _createModal(id) {
        if (id && blueprints[id]) {
          let component = blueprints[id]
          let modalId = 'von-modal-' + Math.random().toString(36).substring(3, 8)
          let wrapper = document.querySelector('[von-modal-wrapper]')
          wrapper.innerHTML += getModalTemplate(modalId)

          let options = Object.assign({}, component, {mixins: [ModalMixin]})
          let ModalComponent = Vue.extend(options)

          return new Promise((resolve) => {
            Vue.nextTick(() => {
              resolve(
                new ModalComponent({
                  el: '#' + modalId
                })
              )
            })
          })
        } else {
          throw `[Vonic] modal component not found by id "${id}".`
        }
      },

      _show(id) {
        this._createModal(id).then((modal) => {
          // display click block
          this.inAnimation = true
          setTimeout(() => {
            this.inAnimation = false
          }, show_modal_animate_dur)

          this.active = true
          modal.show()
          showed = modal
        })
      },

      show(id) {
        setTimeout(() => {
          this._show(id)
        })
      },

      hide(id) {
        // display click block
        this.inAnimation = true
        setTimeout(() => {
          this.inAnimation = false
        }, hide_modal_animate_dur)

        if (showed) {
          showed.hide()
          setTimeout(() => {
            this.active = false
            showed.$destroy(true)
            showed = undefined
          }, 300)
        }
      },

      destroy() {
        showed && showed.$destroy(true)
        showed = undefined

        let wrapper = document.querySelector('[von-modal-wrapper]')
        wrapper.innerHTML = ''

        blueprints = []
      }
    }
  }
</script>
<style lang="scss">
  .modal {
    padding-top: 44px;
  }
</style>

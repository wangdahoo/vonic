<template>
  <div class="modal-backdrop"
       :class="{'active': active, 'hide': !active}">
    <div class="modal-backdrop-bg"></div>
    <div class="modal-wrapper" von-modal-wrapper>
      <!-- modal template here -->
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  function getModalTemplate(modalId) {
    return '<div class="modal slide-in-up" id="' + modalId + '"></div>'
  }

  let ModalMixin = {
    methods: {
      show() {
        this.$el.className = 'modal slide-in-up active'
        setTimeout(() => {
          this.$el.className += ' ng-enter ng-enter-active'
        })
      },

      hide() {
        this.$el.className = 'modal slide-in-up ng-leave ng-leave-active'
      }
    }
  }

  export default {
    data() {
      return {
        active: false,
        modalId: '',
        instance: undefined
      }
    },

    methods: {
      fromComponent(component) {
        this.modalId = 'von-modal-' + Math.random().toString(36).substring(3, 8)
        let wrapper = document.querySelector('[von-modal-wrapper]')
        wrapper.innerHTML = getModalTemplate(this.modalId)

        Vue.nextTick(() => {
          let options = Object.assign({}, component, {mixins: [ModalMixin]})
          let ModalComponent = Vue.extend(options)

          if (this.instance == undefined) {
            this.instance = new ModalComponent({
              el: '#' + this.modalId
            })
          }
        })
      },

      show() {
        if (this.instance) {
          this.active = true
          this.instance.show()
        }
      },

      hide() {
        if (this.instance) {
          this.instance.hide()
          setTimeout(() => {
            this.active = false
          }, 250)
        }
      },

      destroy() {
        if (this.instance) {
          // reset dom
          this.instance.$destroy()
          this.instance = undefined
          let wrapper = document.querySelector('[von-modal-wrapper]')
          wrapper.innerHTML = ''
        }
      }
    }
  }
</script>

<style lang="scss">

  .modal {
    padding-top: 44px;
  }

</style>

<template>
  <div class="modal-backdrop"
       :class="{'active': active, 'hide': !active}">
    <div class="modal-backdrop-bg"></div>
    <div class="modal-wrapper">
      <div class="modal slide-in-up" id="{{modalId}}"></div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

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

        Vue.nextTick(() => {
          let options = Object.assign({}, component, {mixins: [ModalMixin]})
          let ModalComponent = Vue.extend(options)

          if (this.instance == undefined) {
            this.instance = new ModalComponent({
              el: '#' + this.modalId
            })
          }
          this.show()
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
          this.instance.$destroy()
          Vue.nextTick(() => {
            let modal = document.getElementById(this.modalId)
            modal.innerHTML = ''
            modal.attributes.id = ''
            this.modalId = ''
          })
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

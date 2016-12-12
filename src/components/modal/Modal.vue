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

  function getModalTemplate(modalId) {
    return '<div class="modal slide-in-up" id="' + modalId + '"></div>'
  }

  let ModalMixin = {

    methods: {
      show() {
        this.$el.className = 'modal slide-in-up active'
        setTimeout(() => {
          this.$el.className += ' ng-enter ng-enter-active'
        }, 50)

        document.querySelector('body').className += ' modal-open'
      },

      hide() {
        this.$el.className = 'modal slide-in-up ng-leave ng-leave-active'

        let bodyClass = document.querySelector('body').className
        document.querySelector('body').className = bodyClass.replace(' modal-open', '')
      }
    }
  }

  export default {
    data() {
      return {
        active: false,
        instances: {},
        showed: [],
        inAnimation: false
      }
    },

    methods: {
      fromComponent(delegateId, component) {
        let modalId = 'von-modal-' + Math.random().toString(36).substring(3, 8)
        let wrapper = document.querySelector('[von-modal-wrapper]')
        wrapper.innerHTML += getModalTemplate(modalId)

        Vue.nextTick(() => {
          let options = Object.assign({}, component, {mixins: [ModalMixin]})
          let ModalComponent = Vue.extend(options)

          this.instances[delegateId] = new ModalComponent({
            el: '#' + modalId
          })
        })
      },

      show(delegateId) {
        if (delegateId && this.instances[delegateId]) {
          // display click block
          this.inAnimation = true
          setTimeout(() => {
            this.inAnimation = false
          }, show_modal_animate_dur)

          this.active = true
          this.instances[delegateId].show()
          this.showed.push(delegateId)
        } else {
          // do nothing..
        }
      },

      hide(delegateId) {
        // display click block
        this.inAnimation = true
        setTimeout(() => {
          this.inAnimation = false
        }, hide_modal_animate_dur)

        if (delegateId && this.instances[delegateId]) {
          this.instances[delegateId].hide()
          setTimeout(() => {
            this.active = false
          }, 300)

          this.showed = this.showed.filter((d) => { return delegateId != d })
        } else if (this.showed.length > 0) {
          let _delegateId = this.showed.pop()
          this.instances[_delegateId].hide()
          setTimeout(() => {
            this.active = false
          }, 300)
        } else {
          // do nothing..
        }
      },

      destroy() {
        this.instances.forEach((instance) => {
          instance.$destroy()
        })

        this.instances = []
        let wrapper = document.querySelector('[von-modal-wrapper]')
        wrapper.innerHTML = ''
      },

      getDelegate(delegateId) {
        return this.instances.find((v, k) => { return k == delegateId })
      }
    }
  }
</script>

<style lang="scss">

  .modal {
    padding-top: 44px;
  }

</style>

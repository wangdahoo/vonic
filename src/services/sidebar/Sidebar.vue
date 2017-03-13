<template>
  <div class="von-sidebar-wrapper" :class="{'left': position == 'left', 'right': position == 'right'}">
    <div class="click-block click-block-sidebar"
         :class="{'click-block-hide': !opened}"
         @click="close()"
    ></div>
    <scroller width="260" class="von-sidebar" :class="{'open': opened}">
      <slot></slot>
    </scroller>
  </div>
</template>
<script>
  import Vue from 'vue'

  const transitionDuration = 400

  export default {
    props: {
      position: {
        type: String,
        default: 'left'
      }
    },

    data() {
      return {
        opened: false
      }
    },

    methods: {
      open() {
        let wrapper = this.wrapper()
        wrapper.classList.add('active')
        setTimeout(() => {
          this.opened = true
          Vue.nextTick(() => {
            wrapper.classList.add('fixed')
          })
        })
      },

      close() {
        let wrapper = this.wrapper()
        wrapper.classList.remove('fixed')
        this.opened = false
        setTimeout(() => {
          wrapper.classList.remove('active')
        }, transitionDuration)
      },

      toggle() {
        if (this.opened) {
          this.close()
        } else {
          this.open()
        }
      },

      setWrapperSelector(selector) {
        this.wrapperSelector = selector
      },

      wrapper() {
        return document.querySelector(this.wrapperSelector ?
          this.wrapperSelector : '[von-sidebar-container]')
      }
    }
  }
</script>

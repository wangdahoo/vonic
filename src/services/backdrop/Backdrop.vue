<template>
  <div class="backdrop visible" :class="{'active': state == 1}"></div>
</template>
<script>
  export default {
    el: '[von-backdrop]',

    data() {
      return {
        state: 0
      }
    },

    init() {
      let el = document.createElement('div')
      el.setAttribute('von-backdrop', '')
      document.body.appendChild(el)
    },

    methods: {
      show() {
        this.state = 1
      },

      hide() {
        this.state = 0
        let backdrop = document.querySelector('[von-backdrop]')
        backdrop.addEventListener('webkitTransitionEnd', () => {
          this.$destroy(true)
        }, false)
      },

      getState() {
        return this.state
      }
    }
  }
</script>
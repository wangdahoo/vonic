<template>
  <div von-backdrop class="backdrop visible" :class="{'active': state == 1}"></div>
</template>
<script>
  import {timeout, removeElement} from '../utils'

  // transition duration
  const duration = 200

  const preventDefault = (e) => {
    e.preventDefault()
  }

  export default {
    data() {
      return {
        state: 0
      }
    },

    destroyed() {
      console.log('[Vonic] Backdrop _vm destroyed.')
      removeElement('[von-backdrop]')
    },

    methods: {
      show(allowTouchMove) {
        if (!allowTouchMove) document.body.addEventListener('touchmove', preventDefault)
        this.state = 1
      },

      hide(allowTouchMove) {
        if (!allowTouchMove) document.body.removeEventListener('touchmove', preventDefault)
        this.state = 0
        return timeout(duration)
      },

      getState() {
        return this.state
      }
    }
  }
</script>

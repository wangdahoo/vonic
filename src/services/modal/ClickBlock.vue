<template>
  <div class="click-block" :class="{'click-block-hide': state == 0}"></div>
</template>
<script>
  export default {
    data() {
      return {
        state: 0
      }
    },
    methods: {
      show() {
        this.state = 1
      },

      hide() {
        this.state = 0
      }
    }
  }
</script>

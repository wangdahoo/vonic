<template>
  <div von-modal-click-block class="click-block" :class="{'click-block-hide': state == 0}"></div>
</template>
<script>
  import channel from './channel'

  export default {
    data() {
      return {
        state: 0
      }
    },

    mounted() {
      channel.$on('ModalSlideUpStart', () => {
        this.show()
      })

      channel.$on('ModalSlideUpEnd', () => {
        this.hide()
      })

      channel.$on('RemoveClickBlock', () => {
        this.$destroy()
      })
    },

    destroyed() {
      this.$el.parentNode.removeChild(this.$el)
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

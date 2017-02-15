<template>
  <div class="von-accordion">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
  @import "./accordion.scss";
</style>
<script>
  import channel from './channel'

  export default {
    props: {
      defaultIndex: String,
      // TODO: validator
    },

    computed: {
      activeIndex: function () {
        return parseInt(this.defaultIndex)
      }
    },

    created() {
      channel.$emit('activeIndexChanged', this.activeIndex)
    }
  }
</script>

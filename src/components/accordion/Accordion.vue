<template>
  <div class="von-accordion">
    <slot></slot>
  </div>
</template>
<style lang="scss">
  @import "./accordion.scss";
</style>
<script>
  import channel from './channel'

  export default {
    props: {
      defaultIndex: String,
      // TODO: validator

      multi: {
        type: String,
        default: 'true',
        validator: function (v) {
          return v == 'true' || v == 'false'
        }
      }
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

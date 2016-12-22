<template>
  <div class="popup-container" :effect="effect"
       :class="{'popup-showing active': state == 1, 'popup-showing popup-hidden': state == 2}">
    <div class="popup">
      <div class="popup-head">
        <div class="popup-title">
          {{{ title }}}
        </div>
      </div>

      <div class="popup-body">
        {{{ content }}}
      </div>

      <div class="popup-buttons">
        <button class="{{ 'button button-' + okTheme + ' button-block' }}" @click="onOk()">
          {{ okText }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "./popup";

</style>

<script>
  import mixin from './mixin'

  export default {
    mixins: [mixin],

    data() {
      return {
        effect: 'default', // default, scale, slide
        title: '提示',
        content: '',
        okText: '确定',
        okTheme: 'assertive',
        state: 0 // 0: hidden, 1: showing, 2: active
      }
    }
  }
</script>

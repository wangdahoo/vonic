<template>
  <div class="popup-container"
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
        <button class="{{ 'button button-' + cancelTheme }}" @click="onCancel()">
          {{ cancelText }}
        </button>

        <button class="{{ 'button button-' + okTheme }}" @click="onOk()">
          {{ okText }}
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "./popup";

  .button-default {
    border: 1px solid #e3e3e3;
  }

</style>
<script>
  import mixin from './mixin'

  const extend = (target, source) => {
    for (let key in source) {
      target[key] = source[key]
    }

    return target
  }

  export default {
    mixins: [mixin],

    data() {
      return {
        title: '提示',
        content: '',
        okText: '确定',
        okTheme: 'assertive',
        cancelText: '取消',
        cancelTheme: 'default',
        state: 0 // 0: hidden, 1: showing, 2: active
      }
    },

    methods: {
      show(options) {
        extend(this, options)
        
        window.$backdrop.show()
        this.state = 1

        this.promise = new Promise((resolve, reject) => {
          this.$on('ConfirmOkEvent', () => {
            this.hide()
            resolve(true)
          })

          this.$on('ConfirmCancelEvent', () => {
            this.hide()
            resolve(false)
          })
        });

        return this.promise
      },

      onOk() {
        this.$emit('ConfirmOkEvent')
      },

      onCancel() {
        this.$emit('ConfirmCancelEvent')
      }
    }
  }
</script>

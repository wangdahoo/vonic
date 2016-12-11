<template>
  <div class="popup-container"
       :class="{'popup-showing active': state == 1, 'popup-showing popup-hidden': state == 2}">
    <div class="popup ios">
      <div class="popup-head">
        <div class="popup-title">
          {{ title }}
        </div>
        <div v-if="content" class="popup-sub-title">
          {{ content }}
        </div>
        <div class="hairline-bottom"></div>
      </div>

      <div class="popup-buttons">
        <button class="{{ 'button button-block button-positive button-outline button-cancel' }}" @click="onCancel()">
          {{{ cancelText }}}
          <div class="hairline-right"></div>
        </button>
        <button class="{{ 'button button-block button-positive button-outline button-ok' }}" @click="onOk()">
          {{{ okText }}}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../scss/mixins";
  @import "./popup";

  .hairline-bottom:after {
    @include hairline(bottom);
  }

  .hairline-right:after {
    @include hairline(right);
  }

  @font-face {
    font-family: sans-serif;
    src: local("Helvetica");
  }

  /* iOS 风格 */
  .popup.ios {
    width: 280px;
    height: auto;
    border-radius: 10px;
    .popup-head {
      padding: 20px 0 22px 0;
      border-bottom: none;
      position: relative;
      .popup-title, .popup-sub-title, .button-ok, .button-cancel {
        font-family: sans-serif;
        color: #000;
      }

      .popup-title {
        -webkit-font-smoothing: subpixel-antialiased !important;
        font-weight: 300;

        font-size: 17px;
        line-height: 17px;
        font-weight: bold;
      }
      .popup-sub-title {
        margin-top: 8px;
        font-size: 13px;
        line-height: 13px;
        -webkit-font-smoothing: antialiased !important;
        font-weight: normal;
      }
    }

    .popup-buttons {
      padding: 0;
      height: 45px;
      min-height: 45px;

      .button {
        margin-right: 0;
      }

      .button-ok, .button-cancel {
        -webkit-font-smoothing: subpixel-antialiased !important;

        background-color: transparent;
        border: none;
        margin-top: 0;
        font-size: 17px;
        line-height: 45px;
        min-height: 45px;
        height: 45px;
        padding: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;

        &:active {
          background-color: rgba(0,0,0,0.10);
        }
      }

      .button-ok {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 10px;
      }

      .button-cancel {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10;
        font-weight: 600;
        font-family: sans-serif;

      }
    }
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
        cancelText: '取消',
        okTheme: 'assertive',
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

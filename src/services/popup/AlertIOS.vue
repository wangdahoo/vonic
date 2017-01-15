<template>
  <div class="popup-container"
       :class="{'popup-showing active': state == 1, 'popup-showing popup-hidden': state == 2}">
    <div class="popup ios">
      <div class="popup-head">
        <div class="popup-title" v-text="title"></div>
        <div v-if="content" class="popup-sub-title" v-text="content"></div>
        <div class="hairline-bottom"></div>
      </div>

      <div class="popup-buttons">
        <button class="button button-block button-positive button-outline button-ok"
          @click="onOk()"
          v-html="okText"
        >
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "./popup";

  .hairline-bottom:after {
    content: '';
    position: absolute;
    left: 0;
    top: auto;
    bottom: 0;
    right: auto;
    height: 1px;
    width: 100%;
    background-color: #ddd;
    display: block;
    z-index: 15;
    transform-origin: 50% 100%;
    -webkit-transform-origin: 50% 100%;
    transform: scaleY(0.5);
    -webkit-transform: scaleY(0.5);
  }

  @font-face {
    font-family: sans-serif;
    src: local("Helvetica");
  }

  /* iOS 风格 */
  .popup.ios {
    height: auto;
    width: 280px;
    border-radius: 10px;
    .popup-head {
      padding: 20px 0 22px 0;
      border-bottom: none;
      position: relative;
      .popup-title, .popup-sub-title {
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

      .button-ok {
        -webkit-font-smoothing: subpixel-antialiased !important;

        background-color: none;
        border: none;
        margin-top: 0;
        font-size: 17px;
        line-height: 45px;
        min-height: 45px;
        height: 45px;
        padding: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;

        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        &:active {
          background-color: rgba(0,0,0,0.1);
        }
      }
    }
  }
</style>
<script>
  import mixin from './mixin'

  export default {
    mixins: [mixin],

    data() {
      return {
        title: '提示',
        content: '',
        okText: '确定',
        okTheme: 'assertive',
        state: 0 // 0: hidden, 1: showing, 2: active
      }
    }
  }
</script>

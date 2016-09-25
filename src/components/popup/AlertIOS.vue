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
        <button class="{{ 'button button-block button-positive button-outline button-ok' }}" @click="onOk()">
          {{{ okText }}}
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
    top: atuo;
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
  import _ from 'lodash'

  const popup_enter_duration = 200;
  const popup_leave_duration = 100;
  const backdrop_fadein_duration = 100;

  export default {

    data() {
      return {
        title: '提示',
        content: '',
        okText: '确定',
        okTheme: 'assertive',
        state: 0 // 0: hidden, 1: showing, 2: active
      }
    },

    methods: {
      show(options) {
        _.extend(this, options)

        let backdrop = document.querySelector('.backdrop')
        backdrop.className += ' visible'
        setTimeout(() => {
          backdrop.className += ' active'
        }, backdrop_fadein_duration)

        this.state = 1

        this.promise = new Promise((resolve, reject) => {
          this.$on('AlertOkEvent', () => {
            // console.log('AlertOkEvent');
            this.hide()
            resolve()
          })
        });

        return this.promise
      },

      hide() {
        let backdrop = document.querySelector('.backdrop')
        backdrop.className += 'backdrop visible'
        setTimeout(() => {
          backdrop.className = 'backdrop'
        }, backdrop_fadein_duration)

        this.state = 2
        setTimeout(() => {
          this.state = 0
        }, popup_leave_duration)
      },

      onOk() {
        this.$dispatch('AlertOkEvent')
      }
    }
  }
</script>

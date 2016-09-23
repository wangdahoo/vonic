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
        cancelText: '取消',
        cancelTheme: 'default',
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
        this.$dispatch('ConfirmOkEvent')
      },

      onCancel() {
        this.$dispatch('ConfirmCancelEvent')
      }
    }
  }
</script>

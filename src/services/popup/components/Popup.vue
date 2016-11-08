<template>
  <div class="popup-container von-popup" :effect="effect"
       :class="{'popup-showing active': state == 1, 'popup-showing popup-hidden': state == 2}">
    <div class="popup">
      <div v-if="title" class="popup-head">
        <div class="popup-title">
          {{{ title }}}
        </div>
      </div>

      <div class="popup-body">
        <slot></slot>
      </div>

      <div v-if="buttons.length > 0" class="popup-buttons">
        <button v-for="($index, b) in buttons" class="{{ 'button button-' + (b.theme || default_button_theme) + ' button-block' }}" @click="hide($index)">
          {{{ b.text }}}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../../../components/popup/popup";
  @import "../../../components/scss/mixins";

  .popup-container.von-popup {
    .popup-head {
      border-bottom: none;
    }

    .popup-body {
      padding: 22px 19px;
    }

    .popup-buttons {
      padding: 0;
      min-height: 45px;

      .button {
        min-height: 45px;
        font-size: 14px;
        line-height: 20px;

        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;

        margin-right: 0;
        border-top: 1px solid #eee;
        border-right: 1px solid #eee;

        &:last-of-type {
          border-right: none;
        }

      }
    }
  }

</style>

<script>
  const popup_enter_duration = 200
  const popup_leave_duration = 300
  const backdrop_fadein_duration = 100

  export default {
    props: {
      effect: {
        type: String,
        default: 'default'
      },
      title: {
        type: String,
        default: ''
      }
    },

    data() {
      return {
        state: 0, // 0: hidden, 1: showing, 2: active
        default_button_theme: 'light',

        buttons: []
      }
    },

    methods: {
      show() {
        let backdrop = document.querySelector('[backdrop]')
        backdrop.classList.add('visible')
        setTimeout(() => {
          backdrop.classList.add('active')
        }, backdrop_fadein_duration)

        this.state = 1

        return new Promise((resolve, reject) => {
          this.$on('PopupButtonClickEvent', (data) => {
            resolve(data.buttonIndex)
          })
        });
      },

      hide(buttonIndex) {
        let backdrop = document.querySelector('[backdrop]')
        backdrop.classList.remove('active')
        setTimeout(() => {
          backdrop.classList.remove('visible')
        }, backdrop_fadein_duration)

        this.state = 2

        setTimeout(() => {
          this.state = 0
          this.$emit('PopupButtonClickEvent', {buttonIndex: buttonIndex})
        }, popup_leave_duration)
      },

      setButtons(buttons) {
        this.buttons = buttons
      }
    }
  }
</script>

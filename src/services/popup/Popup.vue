<template>
  <div class="popup-container" :effect="effect"
       :class="{'popup-showing active': state == 1, 'popup-showing popup-hidden': state == 2}">
    <div class="popup von-popup" :class="cssClass">
      <div v-if="title" class="popup-head">
        <div class="popup-title">
          {{{ title }}}
        </div>
      </div>

      <div class="popup-body" :class="{'no-content': state == 0}">
        <slot></slot>
        <button v-if="showClose == 'true'" class="button button-royal button-small button-clear button-close" @click="hide(-1)">
          <i class="ion-ios-close-empty"></i>
        </button>
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
  @import "../../components/popup/popup";
  @import "../../components/scss/variables";
  @import "../../components/scss/mixins";

  .popup-container .von-popup {
    background-color: #fff;

    .popup-head {
      border-bottom: none;
    }

    .popup-body {
      padding: 22px 19px;
      p {
        font-weight: 100 !important;
        -webkit-font-smoothing: subpixel-antialiased;
      }

      &.no-content * {
        opacity: 0;
      }

      .button-close {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 30px;
      }
    }

    .popup-buttons {
      padding: 0;
      min-height: 45px;

      .button {
        min-height: 45px;
        font-size: 14px;
        line-height: 20px;

        border-top: 1px solid #eee;
        border-right: 1px solid #eee;
        border-top-left-radius: 0;
        border-top-right-radius: 0;

        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;

        &:first-of-type {
          border-bottom-left-radius: 4px;
        }

        &:last-of-type {
          border-right: none;
          border-bottom-right-radius: 4px;
        }

        margin-right: 0;
        background-color: transparent;

        &.button-light {
          background-color: #fff;
          &:active {
            background-color: rgba(0,0,0,0.1);
          }
        }

        &.button-assertive {
          border-top: none;
          background-color: $assertive;
          &:active {
            background-color: darken($assertive, 6.5%);
          }
        }
      }
    }
  }
</style>

<script>
  const popup_enter_duration = 200
  const popup_leave_duration = 300

  export default {
    props: {
      effect: {
        type: String,
        default: 'default'
      },
      title: {
        type: String,
        default: ''
      },
      cssClass: {
        type: String,
        default: ''
      },
      showClose: {
        type: String,
        default: 'false'
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
        this.state = 1
        window.$backdrop.show()

        return new Promise((resolve, reject) => {
          this.$on('PopupButtonClickEvent', (data) => {
            resolve(data.buttonIndex)
          })
        });
      },

      hide(buttonIndex) {
        this.state = 2
        window.$backdrop.hide()

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

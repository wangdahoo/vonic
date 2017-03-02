<template>
  <div class="popup-container" :effect="effect"
       :class="{'popup-showing active': state == 1, 'popup-showing popup-hidden': state == 2}">
    <div class="popup von-popup">
      <div v-if="title" class="popup-head">
        <div class="popup-title" v-html="title"></div>
      </div>

      <div class="popup-body" :class="{'no-content': state == 0}">
        <slot></slot>
        <button v-if="showClose == 'true'" class="button button-royal button-small button-clear button-close" @click="hide(-1)">
          <i class="ion-ios-close-empty"></i>
        </button>
      </div>

      <div v-if="buttons.length > 0" class="popup-buttons">
        <button v-for="(b, index) in buttons"
          class="button button-block"
          :class="{
            'button-assertive': b.theme == 'assertive',
            'button-positive': b.theme == 'positive',
            'button-blanced': b.theme == 'blanced',
            'button-energized': b.theme == 'energized',
            'button-calm': b.theme == 'calm',
            'button-royal': b.theme == 'royal',
            'button-dark': b.theme == 'dark',
            'button-light': b.theme == 'light',
            'button-light': !b.theme,
          }"
          @click="hide(index)"
        >
        <div class="hairline-top"></div>
        <div class="hairline-right"></div>
        <span v-text="b.text"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "./popup";
  @import "../../components/scss/variables";
  @import "../../components/scss/mixins";

  .hairline-top:before {
    @include hairline(top);
  }

  .hairline-right:after {
    @include hairline(right);
  }

  .popup-container .von-popup {
    background-color: #fff;

    .popup-head {
      border-bottom: none;
    }

    .popup-body {
      padding: 22px 18px;
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

        border: none;
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
        buttons: []
      }
    },

    mounted() {
      if (this.cssClass)
        this.$el.querySelector('.von-popup').classList.add(this.cssClass)
    },

    methods: {
      show() {
        this.state = 1
        window.$backdrop.show()

        document.body.classList.add('popup-open')

        return new Promise((resolve, reject) => {
          this.$on('PopupButtonClickEvent', (data) => {
            resolve(data.buttonIndex)
          })
        });
      },

      hide(buttonIndex) {
        this.state = 2
        window.$backdrop.hide()
        document.body.classList.remove('popup-open')

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

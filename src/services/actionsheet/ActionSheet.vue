<template>
  <div class="action-sheet-backdrop" :class="{'active': state == 1}" @click="hide(-1)">
    <div class="action-sheet-wrapper" :class="{'action-sheet-up': state == 1}">
      <div class="action-sheet">
        <div class="action-sheet-group">
          <div class="action-sheet-title">{{ title }}</div>
          <button class="button action-sheet-option" v-for="($index, b) in buttons" @click="hide($index)">
            {{ b.text }}
          </button>
        </div>

        <div class="action-sheet-group action-sheet-cancel">
          <button class="button" @click="hide(-1)">{{ cancelText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss'>
  @import "../../components/scss/variables";
  @import "../../components/scss/mixins";

  .action-sheet-wrapper .action-sheet {
    .action-sheet-group {
      border-radius: 8px;
      .action-sheet-title {
        font-size: 14px;
        padding: 15px;
      }

      .action-sheet-option {
        font-size: 16px;
      }

      &.action-sheet-cancel {
        .button {
          font-size: 16px;
        }
      }
    }
  }

  [theme='android'].action-sheet-backdrop {
    &.active {
      background-color: rgba(0,0,0,0.2);
    }

    .action-sheet-wrapper .action-sheet {
      margin: 0;

      .action-sheet-group {
        margin: 0;
        border-radius: 0;
        background-color: #fafafa;

        .action-sheet-title,
        .button {
          text-align: left;
          border-color: transparent;
          font-size: 14px;
          color: inherit;
          padding-left: 15px;
        }

        .button.active,
        .button.activated,
        .button:active {
          background: #e8e8e8;
        }

        &.action-sheet-cancel {
          display: none;
        }
      }
    }
  }

  [theme='weixin'].action-sheet-backdrop {
    &.active {
      background-color: rgba(0,0,0,0.2);
    }

    .action-sheet-wrapper .action-sheet {
      margin: 0;
      color: #444;
      background-color: #f5f5f5;

      .action-sheet-group {
        margin: 0;
        border-radius: 0;

        .action-sheet-title, .button { 
          font-size: 14px;
          color: inherit;
        }

        .action-sheet-title {
          background-color: #f5f5f5;
          height: 30px;
          line-height: 30px;
          padding: 0 15px;
        }

        .button {
          height: 44px;
          background: #fff;
          margin-top: -1px;

          border: none;
          @include thin-border-before($default-border-color, 0);
          &:before {
            border-left: none;
          }
          @include thin-border-after($default-border-color, 0);
          &:after {
            border-right: none;
          }
        }

        .button:active {
          background: #eee;
        }

        &.action-sheet-cancel {
          margin-top: 8px;
        }
      }
    }
  }

  [theme='weixin'] .action-sheet-wrapper,
  [theme='android'] .action-sheet-wrapper,
  {
    @include transition-duration(.3s);
    @include transition-timing-function(cubic-bezier(0.4, 0.6, 0.2, 1));
  } 

</style>
<script>
  export default {
    el: '[von-action-sheet]',
    
    data() {
      return {
        defaultOptions: {
          title: '',
          buttons: {},
          cancelText: 'Cancel'
        },
        title: '',
        buttons: [],
        cancelText: 'Cancel',
        state: 0
      }
    },

    init() {
      let el = document.createElement('div')
      el.setAttribute('von-action-sheet', '')
      document.body.appendChild(el)
    },

    methods: {
      _buttonList(buttons) {
        let buttonList = []
        for (let b in buttons) {
          buttonList.push({
            text: b,
            callback: buttons[b]
          })
        }

        return buttonList
      },

      show(options) {
        let _options = Object.assign({}, this.defaultOptions, options)
        let theme = _options.theme
        if (theme == 'android' || theme == 'weixin') {
          this.$el.setAttribute('theme', theme)
        }
        this.title = _options.title
        this.buttons = this._buttonList(_options.buttons)
        this.cancelText = _options.cancelText
        this.state = 1
      },

      hide(buttonIndex) {
        this.state = 0

        if (buttonIndex > -1) {
          this.buttons[buttonIndex].callback()
        }

        let wrapper = document.querySelector('[von-action-sheet] > .action-sheet-wrapper')
        wrapper.addEventListener('webkitTransitionEnd', () => {
          this.$destroy(true)
        }, false)
      },

      getState() {
        return this.state
      }
    }
  }
</script>
<template>
  <div class="action-sheet-backdrop" :class="{'active': state == 1}" @click="hide(-1)">
    <div class="action-sheet-wrapper" :class="{'action-sheet-up': state == 1}">
      <div class="action-sheet">
        <div class="action-sheet-group">
          <div class="action-sheet-title">
            <span v-text="title"></span>
          </div>
          <button class="button action-sheet-option"
            v-for="(b, index) in buttons" @click="hide(index)">
            <div class="hairline-top" v-if="index == 0"></div>
            <span v-text="b.text"></span>
            <div class="hairline-bottom"></div>
          </button>
        </div>

        <div class="action-sheet-group action-sheet-cancel">
          <button class="button" @click="hide(-1)" v-text="cancelText"></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import assign from 'object-assign'

  const preventDefault = (e) => {
    e.preventDefault()
  }

  export default {
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

    mounted() {
      this.$el.setAttribute('von-action-sheet', '')
    },

    destroyed() {
      document.body.removeChild(this.$el)
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
        let _options = assign({}, this.defaultOptions, options)
        let theme = _options.theme
        if (theme == 'android' || theme == 'weixin') {
          this.$el.setAttribute('theme', theme)
        }
        this.title = _options.title
        this.buttons = this._buttonList(_options.buttons)
        this.cancelText = _options.cancelText
        this.state = 1

        document.body.addEventListener('touchmove', preventDefault)
      },

      hide(buttonIndex) {
        this.state = 0

        document.body.removeEventListener('touchmove', preventDefault)

        if (buttonIndex > -1) {
          this.buttons[buttonIndex].callback()
        }

        let wrapper = document.querySelector('[von-action-sheet] > .action-sheet-wrapper')
        wrapper.addEventListener('webkitTransitionEnd', () => {
          this.$destroy()
        }, false)
      },

      getState() {
        return this.state
      }
    }
  }
</script>

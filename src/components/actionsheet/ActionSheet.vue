<template>
  <div class="action-sheet-backdrop" :class="{'active': state == 1}">
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
  .action-sheet-wrapper {
    
  }
</style>
<script>
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
      },

      getState() {
        return this.state
      }
    }
  }
</script>
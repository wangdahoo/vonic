<template>
  <div class="von-action-sheet" :class="{'active': state == 1}">
    <div v-if="title" class="title">
      {{ title }}
    </div>

    <div v-if="buttons && buttons.length > 0" class="buttons">
      <label class="item" v-for="($index, b) in buttons" @click="hide($index)">
        {{ b.text }}
      </label>

      <label class="item item-cancel" @click="hide(-1)">
        {{ cancelText }}
      </label>
    </div>
  </div>
</template>
<style lang='scss'>
  @import "../scss/mixins";

  .von-action-sheet {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    min-height: 94px;
    padding: 0;
    background-color: #f5f5f5;
    z-index: 12;
    box-sizing: border-box;

    transition: transform .2s ease-in-out;
    -webkit-transition: -webkit-transform .2s ease-in-out;

    transform: translate(0, 100%);
    -webkit-transform: translate(0, 100%);

    &.active {
      transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

      transition: transform .3s cubic-bezier(0.4, 0, 0, 1);
      -webkit-transition: -webkit-transform .3s cubic-bezier(0.4, 0, 0, 1);
    }

    .title {
      font-size: 14px;
      line-height: 30px;
      text-align: center;
    }

    .buttons {
      .item {
        height: 44px;
        padding: 12px;
        text-align: center;

        &:active {
          background-color: #eee;
        }

        &.item-cancel {
          margin-top: 8px;
        }
      }
    }

  }
</style>
<script>
  const backdrop_fadein_duration = 100

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

        state: 0, // 0: hide, 1: show
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

        let backdrop = document.querySelector('[backdrop]')
        backdrop.classList.add('visible')
        setTimeout(() => {
          backdrop.classList.add('active')
        }, backdrop_fadein_duration)

        this.state = 1
      },

      hide(buttonIndex) {
        let backdrop = document.querySelector('[backdrop]')
        backdrop.classList.remove('active')
        setTimeout(() => {
          backdrop.classList.remove('visible')
          this.state = 0
        }, backdrop_fadein_duration)

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

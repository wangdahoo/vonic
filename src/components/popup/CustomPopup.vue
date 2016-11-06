<template>
  <div class="von-popup-wrapper">
    <div class="backdrop"></div>
    <div class="popup-container" :effect="effect"
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
  </div>
</template>

<style lang="scss" scoped>
  @import "./popup";

  .von-popup-wrapper {

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
      },
      buttons: {
        type: Array,
        required: true
      }
    },

    data() {
      return {
        state: 0, // 0: hidden, 1: showing, 2: active
        default_button_theme: 'positive'
      }
    },

    methods: {
      show() {
        let backdrop = document.querySelector('.von-popup-wrapper .backdrop')
        backdrop.classList.add('visible')
        setTimeout(() => {
          backdrop.classList.add('active')
        }, backdrop_fadein_duration)

        this.state = 1

        this.promise = new Promise((resolve, reject) => {
          this.$on('PopupButtonClickEvent', (data) => {
            resolve(data.buttonIndex)
          })
        });

        return this.promise
      },

      hide(buttonIndex) {
        let backdrop = document.querySelector('.von-popup-wrapper .backdrop')
        backdrop.classList.remove('active')
        setTimeout(() => {
          backdrop.classList.remove('visible')
        }, backdrop_fadein_duration)

        this.state = 2
        setTimeout(() => {
          this.state = 0
          this.$emit('PopupButtonClickEvent', {buttonIndex: buttonIndex})
        }, popup_leave_duration)
      }
    }
  }
</script>

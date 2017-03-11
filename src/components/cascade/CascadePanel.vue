<template>
  <div class="von-cascade-panel" :class="{'active': state == 1}">
    <div class="title" v-text="title"></div>

    <div class="list list-borderless options">
      <div class="item" v-for="(option, index) in options"
        @click="optionClicked(index)">
        <hairline-top></hairline-top>
        <span v-text="option"></span>
        <hairline-bottom v-if="index < options.length - 1"></hairline-bottom>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import HairlineTop from '../list/HairlineTop'
  import HairlineBottom from '../list/HairlineBottom'

  const animation_duration = 300
  let bus = new Vue();

  export default {
    components: {
      HairlineTop,
      HairlineBottom
    },

    data() {
      return {
        title: '',
        options: [],

        state: 0, // 0: hide, 1: show
      }
    },

    destroyed() {
      document.body.removeChild(this.$el)
    },

    methods: {
      reset() {
        this.title = ''
        this.options = []
        this.state = 0
      },

      show(title, options) {
        this.reset()
        Vue.nextTick(() => {
          this.title = title
          this.options = options
          this.state = 1
        })

        $backdrop.show(true).then(() => {
          let backdrop = document.querySelector('[von-backdrop]')
          backdrop.onclick = () => {
            bus.$emit('optionClickedEvent', {optionIndex: -1})
            backdrop.onclick = null
          }
        })

        document.body.classList.add('popup-open')

        return new Promise((resolve) => {
          bus.$on('optionClickedEvent', (data) => {
            resolve(data.optionIndex)
            this._hide()
          })
        })
      },

      _hide() {
        this.state = 0
        $backdrop.hide(true)

        document.body.classList.remove('popup-open')

        setTimeout(() => {
          this.$destroy()
        }, animation_duration)
      },

      hide() {
        bus.$emit('optionClickedEvent', {optionIndex: -1})
      },

      optionClicked(index) {
        bus.$emit('optionClickedEvent', {optionIndex: index})
      },

      getState() {
        return this.state
      }
    }
  }
</script>

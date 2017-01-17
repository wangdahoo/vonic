<template>
  <div class="von-cascade-panel" :class="{'active': state == 1}">
    <div class="title">
      {{ title }}
    </div>

    <div class="list options" thin-border>
      <div class="item" v-for="($index, option) in options" @click="optionClicked($index)">
        {{ option }}
      </div>
    </div>
  </div>
</template>
<style lang='scss'>
  @import "../scss/mixins";

  .von-cascade-panel {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 30px 0 0 0;
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
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 30px;
      z-index: 1000;

      font-size: 14px;
      line-height: 30px;
      text-align: center;
    }

    .options {
      max-height: 215px;
      overflow-x: hidden;
      overflow-y: overflow;
      -webkit-overflow-scrolling: touch;

      .item {
        min-height: 44px;
        height: 44px;
        padding: 15px 12px;
        text-align: center;

        &:active {
          background-color: #eee;
        }
      }
    }

  }
</style>
<script>
  import Vue from 'vue'

  const animation_duration = 300
  let bus = new Vue();

  export default {
    data() {
      return {
        title: '',
        options: [],

        state: 0, // 0: hide, 1: show
      }
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

        window.$backdrop.show().then(() => {
          let backdrop = document.querySelector('[von-backdrop]')
          backdrop.onclick = () => {
            bus.$emit('optionClickedEvent', {optionIndex: -1})
            backdrop.onclick = null
          }
        })

        return new Promise((resolve) => {
          bus.$on('optionClickedEvent', (data) => {
            resolve(data.optionIndex)
            this._hide()
          })
        })
      },

      _hide() {
        this.state = 0
        window.$backdrop.hide()
        setTimeout(() => {
          this.$destroy(true)
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

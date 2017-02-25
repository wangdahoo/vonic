<template>
  <div class="bar bar-header bar-transparent" :class="{'cached': cached}">
    <div class="buttons">
      <button class="button button-icon ion-ios-arrow-back" @click="onBackClick()"></button>
    </div>

    <transition name="title">
      <h1 class="title" v-text="title"></h1>
    </transition>

    <div class="buttons">
      <button class="button button-icon ion-ion-navicon" @click="onMenuClick()"></button>
    </div>
  </div>
</template>
<style lang="scss">
  .bar.bar-header {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    z-index: 2;

    .title {
      font-weight: normal;
    }

    &.bar-transparent {
      background: transparent;
    }

    &.cached {
      box-shadow: none;
      z-index: 1;
    }
  }
</style>
<script>
  export default {
    props: {
      title: String,
      onBack: Function,
      onMenu: Function
    },

    data() {
      return {
        cached: false
      }
    },

    destroyed() {
      console.log('destroy header')
      this.$el.parentNode.removeChild(this.$el)
    },

    methods: {
      onBackClick() {
        if (this.onBack) {
          this.onBack()
          return
        }

        if (window.__push_method__ === 'push') {
          history.go(-1)
        }
      },

      onMenuClick() {
        if (this.onMenu) {
          this.onMenu()
        }
      },

      cache() {
        this.cached = true
      },

      isCached() {
        return this.cached
      }
    }
  }
</script>

<template>
  <div class="bar bar-header bar-transparent" :class="{'cached': cached}">
    <div class="buttons">
      <button class="button button-icon ion-ios-arrow-back" @click="onBackClick()"></button>
    </div>

    <h1 class="title">
      <span v-text="title"></span>
    </h1>

    <div class="buttons">
      <button class="button button-icon ion-ion-navicon" @click="onMenuClick()"></button>
    </div>
  </div>
</template>
<style lang="scss">
  .bar.bar-header {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    z-index: 2;
    padding: 5px 0px;

    &.bar-transparent {
      background: transparent;
    }

    &.cached {
      box-shadow: none;
      z-index: 1;
    }

    .title {
      -webkit-transition-property: opacity, -webkit-transform;
      transition-property: opacity, transform;
      opacity: 0;
    }
  }
</style>
<script>
  import { timeout, is_ios_device } from './utils'

  const TITLE_TRANSITION = '400ms cubic-bezier(.36, .66, .04, 1)'

  export default {
    props: {
      title: String,
      onBack: Function,
      onMenu: Function,
      enableTitleTransition: Boolean
    },

    data() {
      return {
        cached: false,
        animated: false
      }
    },

    mounted() {
      this.titleEnter()
    },

    destroyed() {
      // console.log('destroy header')
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
        this.titleLeave()
      },

      isCached() {
        return this.cached
      },

      titleEnter() {
        let container = this.$el
        let el = container.querySelector('.title')
        let text = container.querySelector('.title > span')

        let style = el.style
        style.webkitTransition
        style.transition = 'none'

        let dist = parseInt((el.offsetWidth - text.offsetWidth) / 2) + 'px'
        console.log(dist)
        let direction = document.querySelector('[von-app]').getAttribute('transition-direction')
        style.webkitTransform =
        style.transform = 'translate3d(' + (direction == 'back' ? '-' : '') + dist + ',0,0)'

        setTimeout(() => {
          style.opacity = 1
          style.webkitTransform =
          style.transform = 'translate3d(0,0,0)'

          style.webkitTransition
          style.transition = TITLE_TRANSITION
        }, 0)
      },

      titleLeave() {
        let container = this.$el
        let el = this.$el.querySelector('.title')
        let text = container.querySelector('.title > span')

        let style = el.style
        style.webkitTransition
        style.transition = 'none'

        setTimeout(() => {
          let dist = parseInt((el.offsetWidth - text.offsetWidth) / 2) + 'px'
          console.log(dist)
          let direction = document.querySelector('[von-app]').getAttribute('transition-direction')
          style.webkitTransform =
          style.transform = 'translate3d(' + (direction == 'back' ? '' : '-') + dist + ',0,0)'
          style.opacity = 0

          style.webkitTransition
          style.transition = TITLE_TRANSITION

          el.addEventListener('transitionEnd', () => {}, false)
          el.addEventListener('webkitTransitionEnd', this._titleTransitionEnd, false)
        }, 0)
      },

      _titleTransitionEnd() {
        console.log('title to leave transition end')
        this.$destroy()
      }
    }
  }
</script>

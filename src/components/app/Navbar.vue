<template>
  <div von-nav class="navbar" :class="{'visible': visible}" :style="navStyle()">
    <div class="navbar-container">
    </div>
  </div>
</template>
<style lang='scss'>
  $navbar-z-index: 10;

  .navbar {
    position: fixed;
    z-index: $navbar-z-index;
    visibility: hidden;
    background: #FFF;
    &.visible {
      visibility: visible;
    }

    .navbar-container {
      position: absolute;
    }
  }

  .navbar,
  .navbar > .navbar-container {
    left: 0;
    top: 0;
    width: 100%;
    height: 44px;
  }
</style>
<script>
  import assign from 'object-assign'
  import channel from './channel'
  import Vue from 'vue'
  import Header from './header'

  import { timeout, is_ios_device } from './utils'

  let isFirstRender = true

  export default {
    data() {
      return {
        visible: false,
        enableTransition: true,
        headers: []
      }
    },

    mounted() {
      channel.$on('EnableNavbarTransition', () => {
        this.enableTransition = true
      })

      channel.$on('DisableNavbarTransition', () => {
        this.enableTransition = false
      })

      channel.$on('UpdateNavbar', (data) => {
        this.visible = !data.hideNavbar
        if (!data.hideNavbar) {
          this.visible = true
          this.$el.style.position = 'absolute'
        }
        // console.log('createHeader options => ', data)
        this.createHeader(data)
      })
    },

    watch: {
      'headers': function (newVal, oldVal) {
        console.log('headers => ', newVal.length)
      }
    },

    methods: {
      navStyle() {
        if (this.enableTransition) {
          return {
            webkitTransition: '300ms',
            transition: '300ms',
            opacity: this.visible ? '1' : '0'
          }
        }

        return {
          webkitTransition: '0s',
          transition: '0s',
          opacity: '1'
        }
      },

      _createHeaderDom() {
        let container = this.$el.querySelector('.navbar-container')
        let el = document.createElement('div')
        container.appendChild(el)
        return timeout(el, 0)
      },

      createHeader(options) {
        let props = {
          enableTitleTransition: is_ios_device(),
          showBack: false,
          showMenu: false
        }
        if (options.title) props.title = options.title
        if (options.onBackButtonClick) props.onBack = options.onBackButtonClick
        if (options.onMenuButtonClick) props.onMenu = options.onMenuButtonClick
        if (options.showBackButton) props.showBack = options.showBackButton
        if (options.showMenuButton) props.showMenu = options.showMenuButton
        if (options.backButtonText) props.backText = options.backButtonText
        if (options.menuButtonText) props.menuText = options.menuButtonText
        props.enableTitleTransition = !isFirstRender
        isFirstRender = false

        console.log('header props => ', props)

        let HeaderComponent = Vue.extend(Header)
        this._createHeaderDom().then(el => {
          let vm = new HeaderComponent({
            propsData: props
          }).$mount(el)

          let headers = this.headers
          let headerToCache = headers.pop()
          if (headerToCache) {
            headerToCache.cache()
          }
          headers.push(vm)
        })
      }
    }
  }
</script>

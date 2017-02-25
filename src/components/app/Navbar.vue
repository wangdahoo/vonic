<template>
  <div von-nav class="navbar" :class="{'visible': visible}" :style="navStyle()">
    <div class="navbar-container">
    </div>
  </div>
</template>
<style lang='scss'>
  $navbar-z-index: 10;

  .navbar {
    position: absolute;
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

  const noop = () => {}

  const timeout = (result = undefined, duration = 0) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(result) }, duration);
    })
  }

  const is_ios_device = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent)
  }

  export default {
    data() {
      return {
        visible: false,
        enableTransition: false,

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
        console.log('createHeader options => ', data)
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
        let props = {}
        if (options.title) props.title = options.title
        if (options.onBackButtonClick) props.onBack = options.onBackButtonClick
        if (options.onMenuButtonClick) props.onMenu = options.onMenuButtonClick
        let HeaderComponent = Vue.extend(Header)
        this._createHeaderDom().then(el => {
          let vm = new HeaderComponent({
            propsData: props
          }).$mount(el)

          let headers = this.headers
          // let headerToCache = headers[headers.length - 1]
          // if (headerToCache) {
          //   headerToCache.cache()
          // }
          let headerToDestroy = headers.pop()
          if (headerToDestroy) {
            headerToDestroy.$destroy()
          }
          headers.push(vm)
        })
      }
    }
  }
</script>

<template>
  <div von-nav class="navbar">
    <div class="navbar-container">

    </div>
  </div>
</template>
<style lang='scss'>
  $navbar-z-index: 10;

  .navbar {
    position: fixed;
    z-index: $navbar-z-index;

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

  const timeout = (duration = 0) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, duration);
    })
  }

  const is_ios_device = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent)
  }

  const defaultBackButtonText = () => {
    return is_ios_device() ?
      '<a class="button button-icon icon ion-ios-arrow-back"></a>' :
      '<a class="button button-icon icon ion-android-arrow-back"></a>'
  }

  const defaultMenuButtonText = () => {
    return '<a class="button button-icon icon ion-navicon"></a>'
  }

  window.__block_touch__ = false

  const NAV_DEFAULT = {
    title: '',
    showBackButton: false,
    onBackButtonClick: undefined,
    showMenuButton: false,
    onMenuButtonClick: undefined,
    backButtonText: defaultBackButtonText(),
    menuButtonText: defaultMenuButtonText(),
    hideNavbar: false
  }

  export default {
    data() {
      return {
        title: '',
        showBackButton: false,
        onBackButtonClick: undefined,
        showMenuButton: false,
        onMenuButtonClick: undefined,
        backButtonText: defaultBackButtonText(),
        menuButtonText: defaultMenuButtonText(),
        hideNavbar: false
      }
    },

    mounted() {
      let el = this.$el
      channel.$on('PageTransitionEvent', (data) => {
        assign(this.$data, NAV_DEFAULT, data)

        console.log(this.$data)
      })
    },

    methods: {
      backButtonClicked(e) {
        if (window.__block_touch__) {
          e.preventDefault()
          return
        }

        if (this.onBackButtonClick) {
          this.onBackButtonClick()
          return
        }

        document.querySelector('[von-app]').setAttribute('transition-direction', 'back')
        history.go(-1)
      },

      menuButtonClicked() {
        if (window.__block_touch__) {
          e.preventDefault()
          return
        }

        if (this.onMenuButtonClick) {
          this.onMenuButtonClick()
        }
      }
    }
  }
</script>

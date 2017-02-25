<template>
  <div von-nav v-if="!hideNavbar" class="navbar">
    <div class="back-button"
      v-if="showBackButton"
      v-html="backButtonText"
      @click="backButtonClicked($event)"
    ></div>

    <div class="center">
      <span class="title" v-text="title"></span>
    </div>

    <div class="menu-button"
      v-if="showMenuButton"
      v-html="menuButtonText"
      @click="menuButtonClicked($event)"
    ></div>
  </div>
</template>
<style lang='scss'>
  @import "../scss/variables";
  @import '../scss/mixins';

  $navbar-z-index: 10;
  $navbar-title-z-index: 12;
  $navbar-button-z-index: 13;

  // .navbar[visible] {
  //   visibility: visible;
  // }

  .navbar {
    // visibility: hidden;

    // position: fixed;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 44px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    z-index: $navbar-z-index;

    .back-button, .menu-button {
      position: absolute;
      top: 0;
      width: 80px;
      height: 44px;
      line-height: 44px;
      z-index: $navbar-button-z-index;

      .button-icon {
        padding: 0;
        min-height: 44px;
        height: 44px;
        margin-top: -1px;

        &.ion-android-arrow-back {
          &:before {
            font-size: 28px;
          }
        }
      }
    }

    .back-button {
      left: 0;
      padding: 0 0 0 10px;
      text-align: left;
    }

    .menu-button {
      right: 0;
      padding: 0 10px 0 0;
      text-align: right;
    }

    .center {
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      height: 44px;
      padding: 0;
      text-align: center;
      z-index: $navbar-title-z-index;

      .title {
        font-size: 18px;
        line-height: 44px;
        // opacity: 0;
      }
    }
  }
</style>
<script>
  import assign from 'object-assign'
  import channel from './channel'

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

  function navTransitionStart() {
    window.__block_touch__ = true
  }

  function navTransitionEnd() {
    window.__block_touch__ = false
  }

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
      },

      animateTitle() {
        let title = this.$el.querySelector('.center .title')
        if (title) {

        }
      }
    }
  }
</script>

<template>
  <div class="nav-bar-container" nav-bar-transition="ios">
    <!-- navbar leave -->
    <div class="{{ headerClass }}">
      <button class="button back-button buttons button-clear" :style="{'color': backButtonColor}"
              v-show="navbarLeave.showBackButton" @click="backButtonClicked()">
        <i class="{{ backButtonIcon }}"></i>{{ backButtonText }}
      </button>

      <h1 class="title">{{ navbarLeave.title }}</h1>

      <button class="button buttons button-clear" :style="{'color': menuButtonColor}"
              v-show="showMenuButton" @click="menuButtonClicked()">
        <i v-if="!menuButtonText" class="{{ menuButtonIcon }}"></i>
        <span v-if="menuButtonText">{{ menuButtonText }}</span>
      </button>
    </div>

    <!-- navbar enter -->
    <div class="{{ headerClass }}">
      <button class="button back-button buttons button-clear" :style="{'color': backButtonColor}"
              v-show="navbarEnter.showBackButton" @click="backButtonClicked()">
        <i class="{{ backButtonIcon }}"></i>{{ backButtonText }}
      </button>

      <h1 class="title">{{ navbarEnter.title }}</h1>

      <button class="button buttons button-clear" :style="{'color': menuButtonColor}"
              v-show="showMenuButton" @click="menuButtonClicked()">
        <i v-if="!menuButtonText" class="{{ menuButtonIcon }}"></i>
        <span v-if="menuButtonText">{{ menuButtonText }}</span>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../scss/variables";

  .von-header {
    .back-button {
      i {
        margin-right: 5px;
      }
    }
  }

  .grade-b .von-header {
    .button-icon {
      .icon:before,
      &.icon:before {
        font-size: 28px;
      }
    }
  }

</style>
<script>
  import Vue from 'vue'
  import VonHeader from '../header'
  import nav from './nav'

  function is_ios_device() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent)
  }

  let buttonColor = {
    type: String,
    default: is_ios_device() ? '#387ef5' : '#444'
  }

  function initNavbar(router) {
    if (!router.navbar) {
      return {
        title: '',
        showBackButton: false
      }
    }

    let navbar = router.navbar || {}
    return {
      title: navbar.title || '',
      showBackButton: navbar.showBackButton
    }
  }

  function d() {
    return (document.body.offsetWidth - document.querySelector('.von-header > .title').offsetWidth - 20) / 2
  }

  const pageTransitionDur = 400;

  export default {
    components: {
      VonHeader: VonHeader
    },

    props: {
      title: String,
      headerClass: {
        String,
        coerce(val) {
          let baseClass = 'bar bar-header von-header'
          if (!val) return baseClass
          else return baseClass + ' ' + val
        }
      },

      // back button
      showBackButton: {
        type: Boolean,
        default: true
      },
      backButtonColor: buttonColor,
      backButtonText: {
        type: String,
        default() {
          return is_ios_device() ? '返回' : ''
        }
      },
      backButtonIcon: {
        type: String,
        default() {
          if (is_ios_device()) {
            return 'icon ion-ios-arrow-back'
          } else {
            return 'icon ion-android-arrow-back'
          }
        }
      },

      onBackButtonClick: Function,

      // menu button
      showMenuButton: {
        type: Boolean,
        default: false
      },
      menuButtonColor: buttonColor,
      menuButtonText: {
        type: String,
        default: ''
      },
      menuButtonIcon: {
        type: String,
        default: is_ios_device() ?
          // 'icon ion-ios-refresh-empty' : 'icon ion-android-refresh'
          'icon ion-navicon' : 'icon ion-android-menu'
      },

      onMenuButtonClick: Function
    },

    created() {
      nav.$on('PageTransitionEvent', (data) => {

        this.navbarLeave = initNavbar(data.from)
        this.navbarEnter = initNavbar(data.to)

        Vue.nextTick(() => {

        });

      })
    },

    data(){
      return {
        navbarLeave: {},
        navbarEnter: {},

        state: 0, // 0: setup, 1: transition, 2: end
        x0: 0,
        x1: 0
      }
    },

    ready() {

    },

    methods: {
      setup() {
        this.state = 0
        Vue.nextTick(() => {
          this.x0 = 0
          this.x1 = d()
        })
        if (this.reverse) setTimeout(() => {
          window.nextTransition = 'forward'
        }, pageTransitionDur + 100)
      },

      transition() {
        this.state = 1
        Vue.nextTick(() => {
          this.x0 = d()
          this.x1 = 0
          setTimeout(this.transitionEnd, pageTransitionDur)
        })
      },

      transitionEnd() {
        this.state = 2
        this.x1 = 0
      },

      backButtonClicked() {
        if (this.onBackButtonClick) {
          this.onBackButtonClick()
          return
        }
        $vonic.nextTransition('back')
        history.go(-1)
      },

      menuButtonClicked() {
        if (this.onMenuButtonClick) this.onMenuButtonClick()
      }
    }
  }

</script>

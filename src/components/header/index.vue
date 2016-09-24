<template>
  <div class="{{ headerClass }}">
    <!-- backButton -->
    <button class="button button-icon back-button" :style="{'color': backButtonColor}"
            v-show="showBackButton == 'true'" @click="backButtonClicked()">
        <i class="{{ backButtonIcon }}"></i>{{ backButtonText }}
    </button>

    <h1 class="title">{{ title }}</h1>

    <!-- menuButton -->
    <button class="button button-icon" :style="{'color': menuButtonColor}"
            v-show="showMenuButton == 'true'" @click="menuButtonClicked()">
        <i v-if="!menuButtonText" class="{{ menuButtonIcon }}"></i>
        <span v-if="menuButtonText">{{ menuButtonText }}</span>
    </button>
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

  function is_ios_device() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent)
  }

  let buttonColor = {
    type: String,
    default: is_ios_device() ? '#387ef5' : '#444'
  }

  export default {
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
        type: String,
        default: 'true'
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
        type: String,
        default: 'false'
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

    methods: {
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

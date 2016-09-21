<template>
  <div class="{{ headerClass }}">
    <!-- backButton -->
    <button class="button button-clear" v-show="showBackButton == 'true'" @click="onBackButtonClick()">
        <i class="icon ion-ios-arrow-back positive"></i> <span class="positive"> {{ backButtonText }}</span>
    </button>

    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
  .bar-header {

  }
</style>

<script>
  import Vue from 'vue'

  export default {
    props: {
      title: String,
      headerClass: {
        String,
        default() {
          return 'bar bar-header'
        }
      },
      showBackButton: {
        type: String,
        default() {
          return 'true'
        }
      },
      backButtonText: {
        type: String,
        default: 'Back'
      }
    },

    methods: {
      onBackButtonClick() {
        $vonic.nextTransition('back')
        history.go(-1)
      }
    }
  }
</script>

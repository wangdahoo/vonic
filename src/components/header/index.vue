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

  export default{
    props: {
      title: String,
      headerClass: {
        String,
        default() {
          return 'bar bar-header bar-light'
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
        default: '返回'
      }
    },

    methods: {
      onBackButtonClick() {
        let app = document.getElementById('app');
        app.className = 'transition-reverse';
        setTimeout(() => {
          app.className = '';
        }, 500)

        history.go(-1)
      }
    }
  }
</script>

<template>
  <div class="{{ headerClass }}">
    <!-- backButton -->
    <button class="button button-clear" v-show="showBackButton == 'true'" @click="onBackButtonClick()">
        <i class="icon ion-ios-arrow-back positive"></i> <span class="positive"> {{ backButton.text }}</span>
    </button>

    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
  .bar-header {
    position: fixed;
  }
</style>

<script>
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
      backButton: {
        type: Object,
        default() {
          return {
            text: '返回',
            url: ''
          }
        }
      }
    },

    methods: {
      onBackButtonClick() {
        if (this.backButton.url) {
          // todo
        } else {
          history.go(-1)
        }
      }
    }
  }
</script>

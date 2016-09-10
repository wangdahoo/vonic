<template>
  <div class="{{ headerClass }}">
    <!-- backButton -->
    <button v-show="showBackButton" class="button button-clear" @click="onBackButtonClick()">
        <i class="icon ion-ios-arrow-back positive"></i> <span class="positive"> {{ backButton.text }}</span>
    </button>

    <h1 class="title">{{ title }}</h1>
  </div>
</template>
<style>

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
        type: Boolean,
        default() {
          return true
        },
        coerce(val) {
          return val != 'false'
        }
      },
      backButton: {
        type: Object,
        default() {
          return {
            text: 'Back',
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

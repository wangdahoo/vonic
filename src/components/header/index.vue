<template>
  <div class="{{ headerClass }}">
    <!-- backButton -->
    <button v-show="showBackButton == 'true'" class="button button-clear" @click="onBackButtonClick()">
        <i class="icon ion-ios-arrow-back positive"></i> <span class="positive"> {{ backButton.text }}</span>
    </button>

    <h1 class="title">{{ title }}</h1>
  </div>
</template>

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

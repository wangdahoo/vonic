<template>
  <div class="page has-navbar page-ripple-button"
       v-nav="{title: 'Ripple Button', showBackButton: true, onBackButtonClick: back}">
    <div class="page-content padding padding-top">
      <md-button class="button button-assertive button-block" @click="onButtonClicked()">
        按钮文字
      </md-button>
    </div>
  </div>
</template>
<script>
  import {MdButton} from 'vonic'

  export default {
    components: {
      MdButton
    },

    data() {
      return {
      }
    },

    methods: {
      back() {
        $router.back({ path: '/' })
      },

      onButtonClicked() {
        console.log('button clicked!')
      }
    }
  }

</script>

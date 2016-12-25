<template>
  <div class="page has-navbar"
       v-nav="{title: 'Material Design 风格', showBackButton: true}">
    <div class="page-content padding padding-top">
      <md-button class="button button-assertive button-block" @click="onButtonClicked()">
        Click Me
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

    methods: {
      onButtonClicked() {
        console.log('button clicked!')
      }
    }
  }
</script>

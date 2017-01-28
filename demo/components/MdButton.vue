<template>
  <div class="page has-navbar" v-nav="{title: 'Material Design 风格', showBackButton: true}">
    <div class="page-content padding padding-top">
      <md-button class="button button-assertive button-block" @click.native="onButtonClicked()">
        Assertive
      </md-button>

      <md-button class="button button-positive button-block">
        Positive
      </md-button>

      <md-button class="button button-balanced button-block">
        Balanced
      </md-button>

      <md-button class="button button-energized">
        Energized
      </md-button>

      <md-button class="button button-calm">
        Calm
      </md-button>

      <md-button class="button button-royal">
        Royal
      </md-button>

      <md-button class="button button-dark">
        Dark
      </md-button>

      <div style="height: 30px;"></div>

      <md-button class="button button-balanced button-fab">
        <i class="icon ion-checkmark"></i>
      </md-button>

      <md-button class="button button-assertive button-fab">
        <i class="icon ion-close"></i>
      </md-button>

      <div style="height: 30px;"></div>

      <md-button class="button button-light button-fab">
        <i class="icon ion-android-arrow-up"></i>
      </md-button>

      <md-button class="button button-light button-fab">
        <i class="icon ion-android-arrow-down"></i>
      </md-button>

      <md-button class="button button-positive button-fab">
        <i class="icon ion-android-arrow-forward"></i>
      </md-button>

      <md-button class="button button-positive button-fab">
        <i class="icon ion-android-arrow-back"></i>
      </md-button>

      <md-button class="button button-energized button-fab">
        <i class="icon ion-home"></i>
      </md-button>

      <md-button class="button button-calm button-fab">
        <i class="icon ion-android-share"></i>
      </md-button>

    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      onButtonClicked() {
        console.log('button clicked!')
      }
    }
  }
</script>

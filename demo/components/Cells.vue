<template>
  <div class="page has-header">
    <von-header title="Cells"></von-header>

    <div class="page-content">
      <div class="cells" style="margin-bottom: 10px">
        <div class="row" v-for="r in [0,1,2]">
          <div class="col"  v-for="c in [0,1,2,3]" @click="onCellClick()">
            <div class="padding">
              <i class="{{ icons[4*r + c] }}"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="cells" style="margin-bottom: 10px">
        <div class="row" v-for="r in [0,1,2]">
          <div class="col"  v-for="c in [0,1,2]" @click="onCellClick()">
            <div class="padding">
              <i class="{{ icons[4*r + c] }}"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="cells">
        <div class="row" v-for="r in [0,1]">
          <div class="col"  v-for="c in [0,1]" @click="onCellClick()">
            <div class="padding-bg">
              <i class="{{ icons[4*r + c] }}"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  $default-border-color: #ddd;

  @mixin thin-border-custom($color, $radius, $custom: vertical) {
    $border-width: 1px;

    @if $custom == vertical {
      $border-width: 1px 0 1px 0;
    } @else if $custom == horizontal {
      $border-width: 0 1px 0 1px;
    } @else if $custom == left {
      $border-width: 0 0 0 1px;
    } @else if $custom == right {
      $border-width: 0 1px 0 0;
    } @else if $custom == top {
      $border-width: 1px 0 0 0;
    } @else if $custom == bottom {
      $border-width: 0 0 1px 0;
    }

    position: relative;

    &:after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-width: $border-width;
      border-color: $color;
      border-style: solid;
      border-radius: $radius;
      transform-origin: 0 0;
      z-index: 0;
      box-sizing: border-box;
      @media only screen and (-webkit-min-device-pixel-ratio: 2) {
        height: 200%;
        width: 200%;
        transform: scale(0.5);
        border-radius: ($radius * 2);
      }
    }
  }

  .page-content {
    padding-top: 54px !important;
  }

  .cells {
    @include thin-border-custom($default-border-color, 0, top);

    &:last-of-type {
      margin-bottom: 10px;
    }

    background-color: #FFF;

    .row {
      padding: 0;

      @include thin-border-custom($default-border-color, 0, bottom);

      .col {
        margin: 0;
        padding: 0;
        text-align: center;
        @include thin-border-custom($default-border-color, 0, right);
        &:last-of-type {
          border-right-width: 0;
        }
      }
    }
  }

  .padding {
    padding: 30px 0;
  }

  .padding-bg {
    padding: 50px 0;
  }

</style>
<script>
  import {Page, VonHeader} from 'vonic'

  export default{
    components: {
      Page,
      VonHeader,
    },

    data(){
      return {
        icons: [
          'icon ion-ios-arrow-up',
          'icon ion-ios-arrow-down',
          'icon ion-ios-arrow-left',
          'icon ion-ios-arrow-right',

          'icon ion-ios-arrow-thin-up',
          'icon ion-ios-arrow-thin-down',
          'icon ion-ios-arrow-thin-left',
          'icon ion-ios-arrow-thin-right',

          'icon ion-android-arrow-up',
          'icon ion-android-arrow-down',
          'icon ion-android-arrow-back',
          'icon ion-android-arrow-forward',
        ]
      }
    },

    methods: {
      onCellClick() {
        console.log('cell clicked');
      }
    }
  }
</script>

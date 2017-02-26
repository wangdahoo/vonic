<template>
  <div class="item item-borderless hl-item">
    <div class="hairline-top"></div>
    <div class="hairline-bottom"></div>
    <slot></slot>
  </div>
</template>
<style lang='scss'>
  @import "../scss/mixins";

  .hl-item {
    .hairline-top:before {
      @include hairline(top);
    }

    .hairline-bottom:after {
      @include hairline(bottom);
    }

    &.hl-item-borderless {
      .hairline-top:before,
      .hairline-bottom:before
      {
        visibility: hidden;
      }
    }

    &.hl-item-borderless-top {
      .hairline-top:before {
        visibility: hidden;
      }
    }

    &.hl-item-borderless-bottom {
      .hairline-bottom:after {
        visibility: hidden;
      }
    }
  }
</style>

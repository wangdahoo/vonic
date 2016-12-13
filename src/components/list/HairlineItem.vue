<template>
  <div class="item item-borderless">
    <slot></slot>
    <div class="hairline-top"></div>
    <div class="hairline-bottom"></div>
  </div>
</template>
<style lang='scss'>
  @import "../scss/mixins";

  .hairline-top:before {
    @include hairline(top);
  }

  .hairline-bottom:after {
    @include hairline(bottom);
  }
</style>

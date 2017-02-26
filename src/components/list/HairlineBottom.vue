<template>
  <div class="hairline-bottom"></div>
</template>
<style lang='scss'>
  @import "../scss/mixins";
  .hairline-bottom:after {
    @include hairline(bottom);
  }
</style>

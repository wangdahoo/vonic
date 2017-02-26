<template>
  <div class="hairline-top"></div>
</template>
<style lang='scss'>
  @import "../scss/mixins";
  .hairline-top:before {
    @include hairline(top);
  }
</style>

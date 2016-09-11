<template>
  <div class="page-content">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  @import "../scss/mixins";

  .page-content {
    @include flex();
    -webkit-overflow-scrolling: touch;
  }
</style>

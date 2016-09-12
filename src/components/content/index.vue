<template>
  <div class="page-content">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  @import "../scss/scafolding";

  .page-content {
    @include flex();
    -webkit-overflow-scrolling: touch;
  }
</style>

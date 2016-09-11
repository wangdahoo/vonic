<template>
  <div class="page-content">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .page-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #f4f4f4;

    padding-top: 54px;
    -webkit-transform: translate3d(0, 0, 0);
  }
</style>

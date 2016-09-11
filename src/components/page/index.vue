<template>
  <div class="page"><slot></slot></div>
</template>

<style lang="scss" scoped>
  .page {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #F4F4F4;
    touch-action: none;
    -ms-touch-action: none;
  }
</style>

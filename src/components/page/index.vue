<template>
  <div class="page" v-bind:class="{'has-header': hasHeader == 'true'}"><slot></slot></div>
</template>

<script>
  export default {
    props: {
      hasHeader: {
        type: [String],
        default() {
          return 'false'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../scss/scafolding";

  .page {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: $default-page-bg;

    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &.has-header {
      padding-top: $header-height + 10px;

      .scroll {
        top: 0
      }
    }
  }
</style>

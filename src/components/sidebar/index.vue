<template>
  <div style="height: 100%">
    <div class="click-block click-block-sidebar" :class="{'click-block-hide': !opened}" @click="close()"></div>
    <div class="von-sidebar" :class="{'open': opened}">
      <slot></slot>
    </div>
  </div>
</template>
<style lang='scss'>
  .click-block-sidebar {
    z-index: 10;
  }

  .von-sidebar {
    position: fixed;
    background-color: #f5f5f5;
    height: 100%;
    top: 0;
    left: 0;
    padding: 54px 0 0 0;
    z-index: 11;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
    -webkit-transform: translate(-280px, 0);
    transform: translate(-280px, 0);

    width: 260px;
    margin-right: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    &.open {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        opened: false
      }
    },

    ready() {

    },

    methods: {
      open() {
        this.opened = true
      },

      close() {
        this.opened = false
      },

      toggle() {
        this.opened = !this.opened
      }
    }
  }
</script>

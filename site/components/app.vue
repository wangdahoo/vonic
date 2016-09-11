<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    ready () {

    },
    beforeDestroy () {

    },
    methods: {

    }
  }
</script>
<style lang="scss">
  @import "../scss/mixins";

  html, body {
    height: 100%;
  }

  app, .app {
    height: 100%;
  }

  .view-container {
    @include display-flex();
  }

  .page {
    @include flex();
    background-color: #f4f4f4;
    padding: 54px 0 0 0;
  }

</style>

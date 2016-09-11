<template>
  <div class="view-container">
    <von-header title="Home">
    </von-header>

    <div class="page">
      <div class="list">
        <div class="item item-icon-right" v-link="{ path: '/widgets/radio' }">
          Radio
          <i class="icon ion-ios-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

  @import "../scss/mixins";
  @import "../scss/item";

  .item-icon-right {
    .icon {
      right: 0;
      color: #ccc;
      font-size: 24px;
    }
  }

</style>
<script>
  import VonHeader from '../../src/components/von-header.vue'

  export default{
    components: {
      VonHeader
    },

    data(){
      return {
        msg: 'Welcome'
      }
    },

    methods: {

    }
  }
</script>

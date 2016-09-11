<template>
  <div class="view-container">
    <von-header title="Home" show-back-button="false">
    </von-header>

    <div class="page">
      <div class="item item-divider">
        Widgets
      </div>
      <div class="item item-icon-right" v-link="{ path: '/widgets/radio' }">
        Radio
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-divider">
        Effects
      </div>
      <div class="item item-icon-right" v-link="{ path: '/effects/pull-to-refresh' }">
        Pull to Refresh
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-divider">
        Show Cases
      </div>
      <div class="item item-icon-right" v-link="{ path: '/showcases/login' }">
        Login Page
        <i class="icon ion-ios-arrow-right"></i>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

  @import "../scss/mixins";
  @import "../scss/item";

  .item-divider:first-of-type {
    border-top: none;
  }

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

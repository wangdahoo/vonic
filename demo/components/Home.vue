<template>
  <div class="page has-header">
    <von-header title="Vonic" show-back-button="false"></von-header>

    <div class="page-content">
      <div class="item item-divider">
        组件
      </div>
      <div class="item item-icon-right" v-link="{ path: '/widgets/radio' }">
        单选框 Radio
        <i class="icon ion-ios-arrow-right"></i>
      </div>
      <div class="item item-icon-right" v-link="{ path: '/widgets/checkbox' }">
        复选框 Checkbox
        <i class="icon ion-ios-arrow-right"></i>
      </div>
      <div class="item item-icon-right" v-link="{ path: '/widgets/toggle' }">
        开关按钮 Toggle
        <i class="icon ion-ios-arrow-right"></i>
      </div>
      <div class="item item-icon-right" v-link="{ path: '/widgets/tabs' }">
        Tabs
        <i class="icon ion-ios-arrow-right"></i>
      </div>
      <div class="item item-icon-right" v-link="{ path: '/widgets/cells' }">
        Cells
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-divider">
        效果
      </div>
      <div class="item item-icon-right" v-link="{ path: '/effects/scroll' }">
        Scroll
        <i class="icon ion-ios-arrow-right"></i>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

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
  import Vue from 'vue'
  import {Page, VonHeader} from 'vonic'

  export default{
    components: {
      Page,
      VonHeader
    },

    data(){
      return {}
    },

    methods: {}
  }
</script>

<template>
  <von-header title="Vonic" show-back-button="false"></von-header>

  <page has-header="true">
    <div class="item item-divider">
      表单
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

    <div class="item item-divider">
      效果
    </div>
    <div class="item item-icon-right" v-link="{ path: '/effects/scroll' }">
      Scroll
      <i class="icon ion-ios-arrow-right"></i>
    </div>
  </page>
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
  import { Page, PageContent, VonHeader } from 'vonic'

  export default{
    components: {
      Page,
      PageContent,
      VonHeader
    },

    data(){
      return {

      }
    },

    methods: {

    }
  }
</script>

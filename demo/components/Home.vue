<template>
  <div class="page">
    <div class="page-content home">
      <div class="logo">
        <img src="../assets/vonic.svg" width="100" height="100"/>
      </div>

      <div class="code-name">
        Vonic
      </div>

      <div class="item item-divider">
        组件
      </div>
      <div class="item item-icon-right" v-link="{ path: '/widgets/radio' }">
        Radio <span class="note">单选框</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>
      <div class="item item-icon-right" v-link="{ path: '/widgets/checkbox' }">
        Checkbox <span class="note">复选框</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>
      <div class="item item-icon-right" v-link="{ path: '/widgets/toggle' }">
        Toggle <span class="note">开关按钮</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>
      <div class="item item-icon-right" v-link="{ path: '/widgets/tabs' }">
        Tabs
        <i class="icon ion-ios-arrow-right"></i>
      </div>
      <div class="item item-icon-right" v-link="{ path: '/widgets/buttonbar' }">
        ButtonBar <span class="note">iOS 风格的 Tabs</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" v-link="{ path: '/widgets/popup' }">
        Popup <span class="note">弹层</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" v-link="{ path: '/widgets/modal' }">
        Modal <span class="note">模态框</span>
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

  .home {
    padding-top: 50px;

    .logo {
      width: 100%;
      text-align: center;
      img {
        width: 100px;
        height: 100px;
        margin: 0 auto;
      }
    }

    .code-name {
      text-align: center;
      font-family: "Italiana", sans-serif !important;
      color: #47B584;
      font-style: normal;
      font-variant-ligatures: normal;
      font-variant-caps: normal;
      font-variant-numeric: normal;
      font-weight: normal;
      font-stretch: normal;
      font-size: 40px;
      line-height: normal;
      text-transform: lowercase;
      margin-bottom: 20px;
    }
  }

  .item-divider:first-of-type {
    border-top: none;
  }

  .item-icon-right {
    .icon {
      right: 0;
      color: #ccc;
      font-size: 24px;
    }

    span.note {
      color: #aaa;
      font-size: 13px;
      float: right;
      margin-right: 15px;
    }
  }

</style>
<script>
  import Vue from 'vue'
  import {Page} from 'vonic'

  export default{
    components: {
      Page
    }
  }
</script>

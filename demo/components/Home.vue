<template>
  <div class="page">
    <div class="page-content home">
      <div class="logo">
        <img src="../assets/vonic.svg" width="80" height="80"/>
      </div>

      <div class="code-name">vonic</div>

      <div class="item item-divider text-center" style="color: #999">
        UI Components
      </div>
      <div class="item item-icon-right" v-link="{ path: '/widgets/input' }">
        Input <span class="note">文本框</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>
      <div class="item item-icon-right" v-link="{ path: '/widgets/search' }">
        Search <span class="note">搜索框</span>
        <i class="icon ion-ios-arrow-right"></i>
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
        Modal <span class="note">模态窗</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" v-link="{ path: '/widgets/cells' }">
        Cells <span class="note">九宫格、十六宫格布局</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" v-link="{ path: '/effects/scroll' }">
        Scroll <span class="note">下拉刷新、无限加载</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <!-- <div class="item item-icon-right" v-link="{ path: '/widgets/header' }">
        Header <span class="note">导航栏、标题栏</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div> -->

    </div>
  </div>
</template>
<style lang="scss" scoped>

  @font-face {
    font-family: 'Yatra One';
    font-style: normal;
    font-weight: 400;
    src: local('Yatra One'), url(../assets/YatraOne.woff) format('woff');
  }

  .home {
    padding: 30px 0 40px 0;

    .logo {
      width: 100%;
      text-align: center;
      img {
        margin: 0 auto;
      }
    }

    .code-name {
      font-size: 18px;
      font-family: 'Yatra One', sans-serif;
      // -webkit-font-smoothing: subpixel-antialiased !important;
      text-align: center;
      color: #47B584;
      padding-left: 2px;
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

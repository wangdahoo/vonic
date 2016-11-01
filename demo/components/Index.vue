<template>
  <div class="page has-navbar" v-nav="{title: 'Components', showMenuButton: true, onMenuButtonClick: goRepo, menuButtonText: menuButtonText}">
    <div class="page-content home">
      <div class="logo">
        <img src="../assets/vonic.svg" width="80" height="80"/>
      </div>

      <div class="text-center code-name">Vonic</div>

      <div class="item item-divider text-center code-desc">
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

      <div class="item item-icon-right" v-link="{ path: '/widgets/popover' }">
        Popover <span class="note">弹出式提醒</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" v-link="{ path: '/widgets/modal' }">
        Modal <span class="note">模态窗</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" v-link="{ path: '/widgets/cells' }">
        Cells <span class="note">宫格布局</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" v-link="{ path: '/widgets/swiper' }">
        Swiper <span class="note">轮播</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" v-link="{ path: '/effects/scroll' }">
        Scroll <span class="note">下拉刷新、无限加载</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" v-link="{ path: '/effects/vum-scroll' }">
        Vum Scroll <span class="note">基于vum代码的轻量Scroll组件</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" @click="showLoading('玩命加载中..')">
        Loading <span class="note">加载提示</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" @click="showToast()">
        Toast <span class="note">文字提示</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>

  .home {
    padding: 74px 0 40px 0 !important;

    .logo {
      width: 100%;
      text-align: center;
      img {
        margin: 0 auto;
      }
    }

    .code-name, .code-desc {
      font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
    }

    .code-name {
      font-size: 24px;
      line-height: 24px;
      // -webkit-font-smoothing: subpixel-antialiased !important;
      color: #47B584;
    }

    .code-desc {
      color: #999;
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

  export default{
    components: {
    },

    data() {
      return {
        menuButtonText: '<a class="button button-icon icon ion-social-github"></a>'
      }
    },

    methods: {
      showLoading(tips) {
        $loading.show(tips)

        setTimeout(() => {
          $loading.hide()
        }, 3000)
      },

      showToast() {
        $loading.toast('发送成功')
      },

      goRepo() {
        location.href = 'https://github.com/wangdahoo/vonic'
      }
    }
  }
</script>

<template>
    <div class="page has-navbar"
         v-nav="{
         title: 'Components',
         showMenuButton: true,
         onMenuButtonClick: goRepo,
         menuButtonText: menuButtonText,
         showBackButton: true,
         onBackButtonClick: toggleSidebar,
         backButtonText: backButtonText
      }">
      <div class="page-content components">
        <div style="height: 30px;"></div>

        <div class="logo">
          <img src="../assets/vonic.svg" width="80" height="80"/>
        </div>

        <div class="text-center code-name">Vonic</div>

        <div class="item item-divider text-center code-desc">
          UI Components
        </div>

        <!-- Form Related -->
        <div class="item item-icon-right" v-link="{ path: '/widgets/rippleButton' }">
          Button <span class="note">Ripple effect by material design</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <div class="item item-icon-right" v-link="{ path: '/widgets/input' }">
          Input <span class="note">文本框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <div class="item item-icon-right" v-link="{ path: '/widgets/search' }">
          Search <span class="note">搜索框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <div class="item item-icon-right" v-link="{ path: '/widgets/counter' }">
          Counter <span class="note">计数器</span>
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
        <div class="item item-icon-right" v-link="{ path: '/widgets/cascade' }">
          Cascade <span class="note">级联</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>

        <!-- Layout -->
        <div class="item item-icon-right" v-link="{ path: '/widgets/list' }">
          List <span class="note">列表布局</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <div class="item item-icon-right" v-link="{ path: '/widgets/cells' }">
          Cells <span class="note">宫格布局</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <div class="item item-icon-right" v-link="{ path: '/widgets/tabs' }">
          Tabs <span class="note">选项卡</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <div class="item item-icon-right" v-link="{ path: '/widgets/buttonbar' }">
          ButtonBar <span class="note">iOS 风格选项卡</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <div class="item item-icon-right" v-link="{ path: '/effects/scalable' }">
          Scalable <span class="note">缩放布局</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>

        <!-- Swiper & Scroll -->
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

        <!-- Popover/Popup/Modal/ActionSheet/Sidebar-->
        <div class="item item-icon-right" v-link="{ path: '/widgets/popover' }">
          Popover <span class="note">弹出式提醒</span>
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
        <div class="item item-icon-right" @click="showActionSheet()">
          ActionSheet <span class="note"></span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <div class="item item-icon-right" @click="openSidebar()">
          Sidebar <span class="note">边栏</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <div class="item item-icon-right" v-link="{ path: '/widgets/tabbar/home' }">
          TabBar <span class="note">支持嵌套路由</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>

        <!-- Loading & Toast -->
        <div class="item item-icon-right" @click="showToast()">
          Toast <span class="note">文字提示</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <div class="item item-icon-right" @click="showLoading('玩命加载中..')">
          Loading <span class="note">加载提示</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>

        <div class="item item-divider">
          <i class="icon ion-social-github"></i> 项目地址
        </div>
        <div class="item item-icon-right" onclick="location.href = 'https://github.com/wangdahoo/vonic'">
          Star me on GitHub
          <i class="icon ion-ios-arrow-right"></i>
        </div>

        <div style="height: 40px;"></div>

      </div>
    </div>
</template>
<style lang="scss" scoped>

  .components {

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
  import {Sidebar} from 'vonic'

  export default {
    components: {
      Sidebar
    },

    data() {
      return {
        backButtonText: '<a class="button button-icon icon ion-navicon"></a>',
        menuButtonText: '<a class="button button-icon icon ion-social-github"></a>',

        sidebar: undefined
      }
    },

    ready() {
      let template = `
        <p style="font-size: 13px;">
        No man is an island,<br>
        entire of itself.<br>
        Every man is a piece of the continent,<br>
        a part of the main.<br>
        If a clod be washed away by the sea,<br>
        Europe is the less,<br>
        as well as if a promontory were,<br>
        as well as if a manor of thy friend's or of thine own were.<br>
        Any man's death diminishes me.<br>
        Because I am involved in mankind.<br>
        And,<br>
        therefore,<br>
        never send to know for whom the bells tolls,<br>
        it tolls for thee.<br>
        </p>
      `
      this.sidebar = $sidebar.fromTemplate(template, {position: 'left'})
      // $sidebar
      //  .fromTemplateUrl('path/to/template', {position: 'right'}) // right bar
      //  .then((sidebar) => {
      //    this.sidebar = sidebar
      //  })

    },

    destroyed() {
      $sidebar.destroy()
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

      showActionSheet() {
        $actionSheet.show({
          title: '标题',
          buttons: {
            'Action - 1': () => {
              console.log('action 1 called.')
            },

            'Action - 2': () => {
              console.log('action 2 called.')
            }
          }
        })
      },

      goRepo() {
        location.href = 'https://github.com/wangdahoo/vonic'
      },

      toggleSidebar() {
        this.sidebar.toggle()
      },

      openSidebar() {
        this.sidebar.open()
      },

      closeSidebar() {
        this.sidebar.close()
      }
    }
  }
</script>

<template>
  <div class="page has-navbar"
    v-nav="{
      title: 'Components',
      showBackButton: true,
      onBackButtonClick: back,
      showMenuButton: true,
      menuButtonText: menuButtonText,
      onMenuButtonClick: toggleSidebar
    }">
    <div class="page-content">
      <!-- Basic -->
      <div class="item item-divider">基础</div>
      <div class="list" thin-border>
        <router-link tag="div" class="item item-icon-right" to="/basic/button">
          Button <span class="item-note">按钮</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
        <router-link tag="div" class="item item-icon-right" to="/basic/mdButton">
          MdButton <span class="item-note">Material Design 风格</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
        <router-link tag="div" class="item item-icon-right" to="/basic/input">
          Input <span class="item-note">输入框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
        <router-link tag="div" class="item item-icon-right" to="/basic/search">
          Search <span class="item-note">搜索框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <router-link tag="div" class="item item-icon-right" to="/basic/radio">
          Radio <span class="item-note">单选框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
        <router-link tag="div" class="item item-icon-right" to="/basic/checkbox">
          Checkbox <span class="item-note">复选框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <router-link tag="div" class="item item-icon-right" to="/basic/dialog">
          Dialog <span class="item-note">对话框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <div class="item item-icon-right" @click="toast()">
          Toast <span class="item-note">文字提示</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <div class="item item-icon-right" @click="loading('正在加载..')">
          Loading <span class="item-note">加载提示</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
      </div>

      <!-- layout -->
      <div class="item item-divider">布局</div>
      <div class="list" thin-border>
        <router-link tag="div" class="item item-icon-right" to="/layout/list">
          List <span class="item-note">列表</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
        <router-link tag="div" class="item item-icon-right" to="/layout/cells">
          Cells <span class="item-note">宫格</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
        <router-link tag="div" class="item item-icon-right" to="/layout/tabs">
          Tabs <span class="item-note">选项卡</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
        <router-link tag="div" class="item item-icon-right" to="/layout/buttonbar">
          ButtonBar <span class="item-note">iOS 选项卡</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
        <router-link tag="div" class="item item-icon-right" to="/layout/scalable">
          Scalable <span class="item-note">缩放</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

      </div>
      <!-- advanced -->
      <div class="item item-divider">高级</div>
      <div class="list" thin-border>

        <router-link tag="div" class="item item-icon-right" to="/advanced/swiper">
          Swiper <span class="item-note">轮播</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
        <router-link tag="div" class="item item-icon-right" to="/advanced/scroll">
          Scroll <span class="item-note">下拉刷新、无限加载</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
        <router-link tag="div" class="item item-icon-right" to="/advanced/cascade">
          Cascade <span class="item-note">级联</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
        <router-link tag="div" class="item item-icon-right" to="/advanced/popup">
          Popup <span class="item-note">自定义弹层</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
        <router-link tag="div" class="item item-icon-right" to="/advanced/actionsheet">
          ActionSheet <span class="item-note">操作列表</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
        <div class="item item-icon-right" @click="toggleSidebarRight()">
          Sidebar <span class="item-note">侧边栏</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <router-link tag="div" class="item item-icon-right" to="/advanced/tabbar/home">
          Tabbar <span class="item-note">嵌套路由使用</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
        <router-link tag="div" class="item item-icon-right" to="/advanced/tabbarWithoutRoutes">
          Tabbar Standalone <span class="item-note">单独使用</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
      </div>

      <div class="footer"></div>
    </div>
  </div>
</template>
<style>
  .footer {
    height: 40px;
  }
</style>
<script>
  export default {
    data() {
      return {
        menuButtonText: '<a class="button button-icon icon ion-navicon"></a>',
        sidebar: undefined,
        sidebarRight: undefined
      }
    },

    mounted() {
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

      this.sidebarRight = $sidebar.fromTemplate('<h5>右边栏</h5>', {position: 'right'})
    },

    destroyed() {
      $sidebar.destroy()
    },

    methods: {
      back() {
        $router.back({path: '/'})
      },

      loading(tips) {
        $loading.show(tips)

        setTimeout(() => {
          $loading.hide()
        }, 2000)
      },

      toast() {
        $toast.show('发送成功')
      },

      toggleSidebar() {
        this.sidebar.toggle()
      },

      toggleSidebarRight() {
        this.sidebarRight.toggle()
      }
    }
  }
</script>

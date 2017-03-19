<template>
  <div class="page has-navbar"
    v-nav="{
      title: 'Components',
      showBackButton: true,
      onBackButtonClick: back,
      showMenuButton: true,
      onMenuButtonClick: toggleSidebar
    }">
    <div class="page-content">
      <!-- Basic -->
      <div class="item item-divider">基础</div>

      <list class="list-ios hl-list-borderless">
        <item class="item-icon-right" @click.native="$router.forward('/basic/button')">
          Button <span class="item-note">按钮</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/basic/mdButton')">
          MdButton <span class="item-note">Material Design 风格</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/basic/input')">
          Input <span class="item-note">输入框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/basic/search')">
          Search <span class="item-note">搜索框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/basic/radio')">
          Radio <span class="item-note">单选框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/basic/checkbox')">
          Checkbox <span class="item-note">复选框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/basic/toggle')">
          Toggle <span class="item-note">开关按钮</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/basic/range')">
          Range Slider <span class="item-note">滑块</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/basic/badge')">
          Badge <span class="item-note">徽章</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/basic/dialog')">
          Dialog <span class="item-note">对话框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="toast()">
          Toast <span class="item-note">文字提示</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="loading('正在加载..')">
          Loading <span class="item-note">加载提示</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
      </list>

      <!-- layout -->
      <div class="item item-divider">布局</div>
      <list class="list-ios hl-list-borderless">
        <item class="item-icon-right" @click.native="$router.forward('/layout/header')">
          Header <span class="item-note">页头</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/layout/list')">
          List <span class="item-note">列表</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/layout/cells')">
          Cells <span class="item-note">宫格</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/layout/tabs')">
          Tabs <span class="item-note">选项卡</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/layout/buttonbar')">
          ButtonBar <span class="item-note">iOS 选项卡</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/layout/scalable')">
          Scalable <span class="item-note">缩放</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
      </list>

      <!-- advanced -->
      <div class="item item-divider">高级</div>
      <list class="list-ios hl-list-borderless">
        <item class="item-icon-right" @click.native="$router.forward('/advanced/swiper')">
          Swiper <span class="item-note">轮播</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/advanced/vswipe')">
          VSwipe <span class="item-note">v1.0.0</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/advanced/scroll')">
          Scroll <span class="item-note">下拉刷新、无限加载</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/advanced/scroller')">
          Vue Scroller <span class="item-note">v2.1.0</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/advanced/cascade')">
          Cascade <span class="item-note">级联</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/advanced/accordion')">
          Accordion <span class="item-note">手风琴组件</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/advanced/datepicker')">
          Datepicker <span class="item-note">日期选择器</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/advanced/popup')">
          Popup <span class="item-note">自定义弹层</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/advanced/actionsheet')">
          ActionSheet <span class="item-note">操作列表</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="toggleSidebarRight()">
          Sidebar <span class="item-note">侧边栏</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/advanced/tabbar/home')">
          Tabbar <span class="item-note">嵌套路由使用</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/advanced/tabbarWithoutRoutes')">
          Tabbar Standalone <span class="item-note">单独使用</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/advanced/modal')">
          Modal <span class="item-note">模态窗</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
      </list>
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

      // setTimeout(() => {$app.setTitle('标题文字')}, 1000)

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
        $toast.show('发送成功', 1500).then(() => {
          console.log('toast hide')
        })
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

<template>
    <div class="page has-navbar"
         v-nav="{
          title: 'Components',
          showMenuButton: true,
          showBackButton: true,
          onBackButtonClick: back,
          onMenuButtonClick: toggleSidebar,
          menuButtonText: menuButtonText
        }">
      <div class="page-content">
        <!-- Basic -->
        <div class="item item-divider">基础</div>
        <div class="list" thin-border>
          <div class="item item-icon-right" v-link="{ path: '/basic/button' }">
            Button <span class="item-note">按钮</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/basic/mdButton' }">
            MdButton <span class="item-note">Material Design 风格</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/basic/input' }">
            Input <span class="item-note">文本框</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/basic/search' }">
            Search <span class="item-note">搜索框</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/basic/radio' }">
            Radio <span class="item-note">单选框</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/basic/checkbox' }">
            Checkbox <span class="item-note">复选框</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/basic/toggle' }">
            Toggle <span class="item-note">开关按钮</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/basic/popover' }">
            Popover <span class="item-note">弹出</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/basic/counter' }">
            Counter <span class="item-note">计数器</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" @click="showToast()">
            Toast <span class="item-note">文字提示</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" @click="showLoading('正在加载..')">
            Loading <span class="item-note">加载提示</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
        </div>

        <!-- Layout -->
        <div class="item item-divider">布局</div>
        <div class="list" thin-border>
          <div class="item item-icon-right" v-link="{ path: '/layout/list' }">
            List <span class="item-note">列表</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/layout/cells' }">
            Cells <span class="item-note">宫格</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/layout/tabs' }">
            Tabs <span class="item-note">选项卡</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/layout/buttonbar' }">
            ButtonBar <span class="item-note">iOS 风格选项卡</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/layout/scalable' }">
            Scalable <span class="item-note">缩放布局</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
        </div>

        <!-- Advanced -->
        <div class="item item-divider">高级</div>
        <div class="list" thin-border>
          <div class="item item-icon-right" v-link="{ path: '/advanced/swiper' }">
            Swiper <span class="item-note">轮播</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/advanced/scroll' }">
            Scroll <span class="item-note">Scroll组件</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/advanced/scroller' }">
            Vue Scroller <span class="item-note">v0.4.0</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/advanced/cascade' }">
            Cascade <span class="item-note">级联</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/advanced/popup' }">
            Popup <span class="item-note">弹层</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/advanced/modal' }">
            Modal <span class="item-note">模态窗</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/advanced/actionsheet' }">
            ActionSheet <span class="item-note"></span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" @click="toggleSidebarRight()">
            Sidebar <span class="item-note">侧边栏</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/advanced/tabbar/home' }">
            TabBar <span class="item-note">配合路由使用</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
          <div class="item item-icon-right" v-link="{ path: '/advanced/tabbarWithoutRoutes' }">
            TabBar Standalone <span class="item-note">单独使用</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
        </div>

        <div style="height: 50px;"></div>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        menuButtonText: '<a class="button button-icon icon ion-navicon"></a>',
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

      this.sidebarRight = $sidebar.fromTemplate('<h5>右边栏</h5>', {position: 'right'})

      /* fromTemplateUrl sample */

      // let path_to_template = ''
      // $sidebar
      //   .fromTemplateUrl(path_to_template, {position: 'right'}) // right bar
      //   .then((sidebar) => {
      //     this.sidebarRight = sidebar
      //   })

      /* $storage sample */
      this.handler = (e) => {
        // console.log('time flies.', e)
      }
      $storage.on('now', this.handler)
      this.tid = setInterval(() => {
        $storage.set('now', new Date())
      }, 1000)

    },

    destroyed() {
      $sidebar.destroy()
      $storage.off('now', this.handler)
      if (this.tid) clearInterval(this.tid)
    },

    methods: {
      showLoading(tips) {
        $loading.show(tips)

        setTimeout(() => {
          $loading.hide()
        }, 2000)
      },

      showToast() {
        $toast.show('发送成功')
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
      },

      toggleSidebarRight() {
        this.sidebarRight.toggle()
      },

      back() {
        $router.back({path: '/'})
      }
    }
  }
</script>

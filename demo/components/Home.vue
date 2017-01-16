<template>
  <div class="page has-navbar"
    v-nav="{
      title: 'Components',
      showBackButton: true,
      onBackButtonClick: back,
      showMenuButton: true,
      menuButtonText: menuButtonText
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

        <!-- layout -->

        <!-- advanced -->

      </div>
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

    mounted() {

    },

    destroyed() {

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
      }

    }
  }
</script>

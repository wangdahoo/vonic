<template>
    <div class="page has-navbar">
      <div class="page-content">
        <!-- Basic -->
        <div class="item item-divider">基础</div>
        <div class="list" thin-border>
          <router-link class="item item-icon-right" to="/basic/button">
            Button <span class="item-note">按钮</span>
            <i class="icon ion-ios-arrow-right"></i>
          </router-link>
          <router-link  class="item item-icon-right" to="/basic/mdButton">
            MdButton <span class="item-note">Material Design 风格</span>
            <i class="icon ion-ios-arrow-right"></i>
          </router-link >
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
      }
    }
  }
</script>

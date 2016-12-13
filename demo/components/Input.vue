<template>
  <div class="page has-navbar" v-nav="{title: '输入框', showBackButton: true, onBackButtonClick: back}">
    <div class="page-content padding-top">

      <div class="item item-icon-right thin-border" v-link="{ path: '/widgets/inputDefault' }">
        Default<span class="item-note">默认</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right thin-border" v-link="{ path: '/widgets/inputFloatingLabel' }">
        Floating Label<span class="item-note">悬浮标签效果</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

    </div>
  </div>
</template>
<script>
  export default{
    components: {
    },

    data(){
      return {
      }
    },

    methods: {
      back() {
        $router.back({path: '/'})
      }
    }
  }
</script>

<template>
  <div class="page has-navbar" v-nav="{title: '输入框', showBackButton: true, onBackButtonClick: back}">
    <div class="page-content padding-top">

      <div class="item item-icon-right" v-link="{ path: '/widgets/defaultInput' }">
        Default<span class="note">默认</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" v-link="{ path: '/widgets/floatingLabel' }">
        Floating Label<span class="note">悬浮标签效果</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>

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

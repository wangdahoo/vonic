<template>
  <div class="page has-header">
    <von-header title="Form"></von-header>

    <div class="page-content padding-top">

      <div class="item item-icon-right" v-link="{ path: '/widgets/input' }">
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
  import {Page, VonHeader} from 'vonic'

  export default{
    components: {
      Page,
      VonHeader,
    },

    data(){
      return {
      }
    },

    methods: {

    }
  }
</script>

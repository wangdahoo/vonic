<template>
  <div class="page has-navbar" v-nav="{title: '列表布局', showBackButton: true, onBackButtonClick: back}">
    <div class="page-content" style="padding-top: 54px;">
      <list>
        <item>
          Item - 1
        </item>
        <item>
          Item - 2
        </item>
        <item>
          Item - 3
        </item>
      </list>

      <list>
        <item thin>
          <span style="color: #888">小标题</span>
        </item>
        <item>
          正文文字
          <div class="item-note">
            备注文字
          </div>
        </item>
      </list>

      <list>
        <item thin>
          <span style="color: #888">Framework</span>
        </item>
        <item class="item-avatar">
          <img src="../assets/vonic.svg">
          <div class="title">
            Vonic
          </div>
          <div class="item-note">
            Be cool with vue.js and ionic UI.
          </div>
        </item>
      </list>

      <list>
        <item class="item-icon-right">
          文字
          <div class="item-note">
            备注
          </div>
          <span class="icon ion-ios-arrow-right"></span>
        </item>
      </list>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .ion-ios-arrow-right {
    color: #ddd;
  }
</style>
<script>
  import {List,Item} from 'vonic'

  export default {
    components: {
      List,
      Item
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

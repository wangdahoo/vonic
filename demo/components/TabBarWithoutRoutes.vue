<template>
  <div class="page has-navbar page-swiper" v-nav="{title: 'Tabbar 单独使用', showBackButton: true}"
    v-tabbar="{'menus': menus, menuColor: '#888', activeMenuColor: '#FF4400', onMenuClick: menuClicked}">
      <div class="page-content padding-top">
        <p class="text-center" v-if="show == 0">Home</p>
        <p class="text-center" v-if="show == 1">Discount</p>
        <p class="text-center" v-if="show == 2">Cart</p>
        <p class="text-center" v-if="show == 3">User</p>
      </div>
  </div>
</template>
<style>

</style>
<script>
  export default {
    data() {
      return {
        menus: [
          {
            iconOn: 'ion-ios-home',
            iconOff: 'ion-ios-home-outline',
            text: '首页',
          },
          {
            iconOn: 'ion-ios-pricetags',
            iconOff: 'ion-ios-pricetags-outline',
            text: '折扣',
          },
          {
            iconOn: 'ion-ios-cart',
            iconOff: 'ion-ios-cart-outline',
            text: '购物车',
          },
          {
            iconOn: 'ion-ios-person',
            iconOff: 'ion-ios-person-outline',
            text: '我的',
          }
        ],
        show: 0
      }
    },

    methods: {
      menuClicked(menuIndex) {
        this.show = menuIndex
      }
    },

    beforeDestroy() {
      $tabbar.$emit('hideTabbar')
    }
  }
</script>

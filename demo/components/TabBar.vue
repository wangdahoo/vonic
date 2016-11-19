<template>
  <tab-bar
    :menus="menus"
  ></tab-bar>

  <router-view></router-view>
</template>
<style>

</style>
<script>
  import {TabBar} from 'vonic'

  export default {
    components: {
      TabBar
    },

    data() {
      return {
        menus: [
          {
            iconOn: 'ion-ios-home',
            iconOff: 'ion-ios-home-outline',
            text: '首页',
            path: '/widgets/tabbar/home'
          },
          {
            iconOn: 'ion-ios-pricetags',
            iconOff: 'ion-ios-pricetags-outline',
            text: '折扣',
            path: '/widgets/tabbar/discount'
          },
          {
            iconOn: 'ion-ios-cart',
            iconOff: 'ion-ios-cart-outline',
            text: '购物车',
            path: '/widgets/tabbar/cart'
          },
          {
            iconOn: 'ion-ios-person',
            iconOff: 'ion-ios-person-outline',
            text: '我的',
            path: '/widgets/tabbar/user'
          }
        ]
      }
    },

    methods: {
      back() {
        $router.back({ path: '/' })
      }
    }
  }
</script>

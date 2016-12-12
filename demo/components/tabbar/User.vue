<template>
  <div class="page has-navbar has-tabbar" v-nav="{title: '我的'}" v-tabbar-menu-index="3">
    <div class="page-content padding-top">
      <p class="text-center">User Info</p>
      <a class="button button-positive button-block button-clear" v-link="{ path: '/pageFromTabbar' }">去另一个页面</a>
    </div>
  </div>
</template>

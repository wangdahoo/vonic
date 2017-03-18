<template>
  <div class="page has-navbar has-tabbar" v-tabbar-menu-index="3">
    <von-header theme="light">
        <span slot="title">折扣</span>
    </von-header>
    <div class="page-content padding-top">
      <p class="text-center">User Info</p>
      <a class="button button-positive button-block button-clear" @click="$router.forward('/pageFromTabbar')">去另一个页面</a>
    </div>
  </div>
</template>

<template>
  <div class="page has-navbar" v-nav="{title: '输入框', showBackButton: true}">
    <div class="page-content padding-top">

      <router-link tag="div" class="item item-icon-right thin-border"
        to="/basic/inputDefault">
        Default<span class="item-note">默认</span>
        <i class="icon ion-ios-arrow-right"></i>
      </router-link>

      <router-link tag="div" class="item item-icon-right thin-border"
        to="/basic/inputFloatingLabel">
        Floating Label<span class="item-note">悬浮标签效果</span>
        <i class="icon ion-ios-arrow-right"></i>
      </router-link>

    </div>
  </div>
</template>

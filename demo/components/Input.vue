<template>
  <div class="page has-navbar" v-nav="{title: '输入框', showBackButton: true}">
    <div class="page-content padding-top">
      <item class="item-icon-right" @click.native="$router.forward('/basic/inputDefault')">
        Default<span class="item-note">默认</span>
        <i class="icon ion-ios-arrow-right"></i>
      </item>
      <item class="item-icon-right" @click.native="$router.forward('/basic/inputFloatingLabel')">
        Floating Label<span class="item-note">悬浮标签效果</span>
        <i class="icon ion-ios-arrow-right"></i>
      </item>
    </div>
  </div>
</template>

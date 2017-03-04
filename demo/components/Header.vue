<template>
  <div class="page has-navbar" v-nav="{hideNavbar: true}">
    <div class="page-content">
      <von-header :theme="themes[themeIndex]">
        <button class="button button-icon ion-ios-arrow-back" slot="left" @click="$router.back('/home')"></button>
        <span slot="title">标题文字</span>
        <button class="button button-icon ion-navicon" slot="right"></button>
      </von-header>

      <div style="height: 20px;"></div>

      <von-radio :options="themes" v-model="themeIndex"></von-radio>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        themes: [
          'light',
          'stable',
          'positive',
          'calm',
          'balanced',
          'energized',
          'assertive',
          'dark'
        ],
        themeIndex: 0
      }
    }
  }
</script>

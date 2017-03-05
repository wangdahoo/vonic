<template>
  <div class="page has-navbar has-tabbar" v-tabbar-menu-index="0">
    <von-header theme="light">
      <span slot="title">首页</span>
    </von-header>

    <div class="page-content padding-top">
      <p class="text-center">Home</p>
      <div style="text-align: center; padding: 100px 40px">
        <md-button class="button button-assertive" @click.native="back()">
          返回组件列表页
        </md-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      back() {
        $router.back({ path: '/home' })
      }
    }
  }
</script>

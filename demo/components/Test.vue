<template>
  <div class="page" v-nav="{hideNavbar: true}">
    <div class="page-content padding">
      <button class="button button-assertive button-block"
        @click="showLoading()">Update Loading Text</button>

        <h1>字体规范 ¥1.50 1234567890</h1>
        <h2>字体规范 ¥1.50 1234567890</h2>
        <h3>字体规范 ¥1.50 1234567890</h3>
        <h4>字体规范 ¥1.50 1234567890</h4>
        <h5>字体规范 ¥1.50 1234567890</h5>
        <h6>字体规范 ¥1.50 1234567890</h6>

    </div>
  </div>
</template>
<style lang="scss">
  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
  }
</style>
<script>
  export default {
    methods: {
      showLoading() {
        $loading.show('正在加载..')

        setTimeout(() => {
          $toast.show('加载失败')
          // $loading.show('请耐心等待..')
        }, 2000)

      }
    }
  }
</script>

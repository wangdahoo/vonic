<template>
  <div class="page" v-nav="{hideNavbar: true}">
    <div class="page-content padding">
      <button class="button button-assertive button-block"
        @click="showLoading()">Update Loading Text</button>
    </div>
  </div>
</template>
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

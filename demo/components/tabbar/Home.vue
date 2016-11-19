<template>
  <div class="page" v-nav="{title: '首页', showBackButton: true, onBackButtonClick: back}">
    <div class="page-content">
      <p>首页</p>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      back() {
        $router.back({ path: '/' })
      }
    }
  }

</script>

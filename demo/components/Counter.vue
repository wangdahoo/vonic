<template>
  <div class="page has-navbar" v-nav="{title: '计数器', showBackButton: true, onBackButtonClick: back}">
    <div class="page-content">
      <counter style="width: 200px; margin-left: 10px;" :value="cnt"></counter>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import {Counter} from 'vonic'

  export default{
    components: {
      Counter
    },

    data(){
      return {
        cnt: 0
      }
    },

    methods: {
      back() {
        $router.back({path: '/'})
      }
    }
  }
</script>

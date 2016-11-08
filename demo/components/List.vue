<template>
  <div class="page has-navbar" v-nav="{title: '列表布局', showBackButton: true, onBackButtonClick: back}">
    <div class="page-content">
      <von-list>

      </von-list>
    </div>
  </div>
</template>

<style lang="scss">


</style>
<script>
  import {VonList} from 'vonic'

  export default{
    components: {
      VonList
    },

    data(){
      return {

      }
    },

    methods: {
      back() {
        $router.back({path: '/'})
      }
    }
  }
</script>

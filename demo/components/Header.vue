<template>
  <div class="page has-header">
    <von-header title="Header" :on-back-button-click="back"></von-header>

    <div class="page-content">

    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import {Page, VonHeader} from 'vonic'

  export default{
    components: {
      Page,
      VonHeader,
    },

    data(){
      return {
      }
    },

    methods: {
      back() {
        $vonic.nextTransition('back')
        $router.go({path: '/home'})
      }
    }
  }
</script>

<template>
  <div>
    <von-header title="模态窗标题"
                show-back-button="false"
                show-menu-button="true"
                menu-button-icon="icon ion-ios-close-empty positive"
                :on-menu-button-click="close"
    >
    </von-header>

    <div class="page-content">
      <p class="padding">
        这是一个模态窗
      </p>

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
      close() {
        $vonicModal.hide()
      }
    }
  }
</script>

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
      <p v-for="it in items">
        {{it}}
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
      VonHeader
    },

    data(){
      return {
        items: []
      }
    },

    ready() {
      for (let i = 0; i < 100; i++) {
        this.items.push((1 + i) + '这是一个模态窗')
      }
    },

    methods: {
      close() {
        $vonicModal.hide()
      },
      back() {
        $vonic.nextTransition('back')
        $router.go({path: '/widgets/modal'})
      }
    }
  }
</script>

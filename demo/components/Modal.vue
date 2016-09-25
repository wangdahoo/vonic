<template>
  <div class="page has-header">
    <von-header title="模态窗" :on-back-button-click="back"></von-header>

    <div class="page-content">
      <div class="padding">
        <button class="button button-positive button-block" @click="showModal()">默认模态窗</button>
        <button class="button button-positive button-block" @click="showMultiModal()">多个模态窗</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import {Page, VonHeader} from 'vonic'
  import DefaultModal from './DefaultModal'
  import MultiModal from './MultiModal'

  export default{
    components: {
      Page,
      VonHeader,
    },

    data(){
      return {
      }
    },

    ready() {
      $vonicModal.fromComponent('default_modal', DefaultModal)
      $vonicModal.fromComponent('multi_modal', MultiModal)
    },

    methods: {
      showModal() {
        $vonicModal.show('default_modal')
      },

      showMultiModal() {
        $vonicModal.show('multi_modal')
      },

      back() {
        console.log('custom go back')
        $vonic.nextTransition('back')
        $router.go({path: '/home'})
      }
    }
  }
</script>

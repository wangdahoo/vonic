<template>
  <div class="page has-header">
    <von-header title="模态窗" :on-back-button-click="back"></von-header>

    <div class="page-content">
      <div class="padding">
        <button class="button button-positive button-block" @click="showModal()">显示模态窗</button>
        <button class="button button-positive button-block" @click="showMultiModal()">多个模态窗</button>
        <button class="button button-positive button-block button-outline" @click="showScrollModal()">内置Scroll组件</button>
        <button class="button button-positive button-block button-outline" @click="showVumScrollModal()">内置Vum Scroll组件</button>
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
  import ScrollModal from './ScrollModal'
  import VumScrollModal from './VumScrollModal'

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
      $vonicModal.fromComponent('scroll_modal', ScrollModal)
      $vonicModal.fromComponent('vum_scroll_modal', VumScrollModal)
    },

    methods: {
      showModal() {
        $vonicModal.show('default_modal')
      },

      showMultiModal() {
        $vonicModal.show('multi_modal')
      },

      showScrollModal() {
        $vonicModal.show('scroll_modal')
      },

      showVumScrollModal() {
        $vonicModal.show('vum_scroll_modal')
      },

      back() {
        $vonic.nextTransition('back')
        $router.go({path: '/home'})
      }
    }
  }
</script>

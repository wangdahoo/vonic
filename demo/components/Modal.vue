<template>
  <div class="page has-header" v-nav="{title: '模态框', showBackButton: true}">
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
  import DefaultModal from './DefaultModal'
  import MultiModal from './MultiModal'
  import ScrollModal from './ScrollModal'
  import VumScrollModal from './VumScrollModal'

  export default{
    components: {

    },

    data(){
      return {
      }
    },

    ready() {

    },

    methods: {
      showModal() {
        $vonicModal.fromComponent('default_modal', DefaultModal)
        setTimeout(() => {
          $vonicModal.show('default_modal')
        })
      },

      showMultiModal() {
        $vonicModal.fromComponent('multi_modal', MultiModal)
        setTimeout(() => {
          $vonicModal.show('multi_modal')
        })
      },

      showScrollModal() {
        $vonicModal.fromComponent('scroll_modal', ScrollModal)
        setTimeout(() => {
          $vonicModal.show('scroll_modal')
        })
      },

      showVumScrollModal() {
        $vonicModal.fromComponent('vum_scroll_modal', VumScrollModal)
        setTimeout(() => {
          $vonicModal.show('vum_scroll_modal')
        })
      },

      back() {
        $vonic.nextTransition('back')
        $router.go({path: '/home'})
      }
    }
  }
</script>

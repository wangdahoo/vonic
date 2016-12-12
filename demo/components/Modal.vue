<template>
  <div class="page has-navbar" v-nav="{title: '模态框', showBackButton: true}">
    <div class="page-content padding-top">
      <div class="padding">
        <button class="button button-positive button-block" @click="showModal()">显示模态窗</button>
        <button class="button button-positive button-block" @click="showMultiModal()">多个模态窗</button>
        <button class="button button-positive button-block button-outline" @click="showScrollModal()">内置Scroll组件</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import DefaultModal from './modals/DefaultModal'
  import MultiModal from './modals/MultiModal'
  import ScrollModal from './modals/ScrollModal'

  export default{

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

      back() {
        $router.back({path: '/'})
      }
    }
  }
</script>

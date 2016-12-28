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
<script>
  import DefaultModal from './modals/DefaultModal'
  import MultiModal from './modals/MultiModal'
  import ScrollModal from './modals/ScrollModal'

  export default {
    methods: {
      showModal() { // 只创建一个模态窗实例
        if ($vonicModal.getDelegate('default_modal')) {
          $vonicModal.show('default_modal')
          return
        }

        $vonicModal.fromComponent('default_modal', DefaultModal)
        setTimeout(() => {
          $vonicModal.show('default_modal')
        })
      },

      showMultiModal() { // 每次点击都创建一个模态窗实例
        $vonicModal.fromComponent('multi_modal', MultiModal)
        setTimeout(() => {
          $vonicModal.show('multi_modal')
        })
      },

      showScrollModal() {
        if ($vonicModal.getDelegate('scroll_modal')) {
          $vonicModal.show('scroll_modal')
          return
        }

        $vonicModal.fromComponent('scroll_modal', ScrollModal)
        setTimeout(() => {
          $vonicModal.show('scroll_modal')
        })
      }
    },

    destroyed() {
      $vonicModal.destroy()
    }
  }
</script>

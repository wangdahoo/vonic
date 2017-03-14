<template>
  <div class="page has-navbar" v-nav="{title: '模态窗', showBackButton: true}">
    <div class="page-content padding padding-top">
      <button class="button button-assertive button-block" @click="showModal()">默认</button>
      <button class="button button-balanced button-block" @click="showMultiModal()">多个模态窗</button>
      <button class="button button-energized button-block" @click="showPopupModal()">模态窗内弹层</button>
    </div>
  </div>
</template>
<script>
  import DefaultModal from './modals/DefaultModal.vue'
  import MultiModal from './modals/MultiModal.vue'
  import PopupModal from './modals/PopupModal.vue'

  export default {
    data() {
      return {
        modal: undefined,
        multiModal: undefined,
        popupModal: undefined
      }
    },

    created() {
      window.MultiModal = MultiModal
    },

    mounted() {
      $modal.fromComponent(DefaultModal, {
        title: '模态窗标题',
        theme: 'default',
        onHide: () => {
          console.log('modal hide')
        }
      }).then((modal) => {
        this.modal = modal
      })

      $modal.fromComponent(MultiModal, {
        title: '模态窗标题',
        theme: 'dark'
      }).then((modal) => {
        this.multiModal = modal
      })

      $modal.fromComponent(PopupModal, {
        title: '模态窗内弹层',
        theme: 'energized'
      }).then((modal) => {
        this.popupModal = modal
      })
    },

    destroyed() {
      if (this.modal)
        $modal.destroy(this.modal)

      if (this.multiModal)
        $modal.destroy(this.multiModal)

      if (this.popupModal)
        $modal.destroy(this.popupModal)

      window.MultiModal = undefined
    },

    methods: {
      showModal() {
        this.modal.show()
      },

      showMultiModal() {
        this.multiModal.show()
      },

      showPopupModal() {
        this.popupModal.show()
      }
    }
  }
</script>

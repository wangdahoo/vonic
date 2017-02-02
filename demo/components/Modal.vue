<template>
  <div class="page has-navbar" v-nav="{title: '模态窗', showBackButton: true}">
    <div class="page-content padding padding-top">
      <button class="button button-assertive button-block" @click="showModal()">默认</button>
      <button class="button button-balanced button-block" @click="showMultiModal()">多个模态窗</button>
    </div>
  </div>
</template>
<script>
  import DefaultModal from './modals/DefaultModal.vue'
  import MultiModal from './modals/MultiModal.vue'

  export default {
    data() {
      return {
        modal: undefined,
        multiModal: undefined
      }
    },

    created() {
      window.MultiModal = MultiModal
    },

    mounted() {
      $modal.fromComponent(DefaultModal, {
        title: '模态窗标题',
        theme: 'default'
      }).then((modal) => {
        this.modal = modal
      })

      $modal.fromComponent(MultiModal, {
        title: '模态窗标题',
        theme: 'dark'
      }).then((modal) => {
        this.multiModal = modal
      })
    },

    destroyed() {
      if (this.modal)
        $modal.destroy(this.modal)

      if (this.multiModal)
        $modal.destroy(this.multiModal)

      window.MultiModal = undefined
    },

    methods: {
      showModal() {
        this.modal.show()
      },

      showMultiModal() {
        this.multiModal.show()
      }
    }
  }
</script>

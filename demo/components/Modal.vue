<template>
  <div class="page has-navbar" v-nav="{title: '模态窗', showBackButton: true}">
    <div class="page-content padding padding-top">
      <button class="button button-assertive button-block" @click="showModal()">显示</button>
    </div>
  </div>
</template>
<script>
  import DefaultModal from './modals/DefaultModal.vue'

  export default {
    data() {
      return {
        modal: undefined
      }
    },

    mounted() {
      $modal.fromComponent(DefaultModal, {
        title: '模态窗标题'
      }).then((modal) => {
        this.modal = modal
      })
    },

    destroyed() {
      if (this.modal)
        $modal.destroy(this.modal)
    },

    methods: {
      showModal() {
        this.modal.show()
      }
    }
  }
</script>

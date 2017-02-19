<template>
  <div class="page-content padding padding-top">
    <button class="button button-balanced button-block" @click="show()">Create</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        modal: undefined
      }
    },

    destroyed() {
      if (this.modal)
        $modal.destroy(this.modal)
    },

    methods: {
      show() {
        $modal.fromComponent(MultiModal, {
          title: '模态窗标题',
          theme: 'dark',
          destroyOnHide: true
        }).then((modal) => {
          this.modal = modal
          this.modal.show()
        })
      }
    }
  }
</script>

<template>
  <div>
    <von-header title="模态窗标题"
                show-back-button="false"
                show-menu-button="true"
                menu-button-icon="icon ion-ios-close-empty light"
                :on-menu-button-click="close"
                header-class="bar-dark"
    >
    </von-header>

    <div class="page-content">
      <div class="padding">
        <button class="button button-assertive button-block" @click="toggleModal()">关闭，并打开另一个模态窗</button>
      </div>
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
      VonHeader,
    },

    methods: {
      toggleModal() {
        $vonicModal.hide()
        setTimeout(() => {
          $vonicModal.show('default_modal')
        }, 400)
      },

      close() {
        $vonicModal.hide()
      }
    }
  }
</script>

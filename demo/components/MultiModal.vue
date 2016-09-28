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

    <scroll delegate-id="multiModalScroller"
            class="page-content">
      <div class="padding">
        <button class="button button-assertive button-block" @click="toggleModal()">关闭，并打开另一个模态窗</button>
      </div>
    </scroll>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import {Page, VonHeader, Scroll} from 'vonic'
  import DefaultModal from './DefaultModal'

  export default{
    components: {
      Page,
      VonHeader,
      Scroll
    },

    methods: {
      toggleModal() {
        $vonicModal.hide()
        setTimeout(() => {
          $vonicModal.fromComponent('default_modal', DefaultModal)
          setTimeout(() => {
            $vonicModal.show('default_modal')
          })
        }, 400)
      },

      close() {
        $vonicModal.hide()
      }
    }
  }
</script>

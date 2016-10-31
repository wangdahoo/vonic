<template>
  <div>
    <div class="bar bar-header bar-dark">
      <h1 class="title">默认模态框</h1>
      <button class="button icon ion-ios-close-empty light" @click="close()"></button>
    </div>

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
  import {Scroll} from 'vonic'
  import DefaultModal from './DefaultModal'

  export default{
    components: {
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

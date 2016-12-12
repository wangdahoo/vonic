<template>
  <div>
    <div class="bar bar-header bar-dark">
      <h1 class="title">多个模态框</h1>
      <button class="button button-icon icon ion-ios-close-empty light" @click="close()"></button>
    </div>

    <div class="page has-navbar">
      <scroller class="page-content">
        <div class="padding">
          <button class="button button-assertive button-block" @click="toggleModal()">关闭，并打开另一个模态窗</button>
        </div>
      </scroller>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import {VueScroller} from 'vonic'
  import DefaultModal from './DefaultModal'

  export default{
    components: {
      'scroller': VueScroller
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

<template>
  <div>
    <von-header title="模态窗标题"
                show-back-button="false"
                show-menu-button="true"
                menu-button-icon="icon ion-ios-close-empty positive"
                :on-menu-button-click="close"
    >
    </von-header>

    <scroll delegate-id="defaultModalScroller"
            class="page-content"
            v-ref:my_scroller>
      <p v-for="it in items">
        {{it}}
      </p>
    </scroll>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import {Page, VonHeader, Scroll} from 'vonic'

  export default{
    components: {
      Page,
      VonHeader,
      Scroll
    },

    data(){
      return {
        items: []
      }
    },

    ready() {
      for (let i = 0; i < 100; i++) {
        this.items.push((1 + i) + '这是一个模态窗')
      }

      setTimeout(() => {
        this.$refs.my_scroller.resize()
      })
    },

    methods: {
      close() {
        $vonicModal.hide()
      },
      back() {
        $vonic.nextTransition('back')
        $router.go({path: '/widgets/modal'})
      },
    }
  }
</script>

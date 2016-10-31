<template>
  <div>
    <div class="bar bar-header">
      <h1 class="title">默认模态框</h1>
      <button class="button icon ion-ios-close-empty positive" @click="close()"></button>
    </div>

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
  import {Scroll} from 'vonic'

  export default{
    components: {
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
        $router.back({path: '/'})
      }
    }
  }
</script>

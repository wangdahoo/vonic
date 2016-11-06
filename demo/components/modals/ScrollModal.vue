<template>
  <div>
    <div class="bar bar-header bar-dark">
      <h1 class="title">模态窗标题</h1>
      <button class="button button-icon icon ion-ios-close-empty light" @click="close()"></button>
    </div>

    <scroll delegate-id="scrollModalScroller"
            class="page-content"
            :on-refresh="onRefresh"
            :on-infinite="onInfinite"
            v-ref:my_scroller>
      <div v-for="(index, item) in items" @click="onItemClick(index, item)"
           class="item" :class="{'item-stable': index % 2 == 0}">
        {{ item }}
      </div>
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

    data() {
      return {
        items: []
      }
    },

    ready() {
      for (let i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20

      setTimeout(() => {
        this.$refs.my_scroller.resize()
      })
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
      },

      onRefresh() {
        setTimeout(() => {
          let start = this.top - 1
          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10

          this.$broadcast('$finishPullToRefresh')
        }, 1500)
      },

      onInfinite() {
        setTimeout(() => {
          let start = this.bottom + 1
          for (let i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 10

          setTimeout(() => {
            this.$refs.my_scroller.resize()
          })
        }, 1500)
      },

      onItemClick(index, item) {
        console.log(index)
      }
    }
  }
</script>

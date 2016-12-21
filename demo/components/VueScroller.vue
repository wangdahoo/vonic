<template>
  <div class="page has-navbar" v-nav="{title: 'Vue Scroller', showBackButton: true}">
    <scroll class="page-content"
            :on-refresh="onRefresh"
            :on-infinite="onInfinite"
            v-ref:scroller>
      <div v-for="(index, item) in items" @click="onItemClick(index, item)"
           class="item thin-border" :class="{'item-stable': index % 2 == 0}">
        {{ item }}
      </div>
    </scroll>
  </div>

</template>

<script>
  import {VueScroller} from 'vonic'

  export default {
    components: {
      'scroll': VueScroller
    },

    data () {
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
        this.$refs.scroller.resize()
      })
    },

    methods: {
      onRefresh() {
        setTimeout(() => {
          let start = this.top - 1
          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10;

          setTimeout(() => {
            this.$refs.scroller.finishPullToRefresh()
          })
        }, 1500)
      },

      onInfinite() {
        setTimeout(() => {
          let start = this.bottom + 1
          for (let i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 10;

          setTimeout(() => {
            this.$refs.scroller.finishInfinite()
          })
        }, 1500)
      },

      onItemClick(index, item) {
        console.log(index)
      },

      back() {
        $router.back({path: '/'})
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>

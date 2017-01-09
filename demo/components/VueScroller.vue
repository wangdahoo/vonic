<template>
  <div class="page has-navbar" v-nav="{title: 'Vue Scroller', showBackButton: true}">
    <scroller class="page-content"
            :on-refresh="onRefresh"
            :on-infinite="onInfinite"
            v-ref:scroller>
      <div v-for="(index, item) in items" @click="onItemClick(index, item)"
           class="item thin-border" :class="{'item-stable': index % 2 == 0}">
        {{ item }}
      </div>
    </scroller>
  </div>

</template>

<script>
  export default {
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
      }
    }

  }
</script>

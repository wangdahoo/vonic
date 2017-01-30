<template>
  <div class="page has-navbar" v-nav="{title: '下拉刷新、无限加载', showBackButton: true}">
    <scroll class="page-content"
            :on-refresh="onRefresh"
            :on-infinite="onInfinite">
      <div v-for="(item, index) in items" @click="onItemClick(index)"
           class="item thin-border" :class="{'item-stable': index % 2 == 0}">
        {{ item }}
      </div>
    </scroll>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        items: []
      }
    },

    mounted() {
      for (let i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20
    },

    methods: {
      onRefresh(done) {
        setTimeout(() => {
          let start = this.top - 1
          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10;

          done()
        }, 1500)
      },

      onInfinite(done) {
        setTimeout(() => {
          let start = this.bottom + 1
          for (let i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 10;

          done()
        }, 1500)
      },

      onItemClick(index) {
        console.log(index)
      }
    }

  }
</script>

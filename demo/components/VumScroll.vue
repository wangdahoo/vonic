<template>

  <div class="page has-header">
    <von-header title="Scroll" :on-back-button-click="back"></von-header>
    <scroll class="page-content"
            :on-refresh="onRefresh"
            :on-infinite="onInfinite">
      <div v-for="(index, item) in items" @click="onItemClick(index, item)"
           class="item" :class="{'item-stable': index % 2 == 0}">
        {{ item }}
      </div>
    </scroll>
  </div>

</template>

<script>
  import {Page, VumScroll, VonHeader} from 'vonic'

  export default {
    components: {
      Page,
      'scroll': VumScroll,
      VonHeader
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

      onItemClick(index, item) {
        console.log(index)
      },

      back() {
        $vonic.nextTransition('back')
        $router.go({path: '/home'})
      },
    }

  }
</script>

<style>



</style>

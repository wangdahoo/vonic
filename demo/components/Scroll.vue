<template>

  <div class="page has-header" v-nav="{title: 'Scroll', showBackButton: true, onBackButtonClick: back}">
    <scroll class="page-content"
            :on-refresh="refresh"
            :on-infinite="loadMore"
            v-ref:my_scroller>
      <div v-for="(index, item) in items" @click="onItemClick(index, item)"
           class="item" :class="{'item-stable': index % 2 == 0}">
        {{ item }}
      </div>
    </scroll>
  </div>

</template>

<script>
  import {Scroll} from 'vonic'

  export default {
    components: {

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
        this.$refs.my_scroller.resize()
      })
    },

    methods: {
      refresh() {
        setTimeout(() => {
          let start = this.top - 1

          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }

          this.top = this.top - 10;
          this.$broadcast('$finishPullToRefresh')
          // this.$refs.my_scroller.finishPullToRefresh()

        }, 1500)
      },

      loadMore() {
        setTimeout(() => {

          let start = this.bottom + 1

          for (let i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }

          this.bottom = this.bottom + 10;


          setTimeout(() => {
            this.$refs.my_scroller.finishPullToRefresh()
          })
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

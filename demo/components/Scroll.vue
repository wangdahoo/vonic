<template>
  <div class="page has-header">
    <von-header title="Scroll"></von-header>

    <scroll :on-refresh="refresh"
            :on-infinite="loadMore"
            v-ref:my_scroller>
      <div v-for="(index, item) in items" @click="onItemClick(index)"
           class="item text-center" :class="{'item-stable': index % 2 == 0}">
        {{ item.text }}
      </div>
    </scroll>

  </div>
</template>

<style>



</style>

<script>
  import {Page, VonHeader, Scroll} from 'vonic'

  export default {
    components: {
      Page,
      VonHeader,
      Scroll
    },

    data () {
      return {
        items: []
      }
    },

    ready() {
      for (let i = 0; i < 20; i++) {
        this.items.push({
          text: parseInt(Math.random(1) * 100) + ' - keep walking, be 2 with you.'
        });
      }

      setTimeout(() => {
        /* 下面2种方式都可以调用 resize 方法 */

        // $scrollerDelegate.resize()

        this.$refs.my_scroller.resize()
      })
    },

    methods: {
      refresh() {
        setTimeout(() => {
          this.items.splice(0, 0, {
            text: 'NEW - keep walking, be 2 with you.'
          })

          /* 下面3种方式都可以调用 finishPullToRefresh 方法 */
          // this.$broadcast('$finishPullToRefresh')

          // $scrollerDelegate.finishPullToRefresh()

          this.$refs.my_scroller.finishPullToRefresh()

        }, 1500)
      },

      loadMore() {
        setTimeout(() => {

          this.items = this.items.concat([
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' }
          ])
          setTimeout(() => {
            $scrollerDelegate.resize()
          })

        }, 1500)
      },

      onItemClick(index) {
        console.log(index)

        window.$alert.show({
          content: index
        })

      }
    }

  }
</script>

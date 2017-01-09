<template>
  <div>
    <div class="bar bar-header bar-dark">
      <h1 class="title">模态窗标题</h1>
      <button class="button button-icon icon ion-ios-close-empty light" @click="close()"></button>
    </div>

    <!-- native scroll -->
    <scroll class="page-content"
            :on-refresh="onRefresh"
            :on-infinite="onInfinite">
      <div v-for="(index, item) in items" @click="onItemClick(index, item)"
           class="item thin-border" :class="{'item-stable': index % 2 == 0}">
        {{ item }}
      </div>
    </scroll>
  </div>
</template>
<style lang="scss" scoped>
  .scroll {
    top: 0;
  }
</style>
<script>
  export default{
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
      }
    }
  }
</script>

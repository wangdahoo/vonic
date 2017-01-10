<template>
  <div>
    <div class="bar bar-header">
      <h1 class="title">一个模态框</h1>
      <button class="button button-icon icon ion-ios-close-empty positive" @click="close()"></button>
    </div>

    <div class="page has-navbar">
      <scroller class="page-content" v-ref:scroller>
        <p v-for="it in items">
          {{it}}
        </p>
      </scroller>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: []
      }
    },

    ready() {
      for (let i = 0; i < 100; i++) {
        this.items.push((1 + i) + '这是一个模态窗')
      }

      setTimeout(() => {
        this.$refs.scroller.resize()
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

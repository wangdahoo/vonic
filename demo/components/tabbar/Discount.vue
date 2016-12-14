<template>
  <div class="page has-navbar has-tabbar" v-nav="{title: '折扣'}" v-tabbar-menu-index="1">
    <div class="page-content padding-top">
      <p class="text-center">Discount</p>
      <div class="item thin-border" v-for="($index, item) in items">
        discount item
      </div>
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

    created() {
      for (let i = 0; i < 100; i++) {
        this.items.push(i)
      }
    }
  }
</script>

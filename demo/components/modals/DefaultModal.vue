<template>
  <div class="page has-navbar">
    <div class="page-content padding padding-top">
      <p>
        我有一只小毛驴我从来也不骑。
      </p>

      <button v-if="!showMore" class="button button-assertive button-small" @click="more()">show more</button>
      <p v-if="showMore">
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
        有一天我心血来潮骑它去赶集。<br>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showMore: false
      }
    },

    methods: {
      more() {
        this.showMore = true
      }
    }
  }
</script>

<template>
  <div class="page has-navbar" v-nav="{title: '滑块', showBackButton: true}">
    <div class="page-content padding-top">
      <von-range
        v-model="volume"
        :min="min"
        :max="max"
      ></von-range>

      <div class="padding">
        value: {{ volume }}
      </div>

      <von-range
        v-model="volume2"
        :min="min"
        :max="max"
      >
        <i class="icon ion-volume-low" slot="text-left"></i>
        <i class="icon ion-volume-high" slot="text-right"></i>
      </von-range>

      <div class="padding">
        volume: {{ volume2 }}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        volume: 33,
        volume2: 66,
        min: 0,
        max: 100
      }
    }
  }
</script>

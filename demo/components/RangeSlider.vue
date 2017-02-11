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
        theme="balanced"
      >
        <i class="icon ion-volume-low" slot="text-left"></i>
        <i class="icon ion-volume-high" slot="text-right"></i>
      </von-range>

      <div class="padding">
        volume: {{ volume2 }}
      </div>

      <div class="padding">
        Note: Theming capabilities are not available in Chrome due to this <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=582301">issues</a>
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

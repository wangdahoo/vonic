<template>
  <span class="von-badge">
    <div v-html="num" class="von-badge-num"></div>
  </span>
</template>
<script>
  import Scalable from '../scalable'

  export default {
    components: {
      Scalable
    },
    props: {
      num: [String, Number]
    }
  }
</script>
